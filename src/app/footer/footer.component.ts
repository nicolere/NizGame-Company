import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { element } from 'protractor';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {

      var cards = document.querySelectorAll('.card');
      cards.forEach(element => element.addEventListener('click', function () {
        element.classList.toggle('is-flipped');
      }))

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
