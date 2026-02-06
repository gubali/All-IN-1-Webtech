import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @Input('highLight') isHighLight = true;
  constructor() {}
@HostBinding('style.backgroundColor') backgroundColor!:string;
  @HostBinding('className')
  get cssClass() {
    return 'highLight';
  }
  @HostBinding('attr.disabled')
  get disabled() {  
    return "true";
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') onMouseleave() {
    this.backgroundColor = 'transparent';
  }
  
}
