```markdown
# Backend Development Practice & Learnings

This repository contains backend development practice code, exercises, and core concepts implemented while learning Node.js, Express.js, and MongoDB.

## 📌 Tech Stack

* **Runtime Environment:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB
* **ODM:** Mongoose
* **Templating Engine:** EJS (Embedded JavaScript)
* **Authentication:** JSON Web Tokens (JWT), Bcrypt
* **File Handling:** Multer

---

## 🚀 Core Topics Covered

### 1. JavaScript Essentials for Backend
* Core JavaScript concepts required for backend development
* Asynchronous JavaScript (Promises, `async/await`)
* Array methods and data manipulation techniques

### 2. Node.js & File System Operations
* Understanding Node.js runtime and built-in modules
* File System (`fs`) operations (`readFile`, `writeFile`, `appendFile`, `unlink`)

### 3. Package Management & NPM
* Working with `package.json` and managing dependencies
* Installing, updating, and using NPM modules

### 4. Express.js Fundamentals
* Setting up an Express server
* Express routing and HTTP request methods (`GET`, `POST`, `PUT`, `DELETE`)
* Middleware architecture and custom middleware functions

### 5. Request & Response Processing
* Parsing request bodies (`express.json()`, `express.urlencoded()`)
* Working with HTTP cookies and session handling

### 6. Dynamic Routing & Server-Side Rendering (SSR)
* Setting up EJS as the template engine
* Rendering dynamic views with data from the controller
* Dynamic routing and URL parameter extraction (`req.params`)

### 7. Database Management (MongoDB & Mongoose)
* Fundamentals of NoSQL databases and MongoDB
* Creating schemas and models with Mongoose
* Complete CRUD operations:
  * **Create:** Inserting documents
  * **Read:** Querying documents with filters
  * **Update:** Modifying documents (`findOneAndUpdate`, `findByIdAndUpdate`)
  * **Delete:** Removing documents (`findOneAndDelete`, `findByIdAndDelete`)

### 8. Authentication & Authorization
* Password hashing and salting using **Bcrypt**
* Stateless authentication using **JSON Web Tokens (JWT)**
* Cookie-based session management for restricted routes

### 9. Data Modeling & Relationships
* Data association using MongoDB references (`ObjectId` and `ref`)
* Populating relational data across collections with `.populate()`

### 10. File Handling
* Handling `multipart/form-data` uploads using **Multer**
* Storing and managing uploaded media files locally

---

## 🛠️ Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) installed
* [MongoDB](https://www.mongodb.com/) running locally or a MongoDB Atlas URI

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
   cd your-repo-name

```

2. **Install dependencies:**
```bash
npm install

```


3. **Set up Environment Variables:**
Create a `.env` file in the root directory:
env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/your_db_name
JWT_SECRET=your_jwt_secret_key


4. **Start the server:**

npx nodemon index.js

