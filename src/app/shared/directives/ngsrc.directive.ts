import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appNgSrc]',
  standalone: true,
})
export class NgSrcDirective implements OnChanges {
  @Input() appNgSrc: string | undefined;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}
  ngOnChanges(): void {
    if (this.appNgSrc) {
      this.renderer.setAttribute(this.el.nativeElement, 'src', this.appNgSrc);
    } else {
      this.renderer.removeAttribute(this.el.nativeElement, 'src');
    }
  }
}
