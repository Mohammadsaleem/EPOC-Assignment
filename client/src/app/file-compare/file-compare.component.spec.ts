import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileCompareComponent } from './file-compare.component';

describe('FileCompareComponent', () => {
  let component: FileCompareComponent;
  let fixture: ComponentFixture<FileCompareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileCompareComponent]
    });
    fixture = TestBed.createComponent(FileCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
