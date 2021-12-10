const {Router} = require('express');
const controller = require('./controller');
const router = Router();

//allir hlekkir á skilaboðin

router.get("/", controller.getMessages);
router.get("/active/", controller.getActiveMessages);
router.get("/:id", controller.getMessageById);
router.patch("/:id", controller.patchMessage);







module.exports = router;