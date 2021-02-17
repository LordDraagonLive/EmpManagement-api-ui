import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  @Input() emp: any;
  EmployeeId: string;
  EmployeeName: string;
  Department: string;
  DateOfJoining: string;
  PhotoFileName: string;
  PhotoFilePath: string;

  departmentsList: any = [];

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.loadDepartmentsList();
  }

  loadDepartmentsList(){
    this.sharedService.getAllDepartmentNames().subscribe(data =>{
      this.departmentsList = data;

      this.EmployeeId = this.emp.EmployeeId;
      this.EmployeeName = this.emp.EmployeeName;
      this.Department = this.emp.Department;
      this.DateOfJoining = this.emp.DateOfJoining;
      this.PhotoFileName = this.emp.PhotoFileName;
      this.PhotoFilePath = this.sharedService.PhotoUrl+this.PhotoFileName;
    })
  }

  addEmployee() {
    var val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName
    };
    this.sharedService.addEmployee(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateEmployee() {
    var val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName
    };
    this.sharedService.updateEmployee(val).subscribe(res => {
      alert(res.toString());
    });
  }

  uploadPhoto(event){
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.sharedService.uploadPhoto(formData).subscribe((data:any) => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.sharedService.PhotoUrl+this.PhotoFileName;
    });
  }


}
