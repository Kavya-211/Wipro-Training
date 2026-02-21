//Error Handling
const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server Error",
    data: null
  });
};

const notFound = (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
    data: null
  });
};

module.exports = { errorHandler, notFound };