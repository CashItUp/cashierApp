module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define("Employee", {
    // Giving the Employee model a name of type STRING
    idNumber: DataTypes.STRING,
    name: DataTypes.STRING
  });

  Employee.associate = function(models) {
    // Associating Employee with Posts
    // When an Employee is deleted, also delete any associated Posts
    Employee.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Employee;
};
