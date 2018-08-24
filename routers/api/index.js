/* define library */
const express = require('express')
const router = express.Router()

/* define variable */
const membersRoute = require('./members')
const itemRoute = require('./items')

router.use('/members', membersRoute)
router.use('/items', itemRoute)

// GET index
router.get('/', (req, res, next) => {
  res.sendStatus(200)
  return next()
})

module.exports = router
