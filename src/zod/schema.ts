import { z } from "zod";

export const userSchema = z.object({
  fullname: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  address: z.string().optional(),
  pincode: z.string().optional(),
});

export type userType = z.infer<typeof userSchema>;

const userSignUpSchema = z
  .object({
    fullname: z.string().min(3),
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "password cannot be less than 8 digits" })
      .max(10, { message: "password cannot be more than 10 digits" }),
    confirmpassword: z
      .string()
      .min(8, { message: "password cannot be less than 8 digits" })
      .max(10, { message: "password cannot be more than 10 digits" }),
    phone: z.string().optional(),
    address: z.string().optional(),
    pincode: z.string().optional(),
  })
  .refine((data) => data.password == data.confirmpassword, {
    message: "Passwords don't match",
    path: ["confirmpassword"],
  });

type userSignUpType = z.infer<typeof userSignUpSchema>;

const userLoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "password cannot be less than 8 digits" })
    .max(10, { message: "password cannot be more than 10 digits" }),
});

type userLoginType = z.infer<typeof userLoginSchema>;

const locationSchema = z.object({
  type: z.enum(["Point"]).default("Point"),
  coordinates: z.array(z.number()).length(2).nonempty(),
});

const addressSchema = z.object({
  title: z.string().min(3).max(100),
  location: locationSchema,
  phone: z.string().length(10),
  address: z.string().min(3).max(300),
  pincode: z.string().length(6),
});

type addressType = z.infer<typeof addressSchema>;

export { userSignUpSchema, userLoginSchema, addressSchema };
export type { userSignUpType, userLoginType, addressType };
