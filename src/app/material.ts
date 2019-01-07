import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatDividerModule, MatListModule, MatCardModule,
        MatToolbarModule, MatSidenavModule, MatMenuModule, MatIconModule, MatRadioModule, MatSelectModule],
    exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatDividerModule, MatListModule, MatCardModule,
        MatToolbarModule, MatSidenavModule, MatMenuModule, MatIconModule, MatRadioModule, MatSelectModule]
}) 
export class MaterialModule { }