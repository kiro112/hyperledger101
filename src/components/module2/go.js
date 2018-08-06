import React, { Component } from 'react';

class Go extends Component {

    render() {
        return (
            <div>
                <h2>Go</h2>
                <p>Let's introduce basic types and string formatting. After that, we will talk about functions and methods in Golang.</p>
                <h3>Numbers</h3>
                <p>Integer types are:</p>
                <pre><code className="hljs golang">{"\n"}int{"         "}int8{"        "}int16{"       "}int32{"       "}int64{"\n"}uint{"        "}uint8{"       "}uint16{"      "}uint32{"      "}uint64{"      "}uintptr{"\n"}</code></pre>
                <ul>
                <li><strong>int</strong> will be 32 or 64 bits wide depending on the OS. However, one can specify precisely how many bits used with 8,16,32 and 64. </li>
                <li><strong>uint</strong> defines the unsigned integers, which are simply positive integers.</li>
                </ul>
                <p>There are two aliases:</p>
                <ul>
                <li><strong>byte</strong> for <strong>uint8</strong> and,</li>
                <li><strong>run</strong> for <strong>int32</strong>. </li>
                <li><strong>uintptr</strong> is an integer <a href="https://golang.org/pkg/builtin/#uintptr">"to hold the bit pattern of any pointer"</a>.</li>
                </ul>
                <p>The types for floating-point arithmetic are <code className="hljs hl-inline">float32</code> and <code className="hljs hl-inline">float64</code>. Note, they are only an <em>approximation</em> for real numbers because of the <a href="https://en.wikipedia.org/wiki/Floating-point_arithmetic#Accuracy_problems">finite precision</a>.</p>
                <p><code className="hljs hl-inline">complex64</code> and <code className="hljs hl-inline">complex128</code> represent complex numbers. These are useful in geospatial coordinate systems and scientific applications, among others. They have "real" and "imaginary" parts that are always <code className="hljs hl-inline">floats</code>. When the real and imaginary parts are <code className="hljs hl-inline">float32</code>, the complex number is a <code className="hljs hl-inline">complex64</code>. Likewise, when the real and imaginary parts are <code className="hljs hl-inline">float64</code>, the complex number is a <code className="hljs hl-inline">complex128</code>.</p>
                <h3>Strings</h3>
                <p>In Go, a <code>string</code> is a read-only sequence of bytes. So, strings are immutable. They're encoded in UTF8 by default.</p>
                <h3>Booleans</h3>
                <p><code className="hljs hl-inline">bool</code> is a special 1 bit integer. They can represent <code className="hljs hl-inline">true</code> or <code className="hljs hl-inline">false</code>.</p>
                <h3>Type declaration</h3>
                <p>In Go, the name comes before the type in the declaration. There are two ways to initialise a variable in Go:</p>
                <pre><code className="hljs golang">{"\n"}var s string = "initial"{"\n"}</code></pre>
                <p>or</p>
                <pre><code className="hljs golang">{"\n"}s := "initial"{"\n"}</code></pre>
                <p>one can also use var to define variables without initialisation:</p>
                <pre><code className="hljs gloang">{"\n"}var ({"\n"}{"    "}a, b int{"\n"}{"    "}s string{"\n"}{"    "}c complex64{"\n"}){"\n"}</code></pre>
                <p>which is equivalent to:</p>
                <pre><code className="hljs golang">{"\n"}var a, b int{"\n"}var s string{"\n"}var c complex64{"\n"}</code></pre>
                <p>Without initialisation, variables have the so called <em>zero values</em>, which depend on the type.</p>
                <p>To define constants, one must use the <code className="hljs hl-inline">const</code> keyword instead of <code className="hljs hl-inline">var</code> or <code className="hljs hl-inline">:=</code> keywords. Note, that constants can be <em>typed</em> or <em>untyped</em>. For example, an untyped constant:</p>
                <pre><code className="hljs golang">{"\n"}const hello = "Hello, World!"{"\n"}</code></pre>
                <p>Untyped means that the type of <code className="hljs hl-inline">hello</code> isn't defined yet. Because of static types in Go, that means we have more freedom with untyped constants than with typed. Let us have a quick look at what this means:</p>
                <pre><code className="hljs golang">{"\n"}const number = 2{"\n"}var f float64 = number{"\n"}</code></pre>
                <p>will work, but:</p>
                <pre><code className="hljs golang">{"\n"}const number int = 2{"\n"}var f float64 = number{"\n"}</code></pre>
                <p>will not work, because number has type <code className="hljs hl-inline">int</code> and not <code className="hljs hl-inline">float64</code>.</p>
                <h3>String formatting</h3>
                <p><code className="hljs hl-inline">fmt.Printf</code> writes to standard output and returns the number of bytes written and the write error. The string formatting is:</p>
                <pre><code className="hljs golang">{"\n"}%v for a value, which will be converted into a string with default options. {"\n"}%T for the type of a value{"\n"}%x for the hex encoding{"\n"}%d for integer{"\n"}%f for float, %e and %E for scientific notation{"\n"}%s for string{"\n"}%p for the pointer address of the variable{"\n"}</code></pre>
                <p>Here is an example code:</p>
                <pre><code className="hljs golang">{"\n"}package main{"\n"}{"\n"}import "fmt"{"\n"}{"\n"}func main() {"{"}{"\n"}{"    "}a, b := 2, 3{"\n"}{"    "}c := float64(a + b){"\n"}{"    "}fmt.Printf("%v + %v = %f = %v, stored as %T", a, b, c, c, c){"\n"}{"}"}{"\n"}</code></pre>
                <p>Compile this to see the output. </p>
                <h3>Functions</h3>
                <p>Functions can take zero or more arguments and can return zero or more arguments. The syntax looks like:</p>
                <pre><code className="hljs golang">{"\n"}func myFunc(v1, v2 type12, v3 type3, v4 type3,....) (ret1 returntype1, ret2 returntype2, ...) {"{"}{"\n"}{"    "}return{"\n"}{"}"}{"\n"}</code></pre>
                <p>If return variable names are given in the declaration, you don't need to explicitly to return them.</p>
                <p>For example, consider a swap function that switches the values of <code className="hljs hl-inline">x</code> and <code className="hljs hl-inline">y</code>:</p>
                <pre><code className="hljs golang">{"\n"}func swap(x, y string) (string, string) {"{"}{"\n"}{"    "}return y, x{"\n"}{"}"}{"\n"}</code></pre>
                <p>We could also write:</p>
                <pre><code className="hljs golang">{"\n"}func swap(x, y string) (r1 string, r2 string) {"{"}{"\n"}{"    "}r1, r2 = y, x{"\n"}{"    "}return{"\n"}{"}"}{"\n"}</code></pre>
                <p>Go offers function closures:</p>
                <pre><code className="hljs golang">{"\n"}func fibonacci() func() int {"{"}{"\n"}{"    "}x, y := 0, 1{"\n"}{"    "}return func() int {"{"}{"\n"}{"        "}x, y = y, x + y{"\n"}{"        "}return x{"\n"}{"    "}{"}"}{"\n"}{"}"}{"\n"}</code></pre>
                <p>Let's walk through <code className="hljs hl-inline">func fibonacci()</code> in more detail.</p>
                <ol>
                <li>First, you can see, that Go supports <em>anonymous functions</em>, which we return. </li>
                <li>You can also see, we declare <code className="hljs hl-inline">x</code> and <code className="hljs hl-inline">y</code> inside <code className="hljs hl-inline">fibonacci()</code> and use them inside the <em>anonymous function</em>.</li>
                <li>Note, that <code className="hljs hl-inline">x, y = y, x + y</code> works because the right side is evaluated fully before the left side. </li>
                </ol>
                <p>Let's write less idiomatic code to highlight some more aspects:</p>
                <pre><code className="hljs golang">{"\n"}package main{"\n"}{"\n"}import "fmt"{"\n"}{"\n"}func fibonacci() func() int {"{"}{"\n"}{"    "}x, y := 0, 1{"\n"}{"    "}return func() int {"{"}{"\n"}{"        "}x, y = y, x + y{"\n"}{"        "}return x{"\n"}{"    "}{"}"}{"\n"}{"}"}{"\n"}{"\n"}func loop(n int, f func() int) {"{"}{"\n"}{"    "}if n &gt; 0 {"{"}{"\n"}{"        "}fmt.Println(f()){"\n"}{"        "}loop(n - 1, f){"\n"}{"    "}{"}"}{"\n"}{"}"}{"\n"}{"\n"}func main() {"{"}{"\n"}{"    "}loop(10, fibonacci()){"\n"}{"}"}{"\n"}</code></pre>
                <p>This will print first 10 Fibonacci numbers. </p>
                <p>An important thing to note here is that <code className="hljs hl-inline">fibonacci()</code> returns a function, and this function is passed into <code className="hljs hl-inline">loop()</code> as <code className="hljs hl-inline">f</code>. On subsequent iterations, <code className="hljs hl-inline">loop(n-1,f)</code> passes this anonymous function into itself recursively.</p>
                <p>We use the control statement <code className="hljs hl-inline">if</code> here for the first time to break out of the recursion. Each <code className="hljs hl-inline">fibonacci()</code>, stored as <code className="hljs hl-inline">f</code> in <code className="hljs hl-inline">loop</code>, has its own <code className="hljs hl-inline">x</code> and <code className="hljs hl-inline">y</code> - this is called a closure. So, what happens, if we split the loop into 2?:</p>
                <pre><code className="hljs golang">{"\n"}func main() {"{"}{"\n"}{"    "}loop(5, fibonacci()){"\n"}{"    "}loop(5, fibonacci()){"\n"}{"}"}{"\n"}</code></pre>
                <p>That will give you the first 5 Fibonacci numbers twice. To get the first 10 try this:</p>
                <pre><code className="hljs golang">{"\n"}func main() {"{"}{"\n"}{"    "}f:= fibonacci(){"\n"}{"    "}loop(5, f){"\n"}{"    "}loop(5, f){"\n"}{"}"}{"\n"}</code></pre>
                <p>Do you see why that works?</p>
                <h3>Methods</h3>
                <p>Methods are defined on types. Go does not have classes. Let us first define a structure type:</p>
                <pre><code className="hljs golang">{"\n"}type Rectangle struct {"{"}{"\n"}{"    "}a, b int{"\n"}{"}"}{"\n"}</code></pre>
                <p>We can use this structure for a variable declaration:</p>
                <pre><code className="hljs golang">{"\n"}r1 := Rectangle{"{"}2, 3{"}"}{"\n"}</code></pre>
                <p>And we have access to members through the <code className="hljs hl-inline">.</code> operator:</p>
                <pre><code className="hljs golang">{"\n"}fmt.Println(r1.a, r1.b){"\n"}</code></pre>
                <p>Now, we can declare a method on it:</p>
                <pre><code className="hljs golang">{"\n"}func (r Rectangle) Area() int {"{"}{"\n"}{"    "}return r.a * r.b{"\n"}{"}"}{"\n"}</code></pre>
                <p>You see, methods are functions but they have a so called <em>receiver</em> argument, here <code className="hljs hl-inline">r Rectangle</code>. We can use such a method with the <code className="hljs hl-inline">.</code> operator:</p>
                <pre><code className="hljs golang">{"\n"}fmt.Println(r1.Area()){"\n"}</code></pre>
                <p>Do you see how <code className="hljs hl-inline">Area()</code> became a method of <code className="hljs hl-inline">Rectangle</code>'s?</p>
                <p>Note that you can declare a method with a receiver only in the same package as the type is defined. </p>
                <p>Here another example, which is not declared on a <code className="hljs hl-inline">struct</code> type:</p>
                <pre><code className="hljs golang">{"\n"}package main{"\n"}{"\n"}import "fmt"{"\n"}{"\n"}type MyNumber int{"\n"}{"\n"}func (f MyNumber) Abs() MyNumber {"{"}{"\n"}{"    "}if f &lt;{"  "}0 {"{"}{"\n"}{"        "}return -f{"\n"}{"    "}{"}"}{"\n"}{"    "}return f{"\n"}{"}"}{"\n"}{"\n"}func main() {"{"}{"\n"}{"    "}f := MyNumber(2){"\n"}{"    "}fmt.Println(f.Abs()){"\n"}{"}"}{"\n"}</code></pre>
                <p>Do you see how <code className="hljs hl-inline">Abs()</code> became a method of the new type, <code className="hljs hl-inline">MyNumber</code>?</p>
                <h3>Pointer</h3>
                <p>A function argument is copied into the function. If you want to change the argument, you will require pointers. Pointers are addresses of variables. </p>
                <pre><code className="hljs golang">{"\n"}func increase(i int) {"{"}{"\n"}{"    "}i= i + 1{"\n"}{"}"}{"\n"}</code></pre>
                <p>This function: </p>
                <pre><code className="hljs golang">{"\n"}increase(i int){"\n"}</code></pre>
                <p>will not change <code className="hljs hl-inline">i</code>. 
                </p><p>Try it this way:</p>
                <pre><code className="hljs golang">{"\n"}package main{"\n"}{"\n"}import "fmt"{"\n"}{"\n"}func increase(i int) {"{"}{"\n"}{"    "}i = i + 1{"\n"}{"}"}{"\n"}{"\n"}func main() {"{"}{"\n"}{"    "}i := 0{"\n"}{"    "}fmt.Println(i){"\n"}{"    "}increase(i){"\n"}{"    "}fmt.Println(i){"\n"}{"}"}{"\n"}</code></pre>
                <p>You will get the same result (<code className="hljs hl-inline">0</code>) twice. Nothing happened to <code className="hljs hl-inline">i</code>.</p>
                <p>On the other hand, by including a pointer:</p>
                <pre><code className="hljs golang">{"\n"}package main{"\n"}{"\n"}import "fmt"{"\n"}{"\n"}func increase(i *int) {"{"}{"\n"}{"    "}*i = *i + 1{"\n"}{"}"}{"\n"}{"\n"}func main() {"{"}{"\n"}{"    "}i := 0{"\n"}{"    "}fmt.Println(i){"\n"}{"    "}increase(&amp;i){"\n"}{"    "}fmt.Println(i){"\n"}{"}"}{"\n"}</code></pre>
                <p>you will see, that the value of <code className="hljs hl-inline">i</code> changes. </p>
                <p>Okay, let's take a closer look at what happened here:</p>
                <ol>
                <li><code className="hljs hl-inline">&amp;i</code> gives the address with type <code className="hljs hl-inline">*int</code>, which is a pointer and expected by the function <code className="hljs hl-inline">func increase(i *int)</code>. </li>
                <li><code className="hljs hl-inline">*i</code> is the value the pointer points to.</li>
                </ol>
                <p>We can also use pointers in methods to modify the receiver.</p>
                <pre><code className="hljs golang">{"\n"}package main{"\n"}{"\n"}import "fmt"{"\n"}{"\n"}type Rectangle struct {"{"}{"\n"}{"    "}a, b int{"\n"}{"}"}{"\n"}{"\n"}func (r *Rectangle) doubleIt() {"{"}{"\n"}{"    "}r.a *= 2{"\n"}{"    "}r.b *= 2{"\n"}{"}"}{"\n"}{"\n"}func main() {"{"}{"\n"}{"    "}r := Rectangle{"{"}3, 4{"}"}{"\n"}{"    "}fmt.Println(r.a, r.b){"\n"}{"    "}r.doubleIt(){"\n"}{"    "}fmt.Println(r.a, r.b){"\n"}{"}"}{"\n"}</code></pre>
                <p>Note, that <code className="hljs hl-inline">r.b</code> is the same as <code className="hljs hl-inline">(*r).b</code> in this context, but it is easier to read.</p>
                <p>Pointers are important. For more practice: <a href="https://gobyexample.com/pointers">https://gobyexample.com/pointers</a></p>
                <h3>Further reading</h3>
                <ul>
                <li><a href="https://en.wikipedia.org/wiki/Fibonacci_number">Fibonacci</a></li>
                <li>Go Types reference: <a href="https://golang.org/pkg/go/types/">https://golang.org/pkg/go/types/</a></li>
                <li>Go Playground: <a href="https://play.golang.org/">https://play.golang.org/</a></li>
                </ul>
                
                <div className="vert vert-1" data-id="block-v1:B9lab+HLF-12+2018-07+type@video+block@e8fd3f885b9e4c0f9ca85de32245e300">
                <div className="xblock xblock-student_view xblock-student_view-video xmodule_display xmodule_VideoModule" data-runtime-class="LmsRuntime" data-init="XBlockToXModuleShim" data-block-type="video" data-request-token="d47ded048bb911e8be100a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@video+block@e8fd3f885b9e4c0f9ca85de32245e300" data-type="Video" data-course-id="course-v1:B9lab+HLF-12+2018-07">
                    <h3 className="hd hd-2">Rob demonstrates Go Functions and Methods on play.golang.org</h3>
                    <iframe width="809" height="455" src="https://www.youtube.com/embed/TzSQ3iaQYAo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

                </div>
                </div>
            </div>
        )
    }
}

export default Go;