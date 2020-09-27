const functions = require('firebase-functions');
const admin = require("firebase-admin")
admin.initializeApp()
const db = admin.firestore()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.leaderboard = functions.https.onRequest(async (request, response) => {
    const topTen = await db.collection("27_09_2020").orderBy("time asc").limit(10).get()
    response.send(topTen)
})