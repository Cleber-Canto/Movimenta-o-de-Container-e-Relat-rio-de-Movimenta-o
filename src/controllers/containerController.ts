import { Request, Response } from 'express';
import * as containerService from '../services/containerService';
import { validateContainer } from '../utils/validators';

export const create = async (req: Request, res: Response) => {
  const data = req.body;

  console.log('Received request to create container:', data);

  if (!data.numero || !data.tipo || !data.status) {
    console.error('Validation error: All fields are required');
    return res.status(400).json({ error: 'All fields are required' });
  }

  const validationError = validateContainer(data);
  if (validationError) {
    console.error('Validation error:', validationError);
    return res.status(400).json({ error: validationError });
  }

  try {
    const existingContainer = await containerService.getContainerByNumero(data.numero);
    if (existingContainer !== null) {
      console.error('Container with this number already exists:', data.numero);
      return res.status(400).json({ error: 'Número de contêiner já está em uso' });
    }

    const container = await containerService.createContainer(data);
    console.log('Container created successfully:', container);

    res.status(201).json(container);
  } catch (error) {
    console.error('Error creating container:', error);
    res.status(400).json({ error: error.message });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const containers = await containerService.getContainers();
    res.status(200).json(containers);
  } catch (error) {
    console.error('Error getting all containers:', error);
    res.status(500).json({ error: error.message });
  }
};

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const container = await containerService.getContainerById(id);
    if (!container) {
      console.error('Container not found:', id);
      return res.status(404).json({ error: 'Container not found' });
    }
    res.status(200).json(container);
  } catch (error) {
    console.error('Error getting container by ID:', error);
    res.status(500).json({ error: error.message });
  }
};

export const updateById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const container = await containerService.updateContainerById(id, data);
    if (!container) {
      console.error('Container not found:', id);
      return res.status(404).json({ error: 'Container not found' });
    }
    res.status(200).json(container);
  } catch (error) {
    console.error('Error updating container by ID:', error);
    res.status(500).json({ error: error.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const container = await containerService.deleteContainerById(id);
    if (!container) {
      console.error('Container not found:', id);
      return res.status(404).json({ error: 'Container not found' });
    }
    res.status(200).json({ message: 'Container deleted successfully' });
  } catch (error) {
    console.error('Error deleting container by ID:', error);
    res.status(500).json({ error: error.message });
  }
};

export const getByNumero = async (req: Request, res: Response) => {
    const { numero } = req.query;
    try {
      const container = await containerService.getContainerByNumero(numero as string);
      if (!container) {
        console.error('Container not found for number:', numero);
        return res.status(404).json({ error: 'Container not found' });
      }
      res.status(200).json(container);
    } catch (error) {
      console.error('Error getting container by number:', error);
      res.status(500).json({ error: error.message });
    }
  };
  
