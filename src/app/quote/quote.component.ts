import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quoteTitle;
  quoteContent;
  quoteAuthor;
  next = 0;

  constructor() { }

  ngOnInit() {
    this.quoteTitle = "Amazing, Crazy, Waouw !"
    this.quoteContent = "Huge collaboration with NizGame Company, really grateful to them !"
    this.quoteAuthor = "- Haegman J."

    this.rotation();

    setInterval(() => { this.rotation(); }, 4500);
  }

  rotation() {
    this.next++;
    switch (this.next) {
      case 1:
        this.quoteTitle = "Craziest games ever !";
        this.quoteContent = "It was a pleasure to see how this company works ! Follow them !";
        this.quoteAuthor = "- Obama B.";
        break;
      case 2:
        this.quoteTitle = "NizGame, from Unknown to Famous !";
        this.quoteContent = "Incredible ascension, Great work.";
        this.quoteAuthor = "- Skaldy O.";
        break;
      case 3:
        this.quoteTitle = "Recommanded";
        this.quoteContent = "Great to work with ! Thanks a lot.";
        this.quoteAuthor = "- Iload V.";
        break;
      case 4:
        this.quoteTitle = "Vraiment bon !";
        this.quoteContent = "Très bonne collaboration avec NizGame, sérieux et qualité de travail respecté.";
        this.quoteAuthor = "- Mapoi D.";
        this.next = 0;
        break;
    }

    this.fadeIn();

    setTimeout(() => { this.fadeOut(); }, 3500)

  }

  fadeIn() {
    var el = document.getElementById('textQ');
    el.classList.remove('hidden');
    el.classList.add('shown');
  }

  fadeOut() {
    var el = document.getElementById('textQ');
    el.classList.remove('shown');
    el.classList.add('hidden');
  }

}
