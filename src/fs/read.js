import { readFile } from 'node:fs/promises';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
  try {
    await readFile(`${__dirname}/files/fileToRead.txt`, {
      encoding: 'utf8',
    })
      .then((text) => {
        console.log(text);
      })
      .catch(() => {
        throw new Error('FS operation failed');
      });
  } catch (err) {
    console.error(err);
  }
};

await read();
