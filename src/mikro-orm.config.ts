import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d|\.[tj]s$/,
    disableForeignKeys: false
  },

  entities: [Post],
  dbName: "fjrmjyfd",
  type: "postgresql",
  debug: !__prod__,
  clientUrl:
    "postgres://fjrmjyfd:1G8UijIg0-W52LyC7IfqG8VKophTkndZ@ziggy.db.elephantsql.com:5432/fjrmjyfd"
} as Parameters<typeof MikroORM.init>[0];
