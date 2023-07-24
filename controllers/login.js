const User = require("../models/user")
const bcrypt = require("bcryptjs");

exports.Auth = async (req, res) => {
    const {user_name , email} = req.body;
    

    const user = User.create({
        user_name:user_name,
        email:email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
    .then(user => {
        res.send({
            user:user,
            message: "User Signup"
        })
    })
    .catch(err => [
        res.send(err)
    ])
}

exports.signIn = async (req, res) => {
    if (!req.body.email) {
        res.status(200).send({
          success: true,
          error: "Content can not be empty!",
          accessToken: null,
          body: null
        });
        return;
      }
    
      User.findOne({ where: { email: req.body.email } })
        .then(user => {
          if (user === null) {
            return res.status(200).send({
              success: false,
              error: "Invalid email or password",
              accessToken: null,
              body: null
            });
          } else {
            let passwordIsValid = bcrypt.compareSync(
              req.body.password,
              user.password
            );
            if (!passwordIsValid) {
              return res.status(200).send({
                success: false,
           
                error: "Invalid email or password",
                body: null
              });
            }
    
         
          
            user.password = null;
            res.status(200).send({
              success: true,
              error: null,
              
              message: "User logged in successfully!",
              body: user
            });
          }
        })
        .catch(err => {
          res.status(200).send({
            success: false,
            error: err.message || "Server Error",
            body: null
          });
        });
    
}