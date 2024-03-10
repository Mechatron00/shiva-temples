import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../service/module.service';
import { temples } from '../data/temple-data';
import { TemplesService } from '../service/temples.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temple',
  templateUrl: './temple.component.html',
  styleUrls: ['./temple.component.css']
})
export class TempleComponent implements OnInit {

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

  temple!: temples
  constructor(private moduleService: ModuleService,
    private templeService:TemplesService,
    private router:Router
    ) { }

  ngOnInit() {
    this.temple=this.templeService.temple
    if (!this.temple) {
      this.router.navigate(['temples'])
    }
  }

}
