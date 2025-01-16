import { Component, OnInit } from '@angular/core';
import { DataEntity } from '../../services/interfaces/user.interface';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directory',
  standalone: false,
  
  templateUrl: './directory.component.html',
  styleUrl: './directory.component.scss'
})
export class DirectoryComponent implements OnInit {
  employees: DataEntity[] = [];
  constructor(private emloyeeService: EmployeeService, private router: Router){

  }

  ngOnInit(): void {
    this.emloyeeService.getEmployees().subscribe((respone)=>{
      this.employees = respone.data;
    })
  }

}
