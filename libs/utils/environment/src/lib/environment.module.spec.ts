import { Component, NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Environment } from '../models/environment.model';
import { EnvironmentModule } from './environment.module';

describe('FirebaseModule', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                EnvironmentModule.forRoot({
                    production: false,
                    version: '',
                    firebase: { projectId: '', appId: '', apiKey: '', authDomain: '' }
                })
            ]
        }).compileComponents();
    });

    it('should create the module', () => {
        const module = TestBed.inject(EnvironmentModule);

        expect(module).toBeDefined();
    });

    it('should throw error if imported into root and child module', async () => {
        const environment: Environment = {
            production: false,
            version: '',
            firebase: { projectId: '', appId: '', apiKey: '', authDomain: '' }
        };

        @Component({ template: '' })
        class ChildComponent {}

        @NgModule({
            imports: [
                EnvironmentModule.forRoot(environment),
                RouterTestingModule.withRoutes([{ path: '', component: ChildComponent }])
            ]
        })
        class ChildModule {}

        await TestBed.resetTestingModule()
            .configureTestingModule({
                imports: [
                    EnvironmentModule.forRoot(environment),
                    RouterTestingModule.withRoutes([{ path: 'error', loadChildren: () => ChildModule }])
                ]
            })
            .compileComponents();

        const router = TestBed.inject(Router);

        await expect(router.navigateByUrl('/error')).rejects.toThrow(Error);
    });
});
