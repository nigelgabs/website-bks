import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const {DataTypes} = Sequelize;

const MOU = db.define('mou',{
  uuid:{
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    validate:{
      notEmpty: true
    }

  },

  no_mou:{
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
      len: [3, 100]
    }

  },

  tentang:{
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
      len: [3, 255]
    }

  },
  mitra:{
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
      len: [3, 100]
    }

  },
  keterangan:{
    type: DataTypes.TEXT,
    allowNull: false,
    validate:{
      notEmpty: true
    }
  },
  file:{
    type: DataTypes.STRING,
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

Users.hasMany(MOU)
MOU.belongsTo(Users, {foreignKey: 'userId'})


export default MOU;