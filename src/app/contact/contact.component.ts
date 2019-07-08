import { Component, OnInit } from '@angular/core';
declare var TweenMax: any;
declare let TimelineMax: any;
import { TweenLite } from "gsap";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function () {
      $('#textarea-contact').characterCounter();
      $('.modal').modal();

    });

  }

}
