const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

// Connect to the database
const url = process.env.MONGO_URL || 'mongodb://0.0.0.0:27017/products';
mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
  console.log('Connected to DB');
}).catch((error) => {
  console.error('DB connection error:', error);
});

app.listen(3000, () => console.log('Server running on port 3000'));
