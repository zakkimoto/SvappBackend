const {Router} = require('express');
const controller = require('./controller');
const router = Router();

router.get('/', controller.getProperties)
router.get('/:id', controller.getAdressById)







module.exports = router;