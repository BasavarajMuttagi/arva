import { z } from "zod";

export const userSchema = z.object({
    fullname: z.string(),
    email: z.string().email(),
    phone: z.string().optional(),
    address: z.string().optional(),
    pincode: z.string().optional(),
    // location: z
    //   .object({
    //     type: z.enum(["Point"]),
    //     coordinates: z.array(z.number()).length(2),
    //   })
    //   .optional(),
  });

 export  type userType = z.infer<typeof userSchema>;