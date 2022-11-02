import { Component, OnInit } from '@angular/core';
import { INotes } from '../interfaces/inotes';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss'],
})
export class Page3Component implements OnInit {
  title: string = 'TO Do List';

  notes: INotes[] = [
    { name: 'buttare il vetro', id: 1 },
    { name: 'fare la spesa', id: 2 },
    { name: 'fare la corte', id: 3 },
    { name: 'leggere le email', id: 4 },
    { name: 'raccogliere le olive', id: 5 },
  ];

  constructor() {}

  ngOnInit(): void {}
  removeNote(obj: INotes): void {
    let i = this.notes.indexOf(obj);
    this.notes.splice(i, 1);
    alert('hai rimosso la nota: ' + obj.id);
  }
}
