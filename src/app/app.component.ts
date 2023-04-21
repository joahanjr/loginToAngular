import { Component } from '@angular/core';
import {Product} from './product.model' // importamos product de la carpeta que acabamos de crear

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Joahan';
  age = 20;
  img = "https://source.unsplash.com/random";
  btnDisabled = true;
  person = {
    name : 'Joahan',
    age : 25,
    avatar : "https://source.unsplash.com/random"
  }
  box = {
    width: 100,
    height: 100,
    background: 'red',
  }
  widthImg = 10;
  products: Product[] = [
    {
      name: 'El mejor juguete',
      price : 565,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/toy.jpg',
      category: 'all',
    },    {
      name: 'bici casi nueva',
      price : 365,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/bike.jpg',
      category : '',
    },    {
      name: 'coleccion de albumnes',
      price : 34,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/album.jpg',
      category:'',
    },    {
      name: 'mis libron',
      price : 23,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/house.jpg',
      category:'',
    }
  ]
  fruits: string []= ['manzana','uva', 'mango', 'melon', 'fresa', 'durazno']
  newFruit = '';
  addName(){
    this.fruits.push(this.newFruit);
    this.newFruit = '';
  }
  deleteName(index:number){
    this.fruits.splice(index, 1);
  }

  toggleBtn(){
    this.btnDisabled = !this.btnDisabled;
  }
  increment(){
    this.person.age += 1;
  }
  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  users = {
    name: '',
    email: '',
    password: ''
  }

  onRegister(){
    console.log(this.users);
  }
}
