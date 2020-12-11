import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class AxiosGetServiceService {

  constructor(){}

  async getFunction(city:string){
    let data = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8a6c09d5b598e9d813b3a4396460167b`).then(
     (response)=>{
       return response.data
     }
   ).catch((error)=>{
     console.error(error)
   })
   return data
 }
 
 async getFunctionForId(id:Number){
        let data = await axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=8a6c09d5b598e9d813b3a4396460167b`).then(
          (response)=>{
          return response.data
        }
          ).catch((error)=>{
            console.error(error)
        })
  return data
 }

}
