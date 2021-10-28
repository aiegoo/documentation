---
layout: post
title: "Data combining using pandas"
name: "data-combining"
tags: [data-science, machine-learning]
tagName: machine-learning
permalink: 2021-10-26-data-combining.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "data coupling dataframes inner outer left right merging pandas display side by side concatenate concat"
summary: "Tue, Oct 26, 21, Coupling multiple dataframes together uisng dataFrame and series"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2021-10-26T05:11:24 +0900
updated: 2021-10-26 05:11
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## Thi

{% assign img-url = '/img/post/data/data-processing' %}

Sometimes, we wanna couple multiple dataframes together. In this note, I use `df` as `DataFrame`, `s` as `Series`.

## Libraries

~~~ python
import pandas as pd
import numpy as np
~~~

## Coupling dfs with `merge()`

There are 4 types of merging, like in [SQL](https://www.w3schools.com/sql/sql_join.asp).

- **Inner**: only includes elements that appear in both dataframes with a common key.
- **Outer**: includes all data from both dataframes.
- **Left**: includes all of the rows from the "left" dataframe along with any rows from the "right" dataframe with a common key; the result retains all columns from both of the original dataframes.
- **Right**: includes all of the rows from the "right" dataframe along with any rows from the "left" dataframe with a common key; the result retains all columns from both of the original dataframes.

![Types of merge](images/dlml/type_of_join.webp){:.img-full-100}
![image](https://user-images.githubusercontent.com/42961200/139344520-7a7addd8-a326-48f2-ae39-024d6f3c3c3e.png)

On **the same column name**,

~~~ python
# left
df_left = pd.merge(left=df1, right=df2, how='left', on='Col_1', suffixes=('_df1', '_df2'))
# right
df_right = pd.merge(left=df1, right=df2, how='right', on='Col_1', suffixes=('_df1', '_df2'))

display_side_by_side(df1, df2, df_left, df_right)
~~~

::: col-2-flex
<table>
  <thead>
    <tr>
      <th></th>
      <th>Col_1</th>
      <th>Col_2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>E</td>
      <td>3</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>3</th>
      <td>D</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>B</td>
      <td>2</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th></th>
      <th>Col_1</th>
      <th>Col_2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>B</td>
      <td>2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>-3</td>
    </tr>
    <tr>
      <th>3</th>
      <td>F</td>
      <td>-4</td>
    </tr>
    <tr>
      <th>4</th>
      <td>E</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
:::

::: col-2-flex flex-start
<table>
  <thead>
    <tr>
      <th></th>
      <th>Col_1</th>
      <th>Col_2_df1</th>
      <th>Col_2_df2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>E</td>
      <td>3</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>NaN</td>
      <td>-3</td>
    </tr>
    <tr>
      <th>3</th>
      <td>D</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>B</td>
      <td>2</td>
      <td>2</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th></th>
      <th>Col_1</th>
      <th>Col_2_df1</th>
      <th>Col_2_df2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>E</td>
      <td>3</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>NaN</td>
      <td>-3</td>
    </tr>
    <tr>
      <th>3</th>
      <td>B</td>
      <td>2</td>
      <td>2</td>
    </tr>
    <tr>
      <th>4</th>
      <td>F</td>
      <td>NaN</td>
      <td>-4</td>
    </tr>
  </tbody>
</table>
:::

~~~ python
# inner (defaut)
df_inner = pd.merge(left=df1, right=df2, on='Col_1', suffixes=('_df1', '_df2'))
# outer
df_outer = pd.merge(left=df1, right=df2, how='outer', on='Col_1', suffixes=('_df1', '_df2'))

display_side_by_side(df1, df2, df_inner, df_outer)
~~~

::: col-2-flex flex-start
<table>
  <thead>
    <tr>
      <th></th>
      <th>Col_1</th>
      <th>Col_2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>E</td>
      <td>3</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>3</th>
      <td>D</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>B</td>
      <td>2</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th></th>
      <th>Col_1</th>
      <th>Col_2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>B</td>
      <td>2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>-3</td>
    </tr>
    <tr>
      <th>3</th>
      <td>F</td>
      <td>-4</td>
    </tr>
    <tr>
      <th>4</th>
      <td>E</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
:::

::: col-2-flex flex-start
<table>
  <thead>
    <tr>
      <th></th>
      <th>Col_1</th>
      <th>Col_2_df1</th>
      <th>Col_2_df2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>E</td>
      <td>3</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>NaN</td>
      <td>-3</td>
    </tr>
    <tr>
      <th>3</th>
      <td>B</td>
      <td>2</td>
      <td>2</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th></th>
      <th>Col_1</th>
      <th>Col_2_df1</th>
      <th>Col_2_df2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>E</td>
      <td>3</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>NaN</td>
      <td>-3</td>
    </tr>
    <tr>
      <th>3</th>
      <td>D</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>B</td>
      <td>2</td>
      <td>2</td>
    </tr>
    <tr>
      <th>5</th>
      <td>F</td>
      <td>NaN</td>
      <td>-4</td>
    </tr>
  </tbody>
</table>
:::

On the **different column names**,

~~~ python
# left
df_left = pd.merge(left=df1, right=df2, how='left', left_on='Col_1', right_on='Col_X', suffixes=('_df1', '_df2'))

display_side_by_side(df1, df2, df_left)
~~~

::: col-2-flex flex-start
<table>
  <thead>
    <tr>
      <th></th>
      <th>Col_1</th>
      <th>Col_2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>E</td>
      <td>3</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>3</th>
      <td>D</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>B</td>
      <td>2</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th></th>
      <th>Col_X</th>
      <th>Col_2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>B</td>
      <td>2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>-3</td>
    </tr>
    <tr>
      <th>3</th>
      <td>F</td>
      <td>-4</td>
    </tr>
    <tr>
      <th>4</th>
      <td>E</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
:::

::: col-2-flex flex-start
<table>
  <thead>
    <tr>
      <th></th>
      <th>Col_1</th>
      <th>Col_2_df1</th>
      <th>Col_X</th>
      <th>Col_2_df2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1</td>
      <td>A</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>E</td>
      <td>3</td>
      <td>E</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>NaN</td>
      <td>C</td>
      <td>-3</td>
    </tr>
    <tr>
      <th>3</th>
      <td>D</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>B</td>
      <td>2</td>
      <td>B</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
:::

The result keeps both `Col_1` and `Col_X` while in the case of the same column name, there is only 1 column. Other words, in this case, we only want to keep `Col_1` and don't need `Col_X`. How to do that?

~~~ python
df_left = df1.set_index('Col_1').join(df2.set_index('Col_X'), how="left", lsuffix="_df1", rsuffix="_df2").reset_index()

display_side_by_side(df1, df2, df_left)
~~~

::: col-2-flex flex-start
<table>
  <thead>
    <tr>
      <th></th>
      <th>Col_1</th>
      <th>Col_2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>E</td>
      <td>3.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>3</th>
      <td>D</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>B</td>
      <td>2.0</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th></th>
      <th>Col_X</th>
      <th>Col_2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>B</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>-3.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>F</td>
      <td>-4.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>E</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
:::

<table>
  <thead>
    <tr>
      <th></th>
      <th>Col_1</th>
      <th>Col_2_df1</th>
      <th>Col_2_df2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>E</td>
      <td>3.0</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>NaN</td>
      <td>-3.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>D</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>B</td>
      <td>2.0</td>
      <td>2.0</td>
    </tr>
  </tbody>
</table>

## Concatenate dfs with `concat()`

~~~ python
# axis=0 (default)
df_concat_0 = pd.concat([df1, df2]) # the same columns
df_concat_1 = pd.concat([df1, df2], axis=1) # the same rows

df_concat_0_idx = pd.concat([df1, df2], ignore_index=True)
# ignore_index=True prevent duplicating indexes

display_side_by_side(df1, df2)
display_side_by_side(df_concat_0, df_concat_1, df_concat_0_idx)
~~~

::: col-2-flex flex-start
<table>
  <thead>
    <tr>
      <th></th>
      <th>Col_1</th>
      <th>Col_2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>E</td>
      <td>3.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>3</th>
      <td>D</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>B</td>
      <td>2.0</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th></th>
      <th>Col_1</th>
      <th>Col_2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>B</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>-3.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>F</td>
      <td>-4.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>E</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
:::

::: col-2-flex flex-start
<table>
  <thead>
    <tr>
      <th></th>
      <th>Col_1</th>
      <th>Col_2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>E</td>
      <td>3.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>3</th>
      <td>D</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>B</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>B</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>-3.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>F</td>
      <td>-4.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>E</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th></th>
      <th>Col_1</th>
      <th>Col_2</th>
      <th>Col_1</th>
      <th>Col_2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1.0</td>
      <td>A</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>E</td>
      <td>3.0</td>
      <td>B</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>NaN</td>
      <td>C</td>
      <td>-3.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>D</td>
      <td>NaN</td>
      <td>F</td>
      <td>-4.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>B</td>
      <td>2.0</td>
      <td>E</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th></th>
      <th>Col_1</th>
      <th>Col_2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>E</td>
      <td>3.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>3</th>
      <td>D</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>B</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>5</th>
      <td>A</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>6</th>
      <td>B</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>7</th>
      <td>C</td>
      <td>-3.0</td>
    </tr>
    <tr>
      <th>8</th>
      <td>F</td>
      <td>-4.0</td>
    </tr>
    <tr>
      <th>9</th>
      <td>E</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
:::

## Combine 2 dataframes with missing values

We consider a situation in that we need to combine 2 dfs containing missing values in each. The missing values will be filled by taking from the others. For example, the value of `C` in the left df can be fulfilled by the value of `C` in the right df.

~~~ python
df_comb = df1.copy() # we don't want to change df1
df_new = df_comb.fillna(df2)

display_side_by_side(df1, df2, df_comb, df_new)
~~~

::: col-2-flex flex-start
<table>
  <thead>
    <tr>
      <th></th>
      <th>Col_1</th>
      <th>Col_2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>E</td>
      <td>3.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>3</th>
      <td>D</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>B</td>
      <td>2.0</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th></th>
      <th>Col_1</th>
      <th>Col_2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>B</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>-3.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>F</td>
      <td>-4.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>E</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th></th>
      <th>Col_1</th>
      <th>Col_2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>E</td>
      <td>3.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>3</th>
      <td>D</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>B</td>
      <td>2.0</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th></th>
      <th>Col_1</th>
      <th>Col_2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>E</td>
      <td>3.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>-3.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>D</td>
      <td>-4.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>B</td>
      <td>2.0</td>
    </tr>
  </tbody>
</table>
:::




{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
