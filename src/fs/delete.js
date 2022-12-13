import { rm } from 'node:fs/promises';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const remove = async () => {
  await rm(`${__dirname}/files/fileToRemove.txt`).catch(() => {
    throw new Error('FS operation failed');
  });
};

await remove();
