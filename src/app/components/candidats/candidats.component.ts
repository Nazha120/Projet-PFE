import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../../services/candidat.service';
import { Router } from '@angular/router';
import { MetierService } from 'src/app/services/metier.service';
import { CompetenceService } from 'src/app/services/competence.service';

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.css']
})
export class CandidatsComponent implements OnInit {

  candidats: any;
  public size: number = 5;
  public currentPage: number = 0;
  public totalPages: number;
  public pages: Array<number>;
  public currentKeyword: string = "";
  
  constructor(private candidatService: CandidatService,
              private metierService: MetierService ,
              private competenceService: CompetenceService,
              private router: Router) { }

  ngOnInit() {
   this.chercherCandidat();
  }

  onChercher(form: any) {
    this.currentPage = 0;
    this.currentKeyword = form.keyword;
    this.chercherCandidat();

  }

  chercherCandidat() {
    this.candidatService.getCandidats(this.currentKeyword, this.currentPage, this.size)
      .subscribe(data => {
        this.pages = new Array<number>(data["totalPages"]);
        this.candidats = data;
      }, err => {
        console.log(err);
      })

    }
  onPageCandidat(i) {
    this.currentPage = i;
    this.chercherCandidat();
  }
  onEditCandidat(id: number) {
    //this.router.navigateByUrl('/edit-candidat/' + btoa(id));
   this.router.navigateByUrl('/edit-candidat/' + id);
  }

  onDeleteCandidat(id: number) {
    this.candidatService.deleteCandidat(id)
      .subscribe(data => {
        this.chercherCandidat();
      }, err => {
        console.log(err);
      }
      )
  }
}
