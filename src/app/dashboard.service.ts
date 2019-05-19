import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public data = [
    {"date":new Date(),"campaignName":"Test Whatsapp","price":123},
    {"date":new Date(),"campaignName":"Mole Slayer","price":453},
    {"date":new Date(),"campaignName":"Mancala Mix","price":897},
    {"date":new Date(),"campaignName":"Super Jewels Quest","price":157}
  ]
  constructor() { }


  public getData(){
    return this.data;
  }


}
