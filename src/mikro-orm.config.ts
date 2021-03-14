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
  dbName: "fjrmjyfd",
  type: "postgresql",
  debug: !__prod__,
  clientUrl:
    "postgres://fjrmjyfd:1G8UijIg0-W52LyC7IfqG8VKophTkndZ@ziggy.db.elephantsql.com:5432/fjrmjyfd"
}

export default config


