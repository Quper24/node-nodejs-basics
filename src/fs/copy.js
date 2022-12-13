import { readdir, mkdir, copyFile } from 'node:fs/promises';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const copy = async () => {
  try {
    readdir(`${__dirname}/files`)
      .then(async (files) => {
        console.log(files);
        return files;
      })
      .catch((e) => {
        throw new Error('FS operation failed');
      });
  } catch (err) {
    console.error(err);
  }
};

await copy();
