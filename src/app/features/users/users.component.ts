import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users : any;
  // userForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  
this.users = [ 
  {
    id:'001',
    name:"raheela",
    email:"rahee@gmail.com",
    number:9876543210,
     gender:" ",
    status:""
   },
  {
    id:'002',
    name:"salma",
    email:"salma@gmail.com",
    number:9876543211,
    gender:"",
    status:""
  },
  {
    id:'003',
    name:"sheema",
    email:"sheema@gmail.com",
    number:9876543212,
    gender:"",
    status:""
   },
  {
    id:'004',
    name:"haseena",
    email:"hasee@gmail.com",
    number:9876543213,
    gender:"",
    status:""
  },
  {
    id:'005',
    name:"sharu",
    email:"sharu@gmail.com",
    number:9876543214,
    gender:"",
    status:""
  }
 ] 

  }
  // userform=new FormGroup({
  //     identity:new FormControl(),
  //     email:new FormControl(),
  //     mobile:new FormControl(),
  //     address:new FormControl()

  // })

  SaveEmployee(){

  }

  addNewItem(){
    let text;
    let person = prompt("please enter your name:","raheela");
    if(person == null || person == ""){
       text = "enter your name.";
      // text = this.userform=new FormGroup({
      //   identity:new FormControl(),
      //   email:new FormControl(),
      //   mobile:new FormControl(),
      //   address:new FormControl()
  
      // })
                                
    }else{
      text = "Hello"+ person + "!How are you today";
    }
  }
  

}
