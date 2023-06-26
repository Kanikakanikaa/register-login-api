const jwt = require('jsonwebtoken');
const accessTokenSecret = 'youraccesstokensecret';


exports. Token= (email) => {
    // console.log(req.body);

  const encode =jwt.sign({email:email}, accessTokenSecret)
    console.log(encode,"token");
    return  encode;
}

exports.verifyToken=(req,res,next)=>{
        const authHeader = req.headers.authorization;
        // console.log(authHeader,"preToken")
        if (authHeader) {
            jwt.verify(authHeader, accessTokenSecret, (err, user) => {
                if (err) {
                    return res.status(403).send({
                        message: "incorrect token",
                      });                
                }
               console.log(user,"user")
                req.user = user;
                next();
            });
        } else {
            res.sendStatus(401);
        }   
}