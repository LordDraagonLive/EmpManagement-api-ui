import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  employeeList: any = [];
  ModalTitle: string;
  ActivateAddEditEmpComp: boolean = false;
  emp: any;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeName:"",
      Department:"",
      DateOfJoining:"",
      PhotoFileName:"images.jfif"
    }
    this.ModalTitle = "Add Employee"
    this.ActivateAddEditEmpComp = true;
  }

  closeClick(){
    this.ActivateAddEditEmpComp = false;
    this.refreshEmpList();
  }

  editClick(item: any){
    this.emp = item;
    this.ModalTitle = "Edit Employee"
    this.ActivateAddEditEmpComp = true;
  }

  deleteClick(item: any){
    if (confirm('Are you sure??')) {
      this.sharedService.deleteEmployee(item.EmployeeId).subscribe(res =>{
        alert(res.toString());
        this.refreshEmpList();
      });
    }
  }

  refreshEmpList(): void{
    this.sharedService.getEmpList().subscribe(emp => {
      this.employeeList = emp;
    });
  }

}
