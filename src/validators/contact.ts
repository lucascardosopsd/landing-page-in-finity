import { z } from "zod";

export const contactValidator = z.object({
  name: z.string().min(5, { message: "Selecione um interesse." }),
  email: z.string().email({ message: "Insira um e-mail válido." }),
  target: z.string().min(1, { message: "Selecione um interesse." }),
});
