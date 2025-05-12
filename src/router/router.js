import { Router } from "express";
import CustomerController from "../controller/controller.js"
const CustomerRouter = Router()

CustomerRouter.get("/", CustomerController.findAll)
CustomerRouter.post("/add", CustomerController.addCustomer)
CustomerRouter.delete("/del/:id", CustomerController.deleteCustomer)

export default CustomerRouter