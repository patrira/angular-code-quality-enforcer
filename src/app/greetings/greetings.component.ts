import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `<h1>Hello, World!</h1>`,
  styles: ['h1 { color: blue; }']
})
export class HelloWorldComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('HelloWorldComponent initialized');
  }
}
