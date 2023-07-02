import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  const firebaseConfig = {
    apiKey: "AIzaSyBvAm3pT0cvS6ursDynoy1NwwAHF4G23sw",
    authDomain: "houseauctionsproject.firebaseapp.com",
    projectId: "houseauctionsproject",
    storageBucket: "houseauctionsproject.appspot.com",
    messagingSenderId: "440697749469",
    appId: "1:440697749469:web:d3b92c004547035b8e8034",
    measurementId: "G-2Y05W55RRJ"
  };

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.componentInstance;
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    expect(app).toBeTruthy();
  });

  it(`should have as title 'crud-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.componentInstance;
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    expect(app.title).toEqual('storeMangment-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('crud-app app is running!');
  });
});
