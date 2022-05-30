import { Component, OnInit } from '@angular/core';
import {Animal} from '../../model/animal';
import {AnimalService} from '../../service/animal.service';
import {error} from 'protractor';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  animals: Animal[] = [];

  constructor(private animalService: AnimalService) {}

  ngOnInit() {
    this.getAllAnimal();
  }

  getAllAnimal() {
    this.animalService.getAll().subscribe((data) =>{this.animals = data},
      (error) =>{console.log(error);});
    // this.animals = this.animalService.getAll();
  }


}
