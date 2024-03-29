module.exports = (req, res, next) => {
  const { headers } = req;
  // console.log(headers);
  // eslint-disable-next-line no-prototype-builtins
  const apiKey = (headers.hasOwnProperty("api-key"))
    ? headers["api-key"] // new version (beacause of nginx)
    : headers.api_key; // old version
  if (typeof (apiKey) !== "undefined") {
    console.debug("apikey");
    return (apiKey === process.env.API_KEY)
      ? next()
      : res.status(403).send({ sucess: false, message: "APIKEYFailed" });
  } else res.status(403).send({ sucess: false, message: "APIKEYFailed" });
};
