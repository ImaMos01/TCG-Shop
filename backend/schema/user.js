//validation of data
import z from "zod";

const userSchema = z.object({
  fName: z.string({
    invalid_type_error: "First name must be a string",
    required_error: "First name is required",
  }),
  lName: z.string({
    invalid_type_error: "Last name must be a string",
    required_error: "Last name is required",
  }),
  uName: z.string({
    invalid_type_error: "User name must be a string",
    required_error: "User name is required",
  }),

  mail: z.string().email({
    message: "email must be an email address",
    required_error: "email is required",
  }),
  password: z.string({
    invalid_type_error: "Password must be a string",
    required_error: "Password is required",
  }),
});

export function validateUser(object) {
  return userSchema.safeParse(object);
}
