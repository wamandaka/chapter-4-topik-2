const { ResponseTemplate } = require("../helper/template.helper");

function printSuccess(req, res, next) {
  console.log("Success");
  next();
}
function printSuccessRoute(req, res, next) {
  console.log("Success lewat route level");
  next();
}

function CheckPost(req, res, next) {
  if (req.body.name == null || req.body.address == "") {
    let respError = ResponseTemplate(
      null,
      "invalid request",
      new Error("invalid request"),
      400
    );
    res.json(respError);
  }
  next();
}

module.exports = {
  printSuccess,
  printSuccessRoute,
  CheckPost,
};
