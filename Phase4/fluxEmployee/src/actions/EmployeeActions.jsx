import AppDispatcher from "../dispatcher/AppDispatcher";

export const addEmployee = (employee) => {
  AppDispatcher.dispatch({
    type: "ADD_EMPLOYEE",
    payload: employee,
  });
};

export const deleteEmployee = (index) => {
  AppDispatcher.dispatch({
    type: "DELETE_EMPLOYEE",
    payload: index,
  });
};
