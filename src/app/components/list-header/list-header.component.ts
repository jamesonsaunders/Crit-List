import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss'],
})
export class ListHeaderComponent implements OnInit {
  @Input('title') title: string;
  @Input('items') items: any[];
  @Input('loading') loading: boolean;
  @Output('add') add = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}
}
