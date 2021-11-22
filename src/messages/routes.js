const {Router} = require('express');
const controller = require('./controller');
const router = Router();

router.get("/", controller.getMessages);
router.get("/active/", controller.getActiveMessages);
router.get("/:id", controller.getMessageById);
router.put("/:id", controller.putMessage);







module.exports = router;