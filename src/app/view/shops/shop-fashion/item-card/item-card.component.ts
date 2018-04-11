import { Component, OnInit } from "@angular/core";
import { ShopFashion } from "../../../../common/models/shop-fashion"
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-item-card",
  templateUrl: "./item-card.component.html"
})
export class ItemCardComponent implements OnInit {
  shopFashion: ShopFashion[] = [
    {
      blogImage: "assets/images/content/alex-lambley-205711.jpg",
      avatar: "assets/images/content/icons8-team-355990.jpg",
      title: "The teacher understands the importance of oral language, knows the development processes of oral language.",
      like: 20,
      comment: 14,
      view: 512
    },
    {
      blogImage: "assets/images/content/audrey-jackson-260657.jpg",
      avatar: "assets/images/content/icons8-team-355979.jpg",
      title: "How Did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?",
      like: 21,
      comment: 5,
      view: 501
    },
    {
      blogImage: "assets/images/content/averie-woodard-319832.jpg",
      avatar: "assets/images/content/icons8-team-355990.jpg",
      title: "How Did Van Gogh's Turbulent Mind Depict two of the Most Complex Concepts in Physics?",
      like: 21,
      comment: 15,
      view: 51
    },
    {
      blogImage: "assets/images/content/ben-o-sullivan-382817.jpg",
      avatar: "assets/images/content/icons8-team-355979.jpg",
      title: "How Did Van Gogh's Turbulent Mind Depict Three of the Most Complex Concepts in Physics?",
      like: 21,
      comment: 15,
      view: 51
    },
    {
      blogImage: "assets/images/content/caroline-veronez-165944.jpg",
      avatar: "assets/images/content/icons8-team-355990.jpg",
      title: "How Did Van Gogh's Turbulent Mind Depict Four of the Most Complex Concepts in Physics?",
      like: 21,
      comment: 15,
      view: 50
    },
    {
      blogImage: "assets/images/content/marion-michele-330691.jpg",
      avatar: "assets/images/content/icons8-team-355979.jpg",
      title: "How Did Van Gogh's Turbulent Mind Depict Five of the Most Complex Concepts in Physics?",
      like: 41,
      comment: 115,
      view: 1
    },
    {
      blogImage: "assets/images/content/noah-buscher-400915.jpg",
      avatar: "assets/images/content/icons8-team-355990.jpg",
      title: "How Did Van Gogh's Turbulent Mind Depict Six of the Most Complex Concepts in Physics?",
      like: 1,
      comment: 5,
      view: 51
    },
    {
      blogImage: "assets/images/content/sarah-diniz-outeiro-407602.jpg",
      avatar: "assets/images/content/icons8-team-355979.jpg",
      title: "How Did Van Gogh's Turbulent Mind Depict Seven of the Most Complex Concepts in Physics?",
      like: 2,
      comment: 15,
      view: 50
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
