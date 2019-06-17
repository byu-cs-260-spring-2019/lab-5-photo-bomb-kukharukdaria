const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');

const firebaseApp = firebase.initializeApp(
    functions.config().firebase
);

const app = express();

var db = firebase.firestore();
var itemsRef = db.collection('users');


app.post('/api/users', async (req, res) => {
    try {
        let querySnapshot = await itemsRef.get();
        let numRecords = querySnapshot.docs.length;
        let user = {
            // id: numRecords + 1,
            // email: data.email,
        };
        itemsRef.doc(user.id.toString()).set(user);
        res.send(user);
    } catch (error) {
        res.sendStatus(500);
    }
});

exports.app = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
