import { TestBed } from '@angular/core/testing';
import { MaterialModule } from './material.module';

describe('MaterialModule', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MaterialModule]
        }).compileComponents();
    });

    it('should create the module', () => {
        const module = TestBed.inject(MaterialModule);

        expect(module).toBeDefined();
    });
});
