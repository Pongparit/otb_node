const admin = require('firebase-admin')
const serviceAccount = require('./serviceAccountKey.json')

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = firebaseApp.firestore()
db.settings({
  timestampsInSnapshots: true
})

exports.create = async (collection, doc, data) => {
  let docRef = db
    .collection(collection)
    .doc(doc)

  let setDoc = await docRef.set(data)

  return setDoc
}

exports.delete = async (collection, doc) => {
  let docRef = db
    .collection(collection)
    .doc(doc)

  let delDoc = await docRef.delete()

  return delDoc
}

exports.update = async (collection, doc, data) => {
  let docRef = db
    .collection(collection)
    .doc(doc)

  let updateDoc = await docRef.update(data)

  return updateDoc
}

exports.retreive = async (collection, doc = null) => {
  let docRef = db
    .collection(collection)
  if (!doc) {
    let response = await docRef.get()
    let datas = []

    response.forEach(data => {
      datas = [data.data(), ...datas]
    })

    return datas
  } else {
    let response = await docRef.doc(doc).get()
    if (!response.exists) { return 'No such data.' } else return response.data()
  }
}
