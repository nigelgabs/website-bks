import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";


const {DataTypes} = Sequelize;

const LaporanPKS = db.define('laporan_pks',{
  uuid:{
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    validate:{
      notEmpty: true,
      len: [3, 255]
    }

  },

  no_mou:{
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
      len: [3, 200]
    }

  },

  no_pks:{
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
      len: [3, 200]
    }

  },

  tentang:{
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
      len: [3, 200]
    }

  },

  pic:{
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
      len: [3, 200]
    }

  },
  no_telp:{
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
      len: [3, 20]
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
  Keterangan:{
    type: DataTypes.TEXT,
    allowNull: false,
    validate:{
      notEmpty: true,
      len: [3, 100]
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

Users.hasMany(LaporanPKS)
LaporanPKS.belongsTo(Users, {foreignKey: 'userId'})

export default LaporanPKS;