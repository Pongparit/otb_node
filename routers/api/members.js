/* define library */
const express = require('express')
const router = express.Router()

const member = require('../../src/controllers/api/memberController')

router
  .route('/')
  .get((req, res, next) => {
    // print info
    console.info(`${req.method} - Get all members`)

    member.getMembers().then(apiResponse => {
      sendResponse(req, res, next, apiResponse)
    })
  })
  .post((req, res, next) => {
    // print info
    console.info(`${req.method} - Create member`)

    let params = req.body
    member.createMember(params).then(apiResponse => {
      sendResponse(req, res, next, apiResponse)
    })
  })

router
  .route('/:id')
  .get((req, res, next) => {
    const memberId = req.params.id
    // print info
    console.info(`${req.method} - get member id: ${memberId}`)

    member.getMembers(memberId).then(apiResponse => {
      sendResponse(req, res, next, apiResponse)
    })
  })
  .put((req, res, next) => {
    // print info
    const memberId = req.params.id
    const memberData = req.body
    console.info(`${req.method} - update member id:  ${memberId}`)

    member.updateMember(memberId, memberData).then(apiResponse => {
      sendResponse(req, res, next, apiResponse)
    })
  })
  .delete((req, res, next) => {
    // print info
    const memberId = req.params.id
    console.info(`${req.method} - delete member id:  ${memberId}`)

    member.deleteMember(memberId).then(apiResponse => {
      sendResponse(req, res, next, apiResponse)
    })
  })

let sendResponse = (req, res, next, data = 'OK') => {
  res.json(data)
  return next()
}
module.exports = router
