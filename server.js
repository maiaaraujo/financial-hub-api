import jsonServer from "json-server";
import cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3333;
server.listen(PORT, () => {
  console.log(`(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ JSON Server rodando na porta ${PORT}`);
});
