import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
let url ='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uqs5SxPZC4LpEP59r_6R1gHaHa%26pid%3DApi&f=1';
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
  valueInit: string = 'Valor init';
  @Input() src: string='';
  //estoy creando un evento para que se ejecute una función en el padre
  @Output() imgLoaded = new EventEmitter();

  //podemos hacer un setInput
  @Input('descriptions')
  set changeDescription(desc:string){
    this.description = desc;
    console.log('cambio de descripcion');

  }
  description:string = 'Descripcion';
  intervalFn:number|undefined;
  counter =0;
  constructor() { }

  ngOnInit(): void {
    //este interval debe apagarse de forma manual
    // this.intervalFn= window.setInterval(() => {
    //   this.counter++;
    //   console.log(this.counter);

    // } ,1000)

  }


  onLoadImg(){
    console.log('Imagen default cargada');
  }
  imgError() {
    // lo podemos emitir con informacion en en los parametrso del emit
    this.imgLoaded.emit('img hijo no carga') //lo emitimos pa que lo escuche el padre
    this.src =url
  }

  ngOnDestroy(): void {
    // window.clearInterval(this.intervalFn);
  }
  ngOnChanges(changes:SimpleChange): void {
    //changes son todos los cambios de los inputs
    console.log('Imagen cambiada');
  }


}
