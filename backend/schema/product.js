//validation of data
import z from "zod";

const productSchema = z.object({
  title: z.string({
    invalid_type_error: "Product title must be a string",
    required_error: "Product title is required",
  }),
  category: z.string(),
  image: z.string().url({
    message: "Poster must be a valid URL",
  }),
  price: z.number().positive(),
});

export function validateProduct(object) {
  return productSchema.safeParse(object);
}
