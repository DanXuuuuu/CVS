import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoryComponent } from './components/directory/directory.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const routes: Routes = [
  { path: 'nav', component: NavBarComponent},
  { path: 'directory', component: DirectoryComponent },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: '',
    redirectTo: 'nav',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
