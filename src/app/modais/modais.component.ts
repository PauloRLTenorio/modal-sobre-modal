import { Component, AfterViewInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-explicit-any, sonarjs/no-var
declare var bootstrap: any;

@Component({
  selector: 'app-modais',
  templateUrl: './modais.component.html',
  styleUrls: ['./modais.component.css']
})
export class ModaisComponent implements AfterViewInit {
  modal1: any;
  modal2: any;

  ngAfterViewInit(): void {
    this.modal1 = new bootstrap.Modal(document.getElementById('modal1'));
    this.modal2 = new bootstrap.Modal(document.getElementById('modal2'));
  }

  abrirModal1() {
    this.modal1.show();
  }

  abrirModal2() {
    this.modal2.show();
  }
}