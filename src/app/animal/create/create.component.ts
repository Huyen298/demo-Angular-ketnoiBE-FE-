import { Component, OnInit } from '@angular/core';
import {Animal} from '../../model/animal';
import {AnimalService} from '../../service/animal.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  animal: Animal = {};
  animalForm: FormGroup = new FormGroup({
    // id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    color: new FormControl(),
    price: new FormControl()
  });

  constructor(private animalService: AnimalService, private router: Router) { }

  ngOnInit() {
  }

  // Template Form
  // createNew(form) {
  //   this.animalService.create(form.value);
  //   form.resetForm();
  //   this.animalService.create(this.animal);
  //   // làm mới lại các ô input
  //   this.animal = {};
  //   // khi submit thì quay lại trang danh sách
  //   this.router.navigateByUrl('/');
  // }

// Reactive
  createAnimalUsingReactiveForm() {
    this.animalService.create(this.animalForm.value).subscribe(() =>{
      alert("Tạo mới thành công");
      this.animalForm.reset();
    });
  }

  // lay ra form control
  // get idControl() {
  //   return this.animalForm.get('id');
  // }


}
