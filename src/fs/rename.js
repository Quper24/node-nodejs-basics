import fs from 'node:fs/promises';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const rename = async () => {
  try {
    await fs.rename(
      `${__dirname}/files/wrongFilename.txt`,
      `${__dirname}/files/properFilenameс.md`,
    ).catch(() => {
      throw new Error('FS operation failed');
    });
  } catch (err) {
    console.error(err);
  }
};

await rename();
