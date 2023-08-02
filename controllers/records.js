const Record = require('../models/record');

module.exports = {
  create,
  show,
  delete: deleteRecord,
  update,
};

async function show(req, res) {
  const record = await Record.findById(req.params.id).populate("genre");
  res.render('records/show', { title: `${record.title}`, record });
}

async function create(req, res) {

  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }

  try {
    // Update this line because now we need the _id of the new record
    const record = await Records.create(req.body);
    res.redirect(`/records/${record._id}`);
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('records/new', { title: 'Wait, Something is wrong!', errorMsg: err.message });
  }
}

async function update(req, res) {
  try {
    const updatedRecord = await Records.findOneAndUpdate(

      { _id: req.params.id, user: req.user._id },
      // update object with updated properties
      req.body,
      // options object {new: true} returns updated doc
      { new: true }
    );
    return res.redirect(`/records/${updatedRecord._id}`);
  } catch (e) {
    console.log(e.message);
    return res.redirect('/records');
  }
}

function deleteRecord(req, res) {
  Records.deleteOne(req.params.id);
  res.redirect('/records');
}