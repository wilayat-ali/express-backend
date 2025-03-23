const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
];

export default function handler(req, res) {
  res.status(200).json(users);
}

