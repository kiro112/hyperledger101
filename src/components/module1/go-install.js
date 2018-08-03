import React, { Component } from 'react';

class GoInstall extends Component {

    render () {
        return (
            <div>
                <h2>Go</h2>
                <h3>Overview</h3>
                <p>Golang(Go) is an open source, statically typed and compiled programming language introduced by Google and first released in 2012. It has a BSD-style license. Its Git repository is located at <a href="https://go.googlesource.com/go">https://go.googlesource.com/go</a>.</p>
                <p>We will use Go for writing chaincode for Hyperledger Fabric. If you've never seen Go before, you will become familiar with it as you progress through this course. Later, we will explore chaincode in more detail. For now it is enough to know that Go is the high-level language and chaincode is the compiled form that actually runs on HLF. </p>
                <p>One can write chaincode in any language but the most supported language for HLF is Go.</p>
                <p>We will start with the basics. This week, you will install Go and learn some general things about it.</p>
                <h3>Install</h3>
                <p>Installing Go depends on your machine. See the <a href="https://golang.org/doc/install">Getting Started Page</a> and follow the instructions to install Go. Feel free to use your Slack channel for installation questions.</p>
                <div className="b9-tip">
                    <a href="https://github.com/travis-ci/gimme">gimme</a> is a useful script for Go.
                </div>
                
                <h3>Workflow</h3>
                <p>Go has a different workflow from most other programming tools. You will work with a single workspace and you will have all Go code contained in this workspace. The <code className="hljs hl-inline">GOPATH</code> environment variable specifies the location of your workspace. You can print it by typing <code className="hljs hl-inline">$ go env GOPATH</code> in your console. For more information about <code className="hljs hl-inline">GOPATH</code> type <code className="hljs hl-inline">$ go help gopath</code>. </p>
                <p>A version control system is helpful because we have one workspace. We will use Git for this. </p>
                
                <h3>Hello World!</h3>
                <p>Let's start with the ever-popular "Hello, World!" program. Let's see, how it looks in Go:</p>
                <pre><code className="hljs golang">{"\n"}package main{"\n"}{"\n"}import "fmt"{"\n"}{"\n"}func main() {"{"}{"\n"}{"    "}fmt.Printf("Hello, World!\n"){"\n"}{"}"}{"\n"}</code></pre>
                <p>Every Go program starts with the package declaration. Each package consists of one or more Go source files in a single directory. If the name of the package is <code className="hljs hl-inline">main</code>, Go will create an executable file.</p>
                <p>After that, we import the package <code className="hljs hl-inline">fmt</code>. Note that the package name is the last element of the package's file path. For an example, if we import the package "lib/math", then we use it as "math".</p>
                <p><code className="hljs hl-inline">fmt</code> implements input and output, and is part of Go's standard library. We will describe some of it's functions later in more detail. </p>
                <p>Execution will start in the function called <code className="hljs hl-inline">main()</code>. </p>
                <p>This function simply calls the Go I/O function <code className="hljs hl-inline">Printf()</code> from the package <code className="hljs hl-inline">fmt</code>. </p>
                <div className="b9-info">
                Function names determine visibility outside of packages. <code>Printf</code>'s first character is upper case and this means it's visible outside of <code>fmt</code>. Packages' names are always written in lower case, like <code>fmt</code> (short for format). 
                </div>
                <p>Now, let's compile this program. Create the file <code className="hljs hl-inline">hello.go</code> in the <code className="hljs hl-inline">$GOPATH/src/hello</code> directory. In a terminal:</p>
                <pre><code className="hljs ">{"\n"}$ cd $GOPATH/src/hello{"\n"}$ go build{"\n"}</code></pre>
                <p>If all goes well, <code className="hljs hl-inline">go</code> will build the executable. Go only prints errors. So, you will see no output and another command prompt unless something goes wrong.</p>
                <p>Now test your programm:</p>
                <pre><code className="hljs ">{"\n"}./hello{"\n"}</code></pre>
                <p>Quick tip:</p>
                <div className="b9-info">
                Go will install the executable in <code>$GOPATH/bin/</code> if you use <code>go install</code> instead of <code>go build</code>.
                </div>
                <h3>Further reading</h3>
                <ul>
                    <li>Go's Getting Started Page: <a href="https://golang.org/doc/install">https://golang.org/doc/install</a></li>
                    <li>How to write Go Code: <a href="https://golang.org/doc/code.html#PackageNames">https://golang.org/doc/code.html#PackageNames</a></li>
                    <li>Understanding Golang Packages: <a href="https://thenewstack.io/understanding-golang-packages/">https://thenewstack.io/understanding-golang-packages/</a></li>
                </ul>
            </div>
        )
    }

}

export default GoInstall;