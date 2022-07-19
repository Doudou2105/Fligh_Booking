import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { FlightModel } from './my.model';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  formValue !: FormGroup
  FlightModelObj : FlightModel = new FlightModel();
  FlightData !: any;

  constructor(private formbuilber : FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
    this.formValue= this.formbuilber.group({
      passengerName:[''],
      numberOfTickets:[''],
      flight:[''],  
    })
this.getAllFlight();
  }

  postFlightsDetails(){
    this.FlightModelObj.passengerName= this.formValue.value.passengerName;
    this.FlightModelObj.numberOfTickets= this.formValue.value.numberOfTickets;
    this.FlightModelObj.flight= this.formValue.value.flight;
  
    this.api.postFlight(this.FlightModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Book Flight added with succcessfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllFlight();
    },
    err=>{
      alert("something went wrong");
    })
  }

  getAllFlight(){
    this.api.getFlight()
    .subscribe(res=>{
      this.FlightData= res;
    })
}

deleteFlight(row : any){
  this.api.deleteFlight(row.id)
  .subscribe(res=>{
    alert("Book Flight deleted ");
    this.getAllFlight();
})
}

}