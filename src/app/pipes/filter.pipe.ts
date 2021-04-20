import { isNgTemplate } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arreglo: any[], texto: string): any[] {
    if(texto==='') return arreglo;

    texto = texto.toLowerCase();

    return arreglo.filter(item =>{
      return item.name.toLowerCase()
      .includes(texto);
    })
  }

}
