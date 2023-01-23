const { Sequelize } = require("sequelize");
const db = require("../config/Database");

const { DataTypes } = Sequelize;

 const UserModel = db.define("users", {
//         username: DataTypes.STRING,
//     email: DataTypes.STRING,
//     phone: DataTypes.STRING,
//     password: DataTypes.STRING
// },{
//     freezeTableName: true
// });
username: {
    type: DataTypes.STRING,
    allowNull: false,
},
email: {
    type: DataTypes.STRING,
    allowNull: false,
},
phone: {
    type: DataTypes.STRING,
    allowNull: false,
},
password: {
    type: DataTypes.STRING,
    allowNull: false,
},
});
module.exports = UserModel;

// export default UsersModel;

(async () => {
    await db.sync();
})();

