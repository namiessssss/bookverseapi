const jwt = require('jsonwebtoken');

const AuthCheck = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (token) {
            const result = await jwt.verify(token, '12345');
            console.log(result);
            if (result) {
                req.user = result?.id;
                next();
            } else {
                res.json({ msg: "Not Authorized" });
            }
        } else {
            res.json({ msg: "Not Authorized" });
        }
    } catch (err) {
        console.log(err);
        res.json({ msg: "Not Authorized" });
    }
};

module.exports = AuthCheck