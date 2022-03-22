# working_with_javascript

## Overview

The goal of this challenge was to determine how best to add multiple filter searches on the categories of data that were reflected on our website. This involved updating both our app.js and our index.html files.

## Results

The multiple filtering works on a basis of two nested javascript functions. The first function saves the changes from any of the filter fields into an array. The second function which is nested into the first then takes those saved values and then applies them to the table. This allows for the UFO results to be filtered on any one search requirement to show similarities between them.

State Filter
![ShapeFilter](https://github.com/drewabramo12/working_with_javascript/blob/main/images/stateFilter.PNG)

Shape Filter

![ShapeFilter](https://github.com/drewabramo12/working_with_javascript/blob/main/images/shapeFilter.PNG)

## Summary

The use of this code for filtering does have a drawback in that it only allows for one type of filtering at any given time. I would reccommend developing this code further to allow for deeper filtering and further understanding of relationships between different types of information in the `data.js` file. Another improvement is to build a drop down list of available search items select from within the data table. This search method relies heavily on the user already being familiar with the data to run searches.