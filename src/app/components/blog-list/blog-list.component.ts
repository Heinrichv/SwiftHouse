import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apex-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  constructor() { }

  blogs = [
    [
      {
        id: 'Coming-Soon',
        title: 'A new blog post is on its way soon!',
        image: 'https://offerzen.ghost.io/content/images/2018/11/ridewaan_coverimage_1.png',
        intro: ``
      },
      {
        id: 'Upgrading-to-Angular-7-From-Pains-to-Gains',
        title: 'Upgrading to Angular 7: From Pains, to Gains!',
        image: 'https://offerzen.ghost.io/content/images/2019/03/Jason_Powerful-sword_Best-tool-for-the-job_Cover-image.png',
        intro: `There are many ways to upgrade an Angular application, and the wrong choice could be catastrophic to your project. Here's how I made the right choice.`
      },
      {
        id: 'permanent-vs-freelancing-making-the-tradeoff',
        title: 'Permanent Vs Freelancing: Making the Tradeoff',
        image: 'https://offerzen.ghost.io/content/images/2019/03/Dries_Freelancing-vs-Permanent_Cover-image.png',
        intro: `In deciding whether to work in a corporate environment\, or start freelancing I had to make a few tradeoffs\.
        Here\'s what helped me come to a decision.`
      }
    ]
  ];

  ngOnInit() {
    window.document.title = 'SwiftHouse - Tech Blog';
  }

}
