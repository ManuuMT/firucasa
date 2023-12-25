import { Dog, Shelter } from "../entities";
import { Request, Response } from "express";

const name = "asd";

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
        const shelters = await Shelter.find();
        const sheltersWithDogs = await Promise.allSettled(
            shelters.map(async (shelter) => {
                const dogs = await Dog.createQueryBuilder("dog")
                    .where("dog.shelterId = :shelterId", {
                        shelterId: shelter.id,
                    })
                    .getMany();
                return { ...shelter, dogs: dogs || [] };
            })
        );

        res.status(200).json(sheltersWithDogs);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
};

export const CreateShelter = async (req: Request, res: Response) => {
    try {
        const { name, description, location } = req.body;

        const shelter = new Shelter();
        shelter.name = name;
        shelter.description = description;
        shelter.location = location;

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
            message: "Refugio no encontrado",
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
