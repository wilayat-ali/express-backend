import { db } from "../lib/firebaseAdmin.js";

// Create a new user
export const createUser = async (userData) => {
    try {
      console.log("Received userData:", userData);
      console.log("Type of userData:", typeof userData);
  
      // Ensure userData is an object and not a string
      if (typeof userData === "string") {
        userData = JSON.parse(userData);
      }
  
      const userRef = db.collection("Users").doc();
      await userRef.set({ id: userRef.id, ...userData });
  
      return { id: userRef.id, ...userData };
    } catch (error) {
      console.error("❌ Error creating user:", error);
      throw new Error("Failed to create user");
    }
  };
  

// Get user by ID
export const getUserById = async (id) => {
  try {
    const doc = await db.collection("Users").doc(id).get();
    if (!doc.exists) throw new Error("User not found");
    return { id: doc.id, ...doc.data() };
  } catch (error) {
    console.error("❌ Error fetching user:", error);
    throw new Error("Failed to get user");
  }
};

// Get all users
export const getAllUsers = async () => {
  try {
    const snapshot = await db.collection("Users").get();
    if (snapshot.empty) return [];
    
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("❌ Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }
};

// Update user
export const updateUser = async (id, updateData) => {
  try {
    const userRef = db.collection("Users").doc(id);
    await userRef.update(updateData);
    return { id, ...updateData };
  } catch (error) {
    console.error("❌ Error updating user:", error);
    throw new Error("Failed to update user");
  }
};

// Delete user
// Delete a user by ID
export const deleteUser = async (userId) => {
  try {
    console.log("Deleting user with ID:", userId);

    const userRef = db.collection("Users").doc(userId);
    const docSnapshot = await userRef.get();

    if (!docSnapshot.exists) {
      throw new Error(`User with ID ${userId} does not exist.`);
    }

    await userRef.delete();
    console.log(`✅ User with ID ${userId} deleted successfully.`);
    
    return { success: true, message: "User deleted successfully." };
  } catch (error) {
    console.error("❌ Error deleting user:", error);
    throw new Error("Failed to delete user");
  }
};

