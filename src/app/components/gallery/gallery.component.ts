import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  actualPhoto: number = 0;
  @Input() galleryName: string;
  @Input() photos: string[];
  constructor() {}

  ngOnInit(): void {}
  changePhoto(position?: number) {
    if (position >= 0 && position < this.photos.length) {
      this.actualPhoto = position;
      console.log(this.actualPhoto);
    }
  }
}
