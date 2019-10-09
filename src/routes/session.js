import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const user = await req.context.models.User.findById(req.context.me.id);
    return res.send(user);
  } catch (err) {}
});

export default router;
