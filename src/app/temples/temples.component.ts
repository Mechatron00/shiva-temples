import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { temples } from '../data/temple-data';
import { templesData } from '../data/data';
import {
  faAudioDescription,
  faCalendarDay,
  faGlobe,
  faGopuram,
  faLocationDot,
  faMapLocationDot,
  faMountainSun,
  faPhone,
  faPlane,
  faRoad,
  faSearch,
  faTrain,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import {
  animate,
  style,
  transition,
  trigger,
  AnimationEvent,
} from '@angular/animations';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FormControl } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { jyotirlingas } from '../data/jyotirling';
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
  templesData: temples[] = [];
  filteredData: temples[] = [];
  previewImage = false;
  showMask = false;

  galleryData: string[] = [];

  faClose = faXmark;
  faRoad = faRoad;
  faTrain = faTrain;
  faPlane = faPlane;
  faClock = faClock;
  faLocation = faLocationDot;
  faPhone = faPhone;
  faMapLocation = faMapLocationDot;
  faGopuram = faGopuram;
  faCreator = faUser;
  faCalendar = faCalendarDay;
  faInscriptions = faAudioDescription;
  faElevation = faMountainSun;
  faGlobe = faGlobe;
  faSearch = faSearch;

  currentLightboxImage: string = this.galleryData[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;
  num = 0;

  items: MenuItem[] = [];
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.templesData = templesData.sort((a, b) => {
      const nameA = a.basic.name.toUpperCase();
      const nameB = b.basic.name.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    this.items = [
     
      {
        
        label:'12 Jyotirlingas',
        
       

        command: () => {
          this.templesData = jyotirlingas;
        },
      },
      {
       
        label:'Pancha Mahabhooth',

        command: () => {},
      },
      {
        label:'Pancharaam',
        command: () => {},
      },
      {
        label:'Pancha Sabha',
        command: () => {},
      },
      {
        label:'Ashth Veeratta',
        command: () => {},
      },
      {
        label:'Char Shani Parihara',
        command: () => {},
      },
   
    ];
  }

  open(content: any) {
    this.modalService
      .open(content, { fullscreen: true, scrollable: true })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  closeModal(reason: any) {
    this.modalService.dismissAll(reason);
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
    this.num = index;
  }

  onAnimationEnd(event: AnimationEvent) {
    if (event.toState === 'void') {
      this.showMask = false;
    }
  }

  onClosePreview() {
    this.previewImage = false;
  }

  inputControl = new FormControl('');
  found: boolean = true;
  filterTemple() {
    if (this.inputControl.valueChanges) {
      const input: string = this.inputControl.value as string;

      if (input) {
        this.filteredData = templesData.filter((data) => {
          return (
            data.basic.name.toLowerCase().match(input.toLowerCase()) ||
            data.basic.location.dist.toLowerCase().match(input.toLowerCase()) ||
            data.basic.location.state.toLowerCase().match(input.toLowerCase())
          );
        });

        if (this.filteredData.length === 0) {
          this.found = false;
        } else this.found = true;
        this.templesData = this.filteredData;
      } else {
        this.found = true;
        this.templesData = templesData;
      }
    }
  }
}
