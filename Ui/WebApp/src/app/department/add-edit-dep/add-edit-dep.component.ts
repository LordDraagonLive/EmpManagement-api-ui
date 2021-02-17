import { SharedService } from 'src/app/shared.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  @Input() dep: any;
  DepartmentId: string;
  DepartmentName: string;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.DepartmentId = this.dep.DepartmentId;
    this.DepartmentName = this.dep.DepartmentName;
  }

  addDepartment(){
    var val = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName
    };
    this.sharedService.addDepartment(val).subscribe(res =>{
      alert(res.toString());
    });
  }

  updateDepartment(){
    var val = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName
    };
    this.sharedService.updateDepartment(val).subscribe(res =>{
      alert(res.toString());
    });
  }

}
