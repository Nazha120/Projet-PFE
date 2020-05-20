import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponsableService } from 'src/app/services/responsable.service';
import { ResponsablesComponent } from '../responsables/responsables.component';
import { Responsable } from 'src/app/model/responsable.model';

@Component({
  selector: 'app-new-responsable',
  templateUrl: './new-responsable.component.html',
  styleUrls: ['./new-responsable.component.css']
})
export class NewResponsableComponent implements OnInit {
  public responsable: Responsable;
  public message: number;

  constructor(private responsableService: ResponsableService,
              private router: Router) {
      this.responsable = new Responsable();
  }

  ngOnInit() {
  }
  onSaveResponsable() {
    this.responsableService.addResponsable(this.responsable)
      .subscribe(res => {
        this.message = 1;
      }, err => {
        this.message = 0;
      })
  }

}
