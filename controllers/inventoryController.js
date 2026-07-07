async function getInventory(req, res) {
  return res.status(200).json({
    success: true,
    message: "Get inventory working",
  });
}
module.exports = {
  getInventory,
};
