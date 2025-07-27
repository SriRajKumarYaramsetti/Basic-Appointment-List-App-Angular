import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';


@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.css'
})
export class AppointmentList implements OnInit{
  newAppointmentTitle : string=""
  appointment: User[]= []

  ngOnInit(): void {
    let savedAppointments=localStorage.getItem("appointments")
    this.appointment=savedAppointments? JSON.parse(savedAppointments): []
  }
  
  addAppointment(){
    if(this.newAppointmentTitle.trim().length){
      let newAppointment:User={
        id:1,
        title:this.newAppointmentTitle
      }
      this.appointment.push(newAppointment)
      localStorage.setItem("appointments",JSON.stringify(this.appointment))
        this.newAppointmentTitle=""
    }
  }

  deleteAppointment(i: number){
   this.appointment.splice(i,1)
   localStorage.setItem("appointments",JSON.stringify(this.appointment))
  }
}
