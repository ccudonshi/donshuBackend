module.exports.successResponse = (res, message = "", code = 200) => {
  res.status(code).send({ message, success: true });
};
module.exports.responseWithData = (res, data, code = 200) => {
  if (data === null || data === undefined || data.length === 0) {
    res.status(code).send([]);
  } else {
    res.status(code).send(data);
  }
};
