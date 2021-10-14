// Esse arquivo é responsável por receber as requisições e devolver as respostas

// fazendo a conexão com o arquivo SongServices aonde está toda regra de negócio
const Song = require('../services/songServices');


const getAllSongs = async (_req, res) => {
  try {
    const songs = await Song.getAllSongs()
    res.status(200).json(songs)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Aconteceu erro ao buscar os dados" })
  }
}

const createSong =  async (req, res) => {
  try {
    const { name, album } = req.body;
    const data = await Song.createNewSongs({ name, album })
    // tratando erro 
    if(data.erro_code && data.erro_code === 'MUSIC_EXISTS')
      res.status(400).json({ message: "Essa música já está cadastrada" })
    res.status(200).json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Aconteceu erro ao cadastrar o som" })
  }
}

module.exports = { getAllSongs, createSong }