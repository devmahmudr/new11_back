import express from "express";
import sequelize from "./db/db.connection.js";
import CustomerRouter from "./router/router.js";

const app = express();

async function bootstrap() {
  try {
    await sequelize.authenticate();
    sequelize.sync({ alter: true }).then(()=>{console.log("db connected");
    }).catch((err)=>{console.log(`connection err ${err.message}`);
    })
    
    app.use(express.json())
    app.use(CustomerRouter)

    
    app.listen(8080, () => {
      console.log("http://localhost:8080");
    });
  } catch (error) {
    console.log(error.message);
  }
}
bootstrap();
