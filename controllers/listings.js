const Listing = require('../../models/listing');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const listings = await Listing.find({}).sort('name').populate('category').exec();
  // re-sort based upon the sortOrder of the categories
  listings.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(listings);
}

async function show(req, res) {
  const listing = await Listing.findById(req.params.id);
  res.json(listing);
}
