import dotenv from "dotenv";
import path from "path";
// console.log(__dirname);
dotenv.config({path: path.resolve(__dirname, ".env")});
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "~/schema";
import {sendSecretMail} from "./utils";

// sendSecretMail("jackoss@naver.com", "123")  //nodemailer인증이 안되니 mailgun으로 대체할 것

const PORT = process.env.PORT || 4000;


//GraphQLServer에 Express가 내장되어 있음.
const server = new GraphQLServer({ schema });

//Middleware
server.express.use(logger("dev"));

server.start({port: PORT}, () => console.log(`🐶Server running on http://localhost:${PORT}`));