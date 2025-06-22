import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { env } from "hono/adapter";

const app = new Hono();

app.get("/", async (c) => {
  const { DATABASE_URL } = env<{ DATABASE_URL: string }>(c);
  const prisma = new PrismaClient({ datasourceUrl: DATABASE_URL }).$extends(
    withAccelerate()
  );
  const res = await prisma.user.create({
    data: {
      email: "temp@gmail.com",
      name: "temp",
      password: "tempp",
    },
  });
  console.log("DONNENNENE", res, DATABASE_URL);
});

export default app;
