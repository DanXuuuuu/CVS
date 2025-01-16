import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoryComponent } from './components/directory/directory.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';


const routes: Routes = [
 
  // {path:'directory', component:DirectoryComponent},
  // {path:'contact', component:ContactUsComponent,},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
