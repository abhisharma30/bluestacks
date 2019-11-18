import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-upcoming',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
  providers: [NgbModal]
})
export class CampaignComponent implements OnInit {
  campaigns = [];
  type: string;
  date: any;
  selectedCampaign: any;
  constructor(private appService: AppService, private dataService: DataService, private route: ActivatedRoute, private modalService: NgbModal) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.type = params.type;
      this.appService.setType(params.type);
      this.campaigns = this.dataService.getCampaigns();
    });
  }

  open(content, campaign, index) {
    this.modalService.open(content, { centered: true });
    this.selectedCampaign = {
      index: index%8,
      ...campaign
    }
  }

  onDateChange(value, campaign) {
    campaign.createdOn = new Date(value.year, value.month-1, value.day).getTime();
  }

}



