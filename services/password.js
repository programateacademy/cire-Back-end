const { hash, genSalt, compare} = require('bcryptjs');

const hashPassword = async (password) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const salt = await genSalt(10);
    const hashedPass = await hash(password, salt);
    return hashedPass;
  } catch (error) {
    throw error;
  }
};

const checkPassword = async (password, hash) => {
  // eslint-disable-next-line no-useless-catch
  try {
    return await compare(password, hash);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  checkPassword,
  hashPassword,
};
