const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const autheHeader = req.headers.authorization;

  if (!autheHeader) {
    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
  const token = autheHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Invalid token format",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
}
module.exports = {
  authenticateToken,
};
