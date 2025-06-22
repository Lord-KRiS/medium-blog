import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { env } from "hono/adapter";

const app = new Hono();

app.post("/api/v1/user/signup", (c) => {
  return c.text("signup route");
});
app.post("/api/v1/user/signin", (c) => {
  return c.text("signin route");
});
app.post("/api/v1/blog/", (c) => {
  return c.text("signup route");
});
app.put("/api/v1/blog/", (c) => {
  return c.text("signup route");
});
app.get("/api/v1/blog/bulk", (c) => {
  return c.text("blog bulk route");
});
app.get("/api/v1/blog/:id", (c) => {
  return c.text("bog id route");
});

export default app;
