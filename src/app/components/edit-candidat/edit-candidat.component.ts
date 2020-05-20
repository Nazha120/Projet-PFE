import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CandidatService } from 'src/app/services/candidat.service';
import { Candidat } from 'src/app/model/candidat.model';
import { MetierService } from 'src/app/services/metier.service';
import { CompetenceService } from 'src/app/services/competence.service';

@Component({
  selector: 'app-edit-candidat',
  templateUrl: './edit-candidat.component.html',
  styleUrls: ['./edit-candidat.component.css']
})
export class EditCandidatComponent implements OnInit {

  public currentCandidat: Candidat;
  public competences: any;
  public metiers: any;
  public competence: any = undefined;
  public metier: any = undefined;
  public id: number;
  public message: number;

  constructor(private candidatService: CandidatService,
    private metierService: MetierService,
    private competenceService: CompetenceService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.currentCandidat = new Candidat();
    this.showCompetences();
    this.showMetiers();

  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.candidatService.getCandidat(this.id)
      .subscribe(data => {
        this.currentCandidat = data;
        for (var i = 0; i < this.competences.length; i++) {
          if (this.competences[i].id === this.currentCandidat.competence.id)
            this.competence = this.competences[i];
        }
        for (var j = 0; j < this.metiers.length; j++) {
          if (this.metiers[j].id === this.currentCandidat.metier.id)
            this.metier = this.metiers[j];
        } 
      })
  } 
  onUpdateCandidat() {
    this.currentCandidat.competence = this.competence;
    this.currentCandidat.metier = this.metier;
    this.candidatService.updateCandidat(this.currentCandidat)
      .subscribe(data => {
        this.message = 1;
      }, err => {
        this.message = 0;
      })
  }
  showCompetences() {
    this.competenceService.getCompetences()
      .subscribe(data => {
        this.competences = data;
      })
  }
  showMetiers() {
    this.metierService.getMetiers()
      .subscribe(data => {
        this.metiers = data;
      })
  }  
}
