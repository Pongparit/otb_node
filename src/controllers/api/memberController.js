const db = require('../../config/firebaseDatabase')

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
  const dbResponse = await db.create('members', params.name, params)

  return dbResponse
}
