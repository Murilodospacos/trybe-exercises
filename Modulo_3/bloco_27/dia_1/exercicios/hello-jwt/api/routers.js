const getPosts = require('../controllers/posts');
const createUsers = require('../controllers/createUser');
const login = require('../controllers/login');
const ping = require('../controllers/ping');

module.exports = {
  getPosts,
  createUsers,
  login,
  ping,
};