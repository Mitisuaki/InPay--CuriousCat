import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @ViewChild('myModal') myModal: ElementRef;
  constructor() { }
  ngOnInit(): void {
  }
  openModal() {
    this.myModal.nativeElement.style.display = 'block';
  }
  closeModal() {
    this.myModal.nativeElement.style.display = 'none';
  }
}
