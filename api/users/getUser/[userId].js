import { getUserById } from "../../../services/userService.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const { userId } = req.query; // Extract userId from dynamic route

    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }

    const user = await getUserById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}
