import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav! : MatSidenav;
  constructor(private observer: BreakpointObserver) { }
  ngAfterViewInit(){
    this.observer.observe(['(max-width:800px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode ='over';
        this.sidenav.close();
      } else {
        this.sidenav.mode='side';
        this.sidenav.open();
      }
    });
  }
  ngOnInit(): void {
  }

}
