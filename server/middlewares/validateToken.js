import jwt from "jsonwebtoken";

export const authRequired = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ message: "No autorizado" });
    }
    const secret = process.env.SECRET || "secret";
    jwt.verify(token, secret, (err, decoded) => {
        if (err) return res.status(401).json({ message: "No autorizado" });
        req.body.user = decoded;
    });
    next();
};
