module.exports = (role) => {
  return (req, res, next) => {
    if (!req.session.user || req.session.user.role !== role) {
      return res.send("Access Denied");
    }
    next();
  };
};
