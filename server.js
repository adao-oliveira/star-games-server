const app = require("./app");
const connectDatabase = require("./db/Database");
const cloudinary = require("cloudinary");

// Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Erro: ${err.message}`);
  console.log(`desligando o servidor para lidar com exceção não capturada`);
});

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

// connect db
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})


// create server
const server = app.listen(process.env.PORT, () => {
  console.log(
    `O servidor está em execução http://localhost:${process.env.PORT}`
  );
});

// unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Desligando o servidor para ${err.message}`);
  console.log(`desligando o servidor para resolver a rejeição da promise`);

  server.close(() => {
    process.exit(1);
  });
});
