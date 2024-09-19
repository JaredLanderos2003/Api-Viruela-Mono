// src/routes/caseRoutes.ts
import express from 'express';
import {
  createCase,
  getAllCases,
  getCasesLastWeek,
  updateCase,
  deleteCase
} from '../controllers/caseController';

const router = express.Router();

router.post('/', createCase);
router.get('/', getAllCases);
router.get('/last-week', getCasesLastWeek);
router.put('/:id', updateCase);
router.delete('/:id', deleteCase);

export default router;
