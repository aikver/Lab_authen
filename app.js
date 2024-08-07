const express = require('express'); 
const mongoose = require('mongoose'); 
const dotenv = require('dotenv');
const app = express();
const productRoutes = require('./routes/product'); 

app.use(express.json())
dotenv.config();


// ConnectDB
mongoose.connect(process.env.MongoDB_URL, {
}).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define Route
app.use("/api/product", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));