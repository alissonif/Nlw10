import { Fastify } from "fastify";
import { jwt } from "@fastify/jwt";
import "@fastify/jwt";

declare module "@fastify/jwt" {
  interface FastifyJWT {
    user: {
      sub: string;
      name: string;
      avatarUrl: string;
    };
  }
}
