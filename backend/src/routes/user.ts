import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { env } from "hono/adapter";
import { sign } from "hono/jwt";
import { signinInput, signupInput } from "@lordkris/medium-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  try {
    const body = await c.req.json();
    const parsedResponse = signupInput.safeParse(body);
    if (!parsedResponse.success) {
      return c.json({ msg: "Error in given inputs" }, 411);
    }

    const { DATABASE_URL, JWT_SECRET } = env(c);
    const prisma = new PrismaClient({ datasourceUrl: DATABASE_URL }).$extends(
      withAccelerate()
    );
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
    return c.json({ msg: "ERROR in signup", error }, 500);
  }
});

userRouter.post("/signin", async (c) => {
  try {
    const body = await c.req.json();
    const parsedResponse = signinInput.safeParse(body);
    if (!parsedResponse.success) {
      return c.json({ msg: "Error in given inputs" }, 411);
    }

    const { DATABASE_URL, JWT_SECRET } = env(c);
    const prisma = new PrismaClient({ datasourceUrl: DATABASE_URL }).$extends(
      withAccelerate()
    );
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
    return c.json({ msg: "ERROR in signin", error }, 500);
  }
});
