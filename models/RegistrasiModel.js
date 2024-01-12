// import { Sequelize } from "sequelize";
// import db from "../config/Database.js";

// const {DataTypes} = Sequelize;

// const Registrasi = db.define('regis',{
//   uuid:{
//     type: DataTypes.STRING,
//     defaultValue: DataTypes.UUIDV4,
//     allowNull: false,
//     validate:{
//       notEmpty: true
//     }

//   },
//   email:{
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate:{
//       notEmpty: true,
//       isEmail: true
//     }

//   },
//   password:{
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate:{
//       notEmpty: true
//     }

//   }

// },{
//   freezeTableName: true
// });

// export default Registrasi;