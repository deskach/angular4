import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'white';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  @Input() highlightColor: string = 'blue';
  @Input('appBetterHighlight') value: string = '';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.mouseleave(null);

    console.log(`The value bound to the directive itself is ${this.value}`);
  }

  @HostListener('mouseenter')
  mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', this.defaultColor);
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', this.highlightColor);
    this.backgroundColor = this.defaultColor;
  }
}
