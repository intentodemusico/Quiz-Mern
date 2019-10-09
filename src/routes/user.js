import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await req.context.models.User.find();
    return res.send(users);
  } catch (err) {}
});

router.get("/:userId", async (req, res) => {
  try {
    const user = await req.context.models.User.findById(req.params.userId);
    return res.send(user);
  } catch (err) {}
});

export default router;
