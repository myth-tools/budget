import { Component, Inject } from '@angular/core';
import { Environment, ENVIRONMENT } from '@myth-tools/utils/environment';

@Component({
    selector: 'myth-tools-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public version = this.environment.version;

    constructor(@Inject(ENVIRONMENT) private readonly environment: Environment) {}
}
