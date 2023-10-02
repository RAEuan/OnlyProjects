import { Component, OnInit, ViewChild} from '@angular/core';
import { ApiService } from '../service/api.service';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css']
})
export class InscriptionsComponent implements OnInit{

  data: any = {};
  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;

  constructor(private apiService: ApiService,
    private observer: BreakpointObserver){}

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if(res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  ngOnInit(): void{
    this.GetAllData();
  }

  GetAllData(){
      this.apiService.getData().subscribe( data => {
        this.data = data;
        console.log(this.data);
      })
  }
}
