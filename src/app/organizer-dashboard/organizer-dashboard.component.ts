import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-organizer-dashboard',
  templateUrl: './organizer-dashboard.component.html',
  styleUrls: ['./organizer-dashboard.component.css']
})
export class OrganizerDashboardComponent implements OnInit {

  public data=[];
  public upcomingCampaigns=[];
  public liveCampaigns =[];
  public pastCampaigns = [];
  public dateTime = new Date();
  public upcoming =false;
  public past = true;
  public live= false;
  constructor(private dashboardService: DashboardService) {

    this.dateTime.setDate(this.dateTime.getDate() +1);
   }

  ngOnInit() {
    this.pastCampaigns = this.dashboardService.getData();
    this.data = this.pastCampaigns;
  }

  scheduleAgain(event,item){
    console.log(event,item);
    let newCampaign = Object.assign({},item);
    newCampaign.date = event;
    this.upcomingCampaigns.push(newCampaign);
  }

  changeList(str){
    if(str==='upcoming'){
      this.data = this.upcomingCampaigns;
      this.upcoming=true;
      this.past =false;
      this.live =false;
    }
    else if (str==='live'){
      this.data = this.liveCampaigns;
      this.upcoming=false;
      this.past =false;
      this.live =true;
    }
    else if (str==='past'){
      this.data = this.pastCampaigns;
      this.upcoming=false;
      this.past =true;
      this.live =false;
    }
  }

}
