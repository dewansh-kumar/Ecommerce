import bcrypt from "bcrypt";

const hashPassword = async (password) => {
  try {
    const SALT_ROUNDS = 10;
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    return hashedPassword;
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

const comparePassword = async (hashedPassword, newPassword) => {
  try {
    const isValid = await bcrypt.compare(newPassword, hashedPassword);
    return isValid;
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

export {hashPassword, comparePassword}
