import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready( function () {
      $('#table_id').DataTable();
  } );
  }

}
