import { updateUser } from "../../../services/userService.js";

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const { userId } = req.query; // Get userId from URL
    const updateData = req.body;  // Get update data from request body

    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }

    if (!updateData || Object.keys(updateData).length === 0) {
      return res.status(400).json({ success: false, message: "Update data is required" });
    }

    const updatedUser = await updateUser(userId, updateData);

    return res.status(200).json({ success: true, message: "User updated successfully", data: updatedUser });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}
