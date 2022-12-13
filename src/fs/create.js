import { writeFile } from 'node:fs/promises';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const create = async () => {
  try {
    await writeFile(`${__dirname}/files/fresh.txt`, 'I am fresh and young', {
      encoding: 'utf8',
      flag: 'wx',
    }).catch(() => {
        throw new Error('FS operation failed')
    });
  } catch (err) {
    console.error(err);
  }
};

await create();
