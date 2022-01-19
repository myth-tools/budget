import { Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { FirebaseApp, FirebaseAppModule, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ENVIRONMENT } from '@myth-tools/utils/environment';

// TODO: Remove this override once Firebase fix the typings to match the implementation.
// https://github.com/angular/angularfire/issues/3086
declare module '@angular/fire/app' {
    export function provideFirebaseApp(
        fn: (injector: Injector) => FirebaseApp,
        ...deps: unknown[]
    ): ModuleWithProviders<FirebaseAppModule>;
}

@NgModule({
    imports: [
        provideFirebaseApp((injector: Injector) => {
            const environment = injector.get(ENVIRONMENT);

            return initializeApp(environment.firebase);
        }),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore())
    ]
})
export class FirebaseModule {}
