const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.login = async (username, password) => {
  try {
    // Tìm người dùng trong cơ sở dữ liệu
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("Tên người dùng không tồn tại");
    }
    // So sánh mật khẩu
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new Error("Mật khẩu không chính xác");
    }
    // Tạo token
    const token = jwt.sign({ userId: user._id }, "secretKey", {
      expiresIn: "1h",
    });
    return token;
  } catch (error) {
    throw error;
  }
};

exports.logout = async (userId) => {
  try {
    // Xử lý đăng xuất nếu cần
  } catch (error) {
    throw error;
  }
};
