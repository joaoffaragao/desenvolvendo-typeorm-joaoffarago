import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const routes = Router();

routes.post("", UserController.create);
routes.get("", UserController.read);
routes.get("/:id", UserController.readOneUser);
routes.delete("/:id", UserController.delete);

export default routes;
