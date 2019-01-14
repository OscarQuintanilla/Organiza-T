export interface Tarea{
    id: string;
    Titular: string;
    Descripcion: string;
    Completada: boolean;
    Tipo: string;
    FormatoPresentacion: string;
    FechaEntrega: Date;
    idUsuario: string;
}