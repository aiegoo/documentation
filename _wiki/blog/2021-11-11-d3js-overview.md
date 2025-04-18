---
layout: post
title: "D3.js square.github.io tutorial"
name: "d3js-overview"
tags: [api, javascript]
tagName: api
permalink: 2021-11-11-d3js-overview.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "api d3js jekyll visualization data javascript binding"
summary: "Thu, Nov 11, 21, data binding"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2021-11-11T10:30:01 +0900
updated: 2021-11-11 10:30
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## square.github.io
[d3fullstack](https://github.com/aiegoo/uas-reference/blob/master/data/d3fullstack.pdf)

[source-code](https://github.com/aiegoo/d3fullstack.git)
## Example

Let's say you have a table in Excel and want to graph it. It's easy! Just point
it at your rows and columns, set a few colors, and boom! A graph.

<div class="ex-1 example-row-2">
  <div class="example example-source">
    <table class="data-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2014-01-01</td>
          <td>$10</td>
        </tr>
        <tr>
          <td>2014-02-01</td>
          <td>$20</td>
        </tr>
        <tr>
          <td>2014-03-01</td>
          <td>$40</td>
        </tr>
        <tr>
          <td>2014-04-01</td>
          <td>$80</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="example example-result">
  </div>
</div>

So now we want to make one of these in SVG to show it off on the interwebs.
It's going to be a bit more work. What do we need to make sure we get it right?

### The Scale

This graph has to be "to scale". It has to have a coordinate system!

The x-axis goes from January 2014 to April 2014, and the y-axis goes from $0 to
$80. However, the SVG is drawn in a box that's about 200 by 300 pixels. Dates
and pixels don't map to one another on their own, so we have to specify a mapping
somehow.

{{site.data.alerts_callout_info}}
  Note that the y-axis flips! The SVG origin, <kbd>(0, 0)</kbd> is in the top left,
  but in this graph, the origin is the bottom left. We call the chart
  <em>y-up</em> and we call SVG <em>y-down</em>.
{{site.data.alerts.end}}

### The Axes

We can actually read the Excel graph because it's clearly labeled. Those same labels
with "$20" and "February" have to get to our screen somehow. They also need to be
formatted correctly for the data type.

### The Data

Our graph is showing our data! Somehow, the 4 rows in our source table
need to turn into 4 points on a line. On top of that, the points in the line
need to fit into the coordinate system we've defined.

We can kind of intuit this, but it's critical to working with D3. We have data
coming in, and we transform it to something visual.

## Doing It The Hard Way

Let's make a graph the hard way! As we've seen earlier, the SVG `<path>` tag is
kind of complex, so we'll swap out a line graph for a scatterplot.

We'll need to manually write out each point. Transform attributes are inherited
by child elements, so we can use `<g>` tags to move entire groups, such as the
axes, or even offset the entire graph by a margin.

{% include examples/scatterplot.svg %}

{% include examples/scatterplot.svg %}


Man! All that work for such a simple graph? SVG is a lot of work!

## Doing It The D3 Way

Good news! D3 has pieces to help with each of the parts of a graph we listed
above! However, D3 does this in the spirit of "automating the hard bits you
already understand", rather than making it all happen.

### Small Helpers

There are a few operations that come up all the time, such as finding the
minimum and maximum values of a data set (even both at the same time, the
"extent").

In D3, our source data is always plain old Javascript objects (POJOs). Most
often the data is homogenous arrays.

<div class="example-row-1">
  <div class="example">
    {% highlight javascript
      %}{% include examples/data.js %}
d3.min(numbers);
// 1
    {% endhighlight %}
  </div>
</div>

In D3 code, it's common to pass callbacks that are used on all elements of a
group. These callbacks are almost always called back with two arguments: the
element and its index. It's common to name these parameters `d` and `i`
respectively.

```javascript
d3.max(data, function(d, i) { return d.amount });
// 80

d3.extent(numbers);
// [1, 10]
```

### Scales

D3 has objects called scales that help map values across coordinate systems.
There are different kinds of scales (linear, logarithmic, linear for time).
Scales are configured with a domain and a range, they map from the data to
the approprate part of the screen (screen space).

Here is how we set up the y-scale for the above money example:

```javascript
  .domain([0, 80]) // $0 to $80
  .range([200, 0]); // Seems backwards because SVG is y-down
```

Or if we wanted to take advantage of the helper methods above:

```javascript
y.domain(d3.extent(data, function(d) { return d.amount }));
```


The domain is in the data space, so its units are your source units. The range
is in screen space (pixels).

This scale object is also a function! Calling the scale as a function is how
we translate values from one coordinate to another.

```javascript
y(0);   // in: $0
// 200  // out: 200px (bottom of graph)
y(80);  // in: $80
// 0    // out: 0px (top of graph)
```

We can even do the same things with dates!

```javascript
var x = d3.scaleTime()
    .domain([
      new Date(Date.parse('2014-01-01')),
      new Date(Date.parse('2014-04-01'))
    ])
    .range([0, 300]);

x(new Date(Date.parse('2014-02-01')));
// 103.3811949976841
```

Scales are not just for linear transforms (continuous or quantitative scales),
they can also be used for arbitrary transforms (discrete or ordinal scales).
We'll come across more scales later.

### Axes

In our example, up top, we have these nice labels and tick marks. This is
something D3 can do for us. We can build an axis, and apply it to a scale. We
say, "hey, I want to build an axis that".

<div class="example-row-2">
  <div class="example">
    {% highlight javascript
      %}{% include examples/axes.js %}
    {% endhighlight %}
  </div>

  <iframe class="example"
    height="180"
    src="{{ "/examples/axes/" | prepend: site.baseurl }}">
  </iframe>
</div>

D3's axes are really powerful! Notice how we built it using <kbd>Date</kbd>
objects, and by default, it labeled the tick marks appopriately!

### Data

The next thing to do is take our data and transform it into something visible.
This is data binding, and it's a big topic, so it gets its own section.

[next](/2021-11-11-d3-databinding.html)


<script type="text/javascript" src="{{ '/js/parts-of-a-graph.js' }}"></script>

<style>
@font-face {
  font-family: 'Inter var';
  src: url('/fonts/Inter.var.woff2');
}

* {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  font-family: 'Inter var', sans-serif;
}

svg text {
  font-family: 'Inter var', sans-serif;
}
</style>

<div id="wrapper"></div>
<script type="text/javascript" src="{{ '/js/d3.v7.js' }}"></script>
<script type="text/javascript" src="{{ '/js/nyc-chart.js' }}"></script>


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
