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

      const ratio = 0.1;
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio
      }

      const handleIntersect = function (entries, observer) {
        entries.forEach(entry => {
          if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      }

      const observer = new IntersectionObserver(handleIntersect, options)
      document.querySelectorAll('.reveal').forEach(function (r) {
        observer.observe(r);
      })

    })

  }

}
