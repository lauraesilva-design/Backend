import {Router} from "express";

import alunoController from "./controllers/alunos";
import cursoController from "./controllers/cursos";

const routes = Router();

routes.get("/", (request, response) => response.status(200).json("Servidor rodando"));

//rotas de alunos
routes.post("/alunos", alunoController.create);
routes.get("/alunos", alunoController.list);
routes.get("/alunos/:id",alunoController.getByld);
routes.put("/alunos/:id", alunoController.update);
routes.delete("/alunos/:id",alunoController.delete);

//rotas de cursos
routes.post("/cursos", cursoController.create);
routes.get("/cursos", cursoController.list);
routes.get("/cursos/:id",cursoController.getByld);
routes.put("/cursos/:id", cursoController.update);
routes.delete("/cursos/:id",cursoController.delete);

export default routes;
