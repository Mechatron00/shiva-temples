import { Component, Input, OnInit } from '@angular/core';
import { PdfServiceService } from './pdf-service.service';
import { mantras } from '../data/mantras';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pdf-reader',
  templateUrl: './pdf-reader.component.html',
  styleUrls: ['./pdf-reader.component.css']
})
export class PdfReaderComponent implements OnInit {
 mantra!:mantras;
 src:string =''
 
  constructor(private pdfService:PdfServiceService,
    ) { }

  ngOnInit() {
    this.mantra = this.pdfService.data;
    this.src = this.mantra.src
  }
  
}
