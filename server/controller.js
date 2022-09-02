const { User } = require("./model");

module.exports.getAll = async (_, res) => {
  try {
    const users = await User.find({}).exec();
    const usersObj = {};
    users.forEach((user) => (usersObj[user._id] = user));
    return res.status(200).json({ data: usersObj, success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message, success: false });
  }
};
module.exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).exec();
    return res.status(200).json({ data: user, success: true });
  } catch (error) {
    return res.status(500).json({ error, success: false });
  }
};
module.exports.create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(200).json({ data: user, success: true });
  } catch (error) {
    return res.status(500).json({
      errors: ["email already exists", "password is too short."],
      success: false,
    });
  }
};
module.exports.update = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const user = await User.findByIdAndUpdate(id, body, { new: true }).exec();
    return res.status(200).json({ data: user, success: true });
  } catch (error) {
    return res.status(500).json({ error, success: false });
  }
};
module.exports.delete = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const result = await User.deleteOne({ _id: id }).exec();
    return res.status(200).json({ data: result, success: true });
  } catch (error) {
    return res.status(500).json({ error, success: false });
  }
};
