from pydantic import BaseModel
from typing import Optional

class IncomeCreate(BaseModel):
    amount: float

class IncomeOut(IncomeCreate):
    id: int

class CategoryCreate(BaseModel):
    name: str

class CategoryOut(CategoryCreate):
    id: int

class ExpenseCreate(BaseModel):
    amount: float
    description: str
    category_id: int

class ExpenseOut(ExpenseCreate):
    id: int

class SummaryOut(BaseModel):
    total_income: float
    total_expenses: float
    remaining: float
    category_breakdown: dict
