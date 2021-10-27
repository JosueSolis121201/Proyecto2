import { Component, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = new Item();
  constructor() { }


  
  

  ngOnInit(): void {
  }
  onDelete(item : Item){
    
  }

  onToggle(item: Item){
    item.completed =!item.completed;
   
  }
}
