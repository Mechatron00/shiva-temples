import { Injectable } from '@angular/core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
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
@Injectable({
  providedIn: 'root'
})
export class ModuleService {
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

constructor() { }

}
