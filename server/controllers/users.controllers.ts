export const getUsers = async (req: any, res: any) => {
  try {
    return res.send("All users");
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
