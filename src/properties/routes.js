const {Router} = require('express');
const controller = require('./controller');
const router = Router();

//allir hlekkir á fasteignir

router.get('/', controller.getProperties)
router.get('/all', controller.getPropertiesWithAddress)
router.get('/:id', controller.getAdressById)







module.exports = router;