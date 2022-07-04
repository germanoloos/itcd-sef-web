import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../app-material';
import { LoadingComponent } from './components/loading/loading.component';
import { AlertDialogComponent } from './dialogs/alert-dialog/alert-dialog.component';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog.component';
import { DialogService } from './services/dialog.service';
import { StorageService } from './services/storage.service';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';

@NgModule({
    declarations: [
        AlertDialogComponent,
        ConfirmationDialogComponent,
        LoadingComponent,
        ThemeToggleComponent
    ],
    imports: [
        RouterModule,
        BrowserAnimationsModule,
        AngularMaterialModule
    ],
    exports: [
        LoadingComponent,
        ThemeToggleComponent
    ],
    providers: [
        DialogService,
        StorageService
    ]
})
export class SharedModule { }
