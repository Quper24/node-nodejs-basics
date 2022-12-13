const parseArgs = () => {
  process.argv.forEach((_, i) => {
    if (
      /^--/.test(process.argv[i]) &&
      process.argv[i + 1] &&
      !/^--/.test(process.argv[i + 1])
    ) {
      console.log(`${process.argv[i]} is ${process.argv[i + 1]}`);
    }
  });
};

parseArgs();
