const { mongoose } = require('../config/db');
const { encryptPassword, createToken, createSalt } = require('../utils/index');

const Schema = mongoose.Schema;
const schema = new Schema({
  username: { type: String, required: true },
  nickname: String,
  password: String,
  salt: String,
  createTime: { type: Date, default: new Date() },
  modifyTime: { type: Date, default: new Date() },
  lastLoginT: Date,
  loginIp: String,
  role: { type: Number, default: 1 }, // 0:管理员 1:普通
});

const Auth = mongoose.model('auth', schema, 'auth');
module.exports = {
  Auth,
  Dao: {
    login: async (params) => {
      try {
        const user = await Auth.findOne({ username: params.username });
        if (!user) throw { message: '用户不存在' };
        if (user.password !== encryptPassword(user.salt, params.password)) throw { message: '密码有误' };
        return { token: createToken({ id: user.id }) };
      } catch (err) {
        throw err;
      }
    },
  },
};

const init = async () => {
  const exists = await Auth.exists({});
  if (!exists) {
    const salt = createSalt();
    await Auth.create({ username: 'admin', salt, password: encryptPassword(salt, '111111'), role: 0 });
  }
};
init();
