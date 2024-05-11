import { z } from 'zod';

export const formSchema = z.object({
  email: z.string().email({ message: 'Ingresa un correo válido' }),
  password: z
    .string()
    .min(7, { message: 'Tu contraseña debe tener al menos 7 caracteres' })
    .max(30, { message: 'Tu contraseña no debe exceder los 30 caracteres' }),
});
