Candidate Management System
A web-based application that allows users to manage and filter a list of candidates for various positions. The application consists of a backend API that serves candidate data and a frontend interface for displaying and filtering the candidates based on name, skills, and experience.

Key Features
Frontend Interface: A user-friendly React application for displaying candidate details.
Search and Filter: Users can search and filter candidates by name or skills.
Backend API: The backend exposes an API for fetching candidate data in JSON format.
Responsive UI: The UI adapts to various screen sizes, making it suitable for both desktop and mobile devices.
Live Demo
Frontend: https://candidatelist.netlify.app/
Backend API: https://candidatelistnode.onrender.com/api/candidates
Project Structure
This project is split into two repositories:

Frontend - React-based UI
Backend - Node.js/Express API
Frontend Repository
The frontend is a React application that fetches data from the backend API and displays the list of candidates with the option to filter by name or skills.

Frontend Repository: Frontend GitHub Repository
Setup Instructions
Clone the frontend repository:
git clone https://github.com/your-username/candidate-list-frontend.git
cd candidate-list-frontend

Install the required dependencies:
npm install

Start the React development server:
npm run dev


Visit the app in your browser at http://localhost:3000.
Backend Repository
The backend is a Node.js/Express server that serves a hardcoded list of candidates. It exposes a simple API endpoint to fetch the list of candidates.

Backend Repository: Backend GitHub Repository
Setup Instructions
Clone the backend repository:

bash
Copy code
git clone https://github.com/your-username/candidate-list-backend.git
cd candidate-list-backend
Install the required dependencies:

bash
Copy code
npm install
Start the backend server:

bash
Copy code
npm run dev
The backend will be available at http://localhost:10000/api/candidates.

API Endpoint
The backend exposes the following endpoint:

GET /api/candidates: Returns a list of candidates.
Example Response:
json
Copy code
[
  {
    "id": 1,
    "name": "John Doe",
    "skills": "React, Node.js",
    "experience": 5
  },
  ...
]
Technologies Used
Frontend: React.js, Vite
Backend: Node.js, Express.js, CORS
Deployment:
Frontend: Netlify
Backend: Render
Development Setup
Frontend
Navigate to the frontend directory.
Run the following to install dependencies:

npm install


Start the development server:
npm run dev

Backend
Navigate to the backend directory.
Run the following to install dependencies:
npm install

Start the backend server:
npm run dev
Contributing
Feel free to fork the repository, open issues, and submit pull requests. Contributions are welcome!

Authors
Your Name - kupadhyay2394

