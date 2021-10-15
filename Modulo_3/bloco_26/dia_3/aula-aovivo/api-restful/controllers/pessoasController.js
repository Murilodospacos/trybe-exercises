const router = require('express').Router()
const Pessoa = require('../models/pessoaModel')

// biblioteca para melhorar o status code
// npm install http-status-codes --save
const { StatusCodes } = require('http-status-codes')

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = await Pessoa.getById(id)
    res.status(StatusCodes.OK).json(result)
  } catch (error) {
    res.status(500).json({ message: "Aconteceu algum problema no servidor, tente mais tarde!" })
  }
})

router.get('/', async (req, res) => {
  try {
    const result = await Pessoa.getAll()
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ message: "Aconteceu algum problema no servidor, tente mais tarde!" })
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, age } = req.body
    const result = await Pessoa.add({ name, age })
    res.status(201).json(result)
  } catch (error) {
    res.status(500).json({ message: "Aconteceu algum problema no servidor, tente mais tarde!" })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { name, age } = req.body
    const result = await Pessoa.update({ id, name, age })
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ message: "Aconteceu algum problema no servidor, tente mais tarde!" })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = await Pessoa.exclude(id)
    res.status(200).json({ message: "Registro deletado com sucesso" })
    // Geralmente o Front-end pega essa message e joga dentro de um React-toastify
    // como se fosse uma caixinha pequena com uma notificação que aparece na pagina web.
  } catch (error) {
    res.status(500).json({ message: "Aconteceu algum problema no servidor, tente mais tarde!" })
  }
})

module.exports = router;