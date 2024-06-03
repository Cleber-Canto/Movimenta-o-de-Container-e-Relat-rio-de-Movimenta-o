import { Request, Response } from 'express';
import * as movementService from '../services/movementService';

export const createMovement = async (req: Request, res: Response) => {
    const data = req.body;

    try {
        const movement = await movementService.createMovement(data);
        res.status(201).json(movement);
    } catch (error) {
        console.error('Error creating movement:', error);
        res.status(400).json({ error: error.message });
    }
};

export const getAllMovements = async (req: Request, res: Response) => {
    try {
        const movements = await movementService.getMovements();
        res.status(200).json(movements);
    } catch (error) {
        console.error('Error getting all movements:', error);
        res.status(500).json({ error: error.message });
    }
};

export const getMovementById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const movement = await movementService.getMovementById(id);
        if (!movement) {
            console.error('Movement not found:', id);
            return res.status(404).json({ error: 'Movement not found' });
        }
        res.status(200).json(movement);
    } catch (error) {
        console.error('Error getting movement by ID:', error);
        res.status(500).json({ error: error.message });
    }
};

export const updateMovementById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;

    try {
        const movement = await movementService.updateMovementById(id, data);
        if (!movement) {
            console.error('Movement not found:', id);
            return res.status(404).json({ error: 'Movement not found' });
        }
        res.status(200).json(movement);
    } catch (error) {
        console.error('Error updating movement by ID:', error);
        res.status(500).json({ error: error.message });
    }
};

export const deleteMovementById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const movement = await movementService.deleteMovementById(id);
        if (!movement) {
            console.error('Movement not found:', id);
            return res.status(404).json({ error: 'Movement not found' });
        }
        res.status(200).json({ message: 'Movement deleted successfully' });
    } catch (error) {
        console.error('Error deleting movement by ID:', error);
        res.status(500).json({ error: error.message });
    }
};
