const db = require('../../config/firebaseDatabase')
const crypto = require('crypto')

exports.getMembers = async (id = null) => {
  const retreiveDoc = await db.retreive('members', id)
  return retreiveDoc
}

exports.updateMember = async (id, data) => {
  const updateDoc = await db.update('members', id, data)
  return updateDoc
}

exports.deleteMember = async (id) => {
  const deleteDoc = await db.delete('members', id)

  return deleteDoc
}

exports.createMember = async (params) => {
  const hashName = crypto
    .createHash('md5')
    .update(params.name)
    .digest('hex')

  const dbResponse = await db.create('members', hashName, params)

  return dbResponse
}
