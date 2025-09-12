# 📝 Angular Crash - Task Tracker

This project is a **Task Tracker Application** built with **Angular**.  
It allows users to add, display, and manage tasks dynamically, using **HTTP requests** to fetch and update data from a mock backend (`db.json`).

## 🚀 Features
- View all tasks (fetched from `db.json` via HTTP).
- Add new tasks dynamically.
- Delete tasks.
- Toggle task reminder (double click).
- About page with app details.
- Reusable button and UI components.
- Uses **Angular Services** to handle HTTP requests and business logic.


## ⚡ Technologies Used
- Angular 20.2.1
- TypeScript
- JSON Server (for mock backend)
- RxJS & Observables (for async HTTP calls)
- Angular CLI


## 👨‍💻 Author
Developed by **Rawan Arby**

## 🎥 Demo
Check out the video demonstration of the project here:  
[![Watch the video](https://img.youtube.com/vi/Q-DE1O5BN4U/0.jpg)](https://youtu.be/Q-DE1O5BN4U)

## How to Run the Project

1. Clone the repository
```bash
git clone https://github.com/your-username/Investigation-Game.git
cd Investigation-Game

2. Install dependencies
 ```bash
npm install

3. Start the development server
 ```bash
ng serve --open
App will run at: http://localhost:4200/

4. (Optional) Start mock backend
 ```bash
npx json-server --watch db.json --port 5000

5. Build for production
 ```bash
ng build --configuration production

6. Run tests
Unit tests: `ng test`
End-to-end tests: `ng e2e`



