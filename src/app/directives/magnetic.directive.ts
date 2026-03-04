import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMagnetic]',
  standalone: true,
})
export class MagneticDirective {
  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2,
  ) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const { clientX, clientY } = event;
    const { left, top, width, height } = this.el.nativeElement.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    // Pull element towards cursor (30% of distance)
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `translate(${deltaX * 0.3}px, ${deltaY * 0.3}px)`,
    );
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate(0, 0)');
  }
}
