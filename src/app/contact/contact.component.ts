import { Component, OnInit } from '@angular/core';
declare var $: any;

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

  }

}
