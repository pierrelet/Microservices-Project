# Microservices Project

Projet de gestion de tâches en architecture microservices avec Docker.

## 🔧 Tech Stack
- **Frontend** : React
- **Backends** : 
  - Node.js/Express pour les tâches
  - Spring Boot (Java) pour les utilisateurs
- **Database** : MongoDB
- **Conteneurisation** : Docker + Docker Compose

## ▶️ Lancer le projet
```bash
git clone https://github.com/pierrelet/Microservices-Project.git
cd Microservices-Project
docker compose up --build

📍 Accès
	•	Frontend : http://localhost:3000
	•	Users Service : http://localhost:8081
	•	Tasks Service : http://localhost:8082

🧪 Test API (Postman)
	•	GET /users
	•	POST /users
	•	GET /tasks
	•	POST /tasks
