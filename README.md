## Employee Attendance 
Employee Attendance  is a web-based application designed to streamline employee attendance tracking with features like geolocation-based check-ins, real-time analytics, vacation and complaint management, and HR system integrations. It supports multiple user roles (Employee, Manager, Admin, Super Admin) and provides a modern, responsive UI with light/dark mode support.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Geolocation-Based Attendance**: Employees can check in/out with geolocation data.
- **Role-Based Access**: Supports Employee, Manager, Admin, and Super Admin roles with tailored permissions.
- **Real-Time Analytics**: Generate and export attendance reports (CSV/PDF).
- **Vacation Management**: Employees can request vacations; Admins can approve/reject.
- **Complaint System**: Submit and manage complaints with status tracking.
- **HR Integrations**: Mock support for BambooHR/SAP integrations.
- **Responsive Design**: Optimized for mobile and desktop with light/dark mode.
- **PWA Support**: Offline functionality via service workers (mock implementation).
- **Subscription Plans**: Basic ($50/month) and Premium ($200/month) plans.
- **Customizable Settings**: Geofence, timezone, and alert threshold configurations.

## Technologies Used
- **HTML5**: Structure of the web application.
- **Tailwind CSS**: Styling for a modern, responsive UI.
- **JavaScript**: Core functionality and interactivity.
- **GSAP**: Smooth animations for UI elements.
- **Chart.js**: Visualizing attendance data in reports.
- **LocalStorage**: Mock data persistence for users, logs, vacations, and complaints.
- **Service Worker**: Basic PWA support for offline capabilities.

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/attendance-pro.git
   cd attendance-pro
   ```

2. **Serve the Application**:
   - Use a local server (e.g., VS Code Live Server, or any HTTP server like `http-server`).
   - Example with `http-server`:
     ```bash
     npm install -g http-server
     http-server .
     ```
   - Open `http://localhost:8080` in your browser.

3. **Dependencies**:
   - No additional installation is required as all dependencies (Tailwind CSS, GSAP, Chart.js) are loaded via CDN.
   - Ensure an internet connection for CDN resources or host them locally for offline use.

## Usage
1. **Access the App**:
   - Open the application in a browser.
   - Default credentials for testing:
     - Email: `admin@test.com`
     - Password: `password123`
     - Role: Super Admin

2. **Key Features**:
   - **Home**: Overview of features and pricing.
   - **Login/Signup**: Create an account or log in with a role (Employee, Manager, Admin, Super Admin).
   - **Dashboard**: Check in/out, view personal logs, and quick stats.
   - **Reports**: Managers/Admins can view, filter, sort, and export attendance reports.
   - **Vacations**: Submit and manage vacation requests.
   - **Complaints**: Submit and resolve complaints.
   - **User Management**: Admins can add, edit, or delete users.
   - **Settings**: Update personal password and company settings (geofence, timezone).
   - **Integrations**: Mock HR system integration (BambooHR/SAP).
   - **Subscription**: Super Admins can upgrade plans (mock).

3. **Dark Mode**: Toggle between light and dark themes using the button at the bottom-right.
4. **PWA**: Install as a Progressive Web App for offline access (requires service worker setup).

## File Structure
```
attendance-pro/
├── index.html        # Main application file with HTML, CSS, and JavaScript
├── README.md         # Project documentation
└── sw.js             # Service worker for PWA (mock implementation)
```

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please ensure your code follows the existing style and includes appropriate comments.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
