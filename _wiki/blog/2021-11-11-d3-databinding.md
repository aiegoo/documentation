---
layout: post
title: "D3 square.github.io data binding"
name: "d3-databinding"
tags: [api, javascript, googlesheet, d3]
tagName: api
permalink: 2021-11-11-d3-databinding.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "data binding google sheet visualization d3js d3"
summary: "Thu, Nov 11, 21, data binding"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2021-11-11T11:09:45 +0900
updated: 2021-11-11 11:09
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## square.github.io
<div class="info">
  Heads up! Data binding is probably the hardest part of D3 to "get".
  Personally, it took this being re-explained like 2 or 3 times to really
  internalize what was going on.
</div>

D3 selections are a different way to look at data binding. They're powerful
because the same selection can be updated for different data later on. Updating
is the most powerful part of selections.

**example** 

|---
| ![image](https://user-images.githubusercontent.com/42961200/141664938-35924f65-8498-43cc-b369-086be2cc8545.png) | ![image](https://user-images.githubusercontent.com/42961200/141664964-73b6bb51-b2c0-4518-8e56-806c94e58689.png)

{% include image.html links="https://user-images.githubusercontent.com/42961200/141665253-9f161212-2b02-4f1b-a4e5-c3b1f7b37d2e.png" caption="introducing function parameter i and n" %}

![image](https://user-images.githubusercontent.com/42961200/141665253-9f161212-2b02-4f1b-a4e5-c3b1f7b37d2e.png)

## Selections `d3.selectAll`

Ok, so we've referenced `d3.select()` and `d3.selectAll()` a few times already
but now, it's really time to dig in. `d3.select()` will find one element,
`d3.selectAll` will match all available elements.

With types, the functions might look something like:

```javascript
d3.select(String selector) -> (d3.selection)
```

D3 selections are a group of elements that match a query **or could match a
query later** (the elements may not have been constructed yet).

## Joins `selection.data()`

Selections are used to map pieces of our data to elements in the DOM. Suppose we
have some data:


```javascript
var sales = [
  { product: 'Hoodie',  count: 7 },
  { product: 'Jacket',  count: 6 },
  { product: 'Snuggie', count: 9 },
];
```


And we want to map these to points on a scatterplot. We know we want each object
in this array to turn into a `<rect>` tag, inside of our `<svg>`
below:

```html
<!-- before, empty graph -->
 <div class="example">
   <svg></svg>
</div>


<!-- after, rects graph -->
<svg>
  <rect /><!-- { product: 'Hoodie',  count: 7 } -->
  <rect /><!-- { product: 'Jacket',  count: 6 } -->
  <rect /><!-- { product: 'Snuggie', count: 9 } -->
</svg>
```
To connect these, we're going to create a selection and use `.data()` to bind
our data to the selection.

```javascript
var svg = d3.select('svg');
svg.size();
// 1 -- one <svg> element exists

var rects = svg.selectAll('rect')
  .data(sales);

rects.size();
// 0 -- no <rect> elements exist yet!
```

Okay, now we have a selection but still no elements! We have more work to do.

## Adding Elements `selection.enter()`

Again, our goal is to have a rectangle for each data point. We are starting with
none and we have 4 new data points, so obviously the right thing to do is to
add a new `<rect>` for each data point.

The way D3 looks at this is a more subtle: we want to add a `<rect>`
per data point, *but only for the new points since the last data join*. Since this
is the first data binding (there are no rects currently), everything is new,
it's straightforward to add new points. It's important to keep in mind that for
the next selection, things will be more complex since there will already be
rects.

The part of a D3 selection that represents these element-less data-points
is `selection.enter()`;

```javascript
var newRects = rects.enter();
```
So now `newRects` represents these element-less data-points, so we use
`append` to add new elements. The elements don't add themselves, we have to
create the elements that will match the selection ourselves. We use the same
attribute editing helpers to configure each circle per its data point.


```javascript
// recall that scales are functions that map from
// data space to screen space
var maxCount = d3.max(sales, function(d, i) {
  return d.count;
});
var x = d3.scaleLinear()
  .range([0, 300])
  .domain([0, maxCount]);
var y = d3.scaleOrdinal()
  .rangeRoundBands([0, 75])
  .domain(sales.map(function(d, i) {
    return d.product;
  }));

newRects.append('rect')
  .attr('x', x(0))
  .attr('y', function(d, i) {
    return y(d.product);
  })
  .attr('height', y.rangeBand())
  .attr('width', function(d, i) {
    return x(d.count);
  });
```


  <div class="example">
    <div class="info">
      We're getting a little sneaky here! We're introducing an <em>ordinal</em>
      scale, one that's discrete instead of continuous.
    </div>

    <p>
      The <kbd>d3.scaleOrdinal()</kbd> helps us create buckets for each
      element. In this case, that's one per product.
    </p>
    <p>
      The domain is the 3 product names. The range is a little different,
      <kbd>rangeRoundBands</kbd> is a helper function that sets the range, but
      tells D3 to pick buckets that are whole pixel widths (no fractions).
    </p>
  </div>
</div>

So how does it turn out? Let's take a look:

<div class="example-row-2">
  <div class="example">
    {% highlight html %}
<svg width="300" height="100">
{% include examples/binding.svg %}<svg>
    {% endhighlight %}
  </div>

  <div class="example">
    <svg width="300" height="100">
      <g transform="translate(5, 5)">
        {% include examples/binding.svg %}
      </g>
    </svg>
  </div>
</div>

<div class="info">
  Check out how these attribute helpers can take immediate values as well
  as callbacks. Just like with <kbd>d3.min</kbd>, these callbacks use the same
  style of <kbd>(d, i)</kbd> parameters to represent the element and its index.
</div>

## Removing Elements `selection.exit()`

Where `selection.enter()` selects elements that have added since the last data
join, `selection.exit()` is the opposite, it applies to elements that have been
removed.

Suppose we drop the first point from our source array, we can find and operate
on the corresponding element in the DOM via `selection.exit()`.

We can use the `remove()` method to immediately delete matched elements, it's
the opposite of `append()`.

```javascript
sales.pop(); // drops the last element

var rects = rects.data(sales); // join the data again

var rectsToRemove = rects.exit();

rectsToRemove.size()
// 1 -- one element is part of the exit selection

rectsToRemove.remove(); // instantly removes
```

```html
  <div class="example">
    <svg width="300" height="100">
      <g transform="translate(5, 5)">
        <rect x="0" y="0"  height="25" width="233.33" />
        <rect x="0" y="25" height="25" width="200" />
      </g>
    </svg>
  </div>
```


## Identity and the Key Function

As a quick aside: Javascript object equality is very shallow. Objects are only
equal if they are actually the same object (identity), not if they have the same
values:

```javascript
var obj1 = { value: 1 };
// true -- identity
obj1 == obj1;

var obj2 = { value: 2 };
var obj3 = { value: 2 };
// false -- huh? they have the same values!
obj2 == obj3;
```

But the example with `selection.exit()` above works! It only removed one element
from the DOM because we only removed one element from the array, and all the
rest of the objects were the exact same.

What if we get a new page of data, with some overlap, but we no longer have the
exact same object instances? Well, we will have to find some way to
match objects to each other, and with D3, that's where a key function comes in.

When we introduced `selection.data()` earlier, we left out the hidden second
parameter, the key function. It's another `(d, i)` callback.

This example keys objects on their date, so we can match elements across
separate arrays.

```javascript
var sales1 = [
  { product: 'Hoodie', count: 7 },
  { product: 'Jacket', count: 6 }
];

var sales2 = [
  { product: 'Jacket',  count: 6 }, // same
  { product: 'Snuggie', count: 9 }  // new
];

var rects = svg.selectAll('rect')
  .data(sales1, function(d, i) { return d.product; } );

rects.enter().append('rect');

rects.size();
// 2 -- first join, adds two new elements

var nextrects = rects
  .data(sales2, function(d, i) { return d.product; });

nextrects.exit().size();
// 1 -- one element to remove
nextrects.exit().remove();

nextrects.enter().append('rect'); // adds one element
```


## Transitions `selection.transition()`

The key function is also important in case parts of our objects change -- if we
change a count, then we can update the appropriate element without having to
delete and re-add the element, we can update it in place.

One of D3's most visually pleasing features is its ability to help with
transitions. The key function is critical here for object permanence.

Suppose we have per-product sales we want to update as more products are sold?
We can use transitions to demonstrate this update.

<div class="ex-2 example-row-2">
  <div class="example example-source">
    <table class="data-table">
      <thead>
        <tr>
          <th colspan="2">
            Day 1
          </th>
        </tr>
        <tr>
          <th>Product</th>
          <th>Sales (Cumulative)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hoodie</td>
          <td>10</td>
        </tr>
        <tr>
          <td>Jacket</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Snuggie</td>
          <td>2</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="example example-source">
    <table class="data-table">
      <thead>
        <tr>
          <th colspan="2">
            Day 2
          </th>
        </tr>
        <tr>
          <th>Product</th>
          <th>Sales (Cumulative)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hoodie</td>
          <td>16</td>
        </tr>
        <tr>
          <td>Jacket</td>
          <td>7</td>
        </tr>
        <tr>
          <td>Snuggie</td>
          <td>8</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```javascript
  sales = (sales == days[0]) ? days[1] : days[0];
  update();
}

function update() {
  var rects = svg.selectAll('rect')
    .data(sales, function(d, i) { return d.product });

  // When we enter, we add the DOM element
  // and set up the things that won't change
  var enterRects = rects.enter()
    .append('rect')
      .attr('x', x(0))
      .attr('y', function(d, i) {
        return y(d.product);
      })
      .attr('height', y.bandwidth())

  // "rects" represents the update selection, we need to
  // manually merge it with the enter selection to update
  // all rects at the same time
  rects.merge(enterRects)
    .attr('width', function(d, i) {
      return x(d.count);
    });
};
```

```html
  <div class="example example-result">
    <div>
      <svg width="300" height="100"></svg>
      <button class="toggle">toggle()</button>
    </div>
  </div>
```


Ok, but now time to make it pretty. That's where `selection.transition()`
comes in. In the above example, we were just using the plain update
selection to change the values. Here, we'll use `transition()` to make our transition much slicker.

`transition()` selections can have custom timing attributes like `.duration()`
and `.delay()` and even a custom easing function `.ease()`, but the defaults
are pretty nice.

```javascript
function toggle() {
  sales = (sales == days[0]) ? days[1] : days[0];
  update();
}

function update() {
  var rects = svg.selectAll('rect')
    .data(sales, function(d, i) { return d.product });

  var enterRects = rects.enter()
    .append('rect')
      .attr('x', x(0))
      .attr('y', function(d, i) {
        return y(d.product);
      })
      .attr('height', y.bandwidth())
      .attr('width', function(d, i) {
        return x(d.count);
      });

  rects.merge(enterRects)
    .transition() // NEW
    .duration(1000) // Also NEW
      .attr('width', function(d, i) {
        return x(d.count);
      });
};
```

```html
  <div class="example example-result">
    <div>
      <svg width="300" height="100"></svg>
      <button class="toggle">toggle()</button>
    </div>
  </div>
```

Ok! That was the basics of D3! We've got a few more complex examples, but they
mostly build on what we've already shown.

<a href="{{ "/examples" | prepend: site.baseurl }}" class="giant-button">
  Next
</a>


<script type="text/javascript" src="{{ "/js/data-binding.js" | prepend: site.baseurl }}"></script>


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
