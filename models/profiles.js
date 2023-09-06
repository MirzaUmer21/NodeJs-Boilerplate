const mongoose = require('mongoose');

const { schema } = mongoose;

const profileSchema = new schema({
  cnic: { type: String, required: true },
  dob: { type: Date, required: true },
  user: { type: mongoose.SchemaType.ObjectId, ref: 'users' }
});

module.exports = mongoose.model('Profile', profileSchema, 'Profiles');
