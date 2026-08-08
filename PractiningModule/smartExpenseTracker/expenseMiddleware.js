import jwt from "jsonwebtoken";

function authMiddleware(req,res){
    const token = req.headers.token;
    if (!token) {
        res.status(403).json({
            message: "you are not logged in"
        });
        return;
    }

    const decoded = jwt.verify(token,"arsf123");
    const username = decoded.username;

    if (!username) {
        res.status(403).json({
            message: "malformed token"
        });
        return;
    }

    req.username = username;

    next();
}

module.exports = {
    authMiddleware
}