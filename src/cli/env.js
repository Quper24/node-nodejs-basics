const parseEnv = () => {
  for (const name in process.env) {
    if (/^RSS_/.test(name)) {
      console.log(`${name}:${process.env[name]}`);
    }
  }
};

parseEnv();
