const authService = require("../services/authService");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const token = await authService.login(username, password);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.logout = async (req, res) => {
  const userId = req.user.userId; // Assumed userId is stored in request after authentication middleware
  try {
    await authService.logout(userId);
    res.json({ message: "Đăng xuất thành công" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
