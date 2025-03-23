// const admin = require("firebase-admin");
// const serviceAccount = require("../serviceAccountKey.json");

// // Initialize Firebase Admin SDK if not already initialized
// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//   });

//   console.log("✅ Firebase Admin SDK initialized successfully!");
// }

// const db = admin.firestore();

// module.exports = { admin, db };


const admin = require("firebase-admin");

// Decode Base64 env variable
const serviceAccount = JSON.parse(
  Buffer.from(process.env.FIREBASE_ADMIN_KEY, "base64").toString("utf8")
);

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
  
  console.log("✅ Firebase Admin SDK initialized successfully!");
}

const db = admin.firestore();

module.exports = { admin, db };


