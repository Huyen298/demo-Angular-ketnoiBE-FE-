import { Component, OnInit } from '@angular/core';
import {AnimalService} from '../../service/animal.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  animalForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    color: new FormControl(),
    price: new FormControl()
  })

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
  delete(){
    this.animalService.delete(this.idControl.value).subscribe(()=> {

      this.router.navigate(['/']);
    }, error => {console.log(error)
    })
  }
}
