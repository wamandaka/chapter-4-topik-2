function TestUser(req, res) {
  res.json({
    "data": null,
    "message": "berhasil masuk user",
    "status": 200
  });
  
}
module.exports = {TestUser};