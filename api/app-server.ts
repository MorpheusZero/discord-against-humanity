import Fastify, { FastifyInstance } from "fastify";
import path from "node:path";
import { Routes } from "../routes/routes";
import * as fastifyView from "@fastify/view";
import * as fastifyStatic from "@fastify/static";
import { WebSocketServer } from "ws";

export class AppServer {
  private _fastify: FastifyInstance;

  constructor() {
    this._fastify = Fastify();
  }

  public async Start() {
    this._fastify.register(fastifyView, {
      engine: {
        ejs: require("ejs"),
      },
      root: path.join(process.cwd(), "views"),
      viewExt: "ejs",
    });

    this._fastify.register(fastifyStatic, {
      root: path.join(process.cwd(), "public"),
      prefix: "/public/",
    });

    await Routes.InitializeRoutes(this._fastify);

    return this._fastify.listen({
      port: 3000,
    });
  }
}
