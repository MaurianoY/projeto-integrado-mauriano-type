# What Type?

## About
What Type is a software development project about understading what are all pokemon from certain types.

### What are Pokemon types?
Pokemon types can be defined as a macro group that a pokemon can fit it. For example, fish pokemon can be defined, generally, as Water type pokemon.

### Why are Pokemon types important?
A Pokemon's type say a lot about them. It directly influences which moves it learn, which are their weaknesses and resistences and how much damage their attacks cause.

## Technical Documentation
In this section, we can understand a little bit better about the technical documentation from the What Type project.

### Main Technologies
The Project is built on top of the Angular Framework, which is a front-end development framework that uses typescript as the main programming language.
The Angular framework also supports normal HTML and CSS page creation, but with some changes. Angular has specific commands that can interact with html code. This creates a bridge between typescript and html script. This is a huge step towards creating advanced logic for web pages, since html is very limited in terms of creating advanced logical programming.

#### Typescript
Typescript is an extension from Javascript that uses strongly typed variabled instead of "duck type" variables. These are very important for code readability, since their behavior is predictable. Without strongly typed variables, a function argument, return type or local variable can assume any type depending on the implementation, which is a nightmare for API consumers.

### Project Components
The project is devided mostly into two components. These components can be understood as web pages (or Angular routes) and serve these webpages through their logic

#### Home Page
The Home Page contains a drop down menu that have the Pokemon Type Combinations. 

#### Type Display
The Type Display route displays all Pokemon from a certain type. It interacts with the Home Page by requesting a type combination string as a url param. This param is read by a hashmap and converted into a list of pokemon.

## Validation
The following section contains information about how the project can be validated in order to guarantee that the correct behavior is being displayed.

### Manual Validation
Currently, the main way to verify that the system is working as intended is to deploy it as a local instance and verify its behavior manually. This manual test consists of selecting a type on the Home Page and manually validating the Pokemon List. This method of testing is not scalable and is considered "toil", which is a repeatable low value task that can be automated.

### Automatic Validation
The main strategy for the testing plan is to allow for an automatic test suite. This would validate that every component is working as expected. The validation will be made in layers.

#### Unit Tests
The unit tests will test basic logic, usually contained within a single function at a time. It is the most basic type of test. Every function should be tested with this. These tests should be quick and not flaky.

#### UI Tests
The UI tests will be very important to verify if all components are in the correct place. These tasks usually take longer to execute, but not that much since not all components need to run in order for this type of test to work.

#### Integrated Tests
Finally, the integrated tests will join the UI and the main logic. The integrated tests simulate a real environment and test if all the components are in the correct place and have the correct data. These tests take a lot of time to run, so they should be ran on a separate pipeline.
