import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const generateReport = async () => {
  try {
    const movements = await prisma.movimentacao.findMany();

    const groupedMovements: { [key: string]: { [key: string]: number } } = {};
    let totalImport = 0;
    let totalExport = 0;

    movements.forEach(movement => {
      const key = `${movement.cliente}-${movement.tipo}`;
      if (!groupedMovements.hasOwnProperty(key)) {
        groupedMovements[key] = {};
      }
      if (!groupedMovements[key][movement.tipo]) {
        groupedMovements[key][movement.tipo] = 0;
      }
      groupedMovements[key][movement.tipo]++;
    });

    const reports = [];
    for (const key in groupedMovements) {
      if (groupedMovements.hasOwnProperty(key)) {
        const [cliente, tipo] = key.split('-');
        const total = Object.values(groupedMovements[key]).reduce((acc, val) => acc + val, 0);
        reports.push({ cliente, tipo, total });
        if (tipo === 'importação') {
          totalImport += total;
        } else if (tipo === 'exportação') {
          totalExport += total;
        }
      }
    }

    const summary = { totalImport, totalExport };

    return { reports, summary };
  } catch (error) {
    console.error('Error generating movement report:', error);
    throw new Error('Failed to generate movement report');
  }
};