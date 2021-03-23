import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { User } from "./entities/User";
import path from "path";
import { Options } from "@mikro-orm/core";

const config: Options = {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
    disableForeignKeys: false
  },

  entities: [Post, User],
  dbName: "ljitraaz",
  type: "postgresql",
  debug: !__prod__,
  clientUrl:
  "postgres://ljitraaz:pIoBwhe171X8sf-43ygWCuc2MH6serfg@queenie.db.elephantsql.com:5432/ljitraaz"
}

export default config


