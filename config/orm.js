var connection = require("./connection");

var orm = {
  selectAll: (table, cb) => {
    // console.log(table);
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: (value, cb) => {
    // console.log(cb);
    // console.log("this is table: " + table);
    // console.log("this is column" + column);
    // console.log("this is value" + value);
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
    connection.query(queryString, [value], (err, res) => {
      if (err) throw err;
      // console.log(res);
      cb(res);
    });
  },
  updateOne: (burgerId, cb) => {
    var queryString = "UPDATE burgers SET devouerd = 1 WHERE id = ?";
    connection.query(queryString, [burgerId], (err, res) => {
      console.log("update" + queryString);
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  },
};

module.exports = orm;
