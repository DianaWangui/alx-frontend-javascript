export default function createReportObject(employeesList) {
  return {
    getNumberOfDepartments: (employeesList) => Object.keys(employeesList).length,
    allEmployees: { ...employeesList },
  };
}
