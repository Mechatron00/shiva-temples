import {
  Component,
  ElementRef,
  OnInit,
  inject,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { temples } from '../data/temple-data';
import { templesData } from '../data/data';
import { FormControl } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ModuleService } from '../service/module.service';
import { TempleInfoModalComponent } from '../temple-info-modal/temple-info-modal.component';
import * as temple from 'src/app/temples.json';
import { TemplesService } from '../service/temples.service';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-temples',
  templateUrl: './temples.component.html',
  styleUrls: ['./temples.component.css'],
  providers: [],
})
export class TemplesComponent implements OnInit {
  templesData: temples[] = templesData;
  filteredData: temples[] = [];
  galleryData: string[] = [];
  faSearch = this.moduleService.faSearch;
  isFilter = false;
  isLoading =false;

  items: MenuItem[] = [];
  inputControl = new FormControl('');
  found: boolean = true;
  private modalService = inject(NgbModal);
  constructor(
    // private modalService: NgbModal,
    private moduleService: ModuleService,
    private templesService: TemplesService,
    private el: ElementRef
  ) {}

  startIndex: number = 0;
  endIndex: number = 5;
  totalRecords = templesData.length;

  ngOnInit(): void {
    this.getSortedTemples(this.startIndex, this.endIndex);
    this.initializeItems();
  }

  loading(tag: string) {
    this.isLoading = true;
    setTimeout(() => {
      this.filterTemple(tag);
      this.isLoading = false;
    }, 1000);
   
  }
  open(temple: temples) {
    const modalRef = this.modalService.open(TempleInfoModalComponent, {
      fullscreen: true,
      scrollable: true,
    });
    modalRef.componentInstance.temple = temple;
  }
  getSortedTemples(startIndex: number, endIndex: number) {
    this.filteredData = (this.templesData.sort((a, b) => {
      const nameA = a.basic.name.toLowerCase();
      const nameB = b.basic.name.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })).slice(startIndex, endIndex);
  
    //this.filteredData = this.templesData.slice(startIndex, endIndex);
  }
  initializeItems() {
    this.items = [
      {
        label: 'All',
        command: () => {
          this.isFilter=false;
          this.getSortedTemples(this.startIndex, this.endIndex);
         //this.loading('');
        },
      },
      {
        label: '12 Jyotirlingas',
        command: () => {
          this.isFilter=true;
          this.loading('jyotirlinga');
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

  searchTemple() {
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

        if (this.filteredData.length > 0) {
          this.found = true;
          // this.templesData = this.filteredData;
        } else this.found = false;
      } else {
        // this.templesData = templesData;
      }
    }
  }
  filterTemple(tag: string) {
    this.filteredData = this.templesData.filter((data) => {
      return data.tag[0].toLowerCase().match(tag.toLowerCase())?.sort();
    });
    this.filteredData = this.filteredData.sort((a, b) => {
      const nameA = a.tag[1];
      const nameB = b.tag[1];
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    // this.templesData = this.filteredData;
  }

  nextPage() {
    if (this.endIndex <= templesData.length) {
      this.startIndex = this.endIndex;
      this.endIndex = this.endIndex + 5;
      this.getSortedTemples(this.startIndex, this.endIndex);
      
    }
  }
  prevPage() {
    if (this.startIndex >= 5) {
      this.startIndex = this.startIndex - 5;
      this.endIndex = this.endIndex - 5;
      this.getSortedTemples(this.startIndex, this.endIndex);
     
    }
  }

  scrollToTemplesList() {
    console.log('scrolling called...');
    
    window.scrollTo({
      top: 500,
  
      behavior: 'smooth',
    });
  }
}
