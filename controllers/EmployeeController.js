const Employee = require('../models/EmployeeModel');

exports.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.status(200).json(employees);
};

exports.getEmployeeById = async (req, res) => {
  const employee = await Employee.findById(req.params.eid);
  if (!employee) return res.status(404).json({ message: 'Employee not found' });
  res.status(200).json(employee);
};

exports.createEmployee = async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.status(201).json({ message: 'Employee created successfully', employee_id: employee._id });
};

exports.updateEmployee = async (req, res) => {
  const updatedEmployee = await Employee.findByIdAndUpdate(req.params.eid, req.body, { new: true });
  res.status(200).json({ message: 'Employee details updated successfully', employee: updatedEmployee });
};

exports.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.query.eid);
  res.status(204).send({ message: 'Employee deleted successfully'});
};
