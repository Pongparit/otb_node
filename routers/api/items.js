/* define library */
const express = require('express')
const router = express.Router()

const item = require('../../src/controllers/api/itemController')

router
  .route('/')
  .get((req, res, next) => {
    // print info
    console.info(`${req.method} - Get all items`)

    item.getItems().then(apiResponse => {
      sendResponse(req, res, next, apiResponse)
    })
  })
  .post((req, res, next) => {
    const params = req.body

    // print info
    console.info(`${req.method} - Create items`)
    item.createItem(params).then(apiResponse => {
      sendResponse(req, res, next, apiResponse)
    })
  })

router
  .route('/:id')
  .get((req, res, next) => {
    const itemId = req.params.id

    // print info
    console.info(`${req.method} - get item id: ${itemId}`)

    item.getItems(itemId).then(apiResponse => {
      sendResponse(req, res, next, apiResponse)
    })
  })
  .put((req, res, next) => {
    const itemId = req.params.id
    const itemData = req.body

    // print info
    console.info(`${req.method} - update member id:  ${itemId}`)

    item.updateMember(itemId, itemData).then(apiResponse => {
      sendResponse(req, res, next, apiResponse)
    })
  })
  .delete((req, res, next) => {
    const itemId = req.params.id

    // print info
    console.info(`${req.method} - delete member id:  ${itemId}`)

    item.deleteMember(itemId).then(apiResponse => {
      sendResponse(req, res, next, apiResponse)
    })
  })

let sendResponse = (req, res, next, data = 'OK') => {
  res.json(data)
  return next()
}
module.exports = router
