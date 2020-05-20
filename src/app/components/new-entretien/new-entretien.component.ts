import { Component, OnInit } from '@angular/core';
import { EntretienService } from 'src/app/services/entretien.service';
import { Router } from '@angular/router';
import { Entretien } from 'src/app/model/entretien.model';
import { CandidatService } from 'src/app/services/candidat.service';
import { ResponsableService } from 'src/app/services/responsable.service';


@Component({
  selector: 'app-new-entretien',
  templateUrl: './new-entretien.component.html',
  styleUrls: ['./new-entretien.component.css']
})
export class NewEntretienComponent implements OnInit {
  public candidats: any;
  public responsables: any;
  public entretien: Entretien;
  public message: number;

  constructor(private entretienService: EntretienService,
              private candidatService: CandidatService,
              private responsableService: ResponsableService,
              private router: Router) {

    this.entretien = new Entretien();
  }

  ngOnInit() {
    this.showCandidats();
    this.showResponsables();
  }
  onSaveEtretien(){
    this.entretienService.addEntretien(this.entretien)
      .subscribe(res => {
        this.message = 1;
      }, err => {
        this.message = 0;
      }
      )
  }
  showCandidats() {
    this.candidatService.allCandidats()
      .subscribe(data => {
        this.candidats = data;
      })
  }
  showResponsables() {
    this.responsableService.allResponsables()
      .subscribe(data => {
        this.responsables = data;
      })
  }

}


