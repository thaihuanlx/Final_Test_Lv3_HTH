const multer = require("multer");

// Cấu hình lưu trữ
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Lưu trữ tệp trong thư mục uploads/
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Tên tệp gốc + thời gian tải lên
  },
});

// Phân loại tệp tải lên
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true); // Chấp nhận tệp nếu là hình ảnh
  } else {
    cb(new Error("Chỉ chấp nhận tệp hình ảnh"), false);
  }
};

// Khởi tạo middleware multer
const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
