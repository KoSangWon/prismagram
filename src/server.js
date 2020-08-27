require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";

const PORT = process.env.PORT || 4000;



//GraphQLServer에 Express가 내장되어 있음.
const server = new GraphQLServer({ schema });

//Middleware
server.express.use(logger("dev"));

server.start({port: PORT}, () => console.log(`🐶Server running on http://localhost:${PORT}`));