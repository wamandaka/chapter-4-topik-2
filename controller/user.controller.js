const { ResponseTemplate } = require("../helper/template.helper");

function TestUser(req, res) {
  let resp = ResponseTemplate(null, "success", null, 200);
  res.json(resp);
}
function TestUserPost(req, res) {
  console.log(req.query.name);
  let data = {
    name: req.body.name,
    address: req.body.address,
  };
  let resp = ResponseTemplate(data, "success", null, 200);
  res.json(resp);
}

module.exports = { TestUser, TestUserPost };
