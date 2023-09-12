import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { temples } from '../data/temple-data';
import { templesData } from '../data/data';
import {  faLocationDot, faMapLocationDot, faPhone, faPlane, faRoad, faTrain, faXmark } from '@fortawesome/free-solid-svg-icons';
import {
	animate,
	style,
	transition,
	trigger,
	AnimationEvent,
  } from '@angular/animations';
import { faClock } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-temples',
  templateUrl: './temples.component.html',
  styleUrls: ['./temples.component.css'],
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
export class TemplesComponent implements OnInit {
  active = 'top';
  closeResult = '';
  isCollapsed = false;
  templesData!:temples[];
  previewImage = false;
  showMask = false;

  galleryData: string[] = [];
 
  faClose = faXmark;
  faRoad = faRoad;
  faTrain =faTrain;
  faPlane = faPlane;
  faClock = faClock;
  faLocation = faLocationDot;
  faPhone = faPhone;
  faMapLocation = faMapLocationDot
  currentLightboxImage: string = this.galleryData[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;
  num=0
	constructor(private modalService: NgbModal) {}
  ngOnInit(): void {
   this.templesData = templesData
  
   
  }

	open(content:any) {
		this.modalService.open(content, {   fullscreen: true, scrollable: true }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
  
	onPreviewImage(index: number) {
		this.showMask = true;
		this.previewImage = true;
		this.currentIndex = index;
		this.currentLightboxImage = this.galleryData[index];
		this.num=index;
	  }
	
	  onAnimationEnd(event: AnimationEvent) {
		if (event.toState === 'void') {
		  this.showMask = false;
		}
	  }
	
	  onClosePreview() {
		this.previewImage = false;
	  }
	
}
