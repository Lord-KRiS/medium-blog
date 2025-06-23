import { Hono } from "hono";
import { authMiddleware } from "../middlewares/authMiddleware";

export const blogRouter = new Hono();

//can also write blogRouter.use("/*", authM<iddleware)
blogRouter.use(authMiddleware);

blogRouter.post("/", (c) => {
  return c.text("blog post");
});

blogRouter.put("/", (c) => {
  return c.text("blog put");
});

blogRouter.get("/bulk", (c) => {
  return c.text("blog bulk route");
});

blogRouter.get("/:id", (c) => {
  return c.text("bog id route");
});
