import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatToolbarModule} from '@angular/material/toolbar';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoginComponent } from './components/environment-components/login/login.component';
import { RegisterComponent } from './components/environment-components/register/register.component';
import { HeaderComponent } from './components/environment-components/header/header.component';
import { HomeComponent } from './components/environment-components/home/home.component';
import { NotFoundComponent } from './components/environment-components/not-found/not-found.component';
import { PanelMainComponent } from './components/panel/panel-main/panel-main.component';
import { PanelFileListComponent } from './components/panel/panel-file-list/panel-file-list.component';
import { PanelFileUploadComponent } from './components/panel/panel-file-upload/panel-file-upload.component';
import { OperationClaimAddComponent } from "./components/panel/operation-claim-add/operation-claim-add.component";
import { OperationClaimListComponent } from "./components/panel/operation-claim-list/operation-claim-list.component";
import { UserOperationClaimAddComponent } from "./components/panel/user-operation-claim-add/user-operation-claim-add.component";
import { UserOperationClaimListComponent } from "./components/panel/user-operation-claim-list/user-operation-claim-list.component";
import { UsersComponent } from './components/panel/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    PanelMainComponent,
    PanelFileListComponent,
    PanelFileUploadComponent,
    
    OperationClaimAddComponent,
    OperationClaimListComponent,
    UserOperationClaimListComponent,
    UserOperationClaimAddComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    MatButtonModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    ClipboardModule
  ],
  providers: [    
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
