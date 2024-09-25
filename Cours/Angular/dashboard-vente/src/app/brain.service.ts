import { Injectable } from '@angular/core';
import { of, filter, map, from, reduce} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrainService {

  dataVentes = [
    {
        label: 'Salade',
        data: [12,8,14,10],
    },
    {
        label: 'Fraise',
        data: [29,18,34,20],
    },
    {
        label: 'Pomme',
        data: [10,14,21,19],
    },
    {
        label: 'Epinard',
        data: [4,7,5,8],
    },
    {
        label: 'Poivrons',
        data: [9,11,13,10],
    },
    {
        label: 'Kiwi',
        data: [23,16,19,21],
    },
    {
        label: 'Banane',
        data: [15,20,15,15],
    },
    {
        label: 'Courgette',
        data: [6,8,7,9],
    }
    ];
    
    vegetables:any = []
    vegeList:any =[]
    vegeTemp:number = 0
    element:any;
    topSaled:any = []
    result:any = []
    topList:any =[]

    findHighest() {
      for (let index = 0; index < this.dataVentes.length; index++) {
        this.element = this.dataVentes[index];

        this.vegeList.push(this.element)
      }
      console.log(this.vegeList);
      // this.vegeList.sort()
      // A tester : On reclasse le tableau dans l'ordre decroissant et on garde les 3 premier avec un for loop array.lengh -3



      for (let index = 0; index < this.vegeList.length; index++) {
        this.vegeList[index].data = this.vegeList[index].data.reduce((acc:number, val:number) => acc + val, 0);
           
      }
      // const found = this.vegeList.find((e:number) => e = Math.max(this.vegeList))
      // console.log(found);
      

      this.topList.push(this.vegeList.reduce((prev:any, current:any) => (prev && prev.data > current.data) ? prev : current))
      console.log(this.topList)
    }
    
    

  constructor() { }
  

}
