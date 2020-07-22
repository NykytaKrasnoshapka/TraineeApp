import { Directive, ElementRef, Renderer2, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MessageService } from '../services/message.service ';
import { Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') status: boolean;

  messages: any[] = [];
  subscription: Subscription;


  constructor(private el: ElementRef, private renderer: Renderer2, private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message && el.nativeElement.id == message) {
        //el.nativeElement.style.backgroundColor = 'yellow';
        const child = document.createElement('INPUT');
        child.setAttribute("type", "checkbox");

        this.renderer.appendChild(this.el.nativeElement, child);
      }
    });
  }
    //constructor(private elementRef: ElementRef<boolean>, private renderer: Renderer2, @Inject(DOCUMENT) private document) { }

  //ngOnInit() {
  //  if (this.elementRef.nativeElement) {
  //    const child = document.createElement('checkbox');
  //    this.renderer.appendChild(this.elementRef.nativeElement, child);
  //  }
  //} 
}
