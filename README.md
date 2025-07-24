# 📚 Book Tracker App (Dockerized)

<img width="1748" height="681" alt="image" src="https://github.com/user-attachments/assets/b25d2201-9826-4acd-a0c3-c0aa62686265" />


A simple full-stack Book Manager web application built with:

- ✅ Node.js + Express (backend REST API)
- ✅ MongoDB (database)
- ✅ HTML + Bootstrap + JavaScript (frontend)
- 🐳 Docker & Docker Compose for containerization 
      
---

## 🚀 Getting Started

### ✅ 1. Clone the Repository

```bash
git clone https://github.com/your-username/book-tracker-app.git
cd book-tracker-app
```
---

### ⚙️ 2. Build and Start All Services

Make sure Docker is installed and running on your system.

To build the containers and start the app:

```bash
docker-compose up --build
```
This will:

🔧 Build your Node.js backend container

🌐 Build the frontend static site container

🧱 Start a MongoDB container

🔗 Connect all three services together via Docker Compose

---

### 🌐 3. Access the App

Once all services are running, open your browser and go to:

```bash
http://localhost:3000
```

You’ll see the frontend interface where you can:

Add new books

View the list of added books

Backend API is available at:

```bash
http://localhost:5000/books
```
