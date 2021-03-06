/*
{
  "name": "backend-fun",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.ts",
  "scripts": {
    "watch": "tsc -w",
    "dev": "nodemon dist/index.js --enable-source-maps",
    "start": "node dist/index.js",
    "start2": "ts-node src/index.ts",
    "dev2": "nodemon --exec ts-node src/index.ts",
    "create:migration": "mikro-orm migration:create"
  },
  "dependencies": {
    "@mikro-orm/cli": "^4.5.4",
    "@mikro-orm/core": "^4.4.4",
    "@mikro-orm/migrations": "^4.4.4",
    "@mikro-orm/postgresql": "^4.4.4",
    "apollo-server-express": "^2.21.1",
    "argon2": "^0.27.1",
    "class-validator": "^0.13.1",
    "connect-redis": "^5.1.0",
    "express": "^4.17.1",
    "express-session": "^1.17.1",
    "graphql": "^15.5.0",
    "pg": "^8.5.1",
    "redis": "^3.0.2",
    "reflect-metadata": "^0.1.13",
    "type-graphql": "^1.1.1"
  },
  "devDependencies": {
    "@types/connect-redis": "^0.0.16",
    "@types/express": "^4.17.11",
    "@types/express-session": "^1.17.3",
    "@types/node": "^14.14.32",
    "@types/redis": "^2.8.28",
    "nodemon": "1.18.4",
    "ts-node": "^9.1.1",
    "typescript": "^4.2.3"
  },
  "mikro-orm": {
    "useTsNode": true,
    "configPaths": [
      "./src/mikro-orm.config.ts",
      "./dist/mikro-orm.config.js"
    ]
  },
  "keywords": []
}
*/
