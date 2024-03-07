import Jwt from "jsonwebtoken";

let SECRET_KEY = "kuntal@123"

function authenticateJWT(req, res, next) {
    try {
        let tokenObj = req.cookies
        let token = tokenObj.token
        if (!token) {
            return res.status(200).json({ success: false });
        }

        Jwt.verify(token, SECRET_KEY, (err, user) => {
            if (err) {
                console.log(err)
                return res.status(403).json({ success: false });
            }
            
            next();
        });

    } catch (error) {
        console.log(error.message)
        res.status(400).json({ success: "false" })
    }
}

export default authenticateJWT