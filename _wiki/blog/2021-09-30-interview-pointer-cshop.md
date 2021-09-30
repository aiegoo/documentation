---
name: C# interview pointer
layout: post
permalink: 2021-09-30-itnerview-pointer-cshop.html
sidebar: other_sidebar
collection: wiki
summary: "C# Interview Questions"
tags: [wiki, getting_started]
excerpt_separator: <!--more-->
date: 2021-09-30 22:10:03 +0900
updated: 2021-09-30 22:34 PM
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
latex: false
repos: aiegoo/kramdown-cn/blob/master/_posts/2020-07-12-c-interview-questions.md
---

* (table of content)
{:toc}

> This is C# interview notes which did me a great favor and successfully offered with a job

> ▲ means waiting to be completed



## Basic Concepts

### Constructor

A member function in a class that has the same name as its class.

It constructs the value of data members while initializing class.

VS [Destructor](#Destructor)

### Commonly Used Exceptions

ArgumentException, ArgumentNullException, ArgumentOutOfRangeException, ArithmeticException, DivideByZeroException, OverFlowException, IndexOutOfRangeException, InvalidCastException, InvalidOperationException, IOEndOfStreamException, NullReferenceException, OutOfMemoryException, StackOverFlowException

### Class types in C#

- **Partial class:** It allows its members to be divided or shared with multiple .cs files. It is denoted by the keyword **Partial.**
- **Sealed class:** It is a class that cannot be inherited. To access the members of a sealed class, we need to create the object of the class. It is denoted by the keyword **Sealed**.
- **Abstract class**: It is a class whose object cannot be instantiated. The class can only be inherited. It should contain at least one method. It is denoted by the keyword **abstract**. 
  
- **Static class**: It is a class that does not allow inheritance. The members of the class are also static. It is denoted by the keyword **static**. This keyword tells the compiler to check for any accidental instances of the static class. （ ▲）

[Ref #5](https://www.softwaretestinghelp.com/c-sharp-interview-questions/)

### Generic

`Generic` is a class which allows the user to define classes and methods with `placeholders` for the type of its fields, methods, parameters, etc..

Generics will be applied `specific type` with these placeholders at `compile time`.

A generic class can be defined using angle brackets `<>`.

**Advantages of Generics:**

1. Increases the `reusability` of the code.
2. Generic are `type safe`. You get compile time errors if you try to use a different type of data than the one specified in the definition.
3. Generics performs `faster` by not doing `boxing` & `unboxing`.
4. Generics can be applied to interface, abstract class, method, static method, property, event, delegate and operator.

**Eg.** 

`List<T>`

Generic，reusable

[Ref](https://www.tutorialsteacher.com/csharp/csharp-generics)

### Boxing & Unboxing

In .Net, all types are inherited from `System.Object` and divide into `value type` and `reference type`.

`boxing` means converting a `value type` into a `reference type`.

`unboxing` is the conversion of the same `reference type` back to `value type`, which means we can only do `unboxing` on a type that has done with `boxing` . （boxing unboxing)

By using `Generic`  can reduce `boxing` and `unboxing` to perform faster.

**Eg.**

```csharp
int value = 10; //value type
object boxedValue = value; //boxing
int unBoxing =  int(boxedValue); //unboxing
```

**Note from [Ref](https://www.cnblogs.com/style530/archive/2008/02/04/1064095.html):**

```c#
 int val = 100;
 object obj = val;
 Console.WriteLine (“对象的值 = {0}", obj);
```

```c#
 int val = 100;
 object obj = val;
 int num = (int) obj;
 Console.WriteLine ("num: {0}", num);
 ```


### Indexer

`indexer` allows instances of a class or struct to be indexed just like arrays

```c#
<return type> this[<parameter type> index]
{
    get{
        // return the value from the specified index of an internal collection
    }
    set{
        // set values at the specified index in an internal collection
    }
}

//for example
public int this[int index]{//indexer declareation
    //do something
} 
```

**Example: Indexer**

```c#
class StringDataStore
{
    private string[] strArr = new string[10]; // internal data storage

    public string this[int index]
    {
        get
        {
            if (index < 0 || index >= strArr.Length)
                throw new IndexOutOfRangeException("Index out of range");

                return strArr[index];
        }

        set
        {
            if (index < 0 ||  index >= strArr.Length)
                throw new IndexOutOfRangeException("Index out of range");

            strArr[index] = value;
        }
    }
}
```

The above `StringDataStore` class defines an indexer for its private array `strArr`. So now, you can use the `StringDataStore` like an array to add and retrieve string values from `strArr`, as shown below.



```c#
StringDataStore strStore = new StringDataStore();

strStore[0] = "One";
strStore[1] = "Two";
strStore[2] = "Three";
strStore[3] = "Four";
        
for(int i = 0; i < 10 ; i++)
    Console.WriteLine(strStore[i]);
```

You can use expression-bodied syntax for get and set from C# 7 onwards.

> a

```c#
class StringDataStore
{
    private string[] strArr = new string[10]; // internal data storage

    public string this[int index]
    {
        get => strArr[index];

        set => strArr[index] = value;
    }
}
```

[Ref](https://www.tutorialsteacher.com/csharp/csharp-indexer)

### Jagged Arrays

* Array of arrays
* Length of each array can differ (not only to be a multi-dimension array) 
* Reference type
* `null` is the default value

**Declaration**

**Approach 1：**



```c#
int[][] jagged_arr = new int[4][] //声明一个4行的jagged array（每行几个未知）

/*
   
    The first row or element is an array of 2 integers.
    The second row or element is an array of 4 integers.
    The third row or element is an array of 6 integers.
    The fourth row or element is an array of 7 integers.
*/
jagged_arr[0] = new int[2];
jagged_arr[1] = new int[4];
jagged_arr[2] = new int[6];
jagged_arr[3] = new int[7];

//g
jagged_arr[0] = new int[] {1, 2, 3, 4};
jagged_arr[1] = new int[] {11, 34, 67};
jagged_arr[2] = new int[] {89, 23};
jagged_arr[3] = new int[] {0, 45, 78, 53, 99};
```

**Approach 2:**



```c#
int[][] jagged_arr = new int[][] 
{
    new int[] {1, 2, 3, 4},
    new int[] {11, 34, 67},
    new int[] {89, 23},
    new int[] {0, 45, 78, 53, 99}
};
```

[Ref](https://www.geeksforgeeks.org/c-sharp-jagged-arrays/)

### Serialization

The process of converting an object into a byte stream.

If we want to transport an object through network, the object have to convert into a stream of bytes.

Eg., if user submits a form data from front-end to server, the data should be serialized first.

> j

### System.Object

`System.Object` is the base class in .Net which is all classes derived from.

> h

### Delegates



C# delegates are similar to pointers to functions in C or C++. A method can be passed as a parameter.

A `delegate` is a `reference type` variable that holds the reference to a method. The reference can be changed at run time.

Delegates are especially used for **handling event and call-back methods**.

[Ref](https://www.tutorialsteacher.com/csharp/csharp-delegates)

#### multicast delegate

A delegate having multiple handlers assigned to it.

Each handler is assigned to a method.

### Garbage Collection

`managed code`: Under the of control of Common Language Runtime, .NET's garbage collector manages the allocation and release of memory for your application. Garbage collector will collect and dispose of garbage memory automatically.

`unmanaged code`like **database connection, I/O operations (files), socket**, garbage should be collected manually by using `Despose()` method or use [using](#using).

#### Managed Code VS Unmanaged Code

`Managed Code` is a code whose execution is managed by `CRL`(Common Language Runtime). It is not complied to machine code directly, but to an **intermedia language**, which provides runtime service like `Garbage Collection`, `exception handling`, etc..

`Unmanaged Code` is directly executed by the operation system compiled to machine code.

> unmanaged code: database connection, files, socket

#### dispose() VS finalize()

| Dispose()                                                    | Finalize()                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Release `unmanagement resource` at anytime, like files, database connection. | Release before object is destroyed.                          |
| Called by user code.                                         | Internally, called by `Garbage Collector` (cannot be called by user code) |
| no performance costs                                         | performance costs (since it doesn't clean the memory immediately and called by GC automatically.) |

**Note** from [Ref](
https://www.dotnettricks.com/learn/netframework/difference-between-finalize-and-dispose-method#:~:text=235K-,.,%2C%20database%20connections%2C%20COM%20etc.&text=Explicitly%2C%20it%20is%20called%20by,has%20to%20implement%20IDisposable%20interface.)

> 1. It is always recommended to use Dispose method to clean unmanaged resources. You should not implement the Finalize method until it is extremely necessary.
> 2. At runtime C#, C++ destructors are automatically Converted to Finalize method. But in VB.NET you need to override Finalize method, since it does not support destructor.
> 3. You should not implement a Finalize method for managed objects, because the garbage collector cleans up managed resources automatically.
> 4. A Dispose method should call the GC.SuppressFinalize() method for the object of a class which has destructor because it has already done the work to clean up the object, then it is not necessary for the garbage collector to call the object's Finalize method.

> `Dispose`
>
> C# management resource`finalize()`，destructors`finalize()`

#### Destructor （Finalizer）

`Destructor`  is used to clean up the memory and free the resources. But in C# this is done by the garbage collector on its own. System.GC.Collect() is called internally for cleaning up. But *sometimes* it may be necessary to implement destructors manually.

> sometimes means when dealing with `unmanagedcode`

**For Example:**

```
~Car()
{
Console.writeline(“….”);
}
```

[Ref](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/destructors)

### Code compilation in C#

1. Compiling the source code into Managed code by C# compiler.
2. Combining the newly created code into assemblies.
3. Loading the Common Language Runtime(CLR).
4. Executing the assembly by CLR.

[Ref #6](https://www.softwaretestinghelp.com/c-sharp-interview-questions/)

### Multiple Catch Blocks

Multiple catch blocks can't be executed. Once the proper catch code executed, the control is transferred to the finally block, and then the code that follows the finally block gets executed.



---

###  Code Patters ▲

#### Singleton

A class only have one instance, and provides an access point to it globally.

```c#
public sealed class Singleton
{
    private static readonly Singleton _instance = new Singleton();
}
```

Eg. database connection

#### object pool

Object pooling is a software creational design pattern and a `container` of objects that holds a list of other objects—those are ready to be used. Once an object is taken from the pool, it is not available in the pool until it is put back. Object pooling keeps track of Objects—those are currently in use, the number of objects the pool holds, and whether this number should be increased. Objects in the pool have a lifecycle of creation, validation, and destroying.

[Ref](
https://www.codeguru.com/csharp/csharp/cs_misc/object-pooling-in-c.html)

### Polymorphism ▲


#### overloading

Multiple methods have a same name with different parameters (unique method signature).


##### Overloading Ways

* using different data types for a parameter
* using different order of parameters
* using different number of parameters

#### override

To change the method `definition`in the derived class.

### Async ▲

`task`

## Concept Comparations

### Array VS Array List

| Array                                                     | Array List                                |
| --------------------------------------------------------- | ----------------------------------------- |
| fixed size                                        | dynamic memory allocation 变        |
| store one data type only               | different data type (given example below) |
| memory-efficient                                  | occupy more memory                        |
| not accept `null`                               | accept `null`                             |
| better for frequent insertion and deletion  | better for frequent element access        |

[Ref](https://www.educba.com/c-sharp-list-vs-array/)

### Array List VS List

`List<T>` is a generic class that supports storing `values` of a specific type.

`ArrayList` simply stores object `reference`.

[Ref](https://stackoverflow.com/questions/2309694/arraylist-vs-list-in-c-sharp)

Array List

```c#
ArrayList array1 = new ArrayList();
array1.Add(1);
array1.Add("Pony"); //No error at compile process
int total = 0;
foreach (int num in array1)
{
 total += num; //-->Runtime Error
}
```

**`ArrayList`（deprecated ），`List<T>`**

```csharp
List<int> list1 = new List<int>();
list1.Add(1);
//list1.Add("Pony"); //<-- Error at compile process
int total = 0;
foreach (int num in list1 )
{
 total += num;
}
```

### class VS object

Object is an instance of a class.

### class VS struct

**Classes:**

- Can support inheritance
- **Are reference (pointer) types**
- The reference can be null
- Have memory overhead per new instance
- Good for larger complex objects	

**Structs:**

- Cannot support inheritance
- **Are value types**
- Are passed by value (like integers)
- Cannot have a null reference (unless Nullable is used)
- Do not have a memory overhead per new instance - unless 'boxed'
- Good for Small isolated models

**Both Classes and Structs:**

- Are compound data types typically used to contain a few variables that have some logical relationship
- Can contain methods and events
- Can support interfaces

[Ref](https://stackoverflow.com/questions/1853896/is-it-possible-to-override-a-non-virtual-method)

### is VS as


`(non-value type):

> The **is** operator is used for only reference, boxing, and unboxing conversions whereas **as** operator is used only for nullable, reference and boxing conversions

[AS](https://www.geeksforgeeks.org/c-sharp-as-operator-keyword/) [is VS as](https://www.geeksforgeeks.org/is-vs-as-operator-keyword-in-c-sharp/)



`is` operator is used to **check the compatibility** of an object with a given type. It returns result as `boolean`.

> `is` boolean 

`as`operator is used for **casting** of object to a type or a class. This operator returns the **object** when they are compatible with the given type and **return null if the conversion is not possible** instead of raising an exception.

> `as`，object，null



**is:**

1. true(false)；
2. ；
3. null，false；

```csharp
object o = "abc";
if (o is string) 
{
    string s = (string)o; /
    MessageBox.Show("Success！");
}
else
{
    MessageBox.Show("Try！");
}
```



**as:**



```c#
object o = "abc";
string s = o as string; //执行第一次类型兼容性检查，并返回结果
if (s != null)
    MessageBox.Show("success！");
else
    MessageBox.Show("failed！");
```



#### Type Conversion in C#



>
> ```c#
> double x = 1234.7;
> int a;
> // Cast double to int.
> a = (int)x;
> ```
>
> 

[abcd](https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/types/casting-and-type-conversions)

### System.String VS System.Text.StringBuilder

`System.String` is **immutable** (read-only), whereas `System.Text.StringBuilder` is **mutable**. 

`System.String` : If a string object will be modified, it will result into the creation of a new string object. A new memory is allocated to new value and the previous memory allocation released.

> `String` 

`System.Text.StringBuilder` : Do modification in the existing string objects, so it shows better performance.

> `StringBuilder` 

**Usage**

In the need of repetitive operations and multiple string manipulations, `StringBuilder` provides a optimized way.

[Ref1](https://stackoverflow.com/questions/3069416/difference-between-string-and-stringbuilder-in-c-sharp) [Ref2](https://stackoverflow.com/questions/73883/string-vs-stringbuilder)

### System.Array.CopyTo() VS System.Array.Clone()

**Similarity:** Both perform `Shallow Copy`

`copyTo()`: Copy all elements into another `existing array`

`clone()`: create a `new array` containing all the elements in the Original Array.

### Shallow Copy VS Deep Copy

`Shallow Copy`: contents (each array element) contains `references` to the same object as the elements in the original array. 

> reference，

`Deep Copy`: duplicated everything. Create a new instance of each element's object, result in a different yet identical object.



**Eg.**

Your example is creating a `shallow copy.`

```cs
A ob1 = new A();
ob1.a = 10;
A ob2 = new A();
ob2 = ob1; //shallow copy

ob1.a = 5; // <-- If you see value of ob2.a after this line, it will be 5.
```

`Deep copy` will be -

```cs
 A ob1 = new A();
 ob1.a = 10;
 A ob2 = new A();
 ob2.a = ob1.a; //deep copy

 ob1.a = 5; // <-- If you see value of ob2.a after this line, it will be 10.
```

[Ref1](https://stackoverflow.com/questions/184710/what-is-the-difference-between-a-deep-copy-and-a-shallow-copy) [Ref2](https://stackoverflow.com/questions/18066429/shallow-copy-or-deep-copy)

### Strongly Typed Language VS Weakly Typed Language

`Strongly Typed Language` will **not** automatically converted form one type to another.

`Weakly Typed Language` will automatically converted form one type to another.

**Eg.**

`4+"7" = "47"` works in `JavaScript`, but error in `C#`

### throw VS throw ex

`throw` re-throws the exception that was caught, and **preserves original stack trace**. 

`throw ex `throws the same exception, but reset the stack trace to that method. (Only have the stack trace from the throw point)

> throw Stack Trace
>
> `throw ex` stack trace

**Example from [Ref](https://stackoverflow.com/questions/730250/is-there-a-difference-between-throw-and-throw-ex)**

```csharp
static void Main(string[] args) {
    try {
        ThrowException1(); // line 19
    } catch (Exception x) {
        Console.WriteLine("Exception 1:");
        Console.WriteLine(x.StackTrace);
    }
    try {
        ThrowException2(); // line 25
    } catch (Exception x) {
        Console.WriteLine("Exception 2:");
        Console.WriteLine(x.StackTrace);
    }
}

private static void ThrowException1() {
    try {
        DivByZero(); // line 34
    } catch {
        throw; // line 36
    }
}
private static void ThrowException2() {
    try {
        DivByZero(); // line 41
    } catch (Exception ex) {
        throw ex; // line 43
    }
}

private static void DivByZero() {
    int x = 0;
    int y = 1 / x; // line 49
}
```

and here is the output:

```csharp
Exception 1:
   at UnitTester.Program.DivByZero() in <snip>\Dev\UnitTester\Program.cs:line 49
   at UnitTester.Program.ThrowException1() in <snip>\Dev\UnitTester\Program.cs:line 36
   at UnitTester.Program.TestExceptions() in <snip>\Dev\UnitTester\Program.cs:line 19

Exception 2:
   at UnitTester.Program.ThrowException2() in <snip>\Dev\UnitTester\Program.cs:line 43
   at UnitTester.Program.TestExceptions() in <snip>\Dev\UnitTester\Program.cs:line 25
```

### Value Type VS Reference Type

`value type:` holds a data value within its own `memory space`.  

```csharp
int a = 30;
```

`reference type:` stores the `address` of the Object where the value is being stored. It is a pointer to anther memory location.

```c#
string b = "Hello World"
```

## Keywords

### abstract method, virtual method and override method

`vitrual` and `abstract` modifier use within **base** class method.

`override` modifier use with **derived** class method. It is used to modify a `virtual` or `abstract` method which presents in base class.

`abstract method` should be used in an `abstract class`.

> `virtual`  `abstract` ，`override` 
>
> `abstract` abstract，abstract
>
> `abstract`body（
>
> ```csharp
> public abstract void MyMethod(); 
> ```



>`Abstract classes` have the following features:
>
>- An abstract class cannot be instantiated.
>- An abstract class may contain abstract methods and accessors.
>- It is not possible to modify an abstract class with the [sealed](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/sealed) modifier because the two modifiers have opposite meanings. The `sealed` modifier prevents a class from being inherited and the `abstract` modifier requires a class to be inherited.
>- A non-abstract class derived from an abstract class must include actual implementations of all inherited abstract methods and accessors.
>  Use the `abstract` modifier in a method or property declaration to indicate that the method or property does not contain implementation.

>`Abstract methods` have the following features:
>
>- An abstract method is implicitly a virtual method.
>- Abstract method declarations are only permitted in abstract classes.
>- Because an abstract method declaration provides no actual implementation, there is no method body; the method declaration simply ends with a semicolon and there are no curly braces ({ }) following the signature. For example:
>
>```csharp
>public abstract void MyMethod(); 
>```


Reference: [`virtual`](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/virtual) [`abstract`](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/abstract) [`override`](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/override)

**Eg.**

```csharp
public abstract class E
{
    public abstract void AbstractMethod(int i);

    public virtual void VirtualMethod(int i)
    {
        // Default implementation which can be overridden by subclasses.
    }
}

public class D : E
{
    public override void AbstractMethod(int i)
    {
        // You HAVE to override this method
    }
    public override void VirtualMethod(int i)
    {
        // You are allowed to override this method.
    }
}
```


[Ref- overriding](https://www.geeksforgeeks.org/c-sharp-method-overriding/)

[Ref-abstract vs virtual](https://stackoverflow.com/questions/14728761/difference-between-virtual-and-abstract-methods)

### abstract class VS interface


Interface only include abstract method that only has the definition of the methods without body

Abstract class can include `both` achieved methods and abstract methods.



**Why can't specify accessibility modifier for methods inside interface?**

In an interface, it only includes virtual methods that do not have a definition (abstract methods). All methods are there to be overridden in the derived class. That's why they all `public`.

> interface，public。

### constant VS readonly

| constant                                                     | readonly                                                     |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| declared an initialized variables at `compile time`          | used only when we want to assign the value at `run time`     |
| can't be changed afterwards                                  | can assign values in constructor part(can change value)      |
| can't be used with `static` modifier (because it's `static` already) | can use `static`                                             |
| `static`                       | static` |

### public, static, and void

* **public:** accessible anywhere in application
* **static:** globally accessible `without creating an instance` of the class 
* **void:** no return value

### ref VS out

Both indicate an argument is passed by `reference`

A variable is passed as an `out` parameter doesn't need to be initialized but `ref` has to be set to something.



### this

**this** keyword is used to refer to the `current instance` of the class / `current class oject`. 

In most cases, it is used to access variables and methods from current class. 

[Ref](https://www.geeksforgeeks.org/c-sharp-this-keyword/)

**Can this be used in a static method?**

No, `this` can't be used in a `static method`, because `this` refers to an object instance, but no current instance in a static method

### using

`using` block is used to obtain a resource and process it then automatically `dispose` it when the execution of the block completed. Even if the code throws an exception.

Usually use `using` for methods/classes that require cleaning up after execution, like "I/O".

> `using` block 

Eg:

this using block:

```csharp
using (MyClass mine = new MyClass())
{
  mine.Action();
}
```

would do the same as:

```csharp
MyClass mine = new MyClass();
try
{
  mine.Action();
}
finally
{
  if (mine != null)
    mine.Dispose();
}
```

Using `using` is way shorter and easier to read.

[using](https://stackoverflow.com/questions/212198/what-is-the-c-sharp-using-block-and-why-should-i-use-it)

### sealed

> 防止继承

A `sealed class` is a class which cannot be a base class of another more derived class.

A `sealed method` in an unsealed class is a method which cannot be overridden in a derived class of this class.


**Eg.**

```c#
class Base {
   public virtual void Test() { ... }
}
class Subclass1 : Base {
   public sealed override void Test() { ... }
}
class Subclass2 : Subclass1 {
   public override void Test() { ... } // Does not compile!
   // If `Subclass1.Test` was not sealed, it would've compiled correctly.
}
```

[Ref](https://stackoverflow.com/questions/4152049/sealed-method-in-c-sharp)

> Tips: 
>
> To compose a decent answer, in my view, it should answer 
> 1. What -- interpreting the jargon（专业术语）first
> 2. When -- giving an **example** with a detailed situation where you did or you should use
> 3. Why  -- taking about some advantages or disadvantages better comparing with another related one(possibly it is the next question, good to answer it in advance)

{% include links.html %}
