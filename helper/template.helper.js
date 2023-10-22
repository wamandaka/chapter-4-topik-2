const resp = {
  "data": "",
  "message": "",
  "status": 0,
};

function ResponseTemplate(data,message,error,status) {
  return {
    data,
    message,
    error,
    status
  }
}

module.exports = {
  resp,
  ResponseTemplate
};