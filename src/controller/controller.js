import CustomerModel from "../models/customer.model.js";

class CustomerController {
  async findAll(req, res) {
    try {
      const customers = await CustomerModel.findAll();

      if (!customers || customers.length == 0) {
        return res
          .status(200)
          .json({ message: "Could not find users(no users)" });
      }

      return res.status(200).json(customers);
    } catch (error) {
      console.log(error.message);
    }
  }

  async addCustomer(req, res) {
    try {
      const { name, status, description, rate, balance, deposite } = req.body;
      if (!name) {
        return res.status(400).json({ message: "please enter name" });
      }

      const newCustomer = await CustomerModel.create({
        name,
        status,
        deposite,
        rate,
        description,
        balance,
      });

      if (!newCustomer) {
        return res.status(401).json({ message: "could not create customer" });
      }
      newCustomer.save();

      return res
        .status(201)
        .json({ message: "successfully created", data: newCustomer });
    } catch (error) {
      console.log(error.message);
    }
  }

  async deleteCustomer(req, res) {
    try {
      const id = +req.params.id;

      if (!id) {
        return req
          .status(400)
          .json({ message: "customer id is required to delete" });
      }

      const deletedCustomer = await CustomerModel.destroy({ where: { id } });

      if (deletedCustomer) {
        return res
          .status(200)
          .json({ message: "successfully deleted", data: deletedCustomer });
      }

      return res.status(404).json({ msg: "Customer not found" });
    } catch (error) {
      console.log(error.message);
    }
  }

  async findOne(req, res) {
    try {
      const id = +req.params.id;

      const customer = await CustomerModel.findOne({ where: { id } });

      if(!customer){
        return res.status(400).json({ msg: "Customer not found"})
      }

      return res.status(200).json({msg: "Customer found", data:customer})
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default new CustomerController();
