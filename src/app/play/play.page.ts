import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Level } from '../level';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { CrudService } from './../crud.service';
@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {
  level: Level;
  test: any;
  right: number;
    wrong: number;
    max: boolean;
  win: boolean;
  lose: boolean;
    where: number;
    timer: number;
    timeout: boolean;
    saveusername: string = ""
    savepassword: string = ""
    users: any;
    userName: string;
    userPassword: string;
    userProgress: number;
    constructor(public global: GlobalService, public afAuth: AngularFireAuth, private crudService: CrudService) {
    this.level = new Level(this.global.level);
    this.right = 0;
    this.wrong = 0;
      this.win = false;
      this.lose = false;
        this.max = false;
        this.timer = this.level.time;
      this.startTimer();
  }

    startTimer() {
        var intervalVar = setInterval(function () {
            if (!this.lose && !this.win) {
                this.timer--;
                if (this.timer <= 0) {
                    this.lose = true;
                }
            }
        }.bind(this), 1000);
    }

    check(i: number, j: number) {
        if (!this.lose && !this.win) {
            if (this.level.layout[i][j] == 0 || this.level.layout[i][j] == 2) {
                this.level.layout[i][j] = 1;
                if (this.level.answer[i][j] == 1) {
                    this.right++;

                }
                else {
                    this.wrong++;
                }
            }
            else {
                this.level.layout[i][j] = 0;
                if (this.level.answer[i][j] == 1) {
                    this.right--;
                }
                else {
                    this.wrong--;
                }
            }
            this.answer_check();
        }
    }

  answer_check(){
    if(this.right == this.level.answer_n  && this.wrong == 0){
        this.win = true;
        if (this.global.level >= +this.global.progaccount) {
            let record = {};
            record['Name'] = this.global.useraccount;
            record['Password'] = this.global.passaccount;
            record['Progress'] = String(this.global.level + 1);
            this.crudService.update_Student(this.global.idaccount, record); 
        }
    }
  }
    next() {
        if (this.global.level == 4) {
            this.max = true;
        }
        else {
            this.global.level = this.global.level + 1;
            this.level = new Level(this.global.level);
            this.right = 0;
            this.wrong = 0;
            this.win = false;
            this.lose = false;
            this.timer = this.level.time;
        }
    }
    ngOnInit() {
        
     }

}
