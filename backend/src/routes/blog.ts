import { Hono } from "hono";
import { authMiddleware } from "../middlewares/authMiddleware";
import { PrismaClient } from "@prisma/client/edge";
import { env } from "hono/adapter";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogInput, updateBlogInput } from "@lordkris/medium-common";

type Variables = {
  userId: string;
};

export const blogRouter = new Hono<{
  Variables: Variables;
  Bindings: { DATABASE_URL: string };
}>();

//can also write blogRouter.use("/*", authM<iddleware)
blogRouter.use(authMiddleware);

blogRouter.post("/", async (c) => {
  try {
    const body = await c.req.json();
    const parsedResponse = createBlogInput.safeParse(body);
    if (!parsedResponse.success) {
      return c.json({ msg: "Error in given inputs" }, 411);
    }

    const { DATABASE_URL } = env(c);
    const prisma = new PrismaClient({ datasourceUrl: DATABASE_URL });
    const { title, content, tag } = body;
    const userId = c.get("userId");
    const blog = await prisma.blog.create({
      data: {
        authorId: userId,
        title,
        content,
        tag,
      },
    });
    return c.json({ msg: "Blog post created", id: blog.id });
  } catch (error) {
    console.log(error);
    return c.json({ msg: "Error in post route of blog", error }, 404);
  }
});

blogRouter.put("/", async (c) => {
  try {
    const body = await c.req.json();
    const parsedResponse = updateBlogInput.safeParse(body);
    if (!parsedResponse.success) {
      return c.json({ msg: "Error in given inputs" }, 411);
    }

    const { DATABASE_URL } = env(c);
    const prisma = new PrismaClient({ datasourceUrl: DATABASE_URL }).$extends(
      withAccelerate()
    );
    const userId = c.get("userId");
    const blog = await prisma.blog.update({
      where: { id: body.id, authorId: userId },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return c.json({ msg: "Updated the blog successfully" });
  } catch (error) {
    console.log(error);
    return c.json({ msg: "Error in put/update route of blog", error }, 404);
  }
});

blogRouter.get("/bulk", async (c) => {
  try {
    const { DATABASE_URL } = env(c);
    const prisma = new PrismaClient({ datasourceUrl: DATABASE_URL }).$extends(
      withAccelerate()
    );
    const blogs = await prisma.blog.findMany({
      select: {
        title: true,
        content: true,
        id: true,
        tag: true,
        author: {
          select: { name: true },
        },
      },
    });

    return c.json({ msg: "Fetched all the blogs successfully", blogs });
  } catch (error) {
    console.log(error);
    return c.json({ msg: "Error in put/update route of blog", error }, 404);
  }
});

blogRouter.get("/:id", async (c) => {
  try {
    const blogId = c.req.param("id");
    const { DATABASE_URL } = env(c);
    const prisma = new PrismaClient({ datasourceUrl: DATABASE_URL }).$extends(
      withAccelerate()
    );
    const blog = await prisma.blog.findUnique({
      where: { id: blogId },
      select: {
        title: true,
        content: true,
        id: true,
        tag: true,
        author: {
          select: { name: true },
        },
      },
    });

    if (!blog) return c.json({ msg: "Couldnt find blog" }, 404);

    return c.json({ msg: "Retrieved the specific blog", blog });
  } catch (error) {
    console.log(error);
    return c.json(
      { msg: "Error occured in getting blog for specific id", error },
      404
    );
  }
});

blogRouter.get("/tag/:tag", async (c) => {
  try {
    const tag = c.req.param("tag");
    const { DATABASE_URL } = env(c);
    const prisma = new PrismaClient({ datasourceUrl: DATABASE_URL }).$extends(
      withAccelerate()
    );
    const blogs = await prisma.blog.findMany({
      where: {
        tag,
      },
      select: {
        title: true,
        content: true,
        id: true,
        author: {
          select: { name: true },
        },
      },
    });

    return c.json({ msg: "Retrieved the specific blogs", blogs });
  } catch (error) {
    console.log(error);
    return c.json(
      { msg: "Error occured in getting blog for specific tag", error },
      404
    );
  }
});