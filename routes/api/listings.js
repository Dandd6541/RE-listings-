const express = require('express');
const router = express.Router();
const listingsCtrl = require('../../controllers/api/listings');

// GET /api/listings
router.get('/', listingsCtrl.index);
//post req 
router.post('/', listingsCtrl.create);
// GET /api/listings/:id
router.get('/:id', listingsCtrl.show);

module.exports = router;
