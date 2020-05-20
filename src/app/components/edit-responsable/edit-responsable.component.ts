import { Component, OnInit } from '@angular/core';
import { Responsable } from 'src/app/model/responsable.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ResponsableService } from 'src/app/services/responsable.service';

@Component({
  selector: 'app-edit-responsable',
  templateUrl: './edit-responsable.component.html',
  styleUrls: ['./edit-responsable.component.css']
})
export class EditResponsableComponent implements OnInit {
  public currentResponsable: Responsable;
  public id: number;
  public message: number;

  constructor(private responsableService: ResponsableService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

              this.currentResponsable = new Responsable();
  }

  ngOnInit() {
    
     this.id = this.activatedRoute.snapshot.params.id;
    this.responsableService.getResponsable(this.id)
      .subscribe(data => {
        this.currentResponsable = data;
  })
}

  onUpdateResponsable() {
    this.responsableService.updateResponsable(this.currentResponsable)
      .subscribe(data => {
        this.message = 1;
      }, err => {
        this.message = 0;
      })

} 
}
