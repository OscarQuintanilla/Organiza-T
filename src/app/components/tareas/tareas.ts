export class Tareas{
    constructor(
        public id:number,
        public titular:string,
        public descripcion:string,
        public completada:boolean,
        public tipo:string,
        public formatoPresentacion:string,
        public fechaEntrega

    ){}
}