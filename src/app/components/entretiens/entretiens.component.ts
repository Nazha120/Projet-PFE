import { Component, OnInit } from '@angular/core';
import { EntretienService } from 'src/app/services/entretien.service';
import { CandidatService } from 'src/app/services/candidat.service';
import { Router } from '@angular/router';
import { ResponsableService } from 'src/app/services/responsable.service';

@Component({
  selector: 'app-entretiens',
  templateUrl: './entretiens.component.html',
  styleUrls: ['./entretiens.component.css']
})
export class EntretiensComponent implements OnInit {
  entretiens: any;
  public size: number = 5;
  public currentPage: number = 0;
  public totalPages: number;
  public pages: Array<number>;
  public currentKeyword: string = "";


  constructor(private entretienService: EntretienService,
              private candidatService: CandidatService,
              private responsableService: ResponsableService,
              private router: Router) { }

  ngOnInit() {
   this.chercherEntretien();
  }

  onChercher(form: any) {
    this.currentPage = 0;
    this.currentKeyword = form.keyword;
    this.chercherEntretien();

  }
  chercherEntretien() {
    this.entretienService.getEntretiens(this.currentKeyword, this.currentPage, this.size)
      .subscribe(data => {
        this.pages = new Array<number>(data["totalPages"]);
        this.entretiens = data;
      }, err => {
        console.log(err);
      })
  }
  onPageEntretien(i) {
    this.currentPage = i;
    this.chercherEntretien();
  }
  onEditEntretien(id: number) {
   this.router.navigateByUrl('/edit-entretien/' + id);
  }

  onDeleteEntretien(id: number) {
    this.entretienService.deleteEntretien(id)
      .subscribe(data => {
        this.chercherEntretien();
      }, err => {
        console.log(err);
      }
      )
  } 
}

