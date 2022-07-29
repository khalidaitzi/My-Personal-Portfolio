import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Project} from '../models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date: Date = new Date();
  projects: Project[] = [
    {
      name: 'GreenHouse', image: 'assets/gr.png', desc: 'This was the first project  I released with arduino. Initially we ' +
        'made this project for the end of module project, In addition to the automation of the environment, a domotic greenhouse'+
        'allows the automation of fertilizer administration and irrigation automation. Furthermore, by monitoring environmental'+
        'factors in a real-time way (firebase), there is the possibility of having an immediate intervention, avoiding crop problems.'+
        'Last and not least feature is having the ability to control everything from home from your  Smartphone. ' +
        'use.', demo: '', source: ''
    },
    {
      name: 'Lock and control access to halls, Arduino and RfID', image: 'assets/rfd.jpg', desc: 'This is a flutter library I made for an app' +
        ' I was working on. I needed a date picker as a timeline. I searched online for any prebuilt library that could do something that' +
        ' I wanted, but couldn\'t find any! So I decided to build a library of my own.',
      demo: '', source: ''
    },
    {
      name: 'Search for Traineeship', image: 'assets/tra.png', desc: 'Another spring boot project  to create a web site for ' +
        'Finding and applying for internships and fresher jobs that you want is now even easier free web app for students and freshers.' +
        '', demo: '', source: ''
    },
    {
      name: 'Animal housing web App', image: 'assets/cat.jpg', desc: '' +
        ' I was working on it.  ' +
        ' ' +
        '.', demo: '',
      source: ''
    },
    {
      name: 'Employees Management app', image: 'assets/ep.jpg', desc: 'This is a full stack app  created using spring boot and angular.'+
       'This app is is a broad term that encompasses every aspect of managing, developing, and interacting with your employees.' +
        '',
      demo: '', source: ''
    },
    {
      name: 'News Web app', image: 'assets/nw.jpg', desc: '. I made this ' +
        'dynamic website using TypeScript with Angular Framework and java with spring framework. source:https://github.com/khalidaitzi/NewsWebSite',
      demo: '', source: ''
    },
    {
      name: 'geolocation of hosts web site', image: 'assets/gb.jpg', desc: 'Web Site URL: https://inconsiderable-radi.000webhostapp.com/  ' +
        'Using wordpress, javascript,html,css, mapbox',
      demo: '', source: ''
    },
  ];

  showScrollButton = false;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event:any) {
    this.showScrollButton = window.pageYOffset > 500;
  }

  moveToTop() {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    window.scroll()
  }
}
