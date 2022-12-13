const list = async () => {
    try {
        readdir(`${__dirname}/files`)
          .then(async (files) => {
            if (files.length) {
              await mkdir(`${__dirname}/files_copy`);
              return files;
            }
          })
          .then((files) => {
            files.forEach(async (file) => {
              await copyFile(
                `${__dirname}/files/${file}`,
                `${__dirname}/files_copy/${file}`,
              );
            });
          })
          .catch((e) => {
            console.log('e: ', e);
            throw new Error('FS operation failed');
          });
      } catch (err) {
        console.error(err);
      }};

await list();