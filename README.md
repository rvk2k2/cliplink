# 📎 ClipLink

A minimal URL shortener web application with JWT-based user authentication. Upload a long URL, get a shortened version, track usage count, and manage your links—all personalized per authenticated user.

---

## ✨ Features

* 🔐 JWT Authentication (via headers and tokens)
* 🔗 URL shortening with database persistence
* 📊 Track click count per URL
* 👤 User-specific link display after login
* 📄 Clean and modular folder structure (MVC pattern)

---

## 🛠 Technologies Used

* Node.js
* Express.js
* MongoDB
* EJS (Embedded JavaScript Templates)
* JSON Web Tokens (JWT)
* Mongoose (MongoDB ODM)

---

## 🚀 Installation and Setup

```bash
# Clone the repo
$ git clone https://github.com/yourusername/cliplink.git
$ cd cliplink

# Install dependencies
$ npm install

# Create a .env file with the following
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

# Run the server
$ node index.js
```

---

## 📁 Project Structure

```
cliplink/
├── controllers/
│   ├── url.js
│   └── user.js
├── middleware/
│   └── auth.js
├── models/
│   ├── url.js
│   └── user.js
├── routes/
│   ├── staticRouter.js
│   ├── url.js
│   └── user.js
├── service/
│   └── auth.js
├── views/
│   ├── home.ejs
│   ├── login.ejs
│   └── signup.ejs
├── .gitignore
├── connect.js
├── connnect.js (Possible duplicate typo file)
├── index.js
├── package.json
└── package-lock.json
```

---

## 📈 Contributing

Feel free to fork the project and submit a pull request if you have any improvements!

---


