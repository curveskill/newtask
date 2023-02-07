import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  @ViewChild("content") content:any;
  users: any;
  userForm!: FormGroup;
  constructor(private modalService: NgbModal) {
    this.userForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      emailId: new FormControl(),
      mobileNo: new FormControl(),
      gender: new FormControl(),
      status: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.loadUserData();
  }

  SaveEmployee() {}

  loadUserData() {
    this.users = [
      {
        id: '001',
        name: 'raheela',
        email: 'rahee@gmail.com',
        number: 9876543210,
        gender: 'Female',
        status: true,
      },
      {
        id: '004',
        name: 'Shahinsha',
        email: 'shahinsha@gmail.com',
        number: 9876543213,
        gender: 'Male',
        status: false,
      },
    ];
  }

  addNewItem() {
    this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'});
    // let text;
    // let person = prompt('please enter your name:', 'raheela');
    // if (person == null || person == '') {
    //   text = 'enter your name.';
    //   // text = this.userform=new FormGroup({
    //   //   identity:new FormControl(),
    //   //   email:new FormControl(),
    //   //   mobile:new FormControl(),
    //   //   address:new FormControl()

    //   // })
    // } else {
    //   text = 'Hello' + person + '!How are you today';
    // }
  }
}
