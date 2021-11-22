const {Router} = require('express');
const controller = require('./controller');
const router = Router();
//router.get("/", () => controller.getUsers(req,res))
router.get("/", controller.getUsers);
router.get("/pending", controller.getPendingUsers)
router.post("/", controller.addUser);
router.get("/:id", controller.getUserById);
router.get("/username/:id", controller.getUserName);
router.get("/image/:id", controller.getUserImage);
router.put("/notverified/:id", controller.putUserNotVerified);
router.put("/pendingverified/:id", controller.putUserPendingVerified);
router.put("/verified/:id", controller.putUserVerified);
router.put("/notactive/:id", controller.putUserNotActive);
router.put("/active/:id", controller.putUserActive);






module.exports = router;