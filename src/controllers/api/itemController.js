const db = require('../../config/firebaseDatabase')
const crypto = require('crypto')

exports.createItem = async (params) => {
  const hashName = crypto
    .createHash('md5')
    .update(params.name)
    .digest('hex')

  const dbResponse = await db.create('items', hashName, params)

  return dbResponse
}

exports.getItems = async (id = null) => {
  const retreiveDoc = await db.retreive('items', id)
  return retreiveDoc
}

exports.updateItem = async (id, data) => {
  const updateDoc = await db.update('items', id, data)
  return updateDoc
}

exports.deleteItem = async (id) => {
  const deleteDoc = await db.delete('items', id)

  return deleteDoc
}
