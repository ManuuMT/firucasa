import { uploadImage, deleteImage } from "../libs/cloudinary";
import Dog from "../models/dogs.models";
import fs from "fs-extra";

export const GetAllDogs = async (_req: any, res: any) => {
  try {
    const dogs = await Dog.findAll();
    res.status(200).json({
      ok: true,
      status: 200,
      body: dogs,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const GetSingleDog = async (req: any, res: any) => {
  const id = req.params.id;
  try {
    const dog = await Dog.findOne({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      ok: true,
      status: 200,
      body: dog,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const CreateDog = async (req: any, res: any) => {
  const dogData = req.body;
  try {
    await Dog.sync();
    let image;
    if (req.files.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      await fs.remove(req.files.image.tempFilePath);
      image = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }

    await Dog.create({
      name: dogData.name,
      age: dogData.age,
      weight: dogData.weight,
      description: dogData.description,
      UserId: dogData.UserId,
      imageId: image?.public_id,
      imageUrl: image?.url,
    });
    res.status(201).json({
      ok: true,
      status: 201,
      message: "Dog created",
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const UpdateDog = async (req: any, res: any) => {
  const id = req.params.id;
  const dogData = req.body;
  try {
    await Dog.update(
      {
        name: dogData.name,
        age: dogData.age,
        weight: dogData.weight,
        description: dogData.description,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({
      ok: true,
      status: 201,
      message: "Dog updated",
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const DeleteDog = async (req: any, res: any) => {
  const id = req.params.id;
  try {
    const dog = await Dog.findOne({
      where: {
        id: id,
      },
    });
    const removed = await Dog.destroy({
      where: {
        id: id,
      },
    });
    if (dog && removed === 1) {
      await deleteImage(dog.getDataValue("imageId"));
    }
    res.status(204).json({
      ok: true,
      status: 204,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
