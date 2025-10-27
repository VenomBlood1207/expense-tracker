# 💰 Expense Tracker App

A full-stack expense tracking application built with modern web technologies. This application helps users manage their monthly income, track expenses by category, and visualize their financial health through an intuitive dashboard.

## 🚀 Features

### Core Functionality
- **🎯 Monthly Income Management**: Set and update your monthly income
- **📊 Expense Tracking**: Add expenses with amount, description, and category
- **🏷️ Custom Categories**: Create and manage custom expense categories
- **📈 Real-time Dashboard**: View total income, expenses, and remaining balance
- **🥧 Category Breakdown**: Visual representation of spending by category
- **💾 Data Persistence**: All data stored in PostgreSQL database
- **📱 Responsive Design**: Works on desktop, tablet, and mobile devices

### Technical Features
- **🐋 Fully Dockerized**: Backend, frontend, and database in separate containers
- **🔗 RESTful API**: Clean and well-documented API endpoints
- **🛡️ CORS Support**: Secure cross-origin resource sharing
- **🎨 Modern UI**: Built with React and Tailwind CSS
- **⚙️ Environment Configuration**: Secure environment variable management

## 🛠 Technology Stack

- **Frontend**: React 18 + Tailwind CSS
- **Backend**: FastAPI (Python 3.12) + SQLAlchemy
- **Database**: PostgreSQL 15
- **Containerization**: Docker + Docker Compose
- **API Documentation**: Swagger UI / OpenAPI


## 🐳 Quick Start

### Prerequisites
- Docker and Docker Compose installed
- Git (optional, for cloning)

### Installation

1. **Clone the repository** (or create the files as per structure):
```bash
git clone git@github.com:VenomBlood1207/expense-tracker.git
cd expense-tracker
```

2. **Create a `.env` file** with the following variables:
```bash
POSTGRES_USER=expense_user
POSTGRES_PASSWORD=expense_pass
POSTGRES_DB=expense_db
DATABASE_URL=postgresql://expense_user:expense_pass@db:5432/expense_db
```


## 🐳 Build and start containers

```bash
sudo docker compose up --build 	#For the first time
sudo docker compose up 			#For subsequent runs
```


🌐 Access
Frontend: http://localhost:5050
API Docs: http://localhost:8000/docs

✅ Features
Set monthly income
Add expenses with categories
View summary with charts
Persistent data with PostgreSQL


## ✅ Final Notes

This is a **fully working, containerized expense tracker**. You can extend it with:

- User login (JWT or session)
- Edit/delete expenses
- CSV/PDF export
- Responsive UI with TailwindCSS

Let me know if you'd like the **TailwindCSS** version or **CSV export** added!
