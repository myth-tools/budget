import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirebaseModule } from '@myth-tools/feature/firebase';
import { SharedModule } from '@myth-tools/ui/shared';
import { EnvironmentModule } from '@myth-tools/utils/environment';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule,
        FirebaseModule,
        EnvironmentModule.forRoot(environment)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
