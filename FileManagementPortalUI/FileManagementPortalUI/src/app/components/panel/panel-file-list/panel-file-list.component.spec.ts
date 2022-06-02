import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelFileListComponent } from './panel-file-list.component';

describe('PanelFileListComponent', () => {
  let component: PanelFileListComponent;
  let fixture: ComponentFixture<PanelFileListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelFileListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelFileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
