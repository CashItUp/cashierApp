module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    food1: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      },
      defaultValue: 0
    },
    food2: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      },
      defaultValue: 0
    },
    food3: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      },
      defaultValue: 0
    },
    food4: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      },
      defaultValue: 0
    },
    food5: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      },
      defaultValue: 0
    },
    food6: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      },
      defaultValue: 0
    },
    food7: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      },
      defaultValue: 0
    },
    food8: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      },
      defaultValue: 0
    },
    food9: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      },
      defaultValue: 0
    },
    food10: {
      type: DataTypes.STRING,
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
    }
  });
  
  Post.associate = function(models) {
    // We're saying that a Post should belong to an employee
    // A Post can't be created without an Employee due to the foreign key constraint
    Post.belongsTo(models.Employee, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
