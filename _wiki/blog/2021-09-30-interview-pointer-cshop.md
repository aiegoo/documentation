---
name: C# interview pointer
layout: post
permalink: 2021-09-30-interview-pointer-cshop.html
sidebar: other_sidebar
collection: wiki
summary: "C# Interview Questions"
tags: [wiki, getting_started]
excerpt_separator: <!--more-->
date: 2021-12-30 14:10:03 +0900
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

##### Commonly Used Exceptions

ArgumentException, ArgumentNullException, ArgumentOutOfRangeException, ArithmeticException, DivideByZeroException, OverFlowException, IndexOutOfRangeException, InvalidCastException, InvalidOperationException, IOEndOfStreamException, NullReferenceException, OutOfMemoryException, StackOverFlowException

#### Class types in C#

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

#### Boxing & Unboxing

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


#### Indexer

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

#### Jagged Arrays

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

#### Serialization

The process of converting an object into a byte stream.

If we want to transport an object through network, the object have to convert into a stream of bytes.

Eg., if user submits a form data from front-end to server, the data should be serialized first.

> j

#### System.Object

`System.Object` is the base class in .Net which is all classes derived from.

> h

#### Delegates



C# delegates are similar to pointers to functions in C or C++. A method can be passed as a parameter.

A `delegate` is a `reference type` variable that holds the reference to a method. The reference can be changed at run time.

Delegates are especially used for **handling event and call-back methods**.

