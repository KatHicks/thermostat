# Thermostat
### Makers Academy Week Challenge No. 5

[![Build Status](https://travis-ci.org/KatHicks/thermostat.svg?branch=master)](https://travis-ci.org/KatHicks/thermostat) [![Code Climate](https://codeclimate.com/github/KatHicks/thermostat/badges/gpa.svg)](https://codeclimate.com/github/KatHicks/thermostat)

### Instructions

We worked on this project for two days in rotating pairs. It was the first week that we'd been introduced to JavaScript.

Below are the instructions:

> In this challenge, you will build the logic needed to model a simple thermostat.
>
> * Your thermostat starts at 20 degrees
> * You can increase the temperature with an up function
> * You can decrease the temperature with a down function
> * The minimum temperature is 10 degrees
> * If power saving mode is on, the maximum temperature is 25 degrees
> * If power saving mode is off, the maximum temperature is 32 degrees
> * Power saving mode is on by default
> * You can reset the temperature to 20 with a reset function
> * You can ask about the thermostat's current energy usage: less than 18 is low-usage, less than 25 is medium-usage, anything else is high-usage.
>   * When an interface is added later on, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.

### Objectives

* Are you having fun?
* Are you a better developer than you were yesterday?
* **Can you learn a new language and its patterns?**

### Using my application

* Download the source code using `$ git clone`
* Open the `src/index.html` file in the browser to view the app

### Running the tests

* Open the `SpecRunner.html` file in the browser to run the tests and view the results

### Dependencies

* Written in **JavaScript**
* Used **jQuery** to develop some of the user interaction
* Tested using **Jasmine**
* Styled using **SASS**

### Approach

* Designed the business logic to have a single thermostat object written using the constructor/prototype pattern
* Started off by adding all the specification logic to the thermostat object and test-driving this implementation with unit tests
* Once all the business logic was implemented, designed the user interface and wrote the event interactions using jQuery

### Reflections

* Was my first time using SASS and found it interesting to see what additional functionality it offers, such as variables and nesting
* Struggled a little bit to see the benefits of using jQuery
  * Felt that it didn't really save you that many lines of code or complexity compared with using vanilla JavaScript
* Had some interesting debates with my pair partners around raising errors and error handling
  * Main question was whether error handling should be used only for unexpected events or whether they should also be used for milestones in normal interaction with the programme

### Collaborators

Rick Clark and Enrico Graziani
