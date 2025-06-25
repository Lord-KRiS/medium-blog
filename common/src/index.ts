import zod from "zod";

export const signupInput = zod.object({
  email: zod.string().email(),
  name: zod.string().min(1),
  password: zod.string().min(1),
});

export const signinInput = zod.object({
  email: zod.string().email(),
  password: zod.string().min(1),
});

export const createBlogInput = zod.object({
  title: zod.string().min(1),
  content: zod.string().min(1),
  tag: zod.string().min(1),
  date: zod.string(),
});

export const updateBlogInput = zod.object({
  title: zod.string().min(1),
  content: zod.string().min(1),
  id: zod.string(),
});

export type SignupInput = zod.infer<typeof signupInput>;
export type SigninInput = zod.infer<typeof signinInput>;
export type CreateBlogInput = zod.infer<typeof createBlogInput>;
export type UpdateBlogInput = zod.infer<typeof updateBlogInput>;
