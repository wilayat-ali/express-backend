import { createUser } from "../../services/userService.js";

const createUserHandler = async (req, res) => {
    console.log("req--->",req)
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const user = await createUser(req.body);
    return res.status(201).json({ success: true, data: user });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export default createUserHandler;
