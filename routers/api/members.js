/* define library */
const express = require('express')
const router = express.Router()

router
  .route('/')
  .get((req, res, next) => {
    // print info
    console.info(`${req.method} - Get all members`)

    sendResponse(req, res, next)
  })
  .post((req, res, next) => {
    // print info
    console.info(`${req.method} - Create member`)

    sendResponse(req, res, next)
  })

router
  .route('/:id')
  // print info
  .get((req, res, next) => {
    console.info(`${req.method} - get member id: ${req.params.id}`)

    sendResponse(req, res, next)
  })
  .put((req, res, next) => {
    // print info
    console.info(` ${req.method} - update member id:  ${req.params.id}`)

    sendResponse(req, res, next)
  })
  .delete((req, res, next) => {
    // print info
    console.info(` ${req.method} - delete member id:  ${req.params.id}`)

    sendResponse(req, res, next)
  })

let sendResponse = (req, res, next, data = 'OK') => {
  res.json(data)
  return next()
}
module.exports = router
