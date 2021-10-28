---
layout: post
title: "Rules background resources and links"
name: "unit-testing-angular"
tags: [jekyll]
tagName: web
permalink: 2021-10-28-unit-testing-angular.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "jest jsasmine unit testing karma"
summary: "Thu, Oct 28, 21, how to conduct unit testing for individual behavior, jes jasmine vs karma"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2021-10-28T10:40:39 +0900
updated: 2021-10-28 10:40
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## Thi
## Angular Unit Testing

[Unit Testing with Jest](https://www.notion.so/Unit-Testing-with-Jest-d87e7cc3992c4916af0e363864e8b9a3)

- **TOC**
    
    
- Float left TOC
    
    ```jsx
    // Fix the TOC on the left sidebar
    // F12 and then paste below to the console window > Enter
    var toc = document.getElementsByClassName('notion-table_of_contents-block')[0];
    var tocBlock = toc.parentElement.parentElement.parentElement.parentElement.parentElement;
    tocBlock.style.position = 'fixed';
    tocBlock.style.marginLeft = '-1080px';
    tocBlock.style.width = '280px';
    tocBlock.style.top = '70px';
    tocBlock.style.overflow = 'auto';
    tocBlock.style.maxHeight = '700px';
    ```
    

## Refs

- Ref to [Max's course](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6018422#overview).
- Ref to [Max's codes](https://github1s.com/dinhanhthi/learn-angular-complete-guide/blob/HEAD/28-testing-final/src/app/app.component.spec.ts)
- [Official doc](https://angular.io/guide/testing).
- [Testing Components in Angular 2 with Jasmine](https://semaphoreci.com/community/tutorials/testing-components-in-angular-2-with-jasmine)
- Unit Tests: [https://github.com/angular/angular-cli/wiki/test](https://github.com/angular/angular-cli/wiki/test)
- E2E Tests: [https://github.com/angular/angular-cli/wiki/e2e](https://github.com/angular/angular-cli/wiki/e2e)
- [Jasmine](https://jasmine.github.io/2.5/introduction) — behavior-driven javascript
- [JEST docs](https://jestjs.io/docs/api) ⇒ `beforeEach`, `afterAll`,...

## Why unit tests?

1. difficulty to test a code means bad design
2. gives us confidence that we can refactor our application, or add new features to it, without breaking existing functionalities
3. In Angular, the default testing framework is Jasmine + test runner Karma

## Rules

👇🏻  [Source](https://medium.com/@abdul_74410/towards-better-testing-in-angular-part-1-mocking-child-components-b51e1fd571da)

1. **More isolated testing**. We want to test the services and components in question, not their dependencies.
2. **Strongly typed template checking.** Ensure: child def changes ⇒ dependent unit tests break
3. **Less coupling between components and services**. Dependency Injection makes it easy to inject services, but if those services are being used all over the shop, refactoring becomes difficult.
4. **Prefer dumb components over smart components.** 👉  ****[This article](https://medium.com/@jtomaszewski/how-to-write-good-composable-and-pure-components-in-angular-2-1756945c0f5b) explains it beautifully.
    - dumb component (impured): doesn't depend on outside data and produce side effects, just take its inputs and produce intended outputs.
    - smart component (pured): handle not only its inputs but also external data ⇒ produce (also) side effects.
    
    ```jsx
    // wrong (impure)
    class DateTimePickerComponent {
      timeZone: string = "Europe/Warsaw";
    
      constructor(private account: AccountService) {
        if (this.account.currentUser) {
          this.timeZone = this.account.currentUser.timeZone;
        }
      }
    
      changeTimeZone(timeZone: string) {
        this.timeZone = timeZone;
        this.account.updateCurrentUser({
          timeZone
        });
      }
    }
    
    // good (pure)
    class DateTimePickerComponent {
      @Input() timeZone: string = "Europe/Warsaw";
      @Output() timeZoneChange: EventEmitter<string> = new EventEmitter();
    
      changeTimeZone(timeZone: string) {
        this.timeZoneChange.emit(timeZone);
      }
    }
    ```
    
    - Rules:
        1. **should not be dependant on external services** — if it requires some data to work, it should be injected via `@Input()`;
        2. **should not produce any side effects** — if it needs to emit something, it should be emitted with `@Output()` instead;
        3. **should not mutate its’ inputs** — because if it does, it actually produces a side effect that causes a change in the parent component’s data.A child should never directly edit parent’s data. If it needs to inform the parent that something had been changed, he should emit it as an event, which the parent should pick up and then properly act on it.

## CLI

```jsx
// cd to app folder
ng test // test whole app
```

```jsx
// Test only one file (jest.config.j s)
testMatch: ['**/web-integration-form.component.spec.ts'],
```

## Understanding concepts

- `describe` breaks your test suite into components ⇒ [more here.](https://stackoverflow.com/questions/32055287/what-is-the-difference-between-describe-and-it-in-jest)
    - You can also nest describes to further subdivide the suite.
- `describe` is for grouping, `it` is for testing.
- `stub` files? ⇒ [Unit Testing in Angular: Stubs vs Spies vs Mocks](https://www.amadousall.com/unit-testing-angular-stubs-vs-spies-vs-mocks/)
    
    So a stub is a function that replaces a real implementation of an existing function. Stubbing is, generally, an operation local to a test. We use stubs if we want to:
    
    - control individual method behavior for a specific test case,
    - prevent a method from making side effects like communicating with the outside world using Angular's `HttpClient`.
- **Sociable tests** vs **Solitary tests**
    - *Sociable tests*: often the tested unit relies on other units to fulfill its behavior.
    - *Solitary tests*: some unit testers prefer to isolate the tested unit.

### Jest vs Jasmine vs Karma?

- Jest is an integrated testing solution written by Facebook and famous especially in the React world.
- Instant feedback because he will run only the test files related to the changes.
- They're different testing frameworks.
- Testing frameworks: Jest, Jasmine, [Mocha](https://mochajs.org/)
- [Karma](https://karma-runner.github.io/latest/index.html) (by AngularJS team) = test runner (whereas others - jest/jasmine/mocha are testing frameworks)
    - Karma is a type of test runner which creates a fake server, and then spins up tests in various browsers using data derived from that fake server. Karma is only a test runner, and requires a testing framework such as Mocha to plug into it in order to actually run tests.

### Returned outputs

```jsx
// example: web-integration-form.component.spec.ts
describe('WebIntegrationFormComponent', () => {
	beforeEach();

	it('should read', () => {});

	describe('#setStatus_1', () ={
		it('case 1: ...', () => {});
		it('case 2: ...', () => {});
	});

	describe('#setStatus_2', () ={
		it('case 1: ...', () => {});
		it('case 2: ...', () => {});
	});
});

// Each `it` runs separately
```

```jsx
// Returns
✓ should create (197ms)
#setStatus_1
	✓ case 1:...
	✓ case 2:...
#setStatus_2
	✓ case 1:...
	✓ case 2:...
```

### Webpack or not webpack?

```jsx
// If using webpack based
// Because when you add "./" in styleUrls or templateURL,
// webpack produce your app
beforeEach(() => { // before each tests below this function
  TestBed.configureTestingModule({
	// TestBed let us create our components to test
    declarations: [UserComponent] // which we wanna test?
  });
});
```

```jsx
// If not using webpack based
beforeEach(() => { 
  TestBed.configureTestingModule({
    declarations: [UserComponent]
  }).compileComponents();
});
```

👉 [Jasmine](https://jasmine.github.io/index.html) — behavior-driven javascript

```jsx
describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});
```

### Isolated tests

Có nghĩa là nó không hề liên quan gì đến các components khác nhưng khi run `ng serve` thì vẫn chạy test của toàn bộ app!

If component depends on Angular 2 ⇒ using `TestBed` (and other things), otherwise, we can use isolated tests like below.

```jsx
// reverse.pipe.spec.ts
import { ReversePipe } from "./reverse.pipe";
describe('Pipe: ReversePipe', () => {
  it('should reverse the inputs', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });
});
```

```jsx
// reverse.pipe.ts
// doesn't depend on Angular 2
import { Pipe } from "@angular/core";

@Pipe({
  name: 'reverse'
})
export class ReversePipe {
  transform(value: string) {
    return value.split("").reverse().join("");
  }
}
```

## Getting started

### Is app properly created?

👉🏻 [Difference: `fixture.debugElement.componentInstance` & `fixture.componentInstance`](https://stackoverflow.com/questions/58173772/whats-the-difference-between-fixture-componentinstance-and-fixture-debugelement)

```jsx
// First and nothing
it('should create the app', () => {
  let fixture = TestBed.createComponent(UserComponent); // create a store new component in "fixture"
  let app = fixture.debugElement.componentInstance; // need "debugElement" if without browsers
  expect(app).toBeTruthy();
	
	// example of inspect a property "title" of component
	// (what comes in  the class)
	expect(app.title)...
});
```

### Test a component

👉  [Angular - Basics of testing components](https://angular.io/guide/testing-components-basics)

### Child component with input

👉  Good to read: [Towards Better Testing In Angular. Part 1 — Mocking Child Components | by Abdul Wahab Rafehi | Medium](https://medium.com/@abdul_74410/towards-better-testing-in-angular-part-1-mocking-child-components-b51e1fd571da)

💡 Recommended in the Angular Testing Guide, is to manually mock (or stub) components

If cannot find child component errors? ([source](https://medium.com/@abdul_74410/towards-better-testing-in-angular-part-1-mocking-child-components-b51e1fd571da))

1. `declarations: [ChildComponent]` ⇒ BUT it's not isolated, it depends on `ChildComponent`!
    1. Cons: If in `ChildComponent`, we add some dependency ⇒ not working
2. Use `schemas: NO_ERRORS_SCHEMA` to tell the compiler to ignore any elements or attributes it isn’t familiar with
    1. Cons: if inside parent, we mispelling `<child></chidl>` or any wong things with child components ⇒ it still works but not really!! ⇒ There will be something wrong until we actually run the app. Difficult to test `@Input` and `@Output`.
3. Mock / Stub child component ⇒ ensure to have the same selector. ⇒ có thể tạo 1 cái "mock" class của `ChildComponent` bằng 1 file `.stub`
    1. Cons: it's verbose + shortcoming if there are many inputs and outputs. It requires us to remember to change the stub each time we change the real component
4. Using `ng-mock`

```jsx
// Wanna test user-item.component.spec.ts
// In its parent
<app-user-item
	*ngFor="let conv of convList; let i=index; trackBy: trackByConvId"
	[conversation]="conv"
></app-user-item>
```

**Refs**:

1. [Test parent and child components when passing data with input binding](https://keepgrowing.in/angular/test-parent-and-child-components-when-passing-data-with-input-binding/) ⇒ defind in parent a simple child component (like the real one) + mocking a hero input if you wanna test child component.
2. (read later) [https://stackoverflow.com/questions/40541123/how-to-unit-test-if-an-angular-2-component-contains-another-component](https://stackoverflow.com/questions/40541123/how-to-unit-test-if-an-angular-2-component-contains-another-component)

- Some examples of checking parent.
    
    ![Angular%20Unit%20Testing%20d05340b7b5f04e4d8e07a372822bee6e/Untitled.png](Angular%20Unit%20Testing%20d05340b7b5f04e4d8e07a372822bee6e/Untitled.png)
    

### `nativeElement` contains?

```jsx
// Compiled html contains?
it('should display the user name if user is logged in', () => {
  let fixture = TestBed.createComponent(UserComponent);
  let app = fixture.debugElement.componentInstance;
  app.isLoggedIn = true;
  fixture.detectChanges();
  let compiled = fixture.debugElement.nativeElement;
  expect(compiled.querySelector('p').textContent).toContain(app.user.name);
	// not contains?
	expect(compiled.querySelector('p').textContent).not.toContain(app.user.name);
});
```

### Test a Service

If a component depends on many services, you need to create mocks of these services in which the function/properties you need to use in your component.

👉 [Official doc](https://angular.io/guide/testing-components-basics#component-class-testing) (search for "*The following WelcomeComponent depends on the UserService to know the name of the user to greet*.")

👉🏻  Official doc: [Angular - Testing services](https://angular.io/guide/testing-services)

```jsx
// An example but not very good
it('should use the user name from the service', () => {
  let fixture = TestBed.createComponent(UserComponent);
  let app = fixture.debugElement.componentInstance;
  let userService = fixture.debugElement.injector.get(UserService);
  fixture.detectChanges(); // <=======
	// We need this line because it doesn't have the same state as init when we inject the service
	// Without this, it's undefined at the beginning
  expect(userService.user.name).toEqual(app.user.name);
});
```

```jsx
// From: https://www.digitalocean.com/community/tutorials/testing-angular-with-jasmine-and-karma-part-1

import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let usersService: UsersService; // Add this

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService]
    });
    usersService = TestBed.get(UsersService); // Add this
  });

  it('should be created', () => { // Remove inject()
    expect(usersService).toBeTruthy();
  });
});
```

### Reactive From tests

```jsx
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
```

👇🏻  [Source.](https://stackoverflow.com/a/57175687/1323473)

```jsx
TestBed.configureTestingModule({
    // imports: [FormsModule] // import the FormsModule if you want ngModel to be working inside the test
    schemas: [NO_ERRORS_SCHEMA] // remove the FormsModule import and use that schema to only shallow test your component. Please refer to the official document for more information.
})
```

👇🏻  [Source](https://semaphoreci.com/community/tutorials/testing-components-in-angular-2-with-jasmine) + [codes](https://github1s.com/gonzofish/semaphore-ng2-webpack)

```jsx
it('should create a FormGroup comprised of FormControls', () => {
  component.ngOnInit();
  expect(component.formGroup instanceof FormGroup).toBe(true);
});
```

```jsx
<dynamic-form [questions]="myQuestions"></dynamic-form>
```

The input `questions` (in child) takes value from `myQuestions` (in parent) ⇒ Life cycle hooks: check data-bound input > *ngOnInit* > other components.

👉🏻  [Form & submit testing example](https://semaphoreci.com/community/tutorials/testing-components-in-angular-2-with-jasmine#h-adding-another-function-and-its-test) (the same source as above): returned *payload*, setValue and submit,... + [codes](https://github1s.com/gonzofish/semaphore-ng2-webpack)

```jsx
it('should create a FormControl for each question', () => {
  component.questions = [
    {
      controlType: 'text',
      id: 'first',
      label: 'My First',
      required: false
    },
    {
      controlType: 'text',
      id: 'second',
      label: 'Second!',
      required: true
    }
  ];
  component.ngOnInit();
	

  expect(Object.keys(component.formGroup.controls)).toEqual([
    'first', 'second'
  ]);
});
```

### Async

([src](https://www.digitalocean.com/community/tutorials/testing-angular-with-jasmine-and-karma-part-1)) A spy allows us to “spy” on a function and track attributes about it such as whether or not it was called, how many times it was called, and with which arguments it was called.

👉  [Official doc aboyut spyOn](https://jasmine.github.io/2.5/introduction#section-Spies:_%3Ccode%3Eand.returnValue%3C/code%3E) 

```jsx
// Async tasks

it('shouldn\'t fetch data successfully if not called asynchronously', () => {
  let fixture = TestBed.createComponent(UserComponent);
  let app = fixture.debugElement.componentInstance;
  let dataService = fixture.debugElement.injector.get(DataService);
  let spy = spyOn(dataService, 'getDetails')
    .and.returnValue(Promise.resolve('Data'));
  fixture.detectChanges();
  expect(app.data).toBe(undefined);
});

it('should fetch data successfully if called asynchronously', async(() => {
  let fixture = TestBed.createComponent(UserComponent);
  let app = fixture.debugElement.componentInstance;
  let dataService = fixture.debugElement.injector.get(DataService);
  let spy = spyOn(dataService, 'getDetails')
    .and.returnValue(Promise.resolve('Data'));
  fixture.detectChanges();
  fixture.whenStable().then(() => {
    expect(app.data).toBe('Data');
  });
}));
```

```jsx
// Alternative with tick
// ie. from "async...whenStable()" => "fakeAsync...tick()"
it('should fetch data successfully if called asynchronously', fakeAsync(() => {
  let fixture = TestBed.createComponent(UserComponent);
  let app = fixture.debugElement.componentInstance;
  let dataService = fixture.debugElement.injector.get(DataService);
  let spy = spyOn(dataService, 'getDetails')
    .and.returnValue(Promise.resolve('Data'));
  fixture.detectChanges();
  tick(); // resolve it immediately, don't wanna wait 
  expect(app.data).toBe('Data');
}));
```

```jsx
// DataService
export class DataService {
	getDetails() {
	  const resultPromise = new Promise((resolve, reject) => {
	    setTimeout(() => {
	      resolve('Data');
	    }, 1500);
	  });
	  return resultPromise;
	}
}
```

```jsx
// UserComponent
this.dataService.getDetails().then((data: string) => this.data = data);
```

## Errors?

```jsx
// NullInjectorError: No provider for HttpClient!
beforeEach(async(() => {
	import { HttpClientTestingModule } from '@angular/common/http/testing';
	TestBed.configureTestingModule({
	  imports: [HttpClientTestingModule]
	}).compileComponents();
}));
```

```jsx
// NullInjectorError: No provider for AngularFireDatabase!

```

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
