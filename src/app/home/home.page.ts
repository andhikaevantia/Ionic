import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { CrudService } from './../crud.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    default: boolean;
    select: boolean;
    signin: boolean;
    signup: boolean;
    sign: boolean;
    page: boolean;
    text: string = ""
    username: string = ""
    password: string = ""
    saveusername: string = ""
    savepassword: string = ""
    users: any;
    userName: string;
    userPassword: string;
    userProgress: number;
    constructor(public global: GlobalService, public afAuth: AngularFireAuth, private crudService: CrudService) {
        this.default = false;
        this.select = false;
        this.sign = true;
        this.page = false;
        this.saveusername = "";
        this.savepassword = "";
    }
    //ngOnInit() {
    //    this.crudService.read_Students().subscribe(data => {

    //        this.users = data.map(e => {
    //            return {
    //                id: e.payload.doc.id,
    //                isEdit: false,
    //                Name: e.payload.doc.data()['Name'],
    //                Password: e.payload.doc.data()['Password'],
    //                Progress: e.payload.doc.data()['Progress'],
    //            };
    //        })
    //        console.log(this.users);

    //    });
    //}
    ngOnInit() {
        this.crudService.read_Students().subscribe(data => {

            this.users = data.map(e => {
                return {
                    id: e.payload.doc.id,
                    isEdit: false,
                    Name: e.payload.doc.data()['Name'],
                    Password: e.payload.doc.data()['Password'],
                    Progress: e.payload.doc.data()['Progress'],
                };
            })
            console.log(this.users);

        });
    }
    CreateRecord() {
        let record = {};
        record['Name'] = this.userName;
        record['Password'] = this.userPassword;
        record['Progress'] = this.userProgress;
        this.crudService.create_NewStudent(record).then(resp => {
            this.userName = "";
            this.userPassword = undefined;
            this.userProgress = 0;
            console.log(resp);
        })
            .catch(error => {
                console.log(error);
            });
    }
    RemoveRecord(rowID) {
        this.crudService.delete_Student(rowID);
    }
    EditRecord(record) {
        record.isEdit = true;
        record.EditName = record.Name;
        record.EditPassword = record.Password;
        record.EditProgress = record.Progress;
    }
    UpdateRecord(recordRow) {
        let record = {};
        record['Name'] = recordRow.EditName;
        record['Password'] = recordRow.EditPassword;
        record['Progress'] = recordRow.EditProgress;
        this.crudService.update_Student(recordRow.id, record);
        recordRow.isEdit = false;
    }
    setLevel(level: number) {
        this.global.level = level;
    }
    choose() {
        if (this.select == true) {
            this.default = true;
            this.select = false;
        }
        else {
            this.select = true;
            this.default = false;
        }
    }
    selection(number:number) {
        this.global.level = number;
    }
    start() {
        this.global.level = 0;
    }
    signinfunction() {
        this.signin = true;
        this.signup = false;
        this.sign = false;
        this.page = true;
        this.default = false;
        this.text = "";
        this.username = "";
        this.password = "";
    }
    signupfunction() {
        this.signup = true;
        this.signin = false;
        this.sign = false;
        this.page = true;
        this.default = false;
        this.text = "";
        this.username = "";
        this.password = "";
    }
    backfunction() {
        //this.signup = false;
        //this.signin = false;
        this.sign = true;
        this.page = false;
        this.text = "";
        this.username = "";
        this.password = "";
    }
    // abcdef + @gmail.com
    async login() {
        const { username, password } = this
        try {
            const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@codedamn.com', password)
            console.log("Success");
            this.default = true;
            this.page = false;
            this.sign = false;
            this.saveusername = username;
            this.savepassword = password;
            this.crudService.read_Students().subscribe(data => {

                this.users = data.map(e => {
                    if (e.payload.doc.data()['Name'] == this.saveusername) {
                        if (e.payload.doc.data()['Password'] == this.savepassword) {
                            this.global.idaccount = e.payload.doc.id;
                            this.global.useraccount = e.payload.doc.data()['Name'];
                            this.global.passaccount = e.payload.doc.data()['Password'];
                            this.global.progaccount = e.payload.doc.data()['Progress'];
                            for (var i = 0; i < 5; i++) {
                                if (i > +this.global.progaccount) {
                                    this.global.levelstatus[i] = true;
                                }
                                else {
                                    this.global.levelstatus[i] = false;
                                }
                            }
                            return {
                                id: e.payload.doc.id,
                                isEdit: false,
                                Name: e.payload.doc.data()['Name'],
                                Password: e.payload.doc.data()['Password'],
                                Progress: e.payload.doc.data()['Progress'],
                            };
                        }
                    }
                })
                console.log(this.users);

            });
            this.username = "";
            this.password = "";
        } catch (err) {
            console.dir(err);
            this.page = false;
            this.sign = true;
            if (err.code === "auth/user-not-found") {
                console.log("User not found");
                this.text = "User Not Found, Please Try Again!";
            }
            this.username = "";
            this.password = "";
        }
    }

    async register() {
        const { username, password } = this
        try {
            const rest = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@codedamn.com', password);
            console.log(rest);
            this.page = false;
            this.sign = true;
            this.text = "Success Register, Please Sign In!";

            let record = {};
            record['Name'] = this.username;
            record['Password'] = this.password;
            record['Progress'] = 0;
            this.crudService.create_NewStudent(record).then(resp => {
                this.userName = "";
                this.userPassword = undefined;
                this.userProgress = 0;
                console.log(resp);
            })
            .catch(error => {
                 console.log(error);
            });

            this.username = "";
            this.password = "";
        } catch (error) {
            console.dir(error);
            this.text = "Failed to Register, Please Try Again!";
            this.username = "";
            this.password = "";
        }
    }
    logout() {
        this.default = false;
        this.select = false;
        this.sign = true;
        this.page = false;
    }
}
