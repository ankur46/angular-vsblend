import { Injectable, signal, WritableSignal } from '@angular/core';
import { FILETREE } from '../app.const';
import { NavigationElement } from '../app.interface';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  protected navigationElements: WritableSignal<NavigationElement[]> = signal(
    FILETREE[0]?.children ?? [],
  );
  protected activeElements: WritableSignal<NavigationElement[]> = signal([]);
  protected visibleElementIndex: WritableSignal<number> = signal(0);

  private set setVisibilityIndex(id: number) {
    const index = this.getActive$.findIndex((ele) => ele.id === id);
    this.visibleElementIndex.set(
      index !== -1 ? index : this.getActive$.length - 1,
    );
  }

  private update(element: NavigationElement, inView: boolean): void {
    const currentElements: NavigationElement[] = this.getActive$;
    if (inView) {
      if (
        !currentElements.some((ele: NavigationElement) => ele.id === element.id)
      ) {
        currentElements.push(element);

        // Limit the number of elements to 3
        currentElements.length > 3 && currentElements.shift();
      }
    } else {
      const index = currentElements.findIndex(
        (ele: NavigationElement) => ele.id === element.id,
      );
      index !== -1 && currentElements.splice(index, 1);
    }
    this.activeElements.set(currentElements.map((el: NavigationElement) => el));
    this.setVisibilityIndex = element.id;
  }

  get getAll$(): NavigationElement[] {
    return this.navigationElements();
  }

  get getActive$(): NavigationElement[] {
    return this.activeElements();
  }

  get getVisibleElementIndex$(): number {
    return this.visibleElementIndex();
  }

  public toggleInView(element: NavigationElement, inView: boolean): void {
    this.update(element, inView);
  }
}
