const Sequelize = require('sequelize');
module.exports = new Sequelize('nodesearchdb', 'siat', '12345', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
