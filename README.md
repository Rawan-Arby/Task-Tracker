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
  <br>
  `git clone https://github.com/your-username/Investigation-Game.git`<br>
  `cd Investigation-Game`

3. Install dependencies
   <br>
    `npm install`

3. Start the development server
<br>
  `ng serve --open`<br>
  App will run at: http://localhost:4200/

4. (Optional) Start mock backend
  <br>
  `npx json-server --watch db.json --port 5000`

6. Build for production<<br>
  `ng build --configuration production`

6. Run tests
  <br>
  Unit tests: `ng test`<br>
  End-to-end tests: `ng e2e`
