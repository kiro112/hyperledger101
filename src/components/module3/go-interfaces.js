import React, { Component } from 'react';

class GoInterfaces extends Component {

    render() {
        return (
            <div>
                <h2>Go</h2>
                <p>It is time to broach interfaces in Go. After that we will also talk shortly about testing in Go.</p>
                <h3>Interfaces</h3>
                <p>Go offers the so-called "interface type". It's a collection of method signatures. An interface value can hold any value that implements those methods. Let us try it:</p>
                <pre><code className="hljs golang">{"\n"}package main{"\n"}{"\n"}import ({"\n"}{"    "}"fmt"{"\n"}{"    "}"math"{"\n"}){"\n"}{"\n"}type Vector3D struct {"{"}{"\n"}{"    "}x, y, z float64{"\n"}{"}"}{"\n"}{"\n"}type Vector2D struct {"{"}{"\n"}{"    "}x, y float64{"\n"}{"}"}{"\n"}{"\n"}type Number float64{"\n"}{"\n"}type Euclid interface {"{"}{"\n"}{"    "}Norm() float64{"\n"}{"}"}{"\n"}{"\n"}func (v Vector3D) Norm() float64 {"{"}{"\n"}{"    "}return math.Sqrt(v.x*v.x + v.y*v.y + v.z*v.z){"\n"}{"}"}{"\n"}{"\n"}func (v Vector2D) Norm() float64 {"{"}{"\n"}{"    "}return math.Sqrt(v.x*v.x + v.y + v.y){"\n"}{"}"}{"\n"}{"\n"}func (n Number) Norm() float64 {"{"}{"\n"}{"    "}if n &gt; 0 {"{"}{"\n"}{"        "}return float64(n){"\n"}{"    "}{"}"}{"\n"}{"    "}return -float64(n){"\n"}{"}"}{"\n"}{"\n"}func main() {"{"}{"\n"}{"    "}var v Euclid{"\n"}{"    "}v = Vector3D{"{"}1, 2, 3{"}"}{"\n"}{"    "}fmt.Println(v.Norm()){"\n"}{"    "}v = Vector2D{"{"}1, 2{"}"}{"\n"}{"    "}fmt.Println(v.Norm()){"\n"}{"    "}v = Number(-2.5){"\n"}{"    "}fmt.Println(v.Norm()){"\n"}{"}"}{"\n"}</code></pre>
                <p>We see the declaration of the three types and methods as we have seen before. We have also declared an additional interface, <code className="hljs hl-inline">Euclid</code>, which includes a method signature <code className="hljs hl-inline">Norm() float64</code>. Since all defined types implement the <code className="hljs hl-inline">Norm</code> method, we now can use our <code className="hljs hl-inline">Euclid</code> interface to hold the instances of those types.</p>
                <p>There exists a special empty interface: <code className="hljs hl-inline">interface{'{'}{'}'}</code>.</p>
                <p>Because it has no method signatures, it is implemented by all types and it can be used to hold values of any type.</p>
                <pre><code className="hljs golang">{"\n"}package main{"\n"}{"\n"}import "fmt"{"\n"}{"\n"}func main() {"{"}{"\n"}{"    "}var i interface{"{"}{"}"}{"\n"}{"\n"}{"    "}i = 2{"\n"}{"    "}fmt.Println(i){"\n"}{"\n"}{"    "}i = "Test"{"\n"}{"    "}fmt.Println(i){"\n"}{"\n"}{"    "}s, ok := i.(string){"\n"}{"    "}fmt.Println(s, ok){"\n"}{"}"}{"\n"}</code></pre>
                <p>The syntax for direct access to the underlying value of the interface value is <code className="hljs hl-inline">i.(T)</code>. This is useful for <em>type switches</em>. Next module, we will learn the control constructs.</p>
                <h4>Further reading</h4>
                <ul>
                <li>Go by example: <a href="https://gobyexample.com/">https://gobyexample.com/</a></li>
                </ul>
                <h3>Simple unit test</h3>
                <p>Go offers the testing package <code className="hljs hl-inline">testing</code> and a tool called <code className="hljs hl-inline">go test</code>. 
                They are very helpful. Let's explore the basics.</p>
                <p>First let us write a function <code className="hljs hl-inline">sum</code>. This is the function we will test:</p>
                <pre><code className="hljs ">{"\n"}package sumutil{"\n"}{"\n"}func Sum(a,b int) (s int) {"{"}{"\n"}{"    "}for i:=a; i&lt;=b; i++ {"{"}{"\n"}{"        "}s+=i{"\n"}{"    "}{"}"} {"\n"}{"    "}return{"\n"}{"}"}{"\n"}</code></pre>
                <p>Okay, we can see what this does and know it probably works. Even so, let's make some tests. </p>
                <p>Save the program above as <code className="hljs hl-inline">sum.go</code> in a folder <code className="hljs hl-inline">sumutil</code>. Then make another file like this:</p>
                <pre><code className="hljs ">{"\n"}package sumutil{"\n"}{"\n"}import "testing"{"\n"}{"\n"}func TestSum(t *testing.T) {"{"}{"\n"}{"    "}cases := []struct {"{"}{"\n"}{"        "}start, end, result int{"\n"}{"    "}{"}"}{"{"}{"\n"}{"            "}{"{"} 5, 6, 11 {"}"},{"\n"}{"            "}{"{"} 1, 9, 45 {"}"}, // (1+9)+(2+8)+(3+7)+(4+6)+5=45{"\n"}{"            "}{"{"} 0, 9, 45 {"}"}, {"\n"}{"            "}{"{"} 1, 3, 6 {"}"},{"\n"}{"            "}{"{"} 10, 19, 145 {"}"}, // 10+(10+1)+(10+2)+...+(10+9)={"\n"}{"                         "}// 10*10+sum(1,9)=145{"\n"}{"    "}{"}"}{"\n"}{"    "}for _, c := range cases {"{"}{"\n"}{"        "}if got := Sum(c.start, c.end); got != c.result {"{"}{"\n"}{"            "}t.Errorf("Sum(%v,%v) got %v, want %v", c.start, c.end,got, c.result){"\n"}{"        "}{"}"}{"\n"}{"    "}{"}"}{"\n"}{"}"}{"\n"}{"\n"}func BenchmarkSum(b *testing.B) {"{"}{"\n"}{"    "}for i:=0; i&lt;b.N; i++ {"{"}{"\n"}{"        "}Sum(0,i){"\n"}{"    "}{"}"}{"\n"}{"}"}{"\n"}</code></pre>
                <p>Save this one as <code className="hljs hl-inline">sum_test.go</code> and run <code className="hljs hl-inline">go test</code>. </p>
                <p>You will see that it passes the test. A test function has the syntax <code className="hljs hl-inline">TestXXX</code>. A benchmark function has the syntax <code className="hljs hl-inline">BenchXXX</code>. </p>
                <p>Use <code className="hljs hl-inline">go test -help</code> to see what you need to run benchmarks.</p>
                <div className="vert vert-1" data-id="block-v1:B9lab+HLF-12+2018-07+type@video+block@c106e4ef952f42689287443699a0606e">
                <div className="xblock xblock-student_view xblock-student_view-video xmodule_display xmodule_VideoModule" data-runtime-class="LmsRuntime" data-init="XBlockToXModuleShim" data-block-type="video" data-request-token="4b3285de913411e8be120a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@video+block@c106e4ef952f42689287443699a0606e" data-type="Video" data-course-id="course-v1:B9lab+HLF-12+2018-07">
                    <h3 className="hd hd-2">Go Interfaces</h3>
                    <iframe src="https://www.youtube.com/embed/yJMhkz5GWwA" allow="autoplay; encrypted-media" allowFullScreen width={809} height={455} frameBorder={0} />
                </div>
                </div>
                <div className="vert vert-2" data-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@57d363bbcef141b38ecadaa2a045dc19">
                <div className="xblock xblock-student_view xblock-student_view-html xmodule_display xmodule_HtmlModule" data-runtime-class="LmsRuntime" data-init="XBlockToXModuleShim" data-block-type="html" data-request-token="4b3285de913411e8be120a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@57d363bbcef141b38ecadaa2a045dc19" data-type="HTMLModule" data-course-id="course-v1:B9lab+HLF-12+2018-07">
                    <h4>Further reading</h4>
                    <ul>
                    <li> Testing package: <a href="https://golang.org/pkg/testing/">https://golang.org/pkg/testing/</a></li>
                    <li> Writing unit tests: <a href="https://blog.alexellis.io/golang-writing-unit-tests/">https://blog.alexellis.io/golang-writing-unit-tests/</a></li>
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}

export default GoInterfaces;