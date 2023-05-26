import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DbzMainPageComponent } from './pages/main-page.component';
import { ListDBZComponent } from './components/list/list.component';
import { FormDBZComponent } from './components/form/form.component';

@NgModule({
  exports: [DbzMainPageComponent],
  declarations: [DbzMainPageComponent, ListDBZComponent, FormDBZComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
