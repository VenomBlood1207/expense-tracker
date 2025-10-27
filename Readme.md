# Expense Tracker App

A full-stack expense tracker built with FastAPI, React, and PostgreSQL using Docker.

## 🛠 Setup

1. Clone the repo
2. Create `.env` file with:
	POSTGRES_USER=expense_user
	POSTGRES_PASSWORD=expense_pass
	POSTGRES_DB=expense_db
	DATABASE_URL=postgresql://expense_user:expense_pass@db:5432/expense_db


## 🐳 Run the App

```bash
docker-compose build
docker-compose up


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
