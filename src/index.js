import dotenv from "dotenv";
import connectDb from "./db/index.js";
dotenv.config({ path: "./env" });

connectDb();

// import express from "express";
// const express = express()(async () => {
//   try {
//     await mongoose.connect(`${MONOGDB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Error: ", error);
//       throw error;
//     });
//     app.listen(process.env.port, () => {
//       console.log(`App is runing at port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("Error: ", error);
//     throw error;
//   }
// })();
