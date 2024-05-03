import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import postsRoutes from "./routes/posts";

const app = new Elysia();

app
  .use(swagger())
  .group("/api", (app) => app.use(postsRoutes))
  .listen(process.env.PORT || 8000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
