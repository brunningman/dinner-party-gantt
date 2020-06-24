import start from './app';

const SERVER_PORT = parseInt(process.env.SERVER_PORT || '3000', 10);

async function main() {
  await start(SERVER_PORT);
  console.log(`Server started at http://localhost:${SERVER_PORT}`);
}

main().catch((error) => console.error(error));
