# 🎓 Rama Realm – A Virtual Reality Learning Tool for Children with ASD and ID

## 📌 Introduction
Children with **Autism Spectrum Disorder (ASD) and Intellectual Disabilities (ID)** often struggle in traditional educational settings due to sensory, cognitive, and social barriers. Standard teaching methods may not effectively engage them, leading to difficulties in understanding, retention, and skill development.

**Rama Realm** is an **AI-powered Virtual Reality (VR) learning platform** designed to offer immersive, interactive, and adaptive learning experiences. By simulating real-world scenarios, it provides a **safe and engaging environment** for children with ASD and ID to develop social, cognitive, and practical skills.

---

## 🎯 Mission Statement
To revolutionize special education by providing **immersive, VR learning experiences** that enhance engagement, skill development, and learning outcomes for children with **Autism Spectrum Disorder (ASD) and Intellectual Disabilities (ID).**

## 🌍 Vision Statement
To create an **inclusive, accessible, and adaptive learning ecosystem** that empowers children with ASD and ID through innovative VR technology, fostering **independence, confidence, and lifelong learning.**

---

## 🚀 Key Features
✅ **Immersive Learning Modules** – VR-based simulations that replicate real-world experiences.    
✅ **Engaging Social Scenarios** – Helps improve communication and social interaction skills.  
✅ **Cognitive Skill Development** – Interactive problem-solving tasks to enhance logical thinking.  
✅ **Safe & Controlled Environment** – Reduces sensory overload while providing real-life experiences.  
✅ **Multi-Platform Support** – Compatible with VR headsets and mobile/tablet-based VR applications.  

---

## 📊 SWOT Analysis

### 🟢 Strengths
- ✅ **Immersive & Interactive Learning** – VR enhances engagement and retention.  
- ✅ **Personalized Learning Paths** – AI adapts content for each child’s unique learning pace.  
- ✅ **Safe & Controlled Environment** – Allows children to practice real-world scenarios without stress.  
- ✅ **Scalability & Affordability** – Designed for use in schools, therapy centers, and homes.  

### 🔴 Weaknesses
- ⚠️ **Hardware Dependency** – Requires VR headsets, which may not be accessible in some regions.  
- ⚠️ **Initial Learning Curve** – Educators and parents may need training to use the platform effectively.  
- ⚠️ **Time-Intensive Content Development** – Creating diverse VR experiences requires continuous effort.  

### 🟡 Opportunities
- 📈 **Growing Special Education Market** – Demand for ASD and ID learning solutions is increasing.  
- 📈 **Advancements in VR & AI** – Continuous tech improvements can enhance adaptability.  
- 📈 **Collaborations with Schools & Therapy Centers** – Expanding reach through institutional partnerships.  

### ⚡ Threats
- ⚡ **High Competition** – Other EdTech companies may develop similar solutions.  
- ⚡ **Funding & Adoption Barriers** – Requires investments for expansion and acceptance in traditional education.  
- ⚡ **Technological Challenges** – Ensuring compatibility with different VR hardware.  

---

## 🛠️ Technical Overview

### 🔧 Technology Stack
- **Frontend**: React.js, Node.js, Unity, Tailwind
- **Backend**: Strapi (Headless CMS)
- **Database**: PostgreSQL 
- **AI Integration**: Co-Pilot   
- **VR Framework**: Unity XR Toolkit  
- **Deployment**: Vercel  

### 🏗 Architecture
1. **VR Learning Modules** – Simulate various real-world educational scenarios.  

---

## 💡 Use Cases
✅ **Special Education Schools** – Enhance learning experiences for students with ASD and ID.  
✅ **Therapy & Rehabilitation Centers** – Assist in behavioral and cognitive therapy.  
✅ **Home-Based Learning** – Enable parents to support their child’s education effectively.  
✅ **Research & Development** – Provide data-driven insights for improving ASD education methods.  

---

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
   npm install --legacy-peer-deps
   # or
   yarn install --legacy-peer-deps
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
