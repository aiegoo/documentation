---
layout: post
name: Javascript basics 
permalink: javascript-myCookBook.html
sidebar: other_sidebar
collection: wiki
tags: [wiki, getting_started]
date: 2021-09-05 23:30:03 +0900
updated: 2021-09-15 11:24 AM
toc: true
public: true
comment: false
regenerate: true
---

## 1. Start
Recently, I would like to write down some Javascript tips I want to keep organized while completing a Google-Apps-Script project.
## 2. Deployment
go straight to the content

- When you want an empty array value to evaluate to false
Suppose there is a function that searches for specific files in a folder and returns the searched file names as an array (eg, an newFilesarray).
At this time, if the array is empty, falsy valueyou will want the empty array to be evaluated as , so that subsequent file processing is not performed .
However, unlike Python, if ( newfiles )when processing falseas , it is not judged as .
If if ( newfiles.length )you want to judge according to the intention of the title , use .
For a detailed explanation of the content…

- Reference book: Lee Sun Brown, Learning JavaScript, 3rd Edition (2016), Translation-Hanbit Media (2017), p151. 5.7.1 True-Equal Values ​​and False-Equal Values
- MDN > Definitions of Web-realated terms > Fasly : false-like values
Except for the above values, all values ​​are the same (Truthy)
- MDN > Definitions of Web-realated terms > Truthy : true-like values
  

Truthy values ​​to watch out for
All objects, even those that return false when the valueOf( ) method is called, are also true values.
All arrays, even empty arrays are true
Strings with only spaces (“ “, etc.)
String “false”
isEven & isOdd single line function
const isEven = n => n % 2 == 0
const isOdd = n => Math.abs(n % 2) == 1
When confused about the use of this in eventlistner
Reference link: What is 'this' in event listeners?
problem
When this is used in the eventlistener callback function, this does not refer to the object that has the callback function as a member.
At this time, the bound element of the eventlistner is used as this, so it cannot be performed as intended.
solution
Old fashioned solution: handleEvent
Nowadays solution: bind()
Another solution: arrow function
For more details, see the reference link above.

11:16 AM