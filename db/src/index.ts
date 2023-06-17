import http from "http";
import "graphql-import-node";
import bodyParser from "body-parser";
import cors from "cors";

import { exec } from "child_process";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

import { expressMiddleware } from "@apollo/server/express4";
import { auth, claimCheck } from "express-oauth2-jwt-bearer";
import * as dotenv from "dotenv";
dotenv.config();
import config from "./config";
import express from "express";
import DB from "./DB";
import { schema } from "./schema";
interface ContextValue {
  dataSources: {
    ingredients?: any;
  };
  token?: string[] | string;
}

const app = express();
const httpServer = http.createServer(app);
const db = DB.connect();
db.then(async (d) => {
  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    //typeDefs,
    //resolvers,
  });
  await server.start();
  app.use(
    "/",
    cors<cors.CorsRequest>(),
    bodyParser.json(),

    (req, res, next) => {
      auth({
        audience: process.env.AUTH0_AUDIENCE,
        issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
      })(req, res, (e) => {
        if (e) console.log(e);
        next();
      });
    },
    expressMiddleware(server, {
      context: async ({ req }) => ({
        //req,
        auth: req.auth,
        //token: req.headers.token,
      }),
    })
  );
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: process.env.PORT }, resolve)
  );

  if (process.env.NODE_ENV === "development")
    exec(
      "graphql-codegen",
      // `graphql-codegen ${__dirname}//types/codegen.yml`,
      (err, stdout) => {
        if (err) console.error(err);
        console.log(stdout);
      }
    );
});
