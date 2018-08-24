/* define library */
const express = require('express')
const router = express.Router()

/* define variable */
const membersRoute = require('./members')

router.use('/members', membersRoute)

// GET index
router.get('/', (req, res, next) => {
  res.sendStatus(200)
  return next()
})

module.exports = router
