import { Component } from '@angular/core';

@Component({
  selector: 'app-best-selling-books',
  templateUrl: './best-selling-books.component.html',
  styleUrls: ['./best-selling-books.component.css']
})
export class BestSellingBooksComponent {
  bestSellingBooks = [
    { title: 'Single with a Difference', author: 'Faith Oyedepo', rating: 5, image: './assets/singleDiff.jpg', height: 285, width: 177, background: '#D9D9D9' },
    { title: 'Single Ready and waiting', author: 'Tanika Chambers', rating: 5, image: './assets/sr.jpg', height: 285, width: 177, background: '#FFF6D7' },
    { title: 'The Single', author: 'Russelyn Williams', rating: 5, image: './assets/singleChristian.jpg', height: 285, width: 177, background: '#F3D6D6' },
    { title: 'Beauty Uncertainty', author: 'Mandy Hale', rating: 5, image: './assets/beautyUncertain.jpg', height: 285, width: 177, background: '#FFF6D7' },
    // Add more books as needed
  ];

  awardWinningBooks = [
    { title: 'Things Fall Apart', author: 'Chinua Achebe', rating: 5, image: './assets/fall-apart.jpg', height: 279, width: 181, background: '#FFF6D7' },
    { title: 'Half of a Yellow Sun', author: 'Chimamanda Ngozi', rating: 4, image: './assets/half-yellow.jpg', height: 279, width: 181, background: '#D9D9D9' },
    { title: 'Akata Warrior', author: 'Nnedi Okorafor', rating: 4, image: './assets/akata.jpg', height: 279, width: 181, background: '#F3D6D6' },
    { title: 'Uyai', author: 'Abasiono Timothy', rating: 4, image: './assets/uyai.jpg', height: 285, width: 177, background: '#D9D9D9' },
    // Add more books as needed
  ];

  teensChildrenBooks = [
    { title: 'The Lion Witch Wardrope', author: 'C.S Lewis', rating: 3, image: './assets/lion.jpg', height: 224, width: 224, background: '#F3D6D6' },
    { title: 'Dragon Promise', author: 'Elizabeth Lims', rating: 4, image: './assets/dragon.jpg', height: 224, width: 224, background: '#FFD3C8' },
    { title: 'Sorcery of Thorns', author: 'Margaret Roger', rating: 3, image: './assets/sorcery.jpg', height: 224, width: 224, background: '#D9D9D9' },
    { title: 'The Beauty', author: 'Gabrielle Suza', rating: 5, image: './assets/beauty-gabriel.jpg', height: 285, width: 177, background: '#FFF6D7' },
    // Add more books as needed
  ];
}
