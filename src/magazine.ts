import {Observable} from "./observable";
import {Observer} from "./observer";

/**
 * Categorías de una revista
 */
export type Category = 'sports' | 'news' | 'scientist' | 'beauty' | 'videogames';

/**
 * Tipos de eventos que puede tener una revista: sin evento, actualizada o leida.
 */
export enum MagazineEventType {'NO_EVENT', 'NEW_NUMBER'}
/**
 * Clase que representa la estructura de datos de una revista, cuyas instancias
 * pueden ser observadas (pues aplica el patrón de diseño Observable)
 */
export class Magazine implements Observable {
  /**
   * Atributo para almacenar los objetos observadores de la revista
   */
  private observers: Observer[] = [];

  private eventType: MagazineEventType = MagazineEventType.NO_EVENT;
  /**
   * Inicializa un objeto de la clase 'Magazine'
   * @param id Identificador numérico de la revista.
   * @param name Nombre de la revista.
   * @param category Categoría de la revista
   * @param author Autor de la revista
   * @param numbers Números de los que dispone la revista
   */
  constructor(private readonly id: number, private name: string,
    private category: Category, private author: string, private numbers: number) {}

  /**
   * Devuelve el identificador numérico de la revista.
   * @returns Identificador numérico de la revista.
   */
  getId(): number {
    return this.id;
  }

  /**
   * Devuelve el nombre de la revista
   * @returns Nombre de la revista
   */
  getName(): string {
    return this.name;
  }

  /**
   * Establece el nombre de la revista
   * @param name Nombre de la revista
   */
  setName(name: string): void {
    this.name = name;
  }

  /**
   * Devuelve la categoría de la revista
   * @returns Categoría de la revista
   */
  getCategory(): Category {
    return this.category;
  }

  /**
   * Establece la categoría de la revista
   * @param category Categoría de la revista
   */
  setCategory(category: Category): void {
    this.category = category;
  }

  /**
   * Devuelve el autor de la revista
   * @returns Autor de la revista
   */
  getAuthor(): string {
    return this.author;
  }

  /**
   * Establece el autor de la revista
   * @param author Autor de la revista
   */
  setAuthor(author: string): void {
    this.author = author;
  }

  /**
   * Devuelve la cantidad de números que tiene nuestra revista
   * @returns Números de nuestra revista
   */
  getNumbers(): number {
    return this.numbers;
  }

  /**
   * Devuelve el tipo de evento de la revisa
   * @returns Evento de la revista
   */
  getEventType(): MagazineEventType {
    return this.eventType;
  }

  /**
   * Actualiza el evento de la revista para marcar que ha sido leída y notifica
   * a sus observadores.
   */
  public new_number(): string[] {
    this.eventType = MagazineEventType.NEW_NUMBER;
    this.numbers++;
    return this.notify();
  }

  /**
   * Añade, si no existe ya, un observador a la lista de observadores.
   * @param observer Observador a añadir.
   */
  subscribe(observer: Observer): void {
    if (this.observers.includes(observer)) {
      throw new Error('The observer had already been subscribed');
    } else {
      this.observers.push(observer);
    }
  }

  /**
   * Elimina, si existe, un observador de la lista de observadores
   * @param observer Observador a eliminar
   */
  unsubscribe(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      throw new Error('The observer has not been subscribed');
    } else {
      this.observers.splice(index, 1);
    }
  }

  /**
   * Recorre la lista de observadores, notificando a cada uno de estos.
   */
  notify(): string[] {
    let result: string[] = [];
    this.observers.forEach((observer) => result.push(observer.update(this)));
    return result;
  }
}