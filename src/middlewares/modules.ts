import * as yup from "yup";

// Hidden for simplicity

export const createSchema = yup.object({
  body: yup.object({
    basePath: yup.string().required(),
    name: yup.string().required(),
    withViews: yup.boolean(),
    withRoutes: yup.boolean(),
  }),
});

export const listSchema = yup.object({
  body: yup.object({
    basePath: yup.string().required(),
  }),
});

export const sowSchema = yup.object({
  body: yup.object({
    basePath: yup.string().required(),
    name: yup.string().required(),
  }),
});
