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
  dbName: "ltmqakby",
  type: "postgresql",
  debug: !__prod__,
  clientUrl:
    "postgres://ltmqakby:z2kOl2za4nq0prvDDn-FZBNsLAorkDxL@queenie.db.elephantsql.com:5432/ltmqakby",

}

export default config


