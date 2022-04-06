import {Observable} from "./observable";

/**
 * Interfaz para objetos observadores
 */
export interface Observer {
  /**
   * Realiza una acción según las características del objeto
   * observable que se introduce por parámetro.
   * @param observable Objeto observable
   */
  update(observable: Observable): string;
}