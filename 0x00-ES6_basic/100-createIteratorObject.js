export default function createIteratorObject(report) {
  const employees = [];
  for (const emp of Object.keys(report.allEmployees)) {
    employees.push([...report.allEmployees[emp]]);
  }
  return employees;
}
