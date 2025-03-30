import { getUserById } from "../../services/userService.js";

const getUserByIdHandler = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const { userId } = req.query; // Assuming ID is passed as a query parameter

    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }

    const user = await getUserById(userId);

    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    return res.status(404).json({ success: false, message: error.message });
  }
};

export default getUserByIdHandler;
