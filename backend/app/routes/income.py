from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import models, schemas
from ..database import get_db

router = APIRouter(prefix="/income", tags=["Income"])

@router.post("/", response_model=schemas.IncomeOut)
def create_income(income: schemas.IncomeCreate, db: Session = Depends(get_db)):
    db_income = models.Income(amount=income.amount)
    db.add(db_income)
    db.commit()
    db.refresh(db_income)
    return db_income

@router.get("/", response_model=schemas.IncomeOut)
def get_income(db: Session = Depends(get_db)):
    income = db.query(models.Income).order_by(models.Income.id.desc()).first()
    if not income:
        raise HTTPException(status_code=404, detail="No income set")
    return income
