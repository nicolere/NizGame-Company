import { Component } from '@angular/core';

@Component({
  selector: 'app-ytb-player',
  templateUrl: './ytb-player.component.html',
  styleUrls: ['./ytb-player.component.css']
})
export class YtbPlayerComponent {
  id = '1kFGvNHMK8Y';
  playerVars = {
    cc_lang_pref: 'en'
  };

  private player;

  constructor() {}

  savePlayer(player) {
    this.player = player;
  }
}
