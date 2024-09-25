import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'
import { HttpRequestServiceService } from '../http-request-service.service';
import { HttpClient } from '@angular/common/http';
import { PokeDetailsComponent } from "../poke-details/poke-details.component";
import { ShowedPokeComponent } from '../showed-poke/showed-poke.component';





@Component({
  selector: 'app-http-request',
  standalone: true,
  imports: [CommonModule, FormsModule, PokeDetailsComponent, ShowedPokeComponent],
  templateUrl: './http-request.component.html',
  styleUrl: './http-request.component.css'
})
export class HttpRequestComponent {
  listPoke:any = []
  showedPoke:any = []
  namePoke:any= []
  outputed:any = []

  constructor(private getPoke: HttpRequestServiceService) {

  }
  search(){
    this.listPoke = this.getPoke.search();

  }


  getDetail(){
    this.showedPoke = this.getPoke.getFullData()
    console.log(this.showedPoke)
    this.outputed = this.getPoke.outputFullData()
    console.log(this.outputed)
  }

  recevoirPokeInfo(id:any) {
    this.namePoke = this.getPoke.recevoirPokeInfos(id);

  }
}

