import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { temples } from '../data/temple-data';
import { templesData } from '../data/data';
import { FormControl } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { jyotirlingas } from '../data/jyotirling';
import { ModuleService } from '../service/module.service';
@Component({
  selector: 'app-temples',
  templateUrl: './temples.component.html',
  styleUrls: ['./temples.component.css'],
  providers: [],
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

  faClose = this.moduleService.faClose;
  faRoad = this.moduleService.faRoad;
  faTrain = this.moduleService.faTrain;
  faPlane = this.moduleService.faPlane;
  faClock = this.moduleService.faClock;
  faLocation = this.moduleService.faLocation;
  faPhone = this.moduleService.faPhone;
  faMapLocation = this.moduleService.faMapLocation;
  faGopuram = this.moduleService.faGopuram;
  faCreator = this.moduleService.faCreator;
  faCalendar = this.moduleService.faCalendar;
  faInscriptions = this.moduleService.faInscriptions;
  faElevation = this.moduleService.faElevation;
  faGlobe = this.moduleService.faGlobe;
  faSearch = this.moduleService.faSearch;

  currentLightboxImage: string = this.galleryData[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;
  num = 0;
  filter = false;
  items: MenuItem[] = [];
  constructor(
    private modalService: NgbModal,
    private moduleService:ModuleService
  ) {}

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
        label: 'All',
        command: () => {
          this.loading(templesData);  
        },
      },
      {
        label: '12 Jyotirlingas',
        command: () => {
          this.loading(jyotirlingas)
        },
      },
      // {
      //   label: 'Pancha Mahabhooth',

      //   command: () => {},
      // },
      // {
      //   label: 'Pancharaam',
      //   command: () => {},
      // },
      // {
      //   label: 'Pancha Sabha',
      //   command: () => {},
      // },
      // {
      //   label: 'Ashth Veeratta',
      //   command: () => {},
      // },
      // {
      //   label: 'Char Shani Parihara',
      //   command: () => {},
      // },
    ];
  }

  loading(data:temples[]){
    this.filter = true;
    setTimeout(() => {
     
      this.templesData = data;
      this.filter = false;
    }, 1000);
   
    
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
