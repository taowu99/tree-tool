import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggle() {
        console.log(this.isOpen+"..s.");
        this.isOpen = !this.isOpen;
    }
}