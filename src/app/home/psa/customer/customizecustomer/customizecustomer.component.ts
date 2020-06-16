import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customizecustomer',
  templateUrl: './customizecustomer.component.html',
  styleUrls: ['./customizecustomer.component.css']
})
export class CustomizecustomerComponent implements OnInit {

  customized:any;
  idValue: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.customized = params['customizedParam'];
      this.idValue = params['value'];
      console.log(this.customized, this.idValue);
    }
    )
  }

}
