const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/productModel.js');

dotenv.config();

const uri = 'mongodb+srv://gurupavan2023:gurupavan2023%23@none-web.hleokis.mongodb.net/';
//mongodb+srv://gurupavan2023:gurupavan2023%23@none-web.plldejt.mongodb.net/myDatabaseName?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.log(err);
});

const products = [
  {
    name: 'Product 1',
    description: 'Description for product 1',
    price: 10.99
  },
  {
    name: 'Product 2',
    description: 'Description for product 2',
    price: 12.99
  },
  {
    name: 'Product 3',
    description: 'Description for product 3',
    price: 8.99
  }
];

const seedProducts = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Products inserted');
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

seedProducts();
