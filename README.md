# Project Setup

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL (for the backend)

## Backend Setup

1. **Clone the repository:**

   ```sh
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables:**

   Copy the `.env.example` file to `.env` and update the environment variables as needed.

   ```sh
   cp .env.example .env
   ```

4. **Start the backend server:**

   ```sh
   npm run develop
   # or
   yarn develop
   ```

   This will start the Strapi backend server with auto-reload enabled.

## Frontend Setup

1. **Navigate to the frontend directory:**

   ```sh
   cd ../frontend
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the frontend development server:**

   ```sh
   npm run dev
   # or
   yarn dev
   ```

   This will start the Vite development server for the React frontend.

## Additional Information

- **Backend Configuration:**
  - The backend is configured using environment variables defined in the `.env` file.
  - Database configuration can be found in `backend/config/database.js`.
  - Middleware configuration can be found in `backend/config/middlewares.js`.

- **Frontend Configuration:**
  - The frontend is built using Vite and React.
  - Main entry point for the frontend is `frontend/src/main.jsx`.
  - Routing is handled using React Router in `frontend/src/App.jsx`.

## Learn More

- [Strapi Documentation](https://docs.strapi.io)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)