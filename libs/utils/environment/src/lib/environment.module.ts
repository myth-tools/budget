import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { Environment } from '../models/environment.model';
import { ENVIRONMENT } from '../tokens/environment.token';

@NgModule({})
export class EnvironmentModule {
    public static forRoot(config: Environment): ModuleWithProviders<EnvironmentModule> {
        return {
            ngModule: EnvironmentModule,
            providers: [{ provide: ENVIRONMENT, useValue: config }]
        };
    }

    constructor(@Optional() @SkipSelf() parentModule?: EnvironmentModule) {
        if (parentModule) {
            throw new Error('EnvironmentModule is already loaded. Import it in the AppModule only');
        }
    }
}
