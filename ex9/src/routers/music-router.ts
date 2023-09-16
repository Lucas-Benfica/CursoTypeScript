import { Router } from "express";
import { validateSchemaMiddleware } from "middlewares/schemaValidation";
import schemaMusic from "schemas/musicSchema";
import musicController from "../controllers/music-controller";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", validateSchemaMiddleware(schemaMusic) , musicController.createMusic); // TODO: validação via Joi

export default musicRouter;