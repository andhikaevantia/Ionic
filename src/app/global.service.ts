import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
    level: number;
    maxlevel: number[];
    idaccount: string = "";
    useraccount: string = "";
    passaccount: string = "";
    progaccount: string = "";
    levelstatus: boolean[];
    constructor() {
        this.level = 0;
        this.maxlevel = [0, 1, 2, 3, 4];
        this.levelstatus = [false, false, false, false, false];
    }
}
