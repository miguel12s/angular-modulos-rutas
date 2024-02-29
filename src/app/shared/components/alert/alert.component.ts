import { Component, OnInit, inject } from '@angular/core';
import { AlertService } from './alert.service';
import { IAlert } from './alert';
import { tap } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnInit {
  alert:IAlert={message:'',show:false}
  private alertService=inject(AlertService)

    constructor(){}
    
 ngOnInit(): void {
   this.alertService.data$.subscribe((data:IAlert)=>{
    this.alert=data
   })
 }
 
 hiden(){
this.alertService.hide()
 }

}
