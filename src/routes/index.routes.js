import { Router } from "express";
import suspeitosRoutes from "./suspeitos.routes.js";

const routes = Router();

routes.get("/", (req, res) => {
    return res.status(200).json({ message: "Tyrion" })
});

routes.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello, World!" })
});

routes.use("/suspeitos", suspeitosRoutes)

export default routes;