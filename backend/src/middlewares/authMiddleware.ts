import { env } from "hono/adapter";
import { createMiddleware } from "hono/factory";
import { verify } from "hono/jwt";

export const authMiddleware = createMiddleware(async (c, next) => {
  try {
    const authHeader = c.req.header("Authorization") || "";
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return c.json({ error: "Not authorized" }, 411);
    }

    const token = authHeader.split(" ")[1];
    const { JWT_SECRET } = env<{ JWT_SECRET: string }>(c);
    const { id } = await verify(token, JWT_SECRET);
    c.set("userId", id);
    await next();
  } catch (error) {
    console.log(error);
    return c.json({ msg: "error in middleware", error });
  }
});
