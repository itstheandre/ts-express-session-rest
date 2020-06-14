import { Router } from "express";
import { userRoutes } from "./users";
const router = Router();

router.get("/", (req, res) => {
  res.send("This is home");
});

router.use("/api/auth", userRoutes);

router.get("/test", (req, res) => {
  console.log(req.user);

  res.json({ test: "test" });
});

export default router;
