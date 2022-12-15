import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const hash = createHash('sha256');

const calculateHash = async () => {
  hash.on('readable', () => {
    const data = hash.read();
    if (data) {
      console.log(data.toString('hex'));
    }
  });

  const textFile = await readFile(
    `${__dirname}/files/fileToCalculateHashFor.txt`,
    {
      encoding: 'utf8',
    },
  );

  hash.write(textFile);
  hash.end();
};

await calculateHash();
