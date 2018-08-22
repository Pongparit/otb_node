const express = require('express')
const router = express.Router()

// GET index
router.get('/', (req, res, next) => {
  res.sendStatus(200)
  return next()
})

module.exports = router
