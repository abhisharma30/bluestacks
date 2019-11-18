import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  campaigns = [{
    "name": "Shadow Fight 3",
    "region": "US",
    "createdOn": 1559807714999,
    "price": {
      "month": 100,
      "halfyear": 200,
      "year": 300
    },
    "csv": "Some CSV link for Whatsapp",
    "report": "Some report link for Whatsapp",
    "image_url": "Some image url of the campaign"
  },
  {
    "name": "PUBG INDIA",
    "region": "CA, FR",
    "createdOn": 1559806715124,
    "price": {
      "month": 50,
      "halfyear": 100,
      "year": 200
    },
    "csv": "Some CSV link for Super Jewels Quest",
    "report": "Some report link for Super Jewels Ques",
    "image_url": "Some image url of the campaign"
  },
  {
    "name": "Auto Chess",
    "region": "FR",
    "createdOn": 1584028520630,
    "price": {
      "month": 80,
      "halfyear": 160,
      "year": 320
    },
    "csv": "Some CSV link for Mole Slayer",
    "report": "Some report link for Mole Slayer",
    "image_url": "Some image url of the campaign"
  },
  {
    "name": "Garana Free Fire...",
    "region": "JP",
    "createdOn": 1559806680124,
    "price": {
      "month": 200,
      "halfyear": 400,
      "year": 700
    },
    "csv": "Some CSV link for Mancala Mix",
    "report": "Some report link for Mancala Mix",
    "image_url": "Some image url of the campaign"
  },
  {
    "name": "MORTAL COMBAT",
    "region": "US",
    "createdOn": 1559807714999,
    "price": {
      "month": 100,
      "halfyear": 200,
      "year": 300
    },
    "csv": "Some CSV link for Whatsapp",
    "report": "Some report link for Whatsapp",
    "image_url": "Some image url of the campaign"
  },
  {
    "name": "Flow Free",
    "region": "CA, FR",
    "createdOn": 1559806715124,
    "price": {
      "month": 20,
      "halfyear": 40,
      "year": 80
    },
    "csv": "Some CSV link for Super Jewels Quest",
    "report": "Some report link for Super Jewels Ques",
    "image_url": "Some image url of the campaign"
  },
  {
    "name": "Need for Speed No Limits",
    "region": "FR",
    "createdOn": 1559806711124,
    "price": {
      "month": 250,
      "halfyear": 500,
      "year": 1000
    },
    "csv": "Some CSV link for Mole Slayer",
    "report": "Some report link for Mole Slayer",
    "image_url": "Some image url of the campaign"
  },
  {
    "name": "Summoners War",
    "region": "JP",
    "createdOn": 1574028930914,
    "price": {
      "month": 100,
      "halfyear": 300,
      "year": 700
    },
    "csv": "Some CSV link for Mancala Mix",
    "report": "Some report link for Mancala Mix",
    "image_url": "Some image url of the campaign"
  }];

  getCampaigns() {
    return this.campaigns;
  }
}
