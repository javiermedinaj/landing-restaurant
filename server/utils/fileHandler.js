import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataDir = join(__dirname, '..', 'data');

export const loadData = (filename) => {
  const filePath = join(dataDir, filename);
  // console.log(`Loading data from ${filePath}`); // Debug
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    // console.log(`Data loaded: ${JSON.stringify(data)}`); // Debug
    return data;
  }
  console.log(`File not found: ${filePath}`); // Debug
  return [];
};

export const saveData = (filename, data) => {
  const filePath = join(dataDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  // console.log(`Data saved to ${filePath}`); // Debug
};