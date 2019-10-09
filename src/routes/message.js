import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const messages = await req.context.models.Message.find();
    return res.send(messages);
  } catch (err) {}
});

router.get("/:messageId", async (req, res) => {
  try {
    const message = await req.context.models.Message.findById(
      req.params.messageId
    );
    return res.send(message);
  } catch (err) {}
});

router.post("/", async (req, res) => {
  try {
    const message = await req.context.models.Message.create({
      text: req.body.text,
      user: req.context.me.id
    });

    return res.send(message);
  } catch (err) {}
});

router.delete("/:messageId", async (req, res) => {
  try {
    const message = await req.context.models.Message.findById(
      req.params.messageId
    );

    let result = null;
    if (message) {
      result = await message.remove();
    }

    return res.send(result);
  } catch (err) {}
});

export default router;
