import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { env } from "hono/adapter";
import { sign, verify } from "hono/jwt";

const app = new Hono();

app.post("/api/v1/user/signup", async (c) => {
  try {
    const { DATABASE_URL, JWT_SECRET } = env<{
      DATABASE_URL: string;
      JWT_SECRET: string;
    }>(c);
    const prisma = new PrismaClient({ datasourceUrl: DATABASE_URL }).$extends(
      withAccelerate()
    );
    const body = await c.req.json();
    const user = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password,
      },
    });

    const token = await sign({ id: user.id }, JWT_SECRET);

    return c.json({ token });
  } catch (error) {
    console.log(error);
    return c.json({ msg: "ERROR occurred" }, 500);
  }
});

app.post("/api/v1/user/signin", async (c) => {
  try {
    const { DATABASE_URL, JWT_SECRET } = env<{
      DATABASE_URL: string;
      JWT_SECRET: string;
    }>(c);
    const prisma = new PrismaClient({ datasourceUrl: DATABASE_URL }).$extends(
      withAccelerate()
    );
    const body = await c.req.json();
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (!user) {
      return c.json({ msg: "USer doesnt exist" }, 401);
    }
    const token = await sign({ id: user.id }, JWT_SECRET);

    return c.json({ token });
  } catch (error) {
    console.log(error);
    return c.json({ msg: "ERROR occurred" }, 500);
  }
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
