import { Component } from '@angular/core';

@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.css']
})
export class ProgrammingComponent {
  programming = [
    { title: 'Java for Beginner', author: 'Mustopha Abdulkareem', rating: 5, image: './assets/java-beginner.jpg', height: 285, width: 177, background: '#D9D9D9' },
    { title: 'Angular JS for Beginner', author: 'Tosin Adewale', rating: 5, image: './assets/angular-beginner.jpg', height: 285, width: 177, background: '#FFF6D7' },
    { title: 'JavaScript for Beginner', author: 'Mustopha Abdulkareem', rating: 5, image: './assets/js-beginner.jpg', height: 285, width: 177, background: '#F3D6D6' },
    { title: 'TypeScript for Begineer', author: 'Tosin Adewale', rating: 5, image: './assets/typescript-beginner.png', height: 285, width: 177, background: '#FFF6D7' },
    { title: 'Java Programming', author: 'James Gosling OC', rating: 5, image: './assets/java.jpg', height: 285, width: 177, background: '#D9D9D9' },
    { title: 'Python Programming', author: 'Guido van Rossum', rating: 5, image: './assets/python.jpg', height: 285, width: 177, background: '#FFF6D7' },
    { title: 'React JS', author: 'Jordan Walke', rating: 5, image: './assets/reactjs.png', height: 285, width: 177, background: '#F3D6D6' },
    { title: 'PHP Programming', author: 'Rasmus Lerdorf', rating: 5, image: './assets/php.png', height: 285, width: 177, background: '#FFF6D7' },
    { title: 'Angular JS for Beginner', author: 'Tosin Adewale', rating: 5, image: './assets/angular-beginner.jpg', height: 285, width: 177, background: '#FFF6D7' },
    { title: 'JavaScript for Beginner', author: 'Mustopha Abdulkareem', rating: 5, image: './assets/js-beginner.jpg', height: 285, width: 177, background: '#F3D6D6' },
    { title: 'TailwindCSS for Beginner', author: 'Tosin Adewale', rating: 5, image: './assets/tailwind.png', height: 285, width: 177, background: '#F3D6D6' },
    { title: 'Basic principles of programming', author: 'Mustopha Abdulkareem', rating: 5, image: './assets/basic-principle.jpg', height: 285, width: 177, background: '#F3D6D6' },

    // Add more books as needed
  ];
}
