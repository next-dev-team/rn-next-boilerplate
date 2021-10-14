# Atomic Design Pattern: How to structure your React application

## Design Patterns

https://github.com/mohammed-atif/reminder-atomic-app-demo/tree/master/src/components

**_Atoms:_**

Basic building blocks of matter, such as a button, input or a form label. They’re not useful on their own.

**_Molecules:_**

Grouping atoms together, such as combining a button, input and form label to build functionality.

**_Organisms:_**

Combining molecules together to form organisms that make up a distinct section of an interface (i.e. navigation bar)

**_Templates:_**

Consisting mostly of groups of organisms to form a page — where clients can see a final design in place.

**_Pages:_**

An ecosystem that views different template renders. We can create multiple ecosystems into a single environment — the application.

## **File Structure**

Since React follows a component-based architecture, it’s pretty common to organise your components based on the type, rather than feature. What if we built a sub-ecosystem for each component feature?

![](https://miro.medium.com/max/944/1*07DyQFrANjzamoaju998wA.png)

Each component or service has its own isolated environment — everything needed to work on its own instance. You can see that each component **_/Buttons_** & **_/Form_** has its own set of styles, actions, and unit or integration tests that act like an independent piece of feature in your app. (_You can also add its own set of images and other local variables.)_ This makes it much easier, and reduces your efforts, to test your code consistently and effectively.

This type of organisation allows for nesting components into another component. Note that if you define a new component inside **_/Delete, /Submit, /Login, or /Register_**, the nested component can only be used by its direct parent, and not its cousins.

## Why would you want to do that?

The main purpose of following the atomic design pattern when organising a React file structure is to isolate the environments of each feature component. When side-effects are isolated, code becomes a lot more readable and modular. A single instance of a feature will make testing more straightforward, thus improving the overall quality assurance of your application. As the complexity of your application and state management begin to grow, organising your file structure in this pattern will help you easily determine and handle state.
