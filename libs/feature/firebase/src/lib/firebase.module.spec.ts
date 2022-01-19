import { TestBed } from '@angular/core/testing';
import { FirebaseApp } from '@angular/fire/app';
import { Firestore } from '@angular/fire/firestore';
import { ENVIRONMENT } from '@myth-tools/utils/environment';
import { FirebaseModule } from './firebase.module';

jest.mock('@angular/fire/auth', () => ({
    ...jest.requireActual('@angular/fire/auth'),
    getAuth: () => <unknown>{}
}));

jest.mock('@angular/fire/firestore', () => ({
    ...jest.requireActual('@angular/fire/firestore'),
    getFirestore: () => <unknown>{}
}));

describe('FirebaseModule', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FirebaseModule],
            providers: [{ provide: ENVIRONMENT, useValue: {} }]
        }).compileComponents();
    });

    it('should create the module', () => {
        const module = TestBed.inject(FirebaseModule);
        const app = TestBed.inject(FirebaseApp);
        const firestore = TestBed.inject(Firestore);

        expect(module).toBeDefined();
        expect(app).toBeDefined();
        expect(firestore).toBeDefined();
    });
});
