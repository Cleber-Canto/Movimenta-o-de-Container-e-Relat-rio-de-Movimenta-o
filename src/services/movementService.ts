import { Prisma, PrismaClient, Movimentacao } from '@prisma/client';

const prisma = new PrismaClient();

export const createMovement = async (data: Prisma.MovimentacaoCreateInput): Promise<Movimentacao> => {
    return prisma.movimentacao.create({ data });
};

export const getMovements = async (): Promise<Movimentacao[]> => {
    return prisma.movimentacao.findMany();
};

export const getMovementById = async (id: string): Promise<Movimentacao | null> => {
    return prisma.movimentacao.findUnique({ where: { id } });
};

export const updateMovementById = async (id: string, data: Prisma.MovimentacaoUpdateInput): Promise<Movimentacao | null> => {
    return prisma.movimentacao.update({
        where: { id },
        data,
    });
};

export const deleteMovementById = async (id: string): Promise<Movimentacao | null> => {
    return prisma.movimentacao.delete({ where: { id } });
};
