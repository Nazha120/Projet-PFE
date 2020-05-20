import { Component, OnInit } from '@angular/core';
import { EntretienService } from 'src/app/services/entretien.service';
import { CandidatService } from 'src/app/services/candidat.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Entretien } from 'src/app/model/entretien.model';
import { ResponsableService } from 'src/app/services/responsable.service';

@Component({
  selector: 'app-edit-entretien',
  templateUrl: './edit-entretien.component.html',
  styleUrls: ['./edit-entretien.component.css']
})
export class EditEntretienComponent implements OnInit {

  public currentEntretien : Entretien;
  public candidats: any;
  public responsables: any;
  public candidat: any = undefined;
  public responsable: any = undefined;
  public id: number;
  public message: number;


  constructor(private entretienService: EntretienService,
              private candidatService: CandidatService,
              private responsableService: ResponsableService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
              
              this.currentEntretien = new Entretien();
              this.showCandidats()
              this.showResponsables();
  }

  ngOnInit() {
    
    this.id = this.activatedRoute.snapshot.params.id;
    this.entretienService.getEntretien(this.id)
      .subscribe(data => {
        this.currentEntretien = data;
       for (var i = 0; i < this.candidats.length; i++) {
          if (this.candidats[i].id === this.currentEntretien.candidat.id)
            this.candidat = this.candidats[i];
        }
      }) 

  }
  
  updatedate(event) {

        this.currentEntretien.date = new Date(event);
    }
  onUpdateEntretien() {
    this.currentEntretien.candidat = this.candidat;
    this.entretienService.updateEntretien(this.currentEntretien)
      .subscribe(data => {
        this.message = 1;
      }, err => {
        this.message = 0;
      })
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
