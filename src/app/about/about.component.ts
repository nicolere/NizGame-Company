import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.toggle').click(function () {
        $('.toggle').toggleClass('active');
        $('body').toggleClass('night');
        $('.divider, .center.promo').toggleClass('night');
        $('#light, #night').toggleClass('night');
        $('#contact .row, #contact #right .a').toggleClass('night');
        $('#modal-contact').toggleClass('night');
        $('span.character-counter').toggleClass('night');
      })
    })

  }

}
