import { TestBed } from '@angular/core/testing';
import { EnvironmentModule } from '@myth-tools/utils/environment';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [
                EnvironmentModule.forRoot({
                    production: false,
                    version: '0.0.0-development',
                    firebase: { projectId: '', appId: '', apiKey: '', authDomain: '' }
                })
            ]
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;

        expect(app).toBeTruthy();
    });

    it(`should have version`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;

        expect(app.version).toEqual('0.0.0-development');
    });
});
