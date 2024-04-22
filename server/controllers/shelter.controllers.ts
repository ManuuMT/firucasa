import { UploadedFile } from "express-fileupload";
import { Dog, Shelter } from "../entities";
import { Request, Response } from "express";
import { uploadImage } from "../libs/cloudinary";
import { Image } from "../models/Dog.model";
import fs from "fs-extra";

export const GetShelter = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    try {
        const shelter = await Shelter.findOneBy({ id });

        const dogs = await Dog.createQueryBuilder("dog")
            .where("dog.shelterId = :shelterId", { shelterId: id })
            .getMany();

        if (!shelter) {
            return res.status(404).json({ message: "Refugio no encontrado" });
        }
        return res.status(200).json({ ...shelter, dogs: dogs || [] });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
};

export const GetAllShelters = async (req: Request, res: Response) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = 10;

        // Set options related to pagination
        const options: any = {
            take: limit,
            skip: (page - 1) * limit
        };

        let filters: any = { where: {} };

        // Count total results with that filters
        const totalResults = await Shelter.count();

        // Now add page and limit to filters
        filters = { ...filters, ...options };

        // Get page results
        const shelters = await Shelter.find(filters);

        const response = {
            page,
            totalResults,
            hasNextPage: page * limit < totalResults,
            results: shelters
        };

        // const sheltersWithDogs = await Promise.allSettled(
        //     shelters.map(async shelter => {
        //         const dogs = await Dog.createQueryBuilder("dog")
        //             .where("dog.shelterId = :shelterId", {
        //                 shelterId: shelter.id
        //             })
        //             .getMany();
        //         return { ...shelter, dogs: dogs || [] };
        //     })
        // );

        res.status(200).json(response);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
};

export const CreateShelter = async (req: Request, res: Response) => {
    try {
        const { name, description, country, province, city } = req.body;

        let logo: Image = { url: "", public_id: "" };
        // Upload images if there are any
        if (req.files?.image) {
            // If there is only one image
            const image = req.files.image as UploadedFile;
            const result = await uploadImage(image.tempFilePath);
            const newImage = {
                url: result.secure_url,
                public_id: result.public_id
            };

            logo = newImage;
            await fs.remove(image.tempFilePath);
        }

        const shelter = new Shelter();
        shelter.name = name;
        shelter.description = description;
        shelter.country = country;
        shelter.province = province;
        shelter.city = city;
        shelter.city = city;
        shelter.logo = logo;

        await shelter.save();

        return res.json(shelter);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const UpdateShelter = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const shelter = await Shelter.findOneBy({ id });

    if (!shelter) {
        return res.status(404).json({
            message: "Refugio no encontrado"
        });
    }

    try {
        // await Shelter.merge(shelter, req.body); ???
        await Shelter.update({ id }, req.body);
        return res
            .status(200)
            .json({ message: "Refugio actualizado con éxito" });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const DeleteShelter = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    try {
        const result = await Shelter.delete({ id });
        if (!result.affected) {
            return res.status(404).json({ message: "Refugio no encontrado" });
        }
        return res.status(200).json({ message: "Refugio eliminado con éxito" });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};
