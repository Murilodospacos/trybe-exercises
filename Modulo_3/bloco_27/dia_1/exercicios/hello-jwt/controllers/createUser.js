const Model = require('../models/user');

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Model.registerUser(username, password);
    if (!user) throw Error;
    res.status(200).json({ message: 'Novo usuário criado com sucesso', user });
  } catch (error) {
    res.status(500).json({ message: 'Error ao salvar o usuário no banco', error: error.message });
  }
};