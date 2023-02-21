import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "manuumt",
  api_key: "852798825918866",
  api_secret: "lItEKDE0_iKoqg9vr7nJOXP_inA",
});

export const uploadImage = async (filePath: string) =>
  await cloudinary.uploader.upload(filePath, { folder: "firucasa" });

export const deleteImage = async (id: string) =>
  await cloudinary.uploader.destroy(id);
