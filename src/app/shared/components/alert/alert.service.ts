import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAlert } from './alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private data = new BehaviorSubject<IAlert>({ message: '', show: false })

  data$: Observable<IAlert> = this.data.asObservable()

  constructor() {

  }

  show(alert:IAlert){
    this.data.next(alert)
  }

  hide(){
    this.data.next({message:'',show:false})
  }




}



