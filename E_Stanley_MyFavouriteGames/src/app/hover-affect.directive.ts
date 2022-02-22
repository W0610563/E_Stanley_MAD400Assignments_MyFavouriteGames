import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input() affect?: string;
  @Input() firstOrLast?: boolean;
  originalBorder: string;

  constructor(private elm: ElementRef) {
    this.originalBorder = this.elm.nativeElement.style.border;
  }

  @HostListener("mouseenter") onMouseEnter() {
    if (this.affect == "textDecoration") {
      this.elm.nativeElement.style.textDecoration = "underline";
    }
    else if (this.affect == "fontWeight") {
      this.elm.nativeElement.style.fontWeight = "bold";
    }
    else if (this.affect == "border" && this.firstOrLast) {
      this.elm.nativeElement.style.border = "3px solid rgba(20, 20, 20, 0.3)";
    }
  }
  @HostListener("mouseleave") onMouseLeave() {
    if (this.affect == "textDecoration") {
      this.elm.nativeElement.style.textDecoration = "initial";
    }
    else if (this.affect == "fontWeight") {
      this.elm.nativeElement.style.fontWeight = "normal";
    }
    else if (this.affect == "border" && this.firstOrLast) {
      this.elm.nativeElement.style.border = this.originalBorder;
    }
  }
}
