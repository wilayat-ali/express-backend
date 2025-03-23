// Sample in-memory database (Replace with real database later)
let users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
  ];
  
  export default function handler(req, res) {
    const { method, query, body } = req;
    const userId = query.id ? parseInt(query.id) : null;
  
    switch (method) {
      case "GET":
        if (userId) {
          // Get single user
          const user = users.find((u) => u.id === userId);
          return user
            ? res.status(200).json(user)
            : res.status(404).json({ error: "User not found" });
        }
        // Get all users
        return res.status(200).json(users);
  
      case "POST":
        // Create a new user
        const newUser = {
          id: users.length + 1,
          name: body.name,
          email: body.email,
        };
        users.push(newUser);
        return res.status(201).json({ message: "User created", data: newUser });
  
      case "PUT":
        // Update user
        if (!userId) return res.status(400).json({ error: "User ID is required" });
        const index = users.findIndex((u) => u.id === userId);
        if (index === -1) return res.status(404).json({ error: "User not found" });
  
        users[index] = { ...users[index], ...body };
        return res.status(200).json({ message: "User updated", data: users[index] });
  
      case "DELETE":
        // Delete user
        if (!userId) return res.status(400).json({ error: "User ID is required" });
        users = users.filter((u) => u.id !== userId);
        return res.status(200).json({ message: "User deleted" });
  
      default:
        return res.status(405).json({ error: "Method Not Allowed" });
    }
  }
  