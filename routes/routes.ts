import { FastifyInstance } from "fastify";

export class Routes {
  public static async InitializeRoutes(_fastify: FastifyInstance) {
    await Routes._initializeAPIRoutes(_fastify);
    await Routes._initializeUIRoutes(_fastify);
  }

  private static async _initializeAPIRoutes(_fastify: FastifyInstance) {
    _fastify.get("/api/health", async function handler(request, reply) {
      return "ok";
    });
  }

  private static async _initializeUIRoutes(_fastify: FastifyInstance) {
    _fastify.get("/", async function handler(request, reply) {
      return reply.view("index", { message: "My Name is Morph!" });
    });
  }
}
