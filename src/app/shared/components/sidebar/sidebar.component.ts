import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
  handleSidebarHideToggle = () => {
    this.isExpanded = false;
  };

  headingName:any
  over(news:any){
    // console.log("Mouseover called");
    this.headingName = document.getElementById(news);
    this.headingName.style.display = 'block';
  }
  
  out(news:any){
    this.headingName = document.getElementById(news);
    this.headingName.style.display = 'none';
    // console.log("Mouseout called");
  }
}
