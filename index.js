// Write your solution in this file!
const employee = {
    name: "Bob",
    address: "27 Pearl St",
}
function updateEmployeeWithKeyAndValue(employee, state, stateName)
{
    const newEmployee = {...employee}; 
    newEmployee [state] = stateName;
    return newEmployee;
}
//const newEmployee = updateEmployeeWithKeyAndValue(employee, 'state', 'Colorado')
//console.log(newEmployee)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, state, stateName) {
    employee [state] = stateName;
    return employee;
}
function deleteFromEmployeeByKey(employee, state, stateName) {
    const newEmployee = {...employee};
    newEmployee [state] = stateName;
    delete newEmployee.state;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, state, stateName) {
    employee [state] = stateName;
    delete employee.state;
    return employee;
}
