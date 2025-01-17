import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './coaching-home.component.html',
  styleUrls: ['./coaching-home.component.scss']
})
export class CoachingHomeComponent {
  title = 'demo';
 @ViewChild(MatSidenav) sidenav! : MatSidenav;

 constructor(private observer: BreakpointObserver){

 }
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
public onCreated(args: any) {
     
}
}


