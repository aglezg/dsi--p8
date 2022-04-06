import {Observer} from "./observer";
import {Observable} from "./observable";
import {Magazine, MagazineEventType} from "./magazine";

/**
 * Clase que representa la estructura de datos de un 'lector', cuyas instancias
 * son observadores de objetos la clase revista.
 */
export class Reader implements Observer {
  /**
   * Inicializa un objeto de la clase 'Reader'
   * @param id Identificador numérico de un lector
   * @param username Nombre de usuario del lector
   * @param age Edad del lector
   */
  constructor(private readonly id: number, private username: string,
    private age: number) {}

  /**
   * Devuelve el identificador numérico del lector
   * @returns Identificador numérico del lector
   */
  public getId(): number {
    return this.id;
  }

  /**
   * Devuelve el nombre de usuario del lector
   * @returns Nombre de usuario del lector
   */
  public getUsername(): string {
    return this.username;
  }

  /**
   * Establece el nombre de usuario del lector
   * @param username Nombre de usuario del lector
   */
  public setUsername(username: string): void {
    this.username = username;
  }

  /**
   * Devuelve la edad del lector
   * @returns Edad del lector
   */
  public getAge(): number {
    return this.age;
  }

  /**
   * Establece la edad del lector
   * @param age Edad del lector
   */
  public setAge(age: number): void {
    this.age = age;
  }

  /**
   * Devuelve información acerca de la revista que se pasa por parámetro.
   * @param observable Revista observada.
   */
  update(observable: Observable): string {
    if (observable instanceof Magazine) {
      switch (observable.getEventType()) {
        case MagazineEventType.NEW_NUMBER:
          return `Soy el lector con nombre ${this.username}` +
            `y he observado que la revista ${observable.getName()} ha lanzado` +
            `un nuevo número. Este número es el ${observable.getNumbers()}`;
          break;
        default:
          return `Soy el lector con nombre ${this.username}` +
            `y he observado que la revista ${observable.getName()} no ha` +
            `recibido ningún cambio.`;
      }
    }
    return '';
  }
}