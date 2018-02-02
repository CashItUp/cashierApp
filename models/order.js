module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("Order", {
    food1: {
      type: DataTypes.JSON,
      allowNull: true,
      validate: {
        len: [1]
      },
      defaultValue: 0
    },
    food2: {
      type: DataTypes.JSON,
      allowNull: true,
      validate: {
        len: [1]
      },
      defaultValue: 0
    },
    food3: {
      type: DataTypes.JSON,
      allowNull: true,
      validate: {
        len: [1]
      },
      defaultValue: 0
    },
    food4: {
      type: DataTypes.JSON,
      allowNull: true,
      validate: {
        len: [1]
      },
      defaultValue: 0
    },
    food5: {
      type: DataTypes.JSON,
      allowNull: true,
      validate: {
        len: [1]
      },
      defaultValue: 0
    },
    food6: {
      type: DataTypes.JSON,
      allowNull: true,
      validate: {
        len: [1]
      },
      defaultValue: 0
    },
    food7: {
      type: DataTypes.JSON,
      allowNull: true,
      validate: {
        len: [1]
      },
      defaultValue: 0
    },
    food8: {
      type: DataTypes.JSON,
      allowNull: true,
      validate: {
        len: [1]
      },
      defaultValue: 0
    },
    food9: {
      type: DataTypes.JSON,
      allowNull: true,
      validate: {
        len: [1]
      },
      defaultValue: 0
    },
    food10: {
      type: DataTypes.JSON,
      allowNull: true,
      validate: {
        len: [1]
      },
      defaultValue: 0
    },
    tax: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    total: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    table: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    idNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  
  Order.associate = function(models) {
    // We're saying that a Order should belong to an employee
    // A Order can't be created without an Employee due to the foreign key constraint
    Order.belongsTo(models.Employee, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Order;
};
