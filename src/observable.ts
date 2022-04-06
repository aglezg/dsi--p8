import {Observer} from "./observer";

/**
 * Interfaz para objetos observables
 */
export interface Observable {
  /**
   * Añade si no existe un observador a la lista de observadores
   * @param observer Observador a añadir
   */
  subscribe(observer: Observer): void;

  /**
   * Elimina si existe un observador de la lista de observadores
   * @param observer Observador a eliminar
   */
  unsubscribe(observer: Observer): void;

  /**
   * Recorre la lista de observadores y los notifica
   * mediante el metodo 'update'
   */
  notify(): string[];
}