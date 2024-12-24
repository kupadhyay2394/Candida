# Candidate List Web Application

This is a web application that allows users to view a list of candidates, filter them by name or skills, and see their experience details. The project is built with a React frontend and a Node.js backend API. It uses a mock list of candidates for demonstration purposes.

## Live Demo

- **Frontend**: [Access the frontend](https://candidatelist.netlify.app/)
- **Backend API**: [Access the backend API](https://candidatelistnode.onrender.com/api/candidates)

---

## Features

- **Frontend**:
  - Displays a list of candidates with their name, skills, and years of experience.
  - Allows users to filter candidates by name or skills through a search bar.
  - Fully responsive and mobile-friendly design.

- **Backend**:
  - A RESTful API that returns a static list of candidates.
  - Provides a simple endpoint (`/api/candidates`) to fetch the list of candidates.

---

## Technologies Used

- **Frontend**: 
  - React.js
  - Vite (for fast builds and hot-reloading)
  - CSS for styling
- **Backend**: 
  - Node.js
  - Express.js
  - CORS (Cross-Origin Resource Sharing)

---

## Installation

### Frontend

1. Clone the frontend repository:
   ```bash
   git clone https://github.com/your-username/candidate-list-frontend.git
   cd candidate-list-frontend
2. Install dependencies:
   ```bash
   npm init

4. Start the development server:
   ```bash
   npm run dev

   
Open your browser and go to  [open browser](http://localhost:3000) to see the app in action.

## Backend
1. Clone the backend repository:
   ```bash
   git clone https://github.com/your-username/candidate-list-backend.git
   cd candidate-list-backend
   
2. Install dependencies:
   ```bash
   npm install
   
3. Start the backend server:
   ```bash
   nmp run dev

The backend API will be available at http://localhost:10000/api/candidates.

## API Endpoints

GET /api/candidates: Returns a list of candidates in JSON format.

Example response:
   ```json
   [
     {
    "id": 1,
    "name": "John Doe",
    "skills": "React, Node.js",
    "experience": 5
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "skills": "Python, Django",
    "experience": 3
  },
]
```

## Deployment
Frontend: Deployed on Netlify.

Backend: Deployed on Render.

## Contributing

Feel free to fork the repository, open issues, and submit pull requests. Contributions are always welcome!

## Authors
Your Name - kupadhyay2394
