import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employee: Employee = {
    id: 0,
    name: '',
    jobTitle: '',
    department: '',
    contact: ''
  };

  constructor(private employeeService: EmployeeService, private router: Router) {}
  
  ngOnInit(): void {}

  saveEmployee(): void {
    if(this.employee.id == 0) {
      this.employeeService.addEmployee(this.employee).subscribe(() => {
        this.router.navigate(['/employees'])
      });
    } else {
      this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe(() => {
        this.router.navigate(['/employees']);
      });
    }
  }
}
