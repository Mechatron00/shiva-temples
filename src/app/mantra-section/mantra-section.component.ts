import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { mantras } from '../data/mantras';

@Component({
  selector: 'app-mantra-section',
  templateUrl: './mantra-section.component.html',
  styleUrls: ['./mantra-section.component.css']
})
export class MantraSectionComponent implements OnInit{

  mantras:mantras[]=[];
   
   
    

  closeResult = '';

	constructor(private modalService: NgbModal) {}
	ngOnInit(): void {
		this.mantras  = mantras;
	}

	open(content:any) {
		this.modalService.open(content, { fullscreen:true }).result.then(
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
}
