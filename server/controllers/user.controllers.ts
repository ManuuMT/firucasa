import { User } from "../entities";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt";
import jwt from "jsonwebtoken";

export const RegisterUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const userFound = await User.findOneBy({ email });
        if (userFound)
            return res.status(400).json({ message: "El usuario ya existe" });

        const passHashed = await bcrypt.hash(password, 10);
        const newUser = new User();
        newUser.email = email;
        newUser.password = passHashed;

        await newUser.save();

        const token = await createAccessToken({ id: newUser.id });
        res.cookie("token", token);
        return res.json({
            message: "Usuario creado con éxito",
            email: newUser.email
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const Login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const userFound = await User.findOneBy({ email });
        if (!userFound)
            return res.status(400).json({ message: "Usuario no encontrado" });

        const valid = await bcrypt.compare(password, userFound.password);
        if (!valid)
            return res.status(400).json({ message: "Contraseña incorrecta" });

        const token = await createAccessToken({ id: userFound.id });
        res.cookie("token", token);

        return res.json({
            id: userFound.id,
            email: userFound.email
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const Logout = async (req: Request, res: Response) => {
    try {
        res.cookie("token", "", { expires: new Date(0) });
        return res.json({ message: "Logout exitoso" });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const GetProfile = async (req: Request, res: Response) => {
    const { user } = req.body;
    const userFound = await User.findOneBy({ id: user.id });
    if (!userFound)
        return res.status(404).json({ message: "Usuario no encontrado" });
    return res.json({ id: userFound.id, email: userFound.email });
};

const secret = process.env.SECRET || "secret";

export const VerifyToken = async (req: Request, res: Response) => {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ message: "No autorizado" });

    jwt.verify(token, secret, async (err, user) => {
        if (err) return res.status(401).json({ message: "No autorizado" });

        const userFound = await User.findOneBy({ id: user?.id });
        if (!userFound)
            return res.status(404).json({ message: "No autorizado" });

        return res.json({ id: userFound.id, email: userFound.email });
    });
};
