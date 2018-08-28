'use strict';

import React, { Component } from 'react';

class GoConcurrency extends Component {

    render () {
        return (
            <div className="xblock xblock-student_view xblock-student_view-vertical" data-runtime-class="LmsRuntime" data-init="VerticalStudentView" data-course-id="course-v1:B9lab+HLF-12+2018-07" data-request-token="38dc2626aa5a11e8be1d0a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@vertical+block@58ef678e6cd24700bad478065b29c1a4" data-block-type="vertical">
                <div className="vert-mod">
                <div className="vert vert-0" data-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@e572c7e96cef43758f89bff995b68195">
                    <div className="xblock xblock-student_view xblock-student_view-html xmodule_display xmodule_HtmlModule" data-runtime-class="LmsRuntime" data-init="XBlockToXModuleShim" data-block-type="html" data-request-token="38dc2626aa5a11e8be1d0a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@e572c7e96cef43758f89bff995b68195" data-type="HTMLModule" data-course-id="course-v1:B9lab+HLF-12+2018-07">
                    <h1>Go Concurrency</h1>
                    <p>Go has built-in concurrency. Note, that concurrency and parallel execution are different things; you need concurrency (<em>program structure</em>) to enable parallel execution. Actual parallelism during execution depends on hardware. </p>
                    <p>For concurrency, Go offers so called <em>Goroutines</em> and <em>Channels</em>.</p>
                    <h2>Goroutines</h2>
                    <p>A <em>Gouroutine</em> is a concurrent thread managed by the Go runtime. </p>
                    <p>Let's see, how to call a goroutine:</p>
                    <pre><code className="hljs golang">package main{"\n"}{"\n"}import ({"\n"}{"    "}"fmt"{"\n"}{"    "}"time"{"\n"}){"\n"}{"\n"}func doSomething(size int) {"{"}{"\n"}{"    "}for i := 0; i &lt; size; i++ {"{"}{"\n"}{"        "}fmt.Println(i){"\n"}{"        "}time.Sleep(time.Second){"\n"}{"    "}{"}"}{"\n"}{"}"}{"\n"}{"\n"}func main() {"{"}{"\n"}{"    "}go doSomething(10) // go statement before a function creates a goroutine{"\n"}{"    "}go doSomething(10){"\n"}{"    "}time.Sleep(10*time.Second){"\n"}{"}"}{"\n"}{"\n"}</code></pre>
                    <p>If you run this programm, you will see, that both <code className="hljs hl-inline">doSomething(10)</code> functions work concurrently. We wait with <code className="hljs hl-inline">time.Sleep(10*time.Second)</code> to see this in action. </p>
                    <h2>Channels</h2>
                    <p>Go offers <em>channels</em> for commincation between goroutines. Channels may be buffered or unbuffered. First, let's see how we can create an <em>unbuffered</em> channel:</p>
                    <pre><code className="hljs golang">ch:= make(chan type){"\n"}</code></pre>
                    <p>Now, we can use this channel to send and receive messages. We use the <code className="hljs hl-inline">&lt;-</code> operator:</p>
                    <pre><code className="hljs golang">ch &lt;- v{"\n"}</code></pre>
                    <p>to send to channel <code className="hljs hl-inline">ch</code> and:</p>
                    <pre><code className="hljs golang">v := &lt;-ch{"\n"}</code></pre>
                    <p>to read from channel <code className="hljs hl-inline">ch</code>.</p>
                    <p>Ok let us write an example using channels:</p>
                    <pre><code className="hljs golang">package main{"\n"}{"\n"}import ({"\n"}{"    "}"fmt"{"\n"}{"    "}"time"{"\n"}){"\n"}{"\n"}func doSomething(size int, c chan int) {"{"}{"\n"}{"    "}for i := 0; i &lt; size; i++ {"{"}{"\n"}{"        "}time.Sleep(100 * time.Millisecond){"\n"}{"    "}{"}"}{"\n"}{"    "}c &lt;- size{"\n"}{"}"}{"\n"}{"\n"}func main() {"{"}{"\n"}{"    "}c := make(chan int){"\n"}{"    "}go doSomething(10, c){"\n"}{"    "}go doSomething(20, c){"\n"}{"    "}go doSomething(30, c){"\n"}{"\n"}{"    "}x, y, z := &lt;-c, &lt;-c, &lt;-c{"\n"}{"    "}fmt.Println(x, y, z){"\n"}{"}"}{"\n"}</code></pre>
                    <p>Run this programm. What happened there?</p>
                    <p>We don't need to use <code className="hljs hl-inline">time.Sleep</code> anymore because sends and receives block until the other side is ready. To avoid blocking, one can create <em>buffered</em> channels.</p>
                    <pre><code className="hljs golang">c:= make(chan int, 100){"\n"}</code></pre>
                    <p>When a <em>buffered</em> channel is full, sends block. When and if it is empty the channel receives blocks.</p>
                    <p>You can iterate over the values of a channel, if it is closed:</p>
                    <pre><code className="hljs golang">package main{"\n"}{"\n"}import ({"\n"}{"    "}"fmt"{"\n"}{"    "}"time"{"\n"}){"\n"}{"\n"}func doSomething(size int, c chan int) {"{"}{"\n"}{"    "}for i := 0; i &lt; size; i++ {"{"}{"\n"}{"        "}time.Sleep(100 * time.Millisecond){"\n"}{"    "}{"}"}{"\n"}{"    "}c &lt;- size{"\n"}{"}"}{"\n"}{"\n"}func doAll(c chan int) {"{"}{"\n"}{"    "}d:= make(chan int){"\n"}{"    "}go doSomething(10, d){"\n"}{"    "}go doSomething(20, d){"\n"}{"    "}go doSomething(30, d){"\n"}{"    "}c &lt;- (&lt;-d){"\n"}{"    "}c &lt;- (&lt;-d){"\n"}{"    "}c &lt;- (&lt;-d){"\n"}{"    "}close(c){"\n"}{"}"}{"\n"}{"\n"}func main() {"{"}{"\n"}{"    "}c := make(chan int){"\n"}{"\n"}{"    "}go doAll(c){"\n"}{"    "}for i := range c {"{"}{"\n"}{"        "}fmt.Println(i){"\n"}{"    "}{"}"}{"\n"}{"}"}{"\n"}</code></pre>
                    <p>Don't forget to close the channel (c) before you iterate over it. If you want to wait for multiple communication operations, Go offers <code className="hljs hl-inline">select</code>. It works similar to <code className="hljs hl-inline">switch</code>:</p>
                    <pre><code className="hljs golang">package main{"\n"}{"\n"}import ({"\n"}{"    "}"fmt"{"\n"}{"    "}"time"{"\n"}){"\n"}{"\n"}func doSomething(size int, c chan int) {"{"}{"\n"}{"    "}for i := 0; i &lt; size; i++ {"{"}{"\n"}{"        "}time.Sleep(100 * time.Millisecond){"\n"}{"    "}{"}"}{"\n"}{"    "}c &lt;- size{"\n"}{"}"}{"\n"}{"\n"}func main() {"{"}{"\n"}{"    "}c, q := make(chan int), make(chan int){"\n"}{"    "}jobs := 5{"\n"}{"\n"}{"    "}go func() {"{"}{"\n"}{"        "}for i := 1; i &lt;= jobs; i++ {"{"}{"\n"}{"            "}doSomething(i*10, c){"\n"}{"        "}{"}"}{"\n"}{"        "}q &lt;- 0 // done{"\n"}{"    "}{"}"}(){"\n"}{"\n"}{"    "}for {"{"}{"\n"}{"        "}select {"{"}{"\n"}{"        "}case x := &lt;-c: // if we have a result{"\n"}{"            "}fmt.Println(x){"\n"}{"        "}case &lt;-q: // if we are done{"\n"}{"            "}fmt.Println("Finished"){"\n"}{"            "}return{"\n"}{"        "}default: // if we are waiting{"\n"}{"            "}fmt.Print("..."){"\n"}{"            "}time.Sleep(time.Second){"\n"}{"        "}{"}"}{"\n"}{"    "}{"}"}{"\n"}{"}"}{"\n"}</code></pre>
                    <p>The default case will run if no other channel is ready. </p>
                    <h3>Further reading</h3>
                    <p>Have a look into Mutexes, which we did not talk about. This can be important for managing concurrency:</p>
                    <ul>
                        <li> Dancing with Go's Mutexes: <a href="https://hackernoon.com/dancing-with-go-s-mutexes-92407ae927bf">https://hackernoon.com/dancing-with-go-s-mutexes-92407ae927bf</a></li>
                        <li> Go by example: <a href="https://gobyexample.com/mutexes">https://gobyexample.com/mutexes</a></li>
                        <li> Understanding Mutexes: <a href="http://www.alexedwards.net/blog/understanding-mutexes">http://www.alexedwards.net/blog/understanding-mutexes</a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default GoConcurrency;