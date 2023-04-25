const { Op } = require('sequelize');

module.exports = (req, res, next) => {
  const { email, verified, role } = req.query;
  const where = { user: {} };
  if (verified === 'f') {
    where.review = { verified: false };
  }
  if (verified === 't') {
    where.review = { verified: true };
  }
  if (email) {
    where.user.email = { [Op.iLike]: `%${email}%` };
  }
  if (role) {
    where.user.role = role;
  }
  req.where = where;
  next();
};