import { Request, Response } from 'express';
import Case from '../models/CaseModel';
import { sendEmail } from '../services/emailService'; // Importar el servicio de correo

// Crear un nuevo caso
export const createCase = async (req: Request, res: Response) => {
  try {
    const newCase = new Case(req.body);
    await newCase.save();
    
   

    res.status(201).json(newCase);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

// Obtener todos los casos
export const getAllCases = async (req: Request, res: Response) => {
  try {
    const cases = await Case.find();
    res.json(cases);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

// Obtener casos de la última semana
export const getCasesLastWeek = async (req: Request, res: Response) => {
  try {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const cases = await Case.find({ creationDate: { $gte: oneWeekAgo } });
    res.json(cases);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

// Actualizar un caso
export const updateCase = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedCase = await Case.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedCase);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

// Eliminar un caso
export const deleteCase = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Case.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};
