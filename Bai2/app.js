const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const movieRoutes = require("./routes/movieRoutes");

const app = express();
const uri = `mongodb+srv://hth021000:123admin@cluster0.nnw6adc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose
  .connect(uri)
  .then(() => console.log("Connected to database successfully"))
  .catch((error) => console.error("Database connection failed", error));
// Middleware
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/movies", movieRoutes);

// Middleware để xử lý tải lên hình ảnh
const uploadMiddleware = require("./middlewares/upload");

// middleware tải lên hình ảnh vào ứng dụng
app.post("/upload", uploadMiddleware.single("image"), (req, res) => {
  // Xử lý sau khi tải lên hình ảnh thành công
  res.json({
    message: "Tải lên hình ảnh thành công",
    imagePath: req.file.path,
  });
});

// Server
app.listen(3000, () => {
  console.log(`Server is running on port`);
});
