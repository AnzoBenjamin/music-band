import path from "path";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/connectDB.js";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
const app = express();
dotenv.config();
connectDB();
const __dirname = path.resolve();
const typeDefs = `#graphql
type Book {
  title: String
  author: String
}
type Query{
    books: [Book]
}
`;
const books = [
    {
        title: "The Awakening",
        author: "Kate Chopin",
    },
    {
        title: "City of Glass",
        author: "Paul Auster",
    },
];
const resolvers = {
    Query: {
        books: () => books,
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
app.use(express.static(path.join(__dirname, "..", "..", "client", "dist")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "client", "dist", "index.html"));
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 },
});
console.log("Server is running on", url);
