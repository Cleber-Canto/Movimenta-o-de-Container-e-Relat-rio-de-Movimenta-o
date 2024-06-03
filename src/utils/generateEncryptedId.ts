import bcrypt from 'bcrypt';

export const generateEncryptedId = async (): Promise<string> => {
  const saltRounds = 10;
  const id = Math.floor(Math.random() * 1000); // Gere um ID simples como exemplo
  const hashedId = await bcrypt.hash(String(id), saltRounds);
  return hashedId;
};
