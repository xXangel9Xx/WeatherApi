import { Component, OnInit } from '@angular/core';
//const axios = require('axios').default;
import axios from 'axios';
@Component({
  selector: 'app-weater-component',
  templateUrl: './weater-component.component.html',
  styleUrls: ['./weater-component.component.scss']
})
export class WeaterComponentComponent implements OnInit {
  
  getFunction(){
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=8a6c09d5b598e9d813b3a4396460167b').then(
      (response)=>{
        console.log(response)
      }
    ).catch((error)=>{
      console.error(error)
    })
  }

  constructor(){}

  ngOnInit(): void {
   this.getFunction()
  }


}/*
try{
  let  response = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=8a6c09d5b598e9d813b3a4396460167b')
   console.log(response)
 }catch(error){
  console.log(error)
}
*/