import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  ngOnInit() {
        (function($) {
         const path = window.location.href;
         $('#layoutSidenav_nav .sb-sidenav a.nav-link').each(function() {
            if (this.href === path) {
                $(this).addClass('active');
            }
        });
         $('#sidebarToggle').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('sb-sidenav-toggled');
    });
})(jQuery);
  }
}