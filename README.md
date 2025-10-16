# ✅ To-Do List Application

> 📝 A full-stack task management application built with Node.js, Express, and MongoDB


## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [API Endpoints](#-api-endpoints)
- [Environment Variables](#-environment-variables)
- [Project Structure](#-project-structure)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- ➕ Create new tasks
- 📖 View all tasks
- 🔍 Get individual task details
- ✏️ Update existing tasks
- 🗑️ Delete tasks
- 💾 Persistent data storage with MongoDB
- 🚀 RESTful API architecture
- ⚡ Fast and lightweight

## 🛠️ Tech Stack

**Backend:**
- 🟢 Node.js - JavaScript runtime
- ⚡ Express.js - Web framework
- 🍃 MongoDB - NoSQL database
- 📦 Mongoose - MongoDB object modeling

## 📥 Installation

### Prerequisites
- 📌 Node.js (v14 or higher)
- 🍃 MongoDB installed locally or MongoDB Atlas account

### Steps

1️⃣ **Clone the repository**
```bash
git clone https://github.com/KhuzaimaKhalid/To-Do-List.git
cd To-Do-List
```

2️⃣ **Install dependencies**
```bash
npm install
```

3️⃣ **Set up environment variables**

Create a `.env` file in the root directory:
```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

4️⃣ **Start the server**
```bash
npm start
```

or for development with nodemon:
```bash
npm run dev
```

5️⃣ **Server running!** 🎉
```
Server is listening on port 3000...
```

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| 🟢 GET | `/api/v1/tasks` | Get all tasks |
| 🟢 GET | `/api/v1/tasks/:id` | Get a single task |
| 🟡 POST | `/api/v1/tasks` | Create a new task |
| 🟠 PATCH | `/api/v1/tasks/:id` | Update a task |
| 🔴 DELETE | `/api/v1/tasks/:id` | Delete a task |

### 📤 Example Requests

**Create a Task:**
```json
POST /api/v1/tasks
Content-Type: application/json

{
  "name": "Complete project documentation",
  "completed": false
}
```

**Update a Task:**
```json
PATCH /api/v1/tasks/507f1f77bcf86cd799439011
Content-Type: application/json

{
  "name": "Complete project documentation",
  "completed": true
}
```

## 🔐 Environment Variables

Create a `.env` file with the following variables:

```env
# Database
MONGO_URI=mongodb://localhost:27017/todo-list
# or MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/dbname

# Server
PORT=3000
```

## 📁 Project Structure

```
To-Do-List/
├── 📂 controllers/
│   └── tasks.js          # Task controller logic
├── 📂 models/
│   └── Task.js           # Task schema
├── 📂 routes/
│   └── tasks.js          # Task routes
├── 📂 public/
│   └── index.html        # Frontend (if applicable)
├── 📄 app.js             # Express app setup
├── 📄 server.js          # Server entry point
├── 📄 .env               # Environment variables
├── 📄 package.json       # Dependencies
└── 📄 README.md          # Documentation
```

## 💡 Usage

### 🧪 Testing with Postman

1. **Get all tasks:** `GET http://localhost:3000/api/v1/tasks`
2. **Create task:** `POST http://localhost:3000/api/v1/tasks`
   - Body: `{ "name": "New Task" }`
3. **Get single task:** `GET http://localhost:3000/api/v1/tasks/:id`
4. **Update task:** `PATCH http://localhost:3000/api/v1/tasks/:id`
   - Body: `{ "completed": true }`
5. **Delete task:** `DELETE http://localhost:3000/api/v1/tasks/:id`

### 🎨 Frontend Integration

Connect your frontend application to these API endpoints to build a complete to-do list interface.

## 🤝 Contributing

Contributions are welcome! 🎉

1. 🍴 Fork the repository
2. 🌿 Create a new branch (`git checkout -b feature/amazing-feature`)
3. 💾 Commit your changes (`git commit -m 'Add some amazing feature'`)
4. 📤 Push to the branch (`git push origin feature/amazing-feature`)
5. 🔃 Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Khuzaima Khalid**

- 🐙 GitHub: [@KhuzaimaKhalid](https://github.com/KhuzaimaKhalid)

⭐ **If you found this project helpful, please give it a star!** ⭐

📧 **Questions?** Feel free to reach out or open an issue!
