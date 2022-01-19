import { TestBed } from '@angular/core/testing';
import { SharedModule } from './ui-shared.module';

describe('MaterialModule', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SharedModule]
        }).compileComponents();
    });

    it('should create the module', () => {
        const module = TestBed.inject(SharedModule);

        expect(module).toBeDefined();
    });
});
