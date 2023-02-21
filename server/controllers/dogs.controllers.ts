import Dog from "../models/dogs.models";

export const GetAllDogs = async (req: any, res: any) => {
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
    const user = await Dog.findOne({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      ok: true,
      status: 200,
      body: user,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const CreateDog = async (req: any, res: any) => {
  const dogData = req.body;
  try {
    await Dog.sync();
    await Dog.create({
      name: dogData.name,
      age: dogData.age,
      weight: dogData.weight,
      description: dogData.description,
      UserId: dogData.UserId,
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
    await Dog.destroy({
      where: {
        id: id,
      },
    });
    res.status(204).json({
      ok: true,
      status: 204,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
