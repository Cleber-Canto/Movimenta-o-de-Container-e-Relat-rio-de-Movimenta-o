export const validateContainer = (data: any) => {

    if (!data.cliente) return 'Cliente é obrigatório';
    if (!data.numero) return 'Número é obrigatório';
    if (!data.tipo) return 'Tipo é obrigatório';
    if (!data.status) return 'Status é obrigatório';
    if (!data.categoria) return 'Categoria é obrigatória';
  
    const containerNumberPattern = /^[A-Z]{4}\d{7}$/;
    if (!containerNumberPattern.test(data.numero)) {
      return 'Container number must be in the format ABCD1234567';
    }
    if (![20, 40].includes(data.tipo)) {
      return 'Container type must be 20 or 40';
    }
    if (!['Cheio', 'Vazio'].includes(data.status)) {
      return 'Container status must be Cheio or Vazio';
    }
    if (!['Importação', 'Exportação'].includes(data.categoria)) {
      return 'Container category must be Importação or Exportação';
    }
    return null;
};
  