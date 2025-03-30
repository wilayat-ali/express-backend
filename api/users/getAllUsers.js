import { getAllUsers } from "../../services/userService.js";

const getUsers = async (req, res) => {
  try {
    const userData = await getAllUsers();
    return res.status(200).json({ success: true, data: userData });
  } catch (error) {
    console.error("❌ Error fetching users:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getUsers;
