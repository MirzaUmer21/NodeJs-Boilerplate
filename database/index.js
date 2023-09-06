const { default: mongoose } = require('mongoose');
const { MONGODB_CONNECTION_STRING } = require('../config');
const DATABASE_NAME = 'test';
const connetDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_CONNECTION_STRING, {
      dbName: DATABASE_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(conn);
    console.log('Database connected successfully');
  } catch (error) {
    conosle.log(`Error: ${error}`);
  }
};
module.exports = connetDB;
