import { User } from "../entities";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt";

export const CreateUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

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
            email: userFound.email
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};
