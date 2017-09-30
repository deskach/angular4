import {AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterContentInit {
  @Input() name: string;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  ngOnInit() {
    console.log('ngOnInit: ' + this.paragraph.nativeElement.textContent);
  }


  ngAfterContentInit() {
    console.log('ngAfterContentInit: ' + this.paragraph.nativeElement.textContent);
  }
}
