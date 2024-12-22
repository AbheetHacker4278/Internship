import express, { json } from 'express';
import { connect, model, Schema } from 'mongoose';
import multer from 'multer';
import path, { dirname } from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const port = 4000;
const app = express();

// ✅ Middleware
app.use(json());
app.use(cors());

// ✅ Database Connection
const uri = 'mongodb+srv://aseth9588:7622967931@ecc.utx6j.mongodb.net/productsDB?retryWrites=true&w=majority';

connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 45000,
})
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1); // Exit the process on connection failure
  });

// ✅ Path Setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ✅ Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '/upload/images'));
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage });

// ✅ Static File Serving
app.use('/images', express.static(path.join(__dirname, '/upload/images')));

// ✅ Product Schema and Model
const Product = model('Product', new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  available: { type: Boolean, required: true, default: true }
}));

// ✅ Routes

// Home Route
app.get('/', (req, res) => {
  res.send('✅ All Good');
});

// File Upload Route
app.post('/upload', upload.single('product'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: 0, message: '❌ No file uploaded' });
  }
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`
  });
});

// Add Product Route
app.post('/addproduct', async (req, res) => {
  try {
    console.log('Request Body:', req.body); // Debugging incoming request body

    // Extract fields from body
    const { name, image, category, new_price, old_price, available } = req.body;

    // Parse `available` to ensure it's Boolean
    const isAvailable = available !== undefined ? JSON.parse(available) : true;

    // Validate required fields
    if (!name || !image || !category || !new_price || !old_price) {
      return res.status(400).json({
        success: false,
        message: '❌ All fields (name, image, category, new_price, old_price) are required.'
      });
    }

    // Auto-Increment ID
    let lastProduct = await Product.findOne().sort({ id: -1 }).exec();
    let id = lastProduct ? lastProduct.id + 1 : 1;

    // Create a new product
    const product = new Product({
      id,
      name,
      image,
      category,
      new_price,
      old_price,
      available: isAvailable
    });

    await product.save();

    res.json({
      success: true,
      message: '✅ Product added successfully',
      product
    });
  } catch (err) {
    console.error('❌ Error:', err.message);
    res.status(500).json({
      success: false,
      message: '❌ Failed to add product',
      error: err.message
    });
  }
});

app.post('/removeproduct' , async(req , res) => {
    await Product.findOneAndDelete({id: req.body.id});
    res.json({
        success : true,
        name : req.body.name,
    })
})

// Add Get All Products Route
app.get('/getallproducts', async (req, res) => {
    try {
      const products = await Product.find(); // Fetch all products from the database
      res.json({
        success: true,
        message: '✅ Products fetched successfully',
        products
      });
    } catch (err) {
      console.error('❌ Error fetching products:', err.message);
      res.status(500).json({
        success: false,
        message: '❌ Failed to fetch products',
        error: err.message
      });
    }
  });
  

// ✅ Start Server
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
