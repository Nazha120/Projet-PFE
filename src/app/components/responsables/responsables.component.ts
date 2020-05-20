import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponsableService } from 'src/app/services/responsable.service';

@Component({
  selector: 'app-responsables',
  templateUrl: './responsables.component.html',
  styleUrls: ['./responsables.component.css']
})
export class ResponsablesComponent implements OnInit {
  responsables: any;
  public size: number = 5;
  public currentPage: number = 0;
  public totalPages: number;
  public pages: Array<number>;
  public currentKeyword: string = "";

  constructor(private responsableService: ResponsableService,
              private router: Router) { }

  ngOnInit() {
   this.chercherResponsable();
  }

  onChercher(form: any) {
    this.currentPage = 0;
    this.currentKeyword = form.keyword;
    this.chercherResponsable();

  }

  chercherResponsable() {
    this.responsableService.getResponsables(this.currentKeyword, this.currentPage, this.size)
      .subscribe(data => {
        this.pages = new Array<number>(data["totalPages"]);
        this.responsables = data;
      }, err => {
        console.log(err);
      })
  }

  onPageResponsable(i) {
    this.currentPage = i;
    this.chercherResponsable();
  }
    onEditResponsable(id: number) {
   this.router.navigateByUrl('/edit-responsable/' + id);
  }

  onDeleteResponsable(id: number) {
    this.responsableService.deleteResponsable(id)
      .subscribe(data => {
        this.chercherResponsable();
      }, err => {
        console.log(err);
      }
      )
  }  
}