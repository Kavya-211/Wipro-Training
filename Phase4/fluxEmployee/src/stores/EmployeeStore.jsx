import EventEmitter from "eventemitter3";
import AppDispatcher from "../dispatcher/AppDispatcher";

const CHANGE_EVENT = "change";

class EmployeeStore extends EventEmitter {
  constructor() {
    super();
    this.employees = [];
  }

  getEmployees() {
    return this.employees;
  }

  addEmployee(employee) {
    this.employees.push(employee);
    this.emit(CHANGE_EVENT);
  }

  deleteEmployee(index) {
    this.employees.splice(index, 1);
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.off(CHANGE_EVENT, callback);
  }
}

const employeeStore = new EmployeeStore();

AppDispatcher.register((action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      employeeStore.addEmployee(action.payload);
      break;

    case "DELETE_EMPLOYEE":
      employeeStore.deleteEmployee(action.payload);
      break;

    default:
      break;
  }
});

export default employeeStore;
