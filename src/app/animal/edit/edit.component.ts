import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AnimalService} from '../../service/animal.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  animalForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    color: new FormControl(),
    price: new FormControl()
  });

  constructor(private animalService: AnimalService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      const id = paramMap.get('id')
      this.getAnimalById(id);
    })
  }


  ngOnInit() {
  }

  getAnimalById(id){
    this.animalService.findById(id).subscribe((animal)=>{
      this.animalForm = new FormGroup({
        id: new FormControl(animal.id),
        name: new FormControl(animal.name),
        color: new FormControl(animal.color),
        price: new FormControl(animal.price)
      });
    })
  }
  get idControl() {
    return this.animalForm.get('id');
  }

  update(){
    this.animalService.update(this.idControl.value, this.animalForm.value).subscribe(()=>{
      alert("Thanh cong");
    })
  }
}

