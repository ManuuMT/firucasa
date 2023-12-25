import { Dog } from "../entities";
import { Request, Response } from "express";
import { uploadImage } from "../libs/cloudinary";
import fs from "fs-extra";
import { UploadedFile } from "express-fileupload";
import { Image } from "../models/Dog.model";

export const GetDog = async (req: Request, res: Response) => {
    const caca = "1";

    const id = Number(req.params.id);
    try {
        const dog = await Dog.findOneBy({ id });
        if (!dog) {
            return res
                .status(404)
                .json({ message: "Registro de perro no encontrado" });
        }
        return res.status(200).json(dog);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
};

export const GetAllDogs = async (req: Request, res: Response) => {
    try {
        const dogs = await Dog.find();
        res.status(200).json(dogs);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
};

export const CreateDog = async (req: Request, res: Response) => {
    try {
        const {
            name,
            shelterId,
            description,
            gender,
            specie,
            ageYears,
            ageMonths,
            weight,
            size
            // photos,
        } = req.body;

        let image: Image | null = null;

        if (req.files?.image) {
            const result = await uploadImage(
                (req.files.image as UploadedFile).tempFilePath
            );
            await fs.remove((req.files.image as UploadedFile).tempFilePath);
            image = {
                url: result.secure_url,
                public_id: result.public_id
            };
        }
        const newDog = new Dog();

        newDog.name = name;
        newDog.shelter = shelterId;

        // newDog.description = description;
        // newDog.gender = gender;
        // newDog.specie = specie;
        // newDog.ageYears = ageYears;
        // newDog.ageMonths = ageMonths;
        // newDog.weight = weight;
        // newDog.size = size;
        newDog.photo = image;

        await newDog.save();

        return res.json(newDog);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const UpdateDog = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const dog = await Dog.findOneBy({ id });

    if (!dog) {
        return res.status(404).json({
            message: "Registro de perro no encontrado"
        });
    }

    try {
        await Dog.update({ id }, req.body);
        return res
            .status(200)
            .json({ message: "Registro de perro actualizado con éxito" });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const DeleteDog = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    try {
        const result = await Dog.delete({ id });
        if (!result.affected) {
            return res
                .status(404)
                .json({ message: "Registro de perro no encontrado" });
        }
        return res
            .status(200)
            .json({ message: "Registro de perro eliminado con éxito" });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

// export const UpdateDog = async (req: any, res: any) => {
//   const id = req.params.id;
//   const dogData = req.body;
//   try {
//     await Dog.update(
//       {
//         name: dogData.name,
//         gender: dogData.gender,
//         specie: dogData.specie,
//         ageYears: dogData.ageYears,
//         ageMonths: dogData.ageMonths,
//         weight: dogData.weight,
//         description: dogData.description,
//         size: dogData.size,
//         UserId: dogData.UserId,
//       },
//       {
//         where: {
//           id: id,
//         },
//       }
//     );
//     res.status(200).json({
//       ok: true,
//       status: 201,
//       message: "Dog updated",
//     });
//   } catch (error) {
//     res.status(500).json({ message: error });
//   }
// };

// export const DeleteDog = async (req: any, res: any) => {
//   const id = req.params.id;
//   try {
//     const dog = await Dog.findOne({
//       where: {
//         id: id,
//       },
//     });
//     const removed = await Dog.destroy({
//       where: {
//         id: id,
//       },
//     });
//     if (dog && removed === 1) {
//       await deleteImage(dog.getDataValue("imageId"));
//     }
//     res.status(204).json({
//       ok: true,
//       status: 204,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error });
//   }
// };
