import { Component, OnInit } from '@angular/core';

import * as introJs from 'intro.js/intro.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tracker-guide';

  introJS = introJs();

  constructor() {
    this.introJS.setOptions({
      steps: [
        {
          element: document.querySelector('#step1'),
          intro: "These are instructions on how to use this step1.",
          tooltipPosition: 'auto'
        },
        {
          element: document.querySelectorAll('#step2')[0],
          intro: "Ok, wasn't that fun?",
          position: 'right'
        },
        {
          element: '#step3',
          intro: 'More features, more fun.',
          position: 'left'
        },
        {
          element: '#step4',
          intro: "Another step.",
          position: 'bottom'
        },
        {
          element: '#step5',
          intro: 'Get it, use it.'
        }
      ]
    });
  }
 
  ngOnInit() {
    this.introJS.start();
  }
 
}