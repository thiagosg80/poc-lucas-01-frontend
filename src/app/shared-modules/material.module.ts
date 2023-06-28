import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatSnackBarModule
    ]
})

export class MaterialModule { }