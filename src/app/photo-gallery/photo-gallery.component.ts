import { Component, Input, OnInit } from '@angular/core';
import { temples } from '../data/temple-data';
import { FormControl } from '@angular/forms';
import { templesData } from '../data/data';
import {
  animate,
  style,
  transition,
  trigger,
  AnimationEvent,
} from '@angular/animations';
import { ModuleService } from '../service/module.service';
@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css'],
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({ transform: 'scale(0.5)' }),
        animate('150ms', style({ transform: 'scale(1)' })),
      ]),
      transition('visible => void', [
        style({ transform: 'scale(1)' }),
        animate('150ms', style({ transform: 'scale(0.5)' })),
      ]),
    ]),

    trigger('animation2', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('50ms', style({ opacity: 0.8 })),
      ]),
    ]),
  ],
})
export class PhotoGalleryComponent implements OnInit {
  templesData: temples[] = [];
  previewImage = false;
  showMask = false;
  @Input() galleryData: string[] = [];
  currentLightboxImage: string = this.galleryData[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;
  num = 0;
  faClose = this.moduleService.faClose
  constructor(private moduleService:ModuleService) { }

  ngOnInit() {
  
    
  }
  onPreviewImage(index: number) {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightboxImage = this.galleryData[index];
    this.num = index;
  }

  onAnimationEnd(event: AnimationEvent) {
    if (event.toState === 'void') {
      this.showMask = false;
    }
  }
  prev() {
    
    
    this.currentIndex = this.currentIndex - 1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.galleryData.length - 1;
    }
    this.currentLightboxImage = this.galleryData[this.currentIndex];
  }
  next() {
    
    
    this.currentIndex = this.currentIndex + 1;
    if (this.currentIndex > this.galleryData.length - 1) {
      this.currentIndex = 0;
    }
    this.currentLightboxImage = this.galleryData[this.currentIndex];
  }
  onClosePreview() {
    this.previewImage = false;
  }
}


