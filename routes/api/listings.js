const express = require('express');
const router = express.Router();
const listingsCtrl = require('../../controllers/api/listings');


router.post('/new', listingsCtrl.create);
router.get('/', listingsCtrl.index);
router.put('/update/:id', listingsCtrl.updateListing);
router.delete('/:id', listingsCtrl.deleteListing);
router.get('/:id', listingsCtrl.show);

module.exports = router;
