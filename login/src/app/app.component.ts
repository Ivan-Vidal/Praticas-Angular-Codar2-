import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  canShow: boolean;
  @Input() userName: string;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
