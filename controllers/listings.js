const Listing = require('../../models/listing');

module.exports = {
  index,
  show,
  create
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

async function create(req, res) {
  req.body.user=req.user._id;
  const listing = await Listing.create(req.body);
  res.json(listing);


}

