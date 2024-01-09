import { Dog } from "../entities";
import { Request, Response } from "express";
import { uploadImage } from "../libs/cloudinary";
import fs from "fs-extra";
import { UploadedFile } from "express-fileupload";
import { Image } from "../models/Dog.model";

export const GetDog = async (req: Request, res: Response) => {
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
            gender,
            size,
            ageYears,
            ageMonths,
            weight,
            description
        } = req.body;

        let imagesArray: Image[] = [];

        // Upload images if there are any
        if (req.files?.image) {
            // If there are multiple images
            if (req.files.image instanceof Array) {
                for (const image of req.files.image) {
                    const result = await uploadImage(image.tempFilePath);
                    const newImage = {
                        url: result.secure_url,
                        public_id: result.public_id
                    };
                    imagesArray.push(newImage);
                    await fs.remove(image.tempFilePath);
                }
            } else {
                // If there is only one image
                const image = req.files.image as UploadedFile;
                const result = await uploadImage(image.tempFilePath);
                const newImage = {
                    url: result.secure_url,
                    public_id: result.public_id
                };

                imagesArray.push(newImage);
                await fs.remove(image.tempFilePath);
            }
        }
        console.log("QUE ES imagesArray: ", imagesArray);

        const newDog = new Dog();
        newDog.name = name;
        newDog.shelter = shelterId;
        newDog.photos = imagesArray;
        newDog.gender = gender;
        newDog.size = size;
        newDog.ageYears = ageYears;
        newDog.ageMonths = ageMonths;
        newDog.weight = weight;
        newDog.description = description;

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
