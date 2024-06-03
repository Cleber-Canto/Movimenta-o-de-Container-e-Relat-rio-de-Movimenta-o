import { PrismaClient, Prisma, Container } from '@prisma/client';

const prisma = new PrismaClient();

export const createContainer = async (data: Prisma.ContainerCreateInput): Promise<Container> => {
    return prisma.container.create({ data });
};   

export const getContainers = async (): Promise<Container[]> => {
  return prisma.container.findMany();
};

export const getContainerById = async (id: string): Promise<Container | null> => {
  return prisma.container.findUnique({ where: { id } });
};

export const updateContainerById = async (id: string, data: Prisma.ContainerUpdateInput): Promise<Container | null> => {
  return prisma.container.update({
    where: { id },
    data,
  });
};

export const deleteContainerById = async (id: string): Promise<Container | null> => {
  return prisma.container.delete({ where: { id } });
};

export const getContainerByNumero = async (numero: string): Promise<Container | null> => {
    return prisma.container.findFirst({ where: { numero } });
};
