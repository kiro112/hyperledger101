'use strict';

import React, { Component } from 'react';

class GoPkgs extends Component {

    render () {
        return (
            <div className="xblock xblock-student_view xblock-student_view-vertical" data-runtime-class="LmsRuntime" data-init="VerticalStudentView" data-course-id="course-v1:B9lab+HLF-12+2018-07" data-request-token="1cfa7768a1b911e8be160a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@vertical+block@171fa047cb7a4164bdd8d36e6bc28f83" data-block-type="vertical">
        <div className="vert-mod">
          <div className="vert vert-0" data-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@7c38010a996d49399836f22416652279">
            <div className="xblock xblock-student_view xblock-student_view-html xmodule_display xmodule_HtmlModule" data-runtime-class="LmsRuntime" data-init="XBlockToXModuleShim" data-block-type="html" data-request-token="1cfa7768a1b911e8be160a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@7c38010a996d49399836f22416652279" data-type="HTMLModule" data-course-id="course-v1:B9lab+HLF-12+2018-07">
              <h1>Go</h1>
              <p>Like other languages, Go offers a lot of useful standard packages. We will have a look at:</p>
              <ol>
                <li><em>fmt</em></li>
                <li><em>strconv</em></li>
                <li><em>errors</em></li>
              </ol>
              <h2>fmt</h2>
              <p><em>fmt</em> (format) implements formatted I/O. Do you remember those? We covered a good number of its <em>verbs</em> in module 1. Here we go with a range of additional useful verbs:</p>
              <ul>
                <li><code className="hljs hl-inline">%%</code>  for the percent sign</li>
                <li><code className="hljs hl-inline">%#v</code> for the Go-syntax representation</li>
                <li><code className="hljs hl-inline">%t</code>  for a boolean, it formats its value as <code className="hljs hl-inline">true</code> or <code className="hljs hl-inline">false</code></li>
                <li><code className="hljs hl-inline">%b</code>  for an integer, it formats it to its binary representation</li>
                <li><code className="hljs hl-inline">%c</code>  for an integer, it formats it to its corresponding Unicode character</li>
              </ul>
              <p>If you use an invalid verb, you will get a string beginning with <code className="hljs hl-inline">"%!"</code> and a description.</p>
              <p>To write to <code className="hljs hl-inline">stdout</code>:</p>
              <ol>
                <li><code className="hljs hl-inline">func Print(a ...interface{'{'}{'}'}) (n int, err error)</code> formats with default formats.</li>
                <li><code className="hljs hl-inline">func Println(a ...interface{'{'}{'}'}) (n int, err error)</code> formats with default formats and appends a newline.</li>
                <li><code className="hljs hl-inline">func Printf(format string, a ...interface{'{'}{'}'}) (n int, err error)</code> formats with given format.</li>
              </ol>
              <p>These 2 functions return the number of bytes written and any applicable error. </p>
              <p>To read from <code className="hljs hl-inline">stdin</code>:</p>
              <ol>
                <li><code className="hljs hl-inline">func Scan(a ...interface{'{'}{'}'}) (n int, err error)</code> parses using default formats. Values are space-separated. Newlines count as spaces.</li>
                <li><code className="hljs hl-inline">func Scanln(a ...interface{'{'}{'}'}) (n int, err error)</code> parses using default formats and stops at a newline. </li>
                <li><code className="hljs hl-inline">func Scanf(format string, a ...interface{'{'}{'}'}) (n int, err error)</code> parses using the given format. The verb <code className="hljs hl-inline">%c</code> matches every rune. (space, tab, newline etc.)</li>
              </ol>
              <p>These 3 functions return the number of items scanned and an error if the count of items parsed is smaller than the count of arguments.</p>
              <p>Perhaps you noticed a kind of function declaration we did not speak about? It's called a <em>variadic function</em>, in that it can be called with any number of arguments. </p>
              <p>You can iterate over the arguments like so:</p>
              <pre><code className="hljs golang">{"\n"}func variadicFunction(a ...interface{"{"}{"}"}) {"{"}{"\n"}{"    "}for _,s:= range a {"{"}{"\n"}{"        "}// do something{"\n"}{"    "}{"}"}{"\n"}{"}"}{"\n"}</code></pre>
              <p>They are formatting functions on <em>io.Writer</em> and <em>io.Reader</em>, so we also have:</p>
              <ol>
                <li><code className="hljs hl-inline">func Fprint(w io.Writer, a...interface{'{'}{'}'}) (n int, err error)</code>: same as <code className="hljs hl-inline">Print</code> but writes to <code className="hljs hl-inline">w</code>.</li>
                <li><code className="hljs hl-inline">func Fprintln(w io.Writer, a...interface{'{'}{'}'}) (n int, err error)</code>: same as <code className="hljs hl-inline">Println</code> but writes to <code className="hljs hl-inline">w</code>.</li>
                <li><code className="hljs hl-inline">func Fprintf(w io.Writer, a...interface{'{'}{'}'}) (n int, err error)</code>: same as <code className="hljs hl-inline">Printf</code> but writes to <code className="hljs hl-inline">w</code>.</li>
                <li> <code className="hljs hl-inline">func Fscan(r io.Reader, a...interface{'{'}{'}'}) (n int, err error)</code>: same as <code className="hljs hl-inline">Fscan</code> but scans from <code className="hljs hl-inline">r</code>.</li>
                <li><code className="hljs hl-inline">func Fscanln(r io.Reader, a...interface{'{'}{'}'}) (n int, err error)</code>: same as <code className="hljs hl-inline">Fscanln</code> but scans from <code className="hljs hl-inline">r</code>.</li>
                <li><code className="hljs hl-inline">func Fscanf(r io.Reader, a...interface{'{'}{'}'}) (n int, err error)</code>: same as <code className="hljs hl-inline">Fscanf</code> but scans from <code className="hljs hl-inline">r</code>.</li>
              </ol>
              <p><code className="hljs hl-inline">io.Writer</code> is the interface that declares the <code className="hljs hl-inline">Write</code> method. <code className="hljs hl-inline">io.Reader</code> is also an interface and it declares the <code className="hljs hl-inline">Read</code> method.</p>
              <p>The functions <code className="hljs hl-inline">Sprint</code>, <code className="hljs hl-inline">Sprintln</code>, <code className="hljs hl-inline">Sprintf</code> are similar to <code className="hljs hl-inline">Print</code>, <code className="hljs hl-inline">Println</code> and <code className="hljs hl-inline">Printf</code> with the difference that they return a <code className="hljs hl-inline">string</code> instead of writing to <code className="hljs hl-inline">stdout</code>.</p>
              <p>The functions <code className="hljs hl-inline">Sscan</code>, <code className="hljs hl-inline">Scanln</code>, <code className="hljs hl-inline">Sscanf</code> are smilar to <code className="hljs hl-inline">Fscan</code>, <code className="hljs hl-inline">Fscanln</code>, <code className="hljs hl-inline">Fscanf</code> with the difference that they scan from a <code className="hljs hl-inline">string</code> given as an argument.</p>
              <p>The function <code className="hljs hl-inline">Errorf</code> formats according to a format and returns it as an error.</p>
              <h3>Further reading</h3>
              <ul>
                <li>String formatting example: <a href="https://gobyexample.com/string-formatting">https://gobyexample.com/string-formatting</a></li>
                <li>Go Walkthrough fmt: <a href="https://medium.com/go-walkthrough/go-walkthrough-fmt-55a14bbbfc53">https://medium.com/go-walkthrough/go-walkthrough-fmt-55a14bbbfc53</a></li>
                <li>Regular expressions example: <a href="https://gobyexample.com/regular-expressions">https://gobyexample.com/regular-expressions</a></li>
                <li>JSON example: <a href="https://gobyexample.com/json">https://gobyexample.com/json</a></li>
                <li>Io writer interface: <a href="https://medium.com/@as27/a-simple-beginners-tutorial-to-io-writer-in-golang-2a13bfefea02">https://medium.com/@as27/a-simple-beginners-tutorial-to-io-writer-in-golang-2a13bfefea02</a></li>
              </ul>
              <h2>strconv</h2>
              <p>The package <em>strconv</em> offers conversions to and from string of basic data types.</p>
              <h3>Convert from string</h3>
              <p>Let us start with an example from <a href="https://golang.org/pkg/strconv">https://golang.org/pkg/strconv</a>:</p>
              <pre><code className="hljs golang">{"\n"}package main{"\n"}{"\n"}import ({"\n"}{"    "}"fmt"{"\n"}{"    "}"strconv"{"\n"}){"\n"}{"\n"}func main() {"{"}{"\n"}{"    "}v32 := "-354634382"{"\n"}{"    "}if s, err := strconv.ParseInt(v32, 10, 32); err == nil {"{"}{"\n"}{"        "}fmt.Printf("%T, %v\n", s, s){"\n"}{"    "}{"}"}{"\n"}{"    "}if s, err := strconv.ParseInt(v32, 16, 32); err == nil {"{"}{"\n"}{"        "}fmt.Printf("%T, %v\n", s, s){"\n"}{"    "}{"}"}{"\n"}{"\n"}{"    "}v64 := "-3546343826724305832"{"\n"}{"    "}if s, err := strconv.ParseInt(v64, 10, 64); err == nil {"{"}{"\n"}{"        "}fmt.Printf("%T, %v\n", s, s){"\n"}{"    "}{"}"}{"\n"}{"    "}if s, err := strconv.ParseInt(v64, 16, 64); err == nil {"{"}{"\n"}{"        "}fmt.Printf("%T, %v\n", s, s){"\n"}{"    "}{"}"}{"\n"}{"}"}{"\n"}</code></pre>
              <ul>
                <li>The function <code className="hljs hl-inline">ParseInt(s string, base int, bitSize int) (i int64, err error)</code> interprets <code className="hljs hl-inline">s</code> as an integer in base <code className="hljs hl-inline">base</code>, from <code className="hljs hl-inline">2</code> to <code className="hljs hl-inline">36</code>, and with type <code className="hljs hl-inline">bitSize</code>, whereby <code className="hljs hl-inline">0</code> means <code className="hljs hl-inline">int</code>, <code className="hljs hl-inline">8</code> means <code className="hljs hl-inline">int8</code>, <code className="hljs hl-inline">16</code> means <code className="hljs hl-inline">int16</code>, <code className="hljs hl-inline">32</code> means <code className="hljs hl-inline">int32</code> and <code className="hljs hl-inline">64</code> means <code className="hljs hl-inline">int64</code>.</li>
                <li><code className="hljs hl-inline">ParseUint</code> is similar, with the difference that it returns an unsigned integer. </li>
                <li>The <code className="hljs hl-inline">func Atoi(s string) (int, error)</code> returns <code className="hljs hl-inline">ParseInt(s, 10, 0)</code> as type <code className="hljs hl-inline">int</code>.</li>
              </ul>
              <h3>Convert to string</h3>
              <ol>
                <li><code className="hljs hl-inline">func FormatBool(b bool) string</code> returns <code className="hljs hl-inline">"true"</code> or <code className="hljs hl-inline">"false"</code> according to <code className="hljs hl-inline">b</code>.</li>
                <li><code className="hljs hl-inline">func FormatFloat(f float64, fmt vyte, prec, bitSize int) string</code> returns a string representation of <code className="hljs hl-inline">f</code> with format <code className="hljs hl-inline">fmt</code> and with precision <code className="hljs hl-inline">prec</code>.</li>
                <li><code className="hljs hl-inline">func FormatInt(i int64, base int) string</code> returns the string representation of <code className="hljs hl-inline">i</code> in base <code className="hljs hl-inline">base</code>.</li>
                <li><code className="hljs hl-inline">func FormatUint(i uint, base int) string</code> is the same as <code className="hljs hl-inline">FormatInt</code> but it takes a unsigned integer.</li>
                <li><code className="hljs hl-inline">func Itoa(i int) string</code> is shorthand for <code className="hljs hl-inline">FormatInt(int64(i), 10)</code>. So it gives a decimal representation of <code className="hljs hl-inline">i</code> as a string.</li>
              </ol>
              <h3>Further reading</h3>
              <ul>
                <li>Go Walkthrough. It includes also string operations: <a href="https://gobyexample.com/string-formatting">https://gobyexample.com/string-formatting</a></li>
              </ul>
              <h2>Errors</h2>
              <p>In Go, errors are values. The convention is that the last return value of a function is the error. This is the entire code of errors package:</p>
              <pre><code className="hljs golang">{"\n"}// Copyright 2011 The Go Authors. All rights reserved.{"\n"}{"  "}// Use of this source code is governed by a BSD-style{"\n"}{"  "}// license that can be found in the LICENSE file.{"\n"}{"\n"} // Package errors implements functions to manipulate errors.{"\n"}{"  "}package errors{"\n"}{"\n"} // New returns an error that formats as the given text.{"\n"}{"  "}func New(text string) error {"{"}{"\n"}{"      "}return &amp;errorString{"{"}text{"}"}{"\n"}{"  "}{"}"}{"\n"}{"\n"} // errorString is a trivial implementation of error.{"\n"}{"  "}type errorString struct {"{"}{"\n"}{"      "}s string{"\n"}{"  "}{"}"}{"\n"}{"\n"} func (e *errorString) Error() string {"{"}{"\n"}{"      "}return e.s{"\n"}{"  "}{"}"}{"\n"}</code></pre>
              <p>We use <code className="hljs hl-inline">func New(text string) error</code> to create an error. Something like this:</p>
              <pre><code className="hljs golang">{"\n"}package main{"\n"}{"\n"}import ({"\n"}{"    "}"errors"{"\n"}{"    "}"fmt"{"\n"}){"\n"}{"\n"}func div(a, b float64) (float64, error) {"{"}{"\n"}{"    "}if b == 0 {"{"}{"\n"}{"        "}return -1, errors.New("can't perform division by zero"){"\n"}{"    "}{"}"}{"\n"}{"    "}return a / b, nil{"\n"}{"}"}{"\n"}{"\n"}func main() {"{"}{"\n"}{"    "}for i := 2.; i &gt;= -2; i = i - 0.5 {"{"}{"\n"}{"        "}if x, err := div(3, i); err != nil {"{"}{"\n"}{"            "}fmt.Println(err){"\n"}{"        "}{"}"} else {"{"}{"\n"}{"            "}fmt.Printf("3/%v=%v\n", i, x){"\n"}{"        "}{"}"}{"\n"}{"    "}{"}"}{"\n"}{"}"}{"\n"}</code></pre>
              <p>So in this case, <code className="hljs hl-inline">nil</code> means no error. For best practice, you should always check the errors. However, have a look into the following list, because, in Go, error handling differs from other languages.</p>
              <h3>Further reading</h3>
              <ul>
                <li> Errors are values: <a href="https://blog.golang.org/errors-are-values">https://blog.golang.org/errors-are-values</a></li>
                <li> Errors handling: <a href="https://blog.golang.org/error-handling-and-go">https://blog.golang.org/error-handling-and-go</a></li>
                <li> Go by example: <a href="https://gobyexample.com/errors">https://gobyexample.com/errors</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        );
    }
}

export default GoPkgs;