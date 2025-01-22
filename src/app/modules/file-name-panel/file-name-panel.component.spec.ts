import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileNamePanelComponent } from './file-name-panel.component';

describe('FileNamePanelComponent', () => {
  let component: FileNamePanelComponent;
  let fixture: ComponentFixture<FileNamePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileNamePanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FileNamePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
