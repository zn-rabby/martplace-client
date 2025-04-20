
# 🛍️ MartPlace - Job Marketplace Platform

![MartPlace Hero Banner](https://i.ibb.co/.../martplace-hero.jpg)  
*[Add actual screenshot of your application]*

## 🌐 Live Demo
➡️ [https://martplace-d6c8a.web.app/](https://martplace-d6c8a.web.app/)

## ✨ Key Features
### 🔐 User Authentication
- Secure Firebase authentication (Email/Password)
- Role-based access control
- Protected routes

### 💼 Job Management
- **For Employers**:
  - Create and manage job postings
  - Review applications
  - Approve/reject candidates
- **For Job Seekers**:
  - Browse available jobs
  - One-click application
  - Track application status

### 📊 Dashboard
- Personalized user dashboard
- Application tracking system
- Responsive data tables

## 🛠️ Technology Stack
| Category | Technologies |
|----------|--------------|
| Core | React 18, React Router 6 |
| Styling | Tailwind CSS, DaisyUI |
| State Management | React Context API |
| UI Components | HeadlessUI, React Icons |
| Notifications | React Hot Toast |
| Data Tables | React Data Table Component |
| Authentication | Firebase Auth |
| API Client | Axios |

## 🚀 Installation Guide
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/martplace-client.git
   cd martplace-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase configuration**
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_bucket.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the development server**
   ```bash
   npm start
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📸 Application Screenshots
| ![Homepage](https://i.ibb.co/.../home.jpg) | ![Dashboard](https://i.ibb.co/.../dashboard.jpg) |
|--------------------------------------------|-------------------------------------------------|
| **Homepage** - Browse featured jobs        | **Dashboard** - Manage your applications        |

| ![Mobile View](https://i.ibb.co/.../mobile.jpg) |
|-------------------------------------------------|
| **Mobile Responsive** - Optimized for all devices |

## 🤝 Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

