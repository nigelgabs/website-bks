import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";


const {DataTypes} = Sequelize;

const Messages = db.define('messages',{
  uuid:{
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    validate:{
      notEmpty: true,
      len: [3, 255]
    }

  },

  Name:{
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
      len: [3, 200]
    }

  },

  
  email:{
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
      len: [3, 100]
    }

  },
  Message:{
    type: DataTypes.TEXT,
    allowNull: false,
    validate:{
      notEmpty: true,
      len: [3, 100]
    }

  },
  
  userId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    validate:{
      notEmpty: true
    }

  }

},{
  freezeTableName: true
});

Users.hasMany(Messages)
Messages.belongsTo(Users, {foreignKey: 'userId'})

export default Messages;