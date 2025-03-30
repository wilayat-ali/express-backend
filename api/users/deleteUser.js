import { deleteUser } from "../../services/userService.js";

const deleteUserHandler = async (req, res) => {
  if (req.method !== "DELETE") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const { userId } = req.query; // Extract userId from query params

    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }

    await deleteUser(userId);

    return res.status(200).json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default deleteUserHandler;
