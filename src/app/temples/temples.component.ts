import { Component, OnInit, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { temples } from '../data/temple-data';
import { templesData } from '../data/data';
import { FormControl } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ModuleService } from '../service/module.service';
import { TempleInfoModalComponent } from '../temple-info-modal/temple-info-modal.component';
@Component({
  selector: 'app-temples',
  templateUrl: './temples.component.html',
  styleUrls: ['./temples.component.css'],
  providers: [],
})
export class TemplesComponent implements OnInit {
  templesData: temples[] = [];
  filteredData: temples[] = [];
  galleryData: string[] = [];
  faSearch = this.moduleService.faSearch;
  filter = false;
  items: MenuItem[] = [];
  inputControl = new FormControl('');
  found: boolean = true;
  private modalService = inject(NgbModal);
  constructor(
    // private modalService: NgbModal,
    private moduleService: ModuleService
  ) {}

  ngOnInit(): void {
    this.sortData();
    this.initializeItems();
  }

  loading(tag: string) {
    this.filter = true;
    setTimeout(() => {
      this.filterTemple(tag);
      this.filter = false;
    }, 1000);
  }
  open(temple: temples) {
    const modalRef = this.modalService.open(TempleInfoModalComponent, {
      fullscreen: true,
      scrollable: true,
    });
    modalRef.componentInstance.temple = temple;
  }

  sortData() {
    this.templesData = templesData.sort((a, b) => {
      const nameA = a.basic.name.toLowerCase();
      const nameB = b.basic.name.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
  initializeItems() {
    this.items = [
      {
        label: 'All',
        command: () => {
          this.loading('');
        },
      },
      {
        label: '12 Jyotirlingas',
        command: () => {
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
          this.templesData = this.filteredData;
        } else this.found = false;
      } else {
        this.templesData = templesData;
      }
    }
  }
  filterTemple(tag: string) {
    this.filteredData = templesData.filter((data) => {
      const num = parseInt(data.tag[1]);
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
    this.templesData = this.filteredData;
  }
}
