import User from "../models/users.model";

export const GetAllUsers = async (req: any, res: any) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      ok: true,
      status: 200,
      body: users,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const GetSingleUser = async (req: any, res: any) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({
      where: {
        user_id: id,
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

export const CreateUser = async (req: any, res: any) => {
  const userData = req.body;
  try {
    await User.sync();
    await User.create({
      user_name: userData.user_name,
      user_lastname: userData.user_lastname,
      user_email: userData.user_email,
      user_rol: userData.user_rol,
    });
    res.status(201).json({
      ok: true,
      status: 201,
      message: "User created",
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const UpdateUser = async (req: any, res: any) => {
  const id = req.params.id;
  const userData = req.body;
  try {
    await User.update(
      {
        user_name: userData.user_name,
        user_lastname: userData.user_lastname,
        user_email: userData.user_email,
        user_rol: userData.user_rol,
      },
      {
        where: {
          user_id: id,
        },
      }
    );
    res.status(200).json({
      ok: true,
      status: 201,
      message: "User updated",
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const DeleteUser = async (req: any, res: any) => {
  const id = req.params.id;
  try {
    await User.destroy({
      where: {
        user_id: id,
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
