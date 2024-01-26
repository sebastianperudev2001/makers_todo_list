export interface Item {
    id: number; 
    completado: boolean; 
    titulo: string; 
    fecha: Date;
    subitems?: Item[];

  }


/** 
 * export interface Item {
    description: string;
    done: boolean;
  }
 * 
*/