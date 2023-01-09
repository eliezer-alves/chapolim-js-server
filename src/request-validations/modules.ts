import * as yup from "yup";

// Hidden for simplicity

export const createSchema = yup.object({
  body: yup.object({
    baseDir: yup.string().required(),
    name: yup.string().required(),
    withViews: yup.boolean(),
    withRoutes: yup.boolean(),
  }),
});
