import express from "express";

import business from "./api/business/controller";

const router = express.Router();

router.use("/business", business);

export default router;