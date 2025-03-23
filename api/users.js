import { db } from "../lib/firebaseAdmin.js"; // Ensure correct path

const getUsers = async (req, res) => {
  try {
    let userData = [];
    const snapshot = await db.collection("Users").get();

    if (snapshot.empty) {
      return res.status(200).json({ success: true, data: [] });
    }

    snapshot.forEach((doc) => {
      userData.push({ id: doc.id, ...doc.data() });
    });

    return res.status(200).json({ success: true, data: userData });
  } catch (error) {
    console.error("❌ Error fetching users:", error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export default getUsers;
