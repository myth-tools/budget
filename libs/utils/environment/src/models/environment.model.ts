import { Firebase } from './firebase.model';

export interface Environment {
    production: boolean;
    version: string;
    firebase: Firebase;
}
