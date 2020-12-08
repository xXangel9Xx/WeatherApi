import { Component, OnInit, SimpleChange} from '@angular/core';
//const axios = require('axios').default;
import axios from 'axios';
@Component({
  selector: 'app-weater-component',
  templateUrl: './weater-component.component.html',
  styleUrls: ['./weater-component.component.scss']
})
export class WeaterComponentComponent implements OnInit {
  data:any 
  async getFunction(){
     let data = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=8a6c09d5b598e9d813b3a4396460167b').then(
      (response)=>{
        return response.data
      }
    ).catch((error)=>{
      console.error(error)
    })
    return data
  }

  constructor(){}

  async ngOnInit(){
     await this.getFunction().then((res)=>{ this.data = res })
     console.log(this.data)
  };
  
  /*ngOnChanges(changes: SimpleChange) {
    // changes.prop contains the old and the new value...
    console.log(changes)
  }*/


}/*
try{
  let  response = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=8a6c09d5b598e9d813b3a4396460167b')
   console.log(response)
 }catch(error){
  console.log(error)
}
*/