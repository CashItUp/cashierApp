module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define("Employee", {
  
    idNumber: {type:DataTypes.INTEGER},
    name: {type: DataTypes.STRING}
});
  return Employee;
};
