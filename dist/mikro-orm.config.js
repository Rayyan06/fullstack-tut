"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
const User_1 = require("./entities/User");
const path_1 = __importDefault(require("path"));
const config = {
    migrations: {
        path: path_1.default.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
        disableForeignKeys: false
    },
    entities: [Post_1.Post, User_1.User],
    dbName: "fjrmjyfd",
    type: "postgresql",
    debug: !constants_1.__prod__,
    clientUrl: "postgres://fjrmjyfd:1G8UijIg0-W52LyC7IfqG8VKophTkndZ@ziggy.db.elephantsql.com:5432/fjrmjyfd"
};
exports.default = config;
//# sourceMappingURL=mikro-orm.config.js.map