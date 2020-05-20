import { Component, OnInit } from '@angular/core';
import { CandidatService } from 'src/app/services/candidat.service';
import { Router } from '@angular/router';
import { Candidat } from 'src/app/model/candidat.model';
import { MetierService } from 'src/app/services/metier.service';
import { CompetenceService } from 'src/app/services/competence.service';

@Component({
  selector: 'app-new-candidat',
  templateUrl: './new-candidat.component.html',
  styleUrls: ['./new-candidat.component.css']
})
export class NewCandidatComponent implements OnInit {
  public competences: any;
  public metiers: any;
  public candidat: Candidat;
  public message: number;


  constructor(private candidatService: CandidatService,
              private metierService: MetierService ,
              private competenceService: CompetenceService,
              private router: Router) {
    this.candidat = new Candidat();
  }

  ngOnInit() {
    this.showCompetences();
    this.showMetiers();
  }
  
  onSaveCandidat() {
    this.candidatService.addCandidat(this.candidat)
      .subscribe(res => {
        this.message = 1;
      //  this.router.navigateByUrl('/candidats');
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