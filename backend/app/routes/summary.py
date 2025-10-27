from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .. import models
from ..database import get_db
from ..schemas import SummaryOut

router = APIRouter(prefix="/summary", tags=["Summary"])

@router.get("/", response_model=SummaryOut)
def get_summary(db: Session = Depends(get_db)):
    income = db.query(models.Income).order_by(models.Income.id.desc()).first()
    total_income = income.amount if income else 0.0

    expenses = db.query(models.Expense).all()
    total_expenses = sum(e.amount for e in expenses)
    remaining = total_income - total_expenses

    category_breakdown = {}
    for e in expenses:
        cat = db.query(models.Category).filter(models.Category.id == e.category_id).first()
        if cat:
            category_breakdown[cat.name] = category_breakdown.get(cat.name, 0) + e.amount

    return SummaryOut(
        total_income=total_income,
        total_expenses=total_expenses,
        remaining=remaining,
        category_breakdown=category_breakdown
    )