[Ref](https://www.tutorialsteacher.com/csharp/csharp-delegates)

##### multicast delegate

A delegate having multiple handlers assigned to it.

Each handler is assigned to a method.

#### Garbage Collection

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

####  Code Patters ▲

##### Singleton

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

#### Polymorphism ▲


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

#### class VS object

Object is an instance of a class.

#### class VS struct

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

#### is VS as


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

#### System.String VS System.Text.StringBuilder

`System.String` is **immutable** (read-only), whereas `System.Text.StringBuilder` is **mutable**.

`System.String` : If a string object will be modified, it will result into the creation of a new string object. A new memory is allocated to new value and the previous memory allocation released.

> `String`

`System.Text.StringBuilder` : Do modification in the existing string objects, so it shows better performance.

> `StringBuilder`

**Usage**

In the need of repetitive operations and multiple string manipulations, `StringBuilder` provides a optimized way.

[Ref1](https://stackoverflow.com/questions/3069416/difference-between-string-and-stringbuilder-in-c-sharp) [Ref2](https://stackoverflow.com/questions/73883/string-vs-stringbuilder)

#### System.Array.CopyTo() VS System.Array.Clone()

**Similarity:** Both perform `Shallow Copy`

`copyTo()`: Copy all elements into another `existing array`

`clone()`: create a `new array` containing all the elements in the Original Array.

#### Shallow Copy VS Deep Copy

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

#### Strongly Typed Language VS Weakly Typed Language

`Strongly Typed Language` will **not** automatically converted form one type to another.

`Weakly Typed Language` will automatically converted form one type to another.

**Eg.**

`4+"7" = "47"` works in `JavaScript`, but error in `C#`

#### throw VS throw ex

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

### Keywords

#### abstract method, virtual method and override method

`vitrual` and `abstract` modifier use within **base** class method.

`override` modifier use with **derived** class method. It is used to modify a `virtual` or `abstract` method which presents in base class.

`abstract method` should be used in an `abstract class`.

> `virtual`  `abstract` ，`override`
>
> `abstract` abstract，abstract
>
> `abstract`body（
>
```csharp
 public abstract void MyMethod();
```



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

#### constant VS readonly

| constant                                                     | readonly                                                     |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| declared an initialized variables at `compile time`          | used only when we want to assign the value at `run time`     |
| can't be changed afterwards                                  | can assign values in constructor part(can change value)      |
| can't be used with `static` modifier (because it's `static` already) | can use `static`                                             |
| `static`                       | static` |

#### public, static, and void

* **public:** accessible anywhere in application
* **static:** globally accessible `without creating an instance` of the class
* **void:** no return value

#### ref VS out

Both indicate an argument is passed by `reference`

A variable is passed as an `out` parameter doesn't need to be initialized but `ref` has to be set to something.



#### this

**this** keyword is used to refer to the `current instance` of the class / `current class oject`.

In most cases, it is used to access variables and methods from current class.

[Ref](https://www.geeksforgeeks.org/c-sharp-this-keyword/)

**Can this be used in a static method?**

No, `this` can't be used in a `static method`, because `this` refers to an object instance, but no current instance in a static method

#### using

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

#### sealed



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
> 1. What -- interpreting the jargon first
> 2. When -- giving an **example** with a detailed situation where you did or you should use
> 3. Why  -- taking about some advantages or disadvantages better comparing with another related one(possibly it is the next question, good to answer it in advance)

## Cplus Questions
### embedded-interview-questions

1) __Which endianness is: A) x86 families. B) ARM families. C) internet protocols. D) other processors? One of these is kind of a trick question.__

2) __Explain how interrupts work. What are some things that you should never do in an interrupt function?__

3) __Explain when you should use "volatile" in C.__

4) __Explain UART, SPI, I2C buses. Describe some of the signals in each. At a high-level describe each. Have you ever used any? Where? How? What type of test equipment would you want to use to debug these types of buses? Have you ever used test equipment to do it? Which?__

5) __Explain how DMA works. What are some of the issues that you need to worry about when using DMA?__

6) __Where does the interrupt table reside in the memory map for various processor families?__

7) __In which direction does the stack grow in various processor families?__

8) __Implement a Count Leading Zero (CLZ) bit algorithm, but don't use the assembler instruction. What optimizations to make it faster? What are some uses of CLZ?__

9) __What is RISC-V? What is it's claimed pros or cons?__

10) __List some ARM cores. For embedded use, which cores were most commonly used in the past? now?__

11) __Explain processor pipelines, and the pro/cons of shorter or longer pipelines.__

12) __Explain fixed-point math. How do you convert a number into a fixed-point, and back again? Have you ever written any C functions or algorithms that used fixed-point math? Why did you?__

13) __What is a pull-up or pull-down resistor? When might you need to use them?__

14) __What is "zero copy" or "zero buffer" concept?__

15) __How do you determine if a memory address is aligned on a 4 byte boundary in C?__

16) __What hardware debugging protocols are used to communicate with ARM microcontrollers?__

JTAG and SWD.

17) __What processor architecture was the original Arduino based on?__

The ATmega168 on the Arduino Duemilanove (?)

18) __What are the basic concepts of what happens before main() is called in C?__

19) __What are the basic concepts of how printf() works? List and describe some of the special format characters? Show some simple C coding examples.__

20) __Describe each of the following? SRAM, Pseudo-SRAM, DRAM, ROM, PROM, EPROM, EEPROM, MRAM, FRAM, ...__

21) __Show how to declare a pointer to constant data in C. Show how to declare a function pointer in C.__

```c
uint8_t foo = 20;
uint8_t * bar;
bar = &foo;
```

22) __How do you multiply without using multiply or divide instructions for a multiplier constant of 15, 30, 60, 260?__

23) __When do you use memmove() instead of memcpy() in C? Describe why.__

24) __Why is strlen() sometimes not considered "safe" in C? How to make it safer? What is the newer safer function name?__

25) __When is the best time to malloc() large blocks of memory in embedded processors? Describe alternate approach if malloc() isn't available or desired to not use it, and describe some things you will need to do to ensure it safely works.__

26) __Describe symbols on a schematic? What is a printed circuit board?__

27) __Do you know how to use a logic probe? multimeter? oscilloscope? logic analyzer? function generator? spectrum analyzer? other test equipment? Describe when you might want to use each of these. Have you hooked up and used any of these?__

28) __What processors or microcontrollers are considered 4-bit? 8-bit? 16-bit? 24-bit? 32-bit? Which have you used in each size group? Which is your favorite or hate?__

29) __What is ohm's law?__

`V = I * R`

30) __What is Nyquist frequency (rate)? When is this important?__

31) __What is "wait state"?__

32) __What are some common logic voltages?__

3.3v is most commonly used nowadays, followed by 5v and 1.8v.

33) __What are some common logic famlies?__

34) __What is a CPLD? an FPGA? Describe why they might be used in an embedded system?__

35) __List some types of connectors found on test equipment.__

36) __What is AC? What is DC? Describe the voltage in the wall outlet? Describe the voltage in USB 1.x and 2.x cables?__

- Alternative Current and Direct Current. Alternative Current alternates between VCC and GND at a fixed frequency, usually 60Hz. Direct current does not.

- In a wall outlet, the AC voltage is 220v (in European and Asian countries), and 110V (in US and Canada).

- In USB 1.x and 2.x cables, DC voltage is 5v.

37) __What is RS232? RS432? RS485? MIDI? What do these have in common?__

-
- They are all serial communication protocols.

38) __What is ESD? Describe the purpose of "pink" ESD bags? black or silvery ESD bag? How do you properly use a ground strap? When should you use a ground strap? How critical is it to use ESD protections? How do you safely move ESD-sensitive boards between different parts of a building?__

39) __What is "Lockout-Tagout"?__

Safety protocol used to prevent tampering with machinery when not in use. The machinery in question has to be locked and tagged (with the name of the person who holds the key) when not in use.

40) __What is ISO9001? What is a simple summary of it's concepts?__

41) __What is A/D? D/A? OpAmp? Comparator Other Components Here? Describe each. What/when might each be used?__

42) __What host O/S have you used? List experience from most to least used.__

- Linux (Fedora, Ubuntu, Debian, Arch)

- Windows

- MacOS

43) __What embedded RTOS have you used? Have you ever written your own from scratch?__

- FreeRTOS, ChibiOS

- Not yet

44) __Have you ever implemented from scratch any functions from the C Standard Library (that ships with most compilers)? Created your own because functions in C library didn't support something you needed?__
Most <string.h> functions, `atoi`, `itoa`, and other misc. functions in K&R's book.

45) __Have you ever used any encryption algorithms? Did you write your own from scratch or use a library (which one)? Describe which type of algorithms you used and in what situations you used them?__

45) __What is a CRC algorithm? Why would you use it? What are some CRC algorithms? What issues do you need to worry about when using CRC algorithms that might cause problems? Have you ever written a CRC algorithm from scratch?__

46) __Do you know how to solder? Have you ever soldered surface mount devices?__

Yes. Yes, but badly.

47) __How do you permanently archive source code? project? what should be archived? what should be documented? have you ever written any procedures of how to archive or build a project? How about describing how to install software tools and configuring them from scratch on a brand new computer that was pulled out of a box?__

48) __What issues are a concern for algorithms that read/write data to DRAM instead of SRAM?__

49) __What is the "escape sequence" for "Hayes Command Set"? Where was this used in the past? Where is it used today?__

50) __What is the "escape character" for "Epson ESC/P"? Where is this used?__

51) __After powerup, have you ever initialized a character display using C code? From scratch or library calls?__

52) __Have you ever written a RAM test from scratch? What are some issues you need to test?__

53) __Have you ever written code to initialize (configure) low-power self-refreshing DRAM memory after power up (independent of BIOS or other code that did it for the system)? It's likely that most people have never done this.__

54) __Write code in C to "round up" any number to the next "power of 2", unless the number is already a power of 2. For example, 5 rounds up to 8, 42 rounds up to 64, 128 rounds to 128. When is this algorithm useful?__

55) __What are two of the hardware protocols used to communicate with SD cards? Which will most likely work with more microcontrollers?__

56) __What issues concerns software when you WRITE a value to EEPROM memory? FLASH memory?__

57) __What is NOR-Flash and NAND-Flash memory? Are there any unique software concerns for either?__

58) __Conceptually, what do you need to do after reconfiguring a digital PLL? What if the digital PLL sources the clock for your microcontroller (and other concerns)?__

59) __What topics or categories of jokes shouldn't you discuss, tell, forward at work?__
- Jokes considered inappropriate or of discriminative nature.

60) __Have you ever used any power tools for woodworking or metalworking?__

Table saw, miter saw, drill, orbital sander, belt sander, planar, MIG welder.

61) __What is a common expression said when cutting anything to a specific length? (old expression for woodworking)__

Measure twice cut once.

62) __Have you ever 3D printed anything? Have you ever created a 3D model for anything? List one or more 3D file extensions.__

- Yes

- Yes

- `.stl`, `.obj`

63) __Do you know how to wire an AC wall outlet or ceiling light? Have you ever done either?__

- Yes

- Yes

64) __Have you ever installed a new hard drive / RAM / CPU in a desktop computer?__

- Yes

- Yes

65) __Have you ever installed Windows or Linux from scratch on a computer that has a brand-new hard drive?__

- Yes

- Yes

66) __Have you ever "burned" a CD-R or DVD-R disc? Have you ever created an ISO image of a CD or DVD or USB drive or hard drive?__

- Yes

- Yes

67) __Have you ever read the contents of a serial-EEPROM chip from a dead system (though EEPROM chip is ok)?__

- Yes, but it wasn't dead

68) __Have you ever written data to a serial-EEPROM chip before it is soldered down to a PCB?__

- Yes

69) __How do you erase an "old school" EPROM chip? (has a glass window on top of the chip)__

- Erasing an EPROM is done by shining ultraviolet ray on the window - an alternative is to leave it out under direct sunlight for a bit.

70) __Describe any infrared protocols, either for data or remote controlling a TV.__

71) __What is the most common protocol is used to communicate with a "smart card"? Have you ever written any software to communicate with a "smart card" in an embedded product?__

72) __What is I2S? Where is it used? Why might you want to use I2S in an embedded system? Have you ever used it?__

73) __What is CAN, LIN, FlexRay? Where are they used? Have you ever used any?__

74) __What is ARINC 429? Where is it commonly used? Have you ever used it?__

75) __What in-circuit debuggers or programmers have you used? Which one do you like or hate?__

ST-Link

76) __Do you know any assembler code? For which processor? What assembler code is your favorite or hate? Have you ever written an assembler from scratch?__

77) __What is "duff's device"? Have you ever used it?__

78) __What is dual-port RAM? Why would it be useful in some embedded systems? What concerns do you need to worry about when using it? Have you ever used it? How?__

79) __Have you ever soldered any electronic kits? Have you ever designed your own PCB(s)? Describe. What is a Gerber file?__

- Yes

- Yes, a couple of times.

- A file used to describe how a circuit board can be printed. This is what most PCB Manufacturers require when you order a PCB.
80) __If you create a circular buffer, what size of buffer might optimized code be slightly faster to execute? why?__

81) __Describe how to multiply two 256-bit numbers using any 32-bit processor without FPU or special instructions. Two or more methods?__

### Awesome Interviews [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> A curated list of lists of technical interview questions.

[What makes for an awesome list?](awesome.md)

Please read the [contribution guidelines](contributing.md) or the [creating a list guide](create-list.md) if you want to contribute.

**Check out my [channel](https://t.me/botcube) or [blog](https://medium.com/@MaximAbramchuk).**

### Table of Contents

- [Programming Languages/Frameworks/Platforms](#programming-languagesframeworksplatforms)
  - [Android](#android)
  - [AngularJS](#angularjs)
  - [Angular](#angular)
  - [BackboneJS](#backbonejs)
  - [C++](#c)
  - [C](#c-1)
  - [C♯](#c-2)
  - [.NET](#net)
  - [Clojure](#clojure)
  - [CSS](#css)
  - [Cucumber](#cucumber)
  - [Django](#django)
  - [Docker](#docker)
  - [EmberJS](#emberjs)
  - [Erlang](#erlang)
  - [Golang](#golang)
  - [GraphQl](#graphql)
  - [HTML](#html)
  - [Ionic](#ionic)
  - [iOS](#ios)
  - [Java](#java)
  - [JavaScript](#javascript)
  - [jQuery](#jquery)
  - [Front-end build tools](#front-end-build-tools)
  - [KnockoutJS](#knockoutjs)
  - [Less](#less)
  - [Lisp](#lisp)
  - [NodeJS](#nodejs)
  - [Objective-C](#objective-c)
  - [PHP](#php)
  - [Python](#python)
  - [ReactJS](#reactjs)
  - [Rails](#ruby-on-rails)
  - [Ruby](#ruby)
  - [Rust](#rust)
  - [Sass](#sass)
  - [Scala](#scala)
  - [Shell](#shell)
  - [Swift](#swift)
  - [Wordpress](#wordpress)
  - [TypeScript](#typescript)

- [Database technologies](#database-technologies)
  - [Cassandra](#cassandra)
  - [Microsoft Access](#microsoft-access)
  - [MongoDB](#mongodb)
  - [MySQL](#mysql)
  - [Neo4j](#neo4j)
  - [Oracle](#oracle)
  - [Postgres](#postgres)
  - [SQL](#sql)
  - [SQL Lite](#sql-lite)
- [Caching technologies](#caching-technologies)
  - [Memcached](#memcached)
  - [Redis](#redis)

- [OS](#os)
  - [Linux](#linux)
  - [Windows](#windows)
- [Algorithms](#algorithms)
- [Blockchain](#blockchain)
- [Coding exercises](#coding-exercises)
- [Comprehensive lists](#comprehensive-lists)
- [Design patterns](#design-patterns)
- [Data structures](#data-structures)
- [Networks](#networks)
- [Security](#security)
- [Data Science](#data-science)

## Programming Languages/Frameworks/Platforms

### Android

* [10 Android interview question answers for Freshers](http://www.careerride.com/android-interview-questions.aspx)
* [20 Essential Android Interview Questions from Toptal](http://www.toptal.com/android/interview-questions)
* [25 Essential Android Interview Questions from Adeva](https://adevait.com/android/interview-questions)
* [50 android interview questions & answers](http://career.guru99.com/50-android-interview-questions-answers/).
* [A couple of Android questions posted by Quora users](https://www.quora.com/What-are-good-job-interview-questions-for-an-Android-developer)
* [A great list of Android interview questions covering all the aspects of this career](http://www.tutorialspoint.com/android/android_interview_questions.htm)
* [Collection of Android and Java related questions and topics, including general developer questions, Java core, Data structures, Build Tools, Programming Paradigms, Core Android, Databases and etc](https://github.com/derekargueta/Android-Interview-Questions)
* [Collection of Android and Java questions divided by experience](https://medium.com/@neteinstein/not-another-android-interviews-article-the-questions-3dedafa30bec)
* [Android Interview Questions & How to Interview Candidates](https://pangara.com/blog/android-interview-questions)
* [RocketSkill App Android Interview Questions](https://github.com/mindash/android-structured-interview)

### AngularJS

* [12 Essential AngularJS Interview Questions from Toptal](http://www.toptal.com/angular-js/interview-questions)
* [An AngularJS exam with questions from beginner to expert by @gdi2290 from @AngularClass](https://github.com/gdi2290/ngExam)
* [29 AngularJS Interview Questions – Can You Answer Them All? Great Article from Codementor](https://www.codementor.io/angularjs/tutorial/angularjs-interview-questions-sample-answers)
* [AngularJS interview questions and answers for experienced developers](http://www.web-technology-experts-notes.in/2014/11/angularjs-interview-questions-and-answers-for-experienced.html)
* [AngularJS Interview Questions which have been designed specially to get you acquainted with the nature of questions you may encounter during your interview for the subject of AngularJS](http://www.tutorialspoint.com/angularjs/angularjs_interview_questions.htm)
* [This article discusses the top 50 Most occurred AngularJS interview question with answers](http://www.codeproject.com/Articles/891718/AngularJS-Interview-Questions-and-Answers)
* [Top 25 Angularjs Interview Questions and Quiz](http://career.guru99.com/top-25-angular-js-interview-questions/)
* [100 AngularJS Interview Questions - Quick Refresher](https://www.techbeamers.com/latest-angularjs-interview-questions-answers/)

### Angular

* [A list of helpful Angular related questions you can use to interview potential candidates, test yourself or completely ignore](https://github.com/Yonet/Angular-Interview-Questions)
* [Angular 2 Interview Questions](https://www.onlineinterviewquestions.com/angular2-interview-questions/)
* [List of 300 Angular Interview Questions and Answers](https://github.com/sudheerj/angular-interview-questions)


### BackboneJS

* [8 Essential Backbonejs Interview Questions from Toptal](http://www.toptal.com/backbone-js/interview-questions)
* [Backbonejs Interview Questions And Answers from web technology experts notes](http://www.web-technology-experts-notes.in/2015/01/backbone-js-interview-questions-and-answers.html)
* [Top 25 Backbone.js interview questions](http://career.guru99.com/top-25-backbone-js-interview-questions/)

### C++

* [1000+ Multiple Choice Questions & Answers in C++ with explanations](http://www.sanfoundry.com/cplusplus-interview-questions-answers/)
* [200 C++ interview questions and answers](http://www.careerride.com/C++-Interview-questions-Answer.aspx)
* [24 Essential C++ Interview Questions from Toptal](http://www.toptal.com/c-plus-plus/interview-questions)
* [C++ Interview Questions and Answers for Freshers and Experienced developers](http://a4academics.com/interview-questions/57-c-plus-plus/419-cpp-interview-questions-answers)
* [C++ Interview Questions from GeekInterview](http://www.geekinterview.com/Interview-Questions/Languages/C-Plus-Plus)
* [C++ Programming Q&A and quizzes from computer science portal for geeks](http://www.geeksforgeeks.org/c-plus-plus/)
* [C++ Programming Questions and Answers related to such topics as OOPs concepts, Object and Classes, Functions, Constructors and Destructors, Inheritance and etc](http://www.indiabix.com/cpp-programming/questions-and-answers/)
* [LeetCode Problems' Solutions written in C++](https://github.com/haoel/leetcode)
* [25 Fundamental C++ Interview Questions](https://pangara.com/blog/cplusplus-interview-questions)

### C

* [Basic C language technical frequently asked interview questions and answers It includes data structures, pointers interview questions and answers for experienced](http://www.cquestions.com/2010/10/c-interview-questions-and-answers.html)
* [C Programming Interview Questions and Answers for such topics as Bits and Bytes, Preprocessors, Functions, Strings, Language basics and etc](http://www.indiabix.com/technical/c/)
* [C Programming Interview Questions have been designed specially to get you acquainted with the nature of questions you may encounter during your interview for the subject of C Programming](http://www.tutorialspoint.com/cprogramming/cprogramming_interview_questions.htm)
* [First set of commonly asked C programming interview questions from computer science portal for geeks](http://geeksquiz.com/commonly-asked-c-programming-interview-questions-set-1/)
* [Second set of commonly asked C programming interview questions from computer science portal for geeks](http://geeksquiz.com/commonly-asked-c-programming-interview-questions-set-2/)
* [9 Essential C Interview Questions with answers](https://www.toptal.com/c/interview-questions)

### C#

* [15 Essential C# Interview Question from Toptal](http://www.toptal.com/c-sharp/interview-questions)
* [C# interview questions from dotnetfunda.com](http://www.dotnetfunda.com/interviews/cat/6/csharp)
* [Top 100 C# Interview Questions and Answers](http://a4academics.com/interview-questions/52-dot-net-interview-questions/417-c-oops-interview-questions-and-answers)
* [Top 50 C# Interview Questions & Answers](http://career.guru99.com/top-50-c-sharp-interview-questions-answers/)
* [50 C# Coding Interview Questions and Answers](https://www.techbeamers.com/csharp-coding-interview-questions-developers/)
* [20 C# OOPS Interview Questions and Answers](https://www.techbeamers.com/csharp-oops-interview-questions-answers/)

### .NET

* [300 ASPNET interview questions and answers](http://www.careerride.com/ASPNet-Questions.aspx)
* [ASP.NET Core Interview Questions](https://www.talkingdotnet.com/asp-net-core-interview-questions/)
* [Great list of NET interview questions covering all the NET platform topics](http://www.indiabix.com/technical/dotnet/)
* [NET Interview Questions and Answers for Beginners which consists of the most frequently asked questions in NET This list of 100+ questions and answers gauge your familiarity with the NET platform](http://www.dotnetcurry.com/dotnetinterview/70/dotnet-interview-questions-answers-beginners)
* [Questions gathered by community of the StackOverflow](http://stackoverflow.com/questions/365489/questions-every-good-net-developer-should-be-able-to-answer)
* [What Great NET Developers Ought To Know (More NET Interview Questions)](http://www.hanselman.com/blog/WhatGreatNETDevelopersOughtToKnowMoreNETInterviewQuestions.aspx)

### Clojure

* [Classic 'Fizz Buzz' interview question for Clojure developers](http://www.learningclojure.com/2014/05/fizz-buzz-interview-question.html)
* [Clojure Interview Questions for experienced devs](http://ita2zguide.blogspot.com.by/p/cc.html)
* [Coding exercises in Clojure, handy practice for technical interview questions](https://github.com/dpetrovics/coding-exercises)
* [Experience and questions from Clojure developer interview collected by Reddit users](https://www.reddit.com/r/Clojure/comments/34qhha/clojure_coding_job_interview_experience/)
* [Interview cake Clojure solutions](https://github.com/DerekCuevas/interview-cake-clj)

### CSS

* [CSS interview questions and answers for freshers and experienced candidates Also there you can find CSS online practice tests to fight written tests and certification exams on CSS](http://www.careerride.com/Interview-Questions-CSS.aspx)
* [Development hiring managers and potential interviewees may find there sample CSS proficiency interview Q&As and code snippets useful](http://www.techrepublic.com/blog/software-engineer/css-interview-questions-and-answers/)
* [Interview Questions and Exercises About CSS](https://css-tricks.com/interview-questions-css/)
* [Top 50 CSS(Cascading Style Sheet) Interview Questions covering the most of tricky CSS moments](http://career.guru99.com/top-50-csscascading-style-sheet-interview-questions/)
* [CSS Questions and Answers](https://github.com/yangshun/front-end-interview-handbook/blob/master/questions/css-questions.md)

### Cucumber

* [Cucumber Web Application BDD Sample Interview Questions](https://ratedr05.wordpress.com/2017/09/22/cucumber-interview-questions/)
* [Guide to building a simple Cucumber + Watir page object pattern framework](http://watir.com/simple-cucumber-watir-page-object-pattern-framework/)

### Django

* [Some abstract interview questions for Python/Django developers](http://insights.dice.com/2014/04/30/interview-questions-pythondjango-developers/)
* [Some Django basic interview questions to establish the basic level of the candidates](http://www.ilian.io/django-interview-questions/)
* [Top 16 Django Interview Questions for both freshers and experienced developers](http://career.guru99.com/top-16-django-interview-questions/)

### Docker

* [Docker Interview Questions](https://mindmajix.com/docker-interview-questions)
* [Top Docker Interview Questions You Must Prepare In 2019](https://www.edureka.co/blog/interview-questions/docker-interview-questions/)
* [Top Docker Interview Questions And Answers](https://intellipaat.com/interview-question/docker-interview-questions/)
* [DOCKER (SOFTWARE) INTERVIEW QUESTIONS & ANSWERS](https://www.wisdomjobs.com/e-university/docker-software-interview-questions.html)
* [30 Docker Interview Questions and Answers in 2019](https://www.fullstack.cafe/blog/docker-interview-questions-and-answers)

### EmberJS

* [8 Essential Emberjs Interview Questions from Toptal](http://www.toptal.com/emberjs/interview-questions)
* [Top 25 Emberjs Interview Questions for both freshers and experienced developers](http://career.guru99.com/top-25-ember-js-interview-questions/)

### Erlang

* [Top 22 Erlang Interview Questions for both freshers and experienced developers](http://career.guru99.com/top-22-erlang-interview-questions/)

### Golang

* [Solutions for Elements of Programming Interviews problems written in Golang](https://github.com/mrekucci/epi)
* [Solutions for some basic coding interview tasks written in Go](https://github.com/efischer19/golang_ctci)
* [Top 20 GO Programming Interview Questions for both freshers and experienced developers](http://career.guru99.com/top-20-go-programming-interview-questions/)

### GraphQl

* [8 GraphQl Interview Questions To Know](https://www.fullstack.cafe/blog/5-graphql-interview-questions-you-should-know)
* [How to GraphQl - Common Questions](https://www.howtographql.com/advanced/5-common-questions/)

### HTML

* [10 Typical HTML Interview Exercises from SitePoint.com](http://www.sitepoint.com/10-typical-html-interview-exercises/)
* [16 Essential HTML5 Interview Questions from Toptal](http://www.toptal.com/html5/interview-questions)
* [40 important HTML 5 Interview questions with answers](http://www.codeproject.com/Articles/702051/important-HTML-Interview-questions-with-answe)
* [HTML interview questions and answers for freshers and experienced candidates Also find HTML online practice tests to fight written tests and certification exams on HTML](http://www.careerride.com/Interview-Questions-HTML.aspx)
* [Top 50 HTML Interview Questions for both freshers and experienced developers](http://career.guru99.com/top-50-html-interview-questions/)
* [Common HTML interview questions for freshers](http://www.javatpoint.com/html-interview-questions)
* [HTML Questions and Answers](https://github.com/yangshun/front-end-interview-handbook/blob/master/questions/html-questions.md)
* [30 HTML Interview Questions and Answers](https://www.techbeamers.com/latest-html-interview-questions/)

### Ionic

* [23 Beginner Level Ionic Framework Questions](http://www.codeandyou.com/p/ionic-interview-questions.html)
* [12 Essential Ionic Interview Questions](https://www.toptal.com/ionic/interview-questions)

### iOS

* [14 Essential iOS Interview Questions from Toptal](http://www.toptal.com/ios/interview-questions)
* [20 iOS Developer Interview Questions and Answers for getting you ready for your interview](https://www.codementor.io/ios/tutorial/ios-interview-tips-questions-answers-objective-c)
* [25 Essential iOS Interview Questions from Adeva](https://adevait.com/ios/interview-questions)
* [A small guide to help those looking to hire a developer or designer for iOS work While tailored for iOS, many questions could be used for Android developers or designers as well A great self-test if you're looking to keep current or practice for your own interview](https://github.com/CameronBanga/iOS-Developer-and-Designer-Interview-Questions)
* [All you need to know about iOS technical interview including some tips for preparing, questions and some coding exercises](http://www.raywenderlich.com/53962/ios-interview-questions)
* [Interview Questions for iOS and Mac Developers from the CEO of Black Pixel](https://blackpixel.com/writing/2013/04/interview-questions-for-ios-and-mac-developers-1.html)
* [iOS Interview Questions and Answers including such topics as Development Basics, App states and multitasking, App states, Core app objects](http://www.geekinterview.com/Interview-Questions/iOS)
* [iOS Interview Questions For Senior Developers](https://m.smartcloud.io/ios-interview-questions-for-senior-developers-in-2017-a94cc81c8205)
* [50 iOS Interview Questions And Answers 1](https://medium.com/ios-os-x-development/ios-interview-questions-13840247a57a)
* [50 iOS Interview Questions And Answers Part 2](https://medium.com/ios-os-x-development/50-ios-interview-questions-and-answers-part-2-45f952230b9f)
* [50 iOS Interview Questions And Answers Part 3](https://medium.com/ios-os-x-development/50-ios-interview-questions-and-answers-part-3-3fad146b6c3d)
* [50 iOS Interview Questions And Answers Part 4](https://medium.com/@duruldalkanat/50-ios-interview-questions-and-answers-part-4-6f26b26341a)
* [50 iOS Interview Questions And Answers Part 5](https://medium.com/@duruldalkanat/50-ios-interview-questions-and-answers-part-5-de6241374a8f)
* [10 iOS interview questions and answers](https://www.upwork.com/i/interview-questions/ios/)
* [iOS Developer and Designer Interview Questions](https://github.com/9magnets/iOS-Developer-and-Designer-Interview-Questions#tech)
* [IOS Interview Questions and Answers](http://www.thecrazyprogrammer.com/2015/11/ios-interview-questions-and-answers.html)
* [iOS Interview Questions For Beginners](http://ichuiphonedev.blogspot.com/2014/05/iphone-latest-interview-questions-and.html)
* [Babylon iOS Interview Questions](https://github.com/Babylonpartners/ios-playbook/blob/master/Interview/questions.md)
* [RocketSkill App iOS Interview Questions](https://github.com/mindash/iOS-structured-interview)

### Java

* [115 Java Interview Questions and Answers – The ULTIMATE List](http://www.javacodegeeks.com/2014/04/java-interview-questions-and-answers.html)
* [37 Java Interview Questions to Practice With from Codementor](https://www.codementor.io/java/tutorial/java-interview-sample-questions-answers)
* [21 Essential Java Interview Questions](http://www.toptal.com/java/interview-questions)
* [29 Essential Java Interview Questions from Adeva](https://adevait.com/java/interview-questions)
* [A collection of Java interview questions and answers to them The questions were gathered all around the Internet The answers are partly written by the commiters, partly copy-pasted from all possible sources](https://github.com/svozniuk/java-interviews)
* [Data Structures and Algorithms in Java which can be useful in interview process](https://github.com/donbeave/interview)
* [Java Interview Questions: How to crack the TOP 15 questions](https://blog.udemy.com/java-interview-questions/)
* [There is the list of 201 core java interview questions The answers of the core java interview questions are short and to the point The core java interview questions are categorized in Basics of java interview questions, OOPs interview questions, String Handling interview questions, Multithreading interview questions, collection interview questions, JDBC interview questions etc](http://www.javatpoint.com/corejava-interview-questions)
* [Top 10 Tricky Java interview questions and Answers](http://java67.blogspot.com.by/2012/09/top-10-tricky-java-interview-questions-answers.html)
* [Top 25 Most Frequently Asked Interview Core Java Interview Questions And Answers](http://javahungry.blogspot.com/2013/06/top-25-most-frequently-asked-core-java.html)
* [Top 40 Core Java Interview Questions Answers from Telephonic Round](http://java67.blogspot.sg/2015/03/top-40-core-java-interview-questions-answers-telephonic-round.html)
* [Interview Cake Java Interview Questions](https://www.interviewcake.com/java-interview-questions)
* [Java Interview Questions & Quizzes](https://www.techbeamers.com/java-interview-questions/)

### JavaScript

* [Practice common algorithms using JavaScript](https://github.com/ignacio-chiazzo/Algorithms-Leetcode-Javascript)
* [10 Interview Questions Every JavaScript Developer Should Know](https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95)
* [21 Essential JavaScript Interview Questions from best mentors all over the world](https://www.codementor.io/javascript/tutorial/21-essential-javascript-tech-interview-practice-questions-answers)
* [20 Essential JavaScript Interview Questions from Adeva](https://adevait.com/javascript-developers/interview-questions)
* [37 Essential JavaScript Interview Questions from Toptal](http://www.toptal.com/javascript/interview-questions)
* [5 More JavaScript Interview Exercises](http://www.sitepoint.com/5-javascript-interview-exercises/)
* [5 Typical JavaScript Interview Exercises](http://www.sitepoint.com/5-typical-javascript-interview-exercises/)
* [Development hiring managers and potential interviewees may find these sample JavaScript proficiency interview Q&As and code snippets useful](http://www.techrepublic.com/blog/software-engineer/javascript-interview-questions-and-answers/)
* [123 Essential JavaScript Interview Question](https://github.com/nishant8BITS/123-Essential-JavaScript-Interview-Question)
* [JavaScript Interview Questions have been designed specially to get you acquainted with the nature of questions you may encounter during your interview for the subject of JavaScript](http://www.tutorialspoint.com/javascript/javascript_interview_questions.htm)
* [JS: Basics and Tricky Questions](http://www.thatjsdude.com/interview/js2.html)
* [JS: Interview Algorithm](http://thatjsdude.com/interview/js1.html)
* [Some basic javascript coding challenges and interview questions](https://github.com/kolodny/exercises)
* [Some JavaScript interview exercises](https://github.com/csvenja/javascript-exercises)
* [Ten Questions I've Been Asked, Most More Than Once, Over Six Technical JavaScript / Front-End Engineer Job Interviews.](https://www.reddit.com/r/javascript/comments/3rb88w/ten_questions_ive_been_asked_most_more_than_once)
* [Top 85 JavaScript Interview Questions](http://career.guru99.com/top-85-javascript-interview-questions/)
* [Interview Cake JavaScript Interview Questions](https://www.interviewcake.com/javascript-interview-questions)
* [The Best Frontend JavaScript Interview Questions (written by a Frontend Engineer)](https://performancejs.com/post/hde6d32/The-Best-Frontend-JavaScript-Interview-Questions-(written-by-a-Frontend-Engineer))
* [10 JavaScript Concepts You Need to Know for Interviews](https://dev.to/arnavaggarwal/10-javascript-concepts-you-need-to-know-for-interviews)
* [Front end interview handbook](https://github.com/yangshun/front-end-interview-handbook)
* [JavaScript Interview Questions - Quick Refresher](https://www.techbeamers.com/javascript-interview-questions-answers/)

### jQuery

* [70 jQuery Interview Questions to Ace Your Next Interview](https://pangara.com/blog/70-jquery-interview-questions)
* [Top 50 jquery interview questions](https://career.guru99.com/top-50-jquery-interview-questions/)
* [17 Essential jQuery Interview Questions From Toptal](https://www.toptal.com/jquery/interview-questions)


### Front-end build tools

* [Webpack interview questions & answers](https://github.com/styopdev/webpack-interview-questions)
* [Gulp js interview questions](https://www.codeproject.com/Articles/1065184/Latest-Gulp-js-interview-questions)
* [Grunt js interview questions for beginners](http://www.talkingdotnet.com/grunt-js-interview-questions/)
* [Grunt js interview questions](https://mindmajix.com/grunt-interview-questions)

### KnockoutJS

* [15 interview questions from CodeSample.com](http://www.code-sample.com/2014/01/knockout-js-interview-questions-and.html)
* [20 questions you might be asked about KnockoutJS in an interview for both freshers and experienced developers](http://www.codeproject.com/Articles/987899/KnockoutJS-interview-questions)

### Less

* [Top 25 LESS Interview Questions](http://career.guru99.com/top-25-less-interview-questions/)

### Lisp

* [10 LISP Questions & Answers](http://www.sanfoundry.com/lisp-mcqs-class/)
* [Top 18 Lisp Interview Questions from Career Guru](http://career.guru99.com/top-18-lisp-interview-questions/)

### NodeJS

* [25 Essential Node.js Interview Questions from Adeva](https://adevait.com/nodejs/interview-questions)
* [8 Essential Nodejs Interview Questions from Toptal](http://www.toptal.com/nodejs/interview-questions)
* [Node.JS Interview Questions have been designed specially to get you acquainted with the nature of questions you may encounter during your interview for the subject of Node.JS](http://www.tutorialspoint.com/nodejs/nodejs_interview_questions.htm)
* [There are two sides of the table: you either want to hire Nodejs developers or you want to get hired as a Nodejs developer This list helps you navigate a bit in this space, giving you some questions to ask, and a list of questions you should know the answer to](https://blog.risingstack.com/node-js-interview-questions/)
* [Top 25 Nodejs Interview Questions & Answers from Career Guru](http://career.guru99.com/top-25-interview-questions-on-node-js/)
* [Top 30 Node.Js Interview Questions With Answers](https://www.techbeamers.com/top-30-node-js-interview-questions-answers/)

### Objective-C

* [Interview Qs for Objective-C and Swift](http://insights.dice.com/2015/07/21/interview-qs-objective-c-swift/)
* [iOS/ObjC Interview Questions](http://andras.palfi.hu/iosobjc-interview-questions/)
* [iOS Interview Questions For Beginners](http://ichuiphonedev.blogspot.com/2014/05/iphone-latest-interview-questions-and.html)

### PHP

* [100 PHP interview questions and answers from CareerRide.com](http://www.careerride.com/PHP-Interview-Questions.aspx)
* [21 Essential PHP Interview Questions from Toptal](http://www.toptal.com/php/interview-questions)
* [20 Common PHP Job Interview Questions and Answers](http://www.woodstitch.com/resources/php-interview-questions.php)
* [25 Essential PHP Interview Questions from Adeva](https://adevait.com/php/interview-questions)
* [PHP interview questions and answers for freshers](http://phpinterviewquestions.co.in/)
* [Top 100 PHP Interview Questions & Answers from CareerGuru](http://career.guru99.com/top-100-php-interview-questions-answers/)
* [25 PHP Interview Questions](https://www.codementor.io/php/tutorial/php-interview-questions-sample-answers)
* [26 Essential PHP Interview Questions for 2018](https://pangara.com/blog/php-interview-questions)
* [Cracking PHP Interviews Questions ebook 300+ Q&A](https://bootsity.com/books)
* [PHP Interview Questions - Quick Refresher](https://www.techbeamers.com/latest-php-interview-questions-answers/)

### Python

* [26 Essential Python Interview Questions from Adeva](https://adevait.com/python/interview-questions)
* [50 Python interview questions and answers](http://www.careerride.com/python-interview-questions.aspx)
* [11 Essential Python Interview Questions from Toptal](http://www.toptal.com/python/interview-questions)
* [A listing of questions that could potentially be asked for a python job listing](https://github.com/sigmavirus24/python-interview-questions)
* [Interview Questions for both beginners and experts](http://www.bogotobogo.com/python/python_interview_questions.php)
* [Interview Cake Python Interview Questions](https://www.interviewcake.com/python-interview-questions)
* [Python Frequently Asked Questions (Programming)](https://docs.python.org/2/faq/programming.html)
* [Python interview questions collected by Reddit users](https://www.reddit.com/r/Python/comments/1knw7z/python_interview_questions)
* [Top 25 Python Interview Questions from Career Guru](http://career.guru99.com/top-25-python-interview-questions/)
* [Python Interview 10 questions from Corey Schafer](https://www.youtube.com/watch?v=DEwgZNC-KyE)
* [Python interview questions. Part I. Junior](https://luminousmen.com/post/6)
* [Python interview questions. Part II. Middle](https://luminousmen.com/post/7)
* [Python interview questions. Part III. Senior](https://luminousmen.com/post/8)
* [Python Interview Questions and Answers (2019)](https://www.interviewbit.com/python-interview-questions/)
* [100 Python Interview Questions - Quick Refresher](https://www.techbeamers.com/python-interview-questions-programmers/)

### Ruby on Rails

* [20 Ruby on Rails interview questions and answers from CareerRide.com](http://www.careerride.com/ruby-on-rails-interview-questions.aspx)
* [9 Essential Ruby on Rails Interview Questions from Toptal](http://www.toptal.com/ruby-on-rails/interview-questions)
* [A list of common questions with answers ask during interview of ruby on rails job](https://github.com/rishiip/ruby-on-rails-interview-questions)
* [Ruby And Ruby On Rails interview Q&A](http://anilpunjabi.tumblr.com/post/25948339235/ruby-and-rails-interview-questions-and-answers)
* [Some of the most frequently asked Ruby on Rails questions and how to answer them confidently](https://srikantmahapatra.wordpress.com/2013/11/07/ruby-on-rails-interview-questions-and-answers/)
* [11 Ruby on Rails Interview Practice Questions](https://www.codementor.io/ruby-on-rails/tutorial/ruby-on-rails-interview-questions)
* [Top 53 Ruby on Rails Interview Questions & Answers](https://career.guru99.com/top-34-ruby-on-rail-interview-questions/)
* [10 Ruby on Rails interview questions and answers](https://www.upwork.com/i/interview-questions/ruby-on-rails/)

### ReactJS

* [Reddit users share their expectations from ReactJS interview](https://www.reddit.com/r/reactjs/comments/3m5equ/react_what_interview_questions_to_expect/)
* [This is a first in the series of interview questions related with ReactJS](http://interview-questions-247.appspot.com/reactjs-interview-questions-set-1)
* [This quiz intends to test your understanding around ReactJS fundamentals (Set 3)](http://interview-questions-247.appspot.com/reactjs-interview-questions-set-3)
* [This quiz intends to test your understanding around ReactJS fundamentals](http://interview-questions-247.appspot.com/reactjs-interview-questions-set-2)
* [5 Essential React.js Interview Questions](https://www.codementor.io/reactjs/tutorial/5-essential-reactjs-interview-questions)
* [React Interview Questions](https://tylermcginnis.com/react-interview-questions/)
* [Toptal's 13 Essential React.js Interview Questions](https://www.toptal.com/react/interview-questions)
* [19 Essential ReactJs Interview Questions](https://www.educba.com/reactjs-interview-questions/)

### Ruby

* [21 Essential Ruby Interview Questions from Toptal](http://www.toptal.com/ruby/interview-questions)
* [15 Questions to Ask During a Ruby Interview](https://gist.github.com/ryansobol/5252653)
* [A list of questions about Ruby programming you can use to quiz yourself](https://github.com/undr/ruby-trivia)
* [The Art of Ruby Technical Interview](http://technology.customink.com/blog/2015/11/23/the-art-of-ruby-technical-interviews/)
* [Interview Cake Ruby Interview Questions](https://www.interviewcake.com/ruby-interview-questions)
* [Frequently Asked Ruby Interview Questions](https://www.javatpoint.com/ruby-interview-questions)

### Rust

* [Top 250+ Rust Programming Language Interview Questions](https://www.wisdomjobs.com/e-university/rust-programming-language-interview-questions.html)
* [Rust Programming Interview Questions and Answers](https://www.code-sample.com/2018/02/rust-programming-interview-questions.html)
* [rust-exam: A set of questions about the Rust programming language](https://github.com/jean553/rust-exam)
* [Best Rust Programming Language Interview Questions and answers](https://www.bestinterviewquestion.com/rust-programming-language-interview-questions)


### Sass

* [Top 17 Sass Interview Questions from Career Guru](http://career.guru99.com/top-17-sass-interview-questions/)
* [Top 10 Sass Interview Questions from educba](https://www.educba.com/sass-interview-questions/)

### Scala

* [4 Interview Questions for Scala Developers](http://insights.dice.com/2014/09/12/4-interview-questions-scala-developers/)
* [A list of Frequently Asked Questions and their answers, sorted by category](http://www.scala-lang.org/old/faq)
* [A list of helpful Scala related questions you can use to interview potential candidates](https://github.com/Jarlakxen/Scala-Interview-Questions)
* [How Scala Developers Are Being Interviewed](http://programmers.stackexchange.com/questions/58145/how-scala-developers-are-being-interviewed)
* [Scala Interview Questions/Answers including Language Questions, Functional Programming Questions, Reactive Programming Questions](https://github.com/peterarsentev/Scala-Interview-Questions-Answers)
* [Top 25 Scala Interview Questions & Answers from Toptal](http://career.guru99.com/top-25-interview-questions-on-scala/)

### SharePoint

* [Sharepoint Interview Question For Developer](http://www.rajeshg.me/2013/05/sharepoint-developer-2010-interview.html)

### Shell

* [Top 50 Shell Scripting Interview Questions from Career Guru](http://career.guru99.com/shell-scripting-interview-questions/)

### Swift

* [10 Essential Swift Interview Questions from Toptal](http://www.toptal.com/swift/interview-questions)
* [Get prepared for your next iOS job interview by studying high quality LeetCode solutions in Swift 5](https://github.com/diwu/LeetCode-Solutions-in-Swift)
* [Swift Interview Questions and Answers](https://www.raywenderlich.com/762435-swift-interview-questions-and-answers)
* [Swift Programming Language Interview Questions And Answers from mycodetips.com](http://mycodetips.com/swift-ios/swift-programming-language-interview-questions-answers-987.html)
* [Your top 10 Swift questions answered](http://blog.udacity.com/2014/11/your-top-10-swift-questions-answered.html)
* [Swift interview questions and answers on Swift 5 by Raywenderlich](https://www.raywenderlich.com/762435-swift-interview-questions-and-answers)

### WordPress
* [Top 45 WordPress interview questions](https://pangara.com/blog/45-wordpress-interview-questions-and-answers)

### TypeScript

* [Typescript Interview Questions](https://www.onlineinterviewquestions.com/typescript-interview-questions)
* [Top 10 TypeScript Interview Questions and Answers for Beginner Web Developers 2019](https://www.positronx.io/typescript-interview-questions-answers-2109/)

## Database technologies


### Cassandra

* [Top 23 Cassandra Interview Questions from Career Guru](http://career.guru99.com/top-23-cassandra-interview-questions/)

### Microsoft Access

* [Top 16 Microsoft Access Database Interview Questions from Career Guru](http://career.guru99.com/top-16-ms-access-database-interview-questions/)

### MongoDB

* [28 MongoDB NoSQL Database Interview Questions and Answers](http://theprofessionalspoint.blogspot.com.by/2014/01/28-mongodb-nosql-database-interview.html)
* [MongoDB frequently Asked Questions by expert members with experience in MongoDB These questions and answers will help you strengthen your technical skills, prepare for the new job test and quickly revise the concepts](http://www.globalguideline.com/interview_questions/Questions.php?sc=MongoDB)

* [MongoDB Interview Questions from JavaTPointcom](http://www.javatpoint.com/mongodb-interview-questions)
* [MongoDB Interview Questions that have been designed specially to get you acquainted with the nature of questions you may encounter during your interview for the subject of MongoDB](http://www.tutorialspoint.com/mongodb/mongodb_interview_questions.htm)
* [Top 20 MongoDB interview questions from Career Guru](http://career.guru99.com/top-20-mongodb-interview-questions/)

### MySQL

* [10 MySQL Database Interview Questions for Beginners and Intermediates](http://www.tecmint.com/10-mysql-database-interview-questions-for-beginners-and-intermediates/)
* [100 MySQL interview questions](http://www.careerride.com/MySQL-Interview-Questions.aspx)
* [15 Basic MySQL Interview Questions for Database Administrators](http://www.tecmint.com/basic-mysql-interview-questions-for-database-administrators/)
* [28 MySQL interview questions from JavaTPoint.com](http://www.javatpoint.com/mysql-interview-questions)
* [40 Basic MySQL Interview Questions with Answers](http://www.testingbrain.com/interview/mysql-interview-questions.html)
* [Top 50 MySQL Interview Questions & Answers from Career Guru](http://career.guru99.com/top-50-mysql-interview-questions-answers/)

### Neo4j

* [Top 20 Neo4j Interview Questions from Career Guru](http://career.guru99.com/top-20-ne04j-interview-questions/)

### Oracle

* [General Oracle Interview Questions & Answers](http://www.coolinterview.com/type.asp?iType=57)

### Postgres

* [13 PostgreSQL Interview Q&A](http://www.dotnetfunda.com/interviews/cat/208/postgresql)
* [Frequently Asked Basic PostgreSQL Interview Questions and Answers](http://nazafbtemplate.blogspot.com.by/2014/06/frequently-asked-basic-postgresql.html)
* [PostgreSQL Interview Preparation Guide](http://www.globalguideline.com/interview_questions/Questions.php?sc=postgresqk_database_)
* [PostgreSQL Interview Q&A from CoolInterview.com](http://www.coolinterview.com/type.asp?iType=411)

### SQL

* [10 Frequently asked SQL Query Interview Questions](http://java67.blogspot.com.by/2013/04/10-frequently-asked-sql-query-interview-questions-answers-database.html)
* [45 Essential SQL Interview Questions from Toptal](http://www.toptal.com/sql/interview-questions)
* [Common Interview Questions and Answers](http://www.indiabix.com/technical/sql-server-common-questions/)
* [General Interview Questions and Answers](http://www.indiabix.com/technical/sql-server-general-questions/)
* [Schema, Questions & Solutions for SQL Exercising](https://github.com/XD-DENG/SQL-exercise)
* [SQL Interview Questions that have been designed specially to get you acquainted with the nature of questions you may encounter during your interview for the subject of SQL](http://www.tutorialspoint.com/sql/sql_interview_questions.htm)
* [SQL Interview Questions CHEAT SHEET](https://www.interviewbit.com/sql-interview-questions/)

### SQL Lite

* [Top 20 SQL LITE  Interview Questions from Career Guru](http://career.guru99.com/top-20-sql-lite-interview-questions/)

## Caching technologies

### Memcached

* [Memcached Interview Questions from Javapoint](https://www.javatpoint.com/memcached-interview-questions-and-answers)
* [Memcached Interview Questions from Wisdomjobs](https://www.wisdomjobs.com/e-university/memcached-interview-questions.html)

### Redis

* [Redis Interview Questions from Javapoint](https://www.javatpoint.com/redis-interview-questions-and-answers)
* [Redis Interview Questions from Wisdomjobs](https://www.wisdomjobs.com/e-university/redis-interview-questions-answers.html)
* [Redis Interview Questions from Career Guru](https://career.guru99.com/top-10-redis-interview-questions/)

## OS

### Linux

* [10 Job Interview Questions for Linux System Administrators from Linux.com](https://www.linuxfoundation.org/blog/2015/07/10-job-interview-questions-for-linux-system-administrators/)
* [10 Useful Random Linux Interview Questions and Answers](http://www.tecmint.com/useful-random-linux-interview-questions-and-answers/)
* [11 Basic Linux Interview Questions and Answers](http://www.tecmint.com/basic-linux-interview-questions-and-answers/)
* [11 Essential Linux Interview Questions from Toptal](http://www.toptal.com/linux/interview-questions)
* [Some basic Linux questions from ComputerNetworkingNotes.com](http://computernetworkingnotes.com/rhce-interview-questions/linux-interview-questions-answers.html)
* [Top 30 Linux System Admin Interview Questions & Answers](http://www.linuxtechi.com/experience-linux-admin-interview-questions/)
* [Top 50 Linux Interview Questions from Career Guru](http://career.guru99.com/top-50-linux-interview-questions/)
* [Linux System Administrator/DevOps Interview Questions](https://github.com/chassing/linux-sysadmin-interview-questions)
* [278 Test Questions and Answers for \*nix System Administrators](https://github.com/trimstray/test-your-sysadmin-skills)
* [Linux Interview Questions - Quick Refresher](https://www.techbeamers.com/essential-linux-questions-answers/)

### Windows

* [Top 10 Interview Questions for Windows Administrators](http://www.brentozar.com/archive/2009/07/top-10-interview-questions-for-windows-sysadmins/)
* [Top 22 Windows Server Interview Questions from Career Guru](http://career.guru99.com/top-22-windows-server-interview-questions/)
* [Windows Admin Interview Questions & Answers](http://www.01world.in/p/windows.html)

## Algorithms

* [A great list of Java interview questions](http://java2novice.com/java-interview-programs/)
* [Algorithms playground for common interview questions written in Ruby](https://github.com/sagivo/algorithms)
* [EKAlgorithms contains some well known CS algorithms & data structures](https://github.com/EvgenyKarkan/EKAlgorithms)
* [Five programming problems every Software Engineer should be able to solve in less than 1 hour](http://www.shiftedup.com/2015/05/07/five-programming-problems-every-software-engineer-should-be-able-to-solve-in-less-than-1-hour)
* [Top 10 Algorithms for Coding Interview](http://www.programcreek.com/2012/11/top-10-algorithms-for-coding-interview/)
* [Top 15 Data Structures and Algorithm Interview Questions for Java programmer](http://javarevisited.blogspot.com.by/2013/03/top-15-data-structures-algorithm-interview-questions-answers-java-programming.html)
* [Top Algorithms Questions by Topics](https://github.com/yangshun/tech-interview-handbook/blob/master/algorithms/README.md)
* [Daily Coding Interview Practice](https://www.techseries.dev/daily)

## Blockchain
* [Top 55 Blockchain Interview Questions You Must Prepare In 2018](https://www.edureka.co/blog/interview-questions/blockchain-interview-questions/)
* [Blockchain Interview Questions](https://mindmajix.com/blockchain-interview-questions)
* [Top Blockchain Interview Questions](https://intellipaat.com/interview-question/blockchain-interview-questions/)
* [Blockchain Developer Interview Questions and Answers](https://applicature.com/blog/blockchain-interview-questions)
* [10 Essential Blockchain Interview Questions ](https://www.toptal.com/blockchain/interview-questions)
* [Blockchain Interview Questions The Collection](https://medium.com/coinmonks/blockchain-interview-questions-the-collection-38de299ce44d)
* [Top 30 Blockchain Interview Questions – For Freshers to Experienced](https://data-flair.training/blogs/blockchain-interview-questions/)
* [Most Frequently Asked Blockchain Interview Questions](https://www.digitalvidya.com/blog/blockchain-interview-questions/)

## Coding exercises

* [Common interview questions and puzzles solved in a number of languages](https://github.com/mre/the-coding-interview)
* [Interactive, test-driven Python coding challenges (algorithms and data structures) typically found in coding interviews or coding competitions](https://github.com/donnemartin/interactive-coding-challenges)
* [Interview questions solved in python](https://github.com/roseperrone/interview-questions)
* [7 Swift Coding Challenges to Practice Your Skills](https://www.makeuseof.com/tag/swift-coding-challenges/)

## Comprehensive lists

* [A list of helpful front-end related questions you can use to interview potential candidates, test yourself or completely ignore](https://github.com/h5bp/Front-end-Developer-Interview-Questions)
* [Front End Developer Interview Questions](http://www.aperfectmix.com/free_web_design/front-end-interview-questions.html)
* [Answers to Front End Developer Interview Questions](https://github.com/yangshun/front-end-interview-handbook/blob/master/README.md)
* [Some simple questions to interview potential backend candidates](https://github.com/starandtina/backend-interview-questions)
* [An Annotated List of Frontend Developer Technical Interview Questions](https://www.recruityourninja.com/technical-interview-questions-frontend-candidates/)
* [An Annotated List of Backend Developer Technical Interview Questions](https://www.recruityourninja.com/technical-interview-questions-backend-candidates/)
* [An Annotated List of DevOps Technical Interview Questions](https://www.recruityourninja.com/technical-interview-questions-devops-candidates/)

## Design Patterns
* [Design Pattern Interview Questions that have been designed specially to get you acquainted with the nature of questions you may encounter during your interview for the subject of Design Pattern](http://www.tutorialspoint.com/design_pattern/design_pattern_interview_questions.htm)
* [Design Patterns for Humans™ - An ultra-simplified explanation](https://github.com/kamranahmedse/design-patterns-for-humans)
* [Design patterns implemented in Java](https://github.com/iluwatar/java-design-patterns)

## Data structures

* [Top 15 Data Structures and Algorithm Interview Questions for Java programmer](http://javarevisited.blogspot.com.by/2013/03/top-15-data-structures-algorithm-interview-questions-answers-java-programming.html)
* [Top 50 Data Structure Interview Questions from Career Guru](http://career.guru99.com/top-50-data-structure-interview-questions/)

## Networks

* [Top 100 Networking Interview Questions & Answers from Career Guru](http://career.guru99.com/top-100-networking-interview-questions-answers/)

## Security

* [101 IT Security Interview Questions](http://careers.simplicable.com/careers/new/101-IT-security-interview-questions)
* [How to prepare for an information security job interview?](http://searchsecurity.techtarget.com/tip/How-to-prepare-for-an-information-security-job-interview)
* [Information Security Interview Questions from Daniel Miessler](https://danielmiessler.com/study/infosec_interview_questions/)
* [Top 50 Information Security Interview Questions for freshers and experts](http://resources.infosecinstitute.com/top-50-information-security-interview-questions/)
* [Security Interview Questions (and Answers) from Matthew Adeline](https://mkadeline.github.io/security/Security-Interview-Questions-Answers)

## Data Science
* [Data Science Interview Questions for Top Tech Companies](https://www.dezyre.com/article/-data-science-interview-questions-for-top-tech-companies/189)
* [66 Job Interview Questions for Data Scientists](http://www.datasciencecentral.com/profiles/blogs/66-job-interview-questions-for-data-scientists)
* [An Annotated List of Data Scientist Technical Interview Questions](https://www.recruityourninja.com/technical-interview-questions-data-scientist/)
* [Top 45 Data Science Interview Questions You Must Prepare In 2019](https://www.edureka.co/blog/interview-questions/data-science-interview-questions/)
* [Top 30 data science interview questions](https://towardsdatascience.com/top-30-data-science-interview-questions-7dd9a96d3f5c)
* [Top 100 Data science interview questions](https://www.datacamp.com/community/news/top-100-data-science-interview-questions-cc3lts7gj5j)
* [Data Science Interview Questions](https://hackr.io/blog/data-science-interview-questions)


{% include links.html %}
