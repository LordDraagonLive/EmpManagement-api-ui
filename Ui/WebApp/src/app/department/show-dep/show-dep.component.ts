import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  departmentList: any = [];
  ModalTitle: string;
  ActivateAddEditDepComp: boolean = false;
  dep: any;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick(){
    this.dep={
      DepartmentId:0,
      DepartmentName:""
    }
    this.ModalTitle = "Add Department"
    this.ActivateAddEditDepComp = true;
  }

  closeClick(){
    this.ActivateAddEditDepComp = false;
    this.refreshDepList();
  }

  editClick(item: any){
    this.dep = item;
    this.ModalTitle = "Edit Department"
    this.ActivateAddEditDepComp = true;
  }

  deleteClick(item: any){
    if (confirm('Are you sure??')) {
      alert(item.DepartmentId.toString());
      this.sharedService.deleteDepartment(item.DepartmentId).subscribe(res =>{
        alert(res.toString());
        this.refreshDepList();
      });
    }
  }

  refreshDepList(): void{
    this.sharedService.getDepList().subscribe(dep => {
      this.departmentList = dep;
    });
  }

}
