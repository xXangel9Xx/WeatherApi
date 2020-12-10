import { Component, OnInit, SimpleChange} from '@angular/core';
import { AxiosGetServiceService } from '.././service/axios-get-service.service'
//const axios = require('axios').default;
import axios from 'axios';
@Component({
  selector: 'app-weater-component',
  templateUrl: './weater-component.component.html',
  styleUrls: ['./weater-component.component.scss']
})
export class WeaterComponentComponent implements OnInit {
  data:any 
  city:any
  //init

  constructor(
    private axiosGetServiceService: AxiosGetServiceService
    ){}
   ngOnInit(){
    this.axiosGetServiceService.getFunction().then((res)=>{ this.data = res })
     console.log(this.data)
  };
//algo asi
  async getShow(){
    let data = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=8a6c09d5b598e9d813b3a4396460167b`).then(
      (response)=>{
        return response.data
      }
    ).catch((error)=>{
      console.error(error)
    })
    this.city = data
  }
  

}/*
try{
  let  response = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=8a6c09d5b598e9d813b3a4396460167b')
   console.log(response)
 }catch(error){
  console.log(error)
}
*/