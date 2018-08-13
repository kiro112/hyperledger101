import React, { Component } from 'react';

class GoArrays extends Component {

    render () {
        return (
            <div className="xblock xblock-student_view xblock-student_view-vertical" data-runtime-class="LmsRuntime" data-init="VerticalStudentView" data-course-id="course-v1:B9lab+HLF-12+2018-07" data-request-token="a644f3989e8c11e8be140a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@vertical+block@c33c4a8307c34393acdf39eee17038f0" data-block-type="vertical">
                <div className="vert-mod">
                <div className="vert vert-0" data-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@f46b1363e6b54b8685b4dca84d8ebb7c">
                    <div className="xblock xblock-student_view xblock-student_view-html xmodule_display xmodule_HtmlModule" data-runtime-class="LmsRuntime" data-init="XBlockToXModuleShim" data-block-type="html" data-request-token="a644f3989e8c11e8be140a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@f46b1363e6b54b8685b4dca84d8ebb7c" data-type="HTMLModule" data-course-id="course-v1:B9lab+HLF-12+2018-07">
                    <h2>Go</h2>
                    <p>This week, we introduce arrays and slices.</p>
                    <h3>Arrays</h3>
                    <p>In Go, the size of an array is a part of the type. So, arrays have a fixed size. The declaration has the syntax:</p>
                    <pre><code className="hljs golang">{"\n"}var array [size]type{"\n"}</code></pre>
                    <p>You can access the data with <code className="hljs hl-inline">array[index]</code>. Let's do a cross product:</p>
                    <pre><code className="hljs golang">{"\n"}package main{"\n"}{"\n"}import ({"\n"}{"    "}"fmt"{"\n"}){"\n"}{"\n"}func main() {"{"}{"\n"}{"    "}v1 := [3]float64{"{"}7, 5, 4{"}"}{"\n"}{"    "}var v2 [3]float64{"\n"}{"    "}v2 = [3]float64{"{"}2, 4, 6{"}"}{"\n"}{"\n"}{"    "}for v3,i := [...]float64{"{"}0, 0, 0{"}"}, 0; i &lt; len(v3); i++ {"{"}{"\n"}{"        "}v3[i] = v1[(i + 1) % 3] * v2[(i + 2) % 3] - v1[(i + 2) % 3] * v2[(i + 1) % 3]{"\n"}{"        "}defer fmt.Printf("%t\n", v3){"\n"}{"    "}{"}"}{"\n"}{"}"}{"\n"}</code></pre>
                    <p>As you can see, the compiler fits the array depending on the number of elements. </p>
                    <p>We have the built-in function <code className="hljs hl-inline">len(array)</code>, which gives the size of an array. Note, the example code is not well-written, but it shows you different aspects of arrays. </p>
                    <p>We use <code className="hljs hl-inline">defer</code>, which means defer the execution in last-in-first-out order until surrounding functions return.</p>
                    <h3>Slices</h3>
                    <p>In Go, a <em>slice</em> is a an abstraction built on top of arrays. They are more flexible than arrays. You will see slices used more often than arrays because of this flexbility. </p>
                    <p>A slice does not have a fixed size. To declare a slice:</p>
                    <pre><code className="hljs golang">{"\n"}var slice []type{"\n"}</code></pre>
                    <p>A slice has a length(<code className="hljs hl-inline">len(slice)</code>) and a capacity(<code className="hljs hl-inline">cap(slice)</code>). You can also use a built-in function to declare a slice: <code className="hljs hl-inline">func make([]type, length, capacity) []type</code>. It returns a slice with the given length, capacity and type. It allocates an array, which is referred to by the returned slice.</p>
                    <p>Let's create a simple slice with three vectors and then add a vector with the built-in <code className="hljs hl-inline">func append(s []T, vs ...T) [] T</code> function:</p>
                    <pre><code className="hljs golang">{"\n"}package main{"\n"}{"\n"}import "fmt"{"\n"}{"\n"}func main() {"{"}{"\n"}{"    "}vectors := []struct {"{"}{"\n"}{"        "}x,y,z float64{"\n"}{"    "}{"}"} {"{"}{"\n"}{"        "}{"{"} 1, 2, 3 {"}"},{"\n"}{"        "}{"{"} 3.2, 4, 6 {"}"},{"\n"}{"        "}{"{"} 4, 3, 1{"}"},{"\n"}{"    "}{"}"}{"\n"}{"    "}fmt.Printf("type %#T and value %v\n", vectors, vectors){"\n"}{"\n"}{"    "}vectors = append(vectors, struct{"{"} x, y, z float64 {"}"}{"{"} 7, 7, 7 {"}"}){"\n"}{"\n"}{"    "}fmt.Printf("type %#T and value %v\n", vectors[3:], vectors[3:]){"\n"}{"    "}fmt.Printf("type %#T and value %v\n", vectors[3], vectors[3]){"\n"}{"\n"}{"    "}for i, v := range vectors {"{"}{"\n"}{"        "}fmt.Println(i, " : ", v){"\n"}{"    "}{"}"}{"\n"}{"\n"}{"    "}numbers := make([]int, 10, 10) // create a slice with an underlying array{"\n"}{"    "}fmt.Println(numbers){"\n"}{"\n"}{"    "}for i := range numbers {"{"}{"\n"}{"        "}numbers[i] = i{"\n"}{"    "}{"}"}{"\n"}{"    "}fmt.Println(numbers){"\n"}{"}"}{"\n"}</code></pre>
                    <p>As you can see we are just playing here. </p>
                    <p>One can use <code className="hljs hl-inline">range</code> to iterate over an array, slice or map. <code className="hljs hl-inline">i</code> is the index and <code className="hljs hl-inline">v</code> is the value of that index. </p>
                    <p>There is also a built-in <code className="hljs hl-inline">func copy(dst, src []T) int</code> to copy a slice into another and return the number of copied elements.</p>
                    <p>Read more about slices, here: <a href="https://blog.golang.org/go-slices-usage-and-internals" /></p>
                    <h3>Maps</h3>
                    <p>Maps are stored key/value pairs. The declaration is:</p>
                    <pre><code className="hljs golang">{"\n"}var m map[keyType]valueType{"\n"}</code></pre>
                    <p>But that creates a <code className="hljs hl-inline">nil</code> map, which is not so useful. You can read such a map but not write. We will use <code className="hljs hl-inline">make</code> to initialize a map so we can write to it. This is more useful:</p>
                    <pre><code className="hljs golang">{"\n"}m := make(map[keyType]valueType){"\n"}</code></pre>
                    <p>Let's play with maps:</p>
                    <pre><code className="hljs golang">{"\n"}package main{"\n"}{"\n"}import "fmt"{"\n"}{"\n"}func main() {"{"}{"\n"}{"    "}age := map[string]int {"{"}"max": 24, "tom": 28{"}"}{"\n"}{"    "}fmt.Println("map:", age){"\n"}{"\n"}{"    "}m := make(map[string]float64){"\n"}{"\n"}{"    "}m["E"]{"  "}= 2.7182818284{"\n"}{"    "}m["Pi"] = 3.1415926535{"\n"}{"    "}m["Phi"]= 1.6180339887{"\n"}{"\n"}{"    "}for key, v := range m {"{"}{"\n"}{"        "}fmt.Printf("Key: %v, Value: %v, Value: %v \n", key, v, m[key]){"\n"}{"    "}{"}"}{"\n"}{"\n"}{"    "}delete(m, "E") // does not return anything. It does nothing, if the key does not exist.{"\n"}{"\n"}{"    "}fmt.Println("len:", len(m)){"\n"}{"    "}fmt.Println("map:", m){"\n"}{"\n"}{"    "}_, ok := m["E"] // does the key exists?{"\n"}{"    "}fmt.Println("ok:", ok){"\n"}{"}"}{"\n"}</code></pre>
                    <p>The built-in function <code className="hljs hl-inline">func delete(m map[Type]Type1, key Type)</code> deletes the element with the key from the map. </p>
                    <div className="b9-warning">
                        When iterating over maps, order is not deterministic. 
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default GoArrays;