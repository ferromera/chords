import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ChordsAppComponent } from '../app/chords.component';

beforeEachProviders(() => [ChordsAppComponent]);

describe('App: Chords', () => {
  it('should create the app',
      inject([ChordsAppComponent], (app: ChordsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'chords works!\'',
      inject([ChordsAppComponent], (app: ChordsAppComponent) => {
    expect(app.title).toEqual('chords works!');
  }));
});
