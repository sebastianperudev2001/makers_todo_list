export interface Item {
    id: number; 
    completado: boolean; 
    titulo: string; 
    fecha: Date;
    subtasks: Item[];

  }


/** 
 * export interface Item {
    description: string;
    done: boolean;
  }
 * 
*/