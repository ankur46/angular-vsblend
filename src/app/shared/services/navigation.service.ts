import { Injectable, signal, WritableSignal } from '@angular/core';
import { FILETREE } from '../app.const';
import { NavigationElement } from '../app.interface';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  navigationElements: WritableSignal<NavigationElement[]> = signal(
    FILETREE[0]?.children ?? [],
  );
  activeElements: WritableSignal<NavigationElement[]> = signal([]);

  private update(element: NavigationElement, inView: boolean): void {
    const currentElements: NavigationElement[] = this.getActive$;
    if (inView) {
      if (
        !currentElements.some((ele: NavigationElement) => ele.id === element.id)
      ) {
        currentElements.push(element);

        // Limit the number of elements to 3
        if (currentElements.length > 3) {
          currentElements.shift();
        }
      }
    } else {
      const index = currentElements.findIndex(
        (ele: NavigationElement) => ele.id === element.id,
      );
      if (index !== -1) {
        currentElements.splice(index, 1);
      }
    }
    this.activeElements.set(currentElements.map((el: NavigationElement) => el));
  }

  get getAll$(): NavigationElement[] {
    return this.navigationElements();
  }

  get getActive$(): NavigationElement[] {
    return this.activeElements();
  }

  public toggleInView(element: NavigationElement, inView: boolean): void {
    this.update(element, inView);
  }
}
