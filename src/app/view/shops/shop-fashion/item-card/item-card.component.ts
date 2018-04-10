import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-item-card",
  templateUrl: "./item-card.component.html"
})
export class ItemCardComponent implements OnInit {
  Content = "How Did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?";
  constructor() { }

  ngOnInit() {
  }

}
