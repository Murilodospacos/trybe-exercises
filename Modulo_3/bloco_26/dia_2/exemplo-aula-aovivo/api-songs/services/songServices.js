// Esse Arquivo é responsavel por fazer, calculos, validações e regra de negócio.

// fazendo a conexão com o arquivo songsModel aonde ele se comunica com o mongodb.
const Song = require('../models/songsModel');

const getAllSongs = async () => {
  const data = await Song.getAll()
  return data
}

const createNewSongs = async ({ name, album }) => {
  const songExists = Song.songExists({ name })
  if(songExists) return { erro_code: "MUSIC_EXISTS" }
  return await Song.create({ name, album })
}

module.exports = { getAllSongs, createNewSongs }