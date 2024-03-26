// Employee object with initial data
const employee = {
    name: "John Doe",
    streetAddress: "123 Main Street",
  };
  
  // Function to update employee with key and value (non-destructive)
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee, 
      [key]: value,
    };
  }
  
  // Function to destructively update employee with key and value
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 
    return employee;
  }
  
  // Function to delete property from employee by key (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    const { [key]: deletedProperty, ...rest } = employee; 
    return rest; 
  }
  
  // Function to destructively delete property from employee by key
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 
    return employee;
  }
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "city", "New York");
  console.log("Updated employee (non-destructive):", updatedEmployee);
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "country", "USA");
  console.log("Updated employee (destructive):", employee); 
  
  const employeeWithoutCity = deleteFromEmployeeByKey(employee, "city");
  console.log("Employee without city (non-destructive):", employeeWithoutCity);
  
  destructivelyDeleteFromEmployeeByKey(employee, "country");
  console.log("Employee without country (destructive):", employee); 
  