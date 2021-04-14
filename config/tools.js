exports.successSend = (res, msg) => {
  res.status(200).json({
    msg: msg,
    status: 200,
  });
};

exports.errorSend = (res, msg) => {
  res.status(404).json({
    msg: msg,
    status: 404,
  });
};
