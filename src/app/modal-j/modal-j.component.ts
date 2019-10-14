import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-modal-j",
  templateUrl: "./modal-j.component.html",
  styleUrls: ["./modal-j.component.css"]
})
export class ModalJComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(document).ready(function() {
      $(".modal").modal();
    });
  }
}
