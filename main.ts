import { AppServer } from "./api/app-server";

const bootstrap = async () => {
  const appServer = new AppServer();
  return appServer.Start();
};

bootstrap()
  .then((address) => {
    console.log(`Server is listening at: [${address}]`);
  })
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
