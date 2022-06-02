import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelFileUploadComponent } from './panel-file-upload.component';

describe('PanelFileUploadComponent', () => {
  let component: PanelFileUploadComponent;
  let fixture: ComponentFixture<PanelFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelFileUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
