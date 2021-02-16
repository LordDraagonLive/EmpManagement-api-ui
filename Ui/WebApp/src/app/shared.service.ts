import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:5000/api";
  readonly PhotoUrl = "http://localhost:5000/Photos";

  constructor(private httpClient: HttpClient) { }

  // departments

  getDepList(): Observable<any[]>{
    return this.httpClient.get<any>(this.APIUrl+'/department');
  }

  addDepartment(val: any){
    return this.httpClient.post(this.APIUrl+'/department', val);
  }

  updateDepartment(val: any){
    return this.httpClient.put(this.APIUrl+'/department', val);
  }

  deleteDepartment(val: any){
    return this.httpClient.delete(this.APIUrl+'/department', val);
  }

  // employees

  getEmpList(): Observable<any[]>{
    return this.httpClient.get<any>(this.APIUrl+'/employee');
  }

  addEmployee(val: any){
    return this.httpClient.post(this.APIUrl+'/employee', val);
  }

  updateEmployee(val: any){
    return this.httpClient.put(this.APIUrl+'/employee', val);
  }

  deleteEmployee(val: any){
    return this.httpClient.delete(this.APIUrl+'/employee', val);
  }

  uploadPhoto(val:any){
    return this.httpClient.post(this.APIUrl+'/Employee/SaveFile', val);
  }

  getAllDepartmentNames(): Observable<any[]>{
    return this.httpClient.get<any>(this.APIUrl+'/Employee/GetAllDepartmentNames');
  }

}
