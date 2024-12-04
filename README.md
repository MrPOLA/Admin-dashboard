# Admin Dashboard with RBAC

A modern, responsive admin dashboard built with React, TypeScript, and Tailwind CSS, featuring Role-Based Access Control (RBAC).

## Features

- 🔐 Secure Authentication System
  - JWT-based authentication
  - Protected routes
  - Role-based access control
  - Session management

- 👥 User Management
  - User creation and editing
  - Role assignment
  - Activity logging
  - User statistics

- 🛡️ Role Management
  - Hierarchical roles (Super Admin, Admin, User)
  - Custom permission settings
  - Role-based route protection

- 📊 Dashboard Analytics
  - User growth metrics
  - Activity monitoring
  - System health statistics
  - Interactive charts

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Routing**: React Router v6
- **State Management**: Zustand
- **Form Handling**: React Hook Form with Zod validation
- **Data Visualization**: Recharts
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Development**: Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Default Login Credentials

- Email: admin@example.com
- Password: password123

## Project Structure

```
src/
├── api/           # API integration
├── components/    # Reusable components
│   ├── Auth/     # Authentication components
│   ├── Dashboard/# Dashboard-specific components
│   └── Layout/   # Layout components
├── pages/        # Page components
├── store/        # State management
├── types/        # TypeScript types
└── utils/        # Utility functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Security Features

- JWT token-based authentication
- Protected routes with role-based access
- Form validation with Zod
- Secure session management
- Input sanitization

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Recharts](https://recharts.org/)
- [Lucide Icons](https://lucide.dev/)