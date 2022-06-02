import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/environment-components/home/home.component';
import { LoginComponent } from './components/environment-components/login/login.component';
import { NotFoundComponent } from './components/environment-components/not-found/not-found.component';
import { RegisterComponent } from './components/environment-components/register/register.component';
import { OperationClaimAddComponent } from './components/panel/operation-claim-add/operation-claim-add.component';
import { OperationClaimListComponent } from './components/panel/operation-claim-list/operation-claim-list.component';
import { PanelFileListComponent } from './components/panel/panel-file-list/panel-file-list.component';
import { PanelFileUploadComponent } from './components/panel/panel-file-upload/panel-file-upload.component';
import { PanelMainComponent } from './components/panel/panel-main/panel-main.component';
import { UserOperationClaimAddComponent } from './components/panel/user-operation-claim-add/user-operation-claim-add.component';
import { UserOperationClaimListComponent } from './components/panel/user-operation-claim-list/user-operation-claim-list.component';
import { UsersComponent } from './components/panel/users/users.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  
  {path:'register',component:RegisterComponent},

  {path:'panel',canActivate:[AuthGuard],canActivateChild:[AuthGuard],component:PanelMainComponent,children:[
    {path:'',component:PanelFileListComponent},
    {path:'file-upload',component:PanelFileUploadComponent},
    {path:'users',component:UsersComponent},

    {path:'user-operation-claim',canActivate:[AdminGuard],canActivateChild:[AdminGuard],children:[
      {path:'add',component:UserOperationClaimAddComponent},
      {path:'list',component:UserOperationClaimListComponent}
    ]},
    
    {path:'operation-claim',canActivate:[AdminGuard],canActivateChild:[AdminGuard],children:[
      {path:'add',component:OperationClaimAddComponent},
      {path:'list',component:OperationClaimListComponent}
    ]}
  ]},

  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
