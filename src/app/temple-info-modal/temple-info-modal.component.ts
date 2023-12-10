import { Component, Input, OnInit, inject } from '@angular/core';
import { temples } from '../data/temple-data';
import {
  ModalDismissReasons,
  NgbActiveModal,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { ModuleService } from '../service/module.service';
@Component({
  selector: 'app-temple-info-modal',
  templateUrl: './temple-info-modal.component.html',
  styleUrls: ['./temple-info-modal.component.css'],
})
export class TempleInfoModalComponent implements OnInit {
  [x: string]: any;
  activeModal = inject(NgbActiveModal);

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

  @Input() temple!: temples;

  constructor(
    private moduleService: ModuleService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {}

  closeModal(reason: any) {
    this.modalService.dismissAll(this.getDismissReason(reason));
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
}
