import { MikroORM } from "@mikro-orm/core";
import { COOKIE_NAME, __prod__ } from "./constants";
// import { Post } from "./entities/Post";

import cors from "cors";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";

import { UserResolver } from "./resolvers/user";

import microConfig from "./mikro-orm.config";
import express from "express";

import { ApolloServer } from "apollo-server-express";
import "reflect-metadata";

import { buildSchema } from "type-graphql";

import redis from "redis";
import session from "express-session";
import connectRedis from "connect-redis";

const main = async () => {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();

  const app = express();

  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient({
    port: 10656,
    host: "redis-10656.c10.us-east-1-3.ec2.cloud.redislabs.com",
    password: "seOsSfDMFhLLyUyW1YPcOTq11hCH7yMl"
  });
  app.use(
    cors({
      origin: "https://n000p.sse.codesandbox.io",
      credentials: true
    })
  );
  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({ client: redisClient, disableTouch: true }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
        httpOnly: true,
        sameSite: "lax", // csrf
        secure: __prod__ // cookie only works in https
      },
      secret: "qow",
      saveUninitialized: false,
      resave: false
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver, UserResolver],
      validate: false
    }),
    context: ({ req, res }) => ({ em: orm.em, req, res })
  });

  apolloServer.applyMiddleware({
    app,
    cors: false
  });

  app.listen(5000, () => {
    console.log("server started!");
  });
};
main().catch((err) => {
  console.error(err);
});
