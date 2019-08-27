var orm = require('../config/orm');

var burger = {

    all: function (cb) {
        orm.all("burgers", function(res){
            cb(res);
        });
    },

    create: function (column, values, cb) {
        orm.create("burgers", column, values, function(res){
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
          cb(res);
        });
      }
    
}

module.exports = burger;