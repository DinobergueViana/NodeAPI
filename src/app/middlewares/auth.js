const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send({error: "No token was given"});
    }

    const parts = authHeader.split(" ");

    if(!parts.length === 2){
        return res.status(401).send({error: "Error processing request"});
    }

    const [ scheme, token ] = parts;

    if(!/Bearer/i.test(scheme)){
        return res.status(401).send({ error: "Poorly formatted token" })
    }

    jwt.verify(token, authConfig.secret, (error, decoded) => {
        if(error){
            return res.status(400).send({error: "Invalid token"});
        }

        req.userEmail = decoded.email;

        return next();
    })
}