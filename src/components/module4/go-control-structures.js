import React, { Component } from 'react';

class GoControlStructures extends Component {

    render() {
        return (
            <div>
                <h1>Go</h1>
                <p>Let's talk about control structures in Go. We'll start with the <code className="hljs hl-inline">if</code> statement.</p>
                
                <h2><code className="hljs hl-inline">if</code> statement</h2>
                <p>The syntax is:</p>
                <pre><code className="hljs golang">{"\n"}if boolean_expression_1 {"{"}{"\n"}{"    "}// execute, if boolean_expression_1 is true{"\n"}{"}"} else if boolean_expression_2 {"{"}{"\n"}{"    "}// execute, if boolean_expression_1 is false but boolean_expression_2 {"\n"}{"    "}// is true{"\n"}// {"}"} else if ...{"\n"}{"}"} else if boolean_expression_n {"{"}{"\n"}{"    "}// execute, if boolean_expression_1, ... , boolean_expression_(n-1) are{"\n"}{"    "}// false, but boolean_expression_n is true{"\n"}{"}"} else {"{"}{"\n"}{"    "}// execute, if boolean_expression_1, ... , boolean_expression_n are false{"\n"}{"}"}{"\n"}</code></pre>
                <p>You need braces <code className="hljs hl-inline">{'{'}{'}'}</code> for each <code className="hljs hl-inline">if</code> statement. The <code className="hljs hl-inline">{'{'}</code> brace needs to be on the same line as the <code className="hljs hl-inline">if</code> statement. If you want to use a <code className="hljs hl-inline">else if</code> or <code className="hljs hl-inline">else</code> statement, note that they have to be on the same line as the <code className="hljs hl-inline">{'}'}</code> brace of previous block. We can also give <code className="hljs hl-inline">if</code> or <code className="hljs hl-inline">else if</code> a short statement to execute before the condition:</p>
                <pre><code className="hljs golang">{"\n"}if s := 10%2; s==0 {"{"}{"\n"}{"    "}fmt.Println(s){"\n"}{"}"}{"\n"}</code></pre>
                <p>Boolean expressions evaluate to <code className="hljs hl-inline">true</code> or <code className="hljs hl-inline">false</code>. The comparison operators are:</p>
                <pre><code className="hljs golang">{"\n"}== equal{"\n"}!= not equal{"\n"}&lt; less{"\n"}&lt;= less or equal{"\n"}&gt; greater{"\n"}&gt;= greater or equal{"\n"}</code></pre>
                <p>The <code className="hljs hl-inline">if</code> statement is also used for error handling. So, you will often see code like:</p>
                <pre><code className="hljs golang">{"\n"} if err != nil {"{"}{"\n"}{"        "}fmt.Printf(err){"\n"}{"    "}{"}"}{"\n"}</code></pre>
                <h3>Further reading</h3>
                <ul>
                    <li>Go comparison operators: <a href="https://golang.org/ref/spec#Comparison_operators">https://golang.org/ref/spec#Comparison_operators</a></li>
                    <li><a href="https://blog.golang.org/errors-are-values">Errors are values</a></li>
                </ul>
                
                <h2><code className="hljs hl-inline">switch</code> statement</h2>
                <p>The syntax of a <code className="hljs hl-inline">switch</code> statement is:</p>
                <pre><code className="hljs golang">{"\n"}switch expression {"{"}{"\n"}{"    "}case value_1:{"\n"}{"        "}// do something if expression is equal to value_1{"\n"}{"    "}case value_2:{"\n"}{"        "}// do something if expression is equal to value_2{"\n"}{"    "}// ...{"\n"}{"    "}case value_n:{"\n"}{"        "}// do something if expression is equal to value_n{"\n"}{"    "}default:{"\n"}{"        "}// do something if value_1 ... value_n does not match expression{"\n"}{"}"}{"\n"}</code></pre>
                <p>Cases are evaluated from top to bottom. The <code className="hljs hl-inline">switch</code> finishes if a <code className="hljs hl-inline">case</code> succeeds. Note that, <code className="hljs hl-inline">values_x</code> must have the same type as <code className="hljs hl-inline">expression</code>. </p>
                <p>If you do not give an expression to <code className="hljs hl-inline">switch</code>, then Go interprets it as <code className="hljs hl-inline">switch true</code>. This gives us another way to write <code className="hljs hl-inline">if-else if-else</code> chains:</p>
                <pre><code className="hljs golang">{"\n"}switch {"{"}{"\n"}{"    "}case boolean_expression_1:{"\n"}{"        "}// if true is equal to boolean_expression_1{"\n"}{"        "}// which is the same as if boolean_expression_1 is true.{"\n"}{"    "}case boolean_expression_2:{"\n"}{"        "}// else if{"\n"}{"    "}// ...{"\n"}{"    "}case boolean_expression_n:{"\n"}{"        "}// else if{"\n"}{"    "}default: {"\n"}{"        "}// else{"\n"}{"}"}{"\n"}</code></pre>
                <div className="b9-warning">
                Unlike other languages (like C), you don't need to use "break" to avoid fall-through. In Go, you need to "fallthrough" explicity. "fallthrough" will enter the next case, even if the expression does not match.
                </div>
                <p>There are so-called type switches in Go:</p>
                <pre><code className="hljs golang">{"\n"}var i interface{"{"}{"}"}{"\n"}{"\n"}switch i.(type) {"{"}{"\n"}{"    "}case bool:{"\n"}{"        "}// if i has type bool{"\n"}{"        "}fmt.Printf("Value of i is %v\n", i.(bool)){"\n"}{"    "}case int32, in64:{"\n"}{"        "}// ...{"\n"}{"    "}// ...{"\n"}{"    "}default:{"\n"}{"        "}// i has another type{"\n"}{"}"}{"\n"}</code></pre>
                <p>One last thing; You can use multiple value cases like <code className="hljs hl-inline">case 1, 2, 4, 9, 16:</code>.</p>
                
                <h2><code className="hljs hl-inline">for</code> statement</h2>
                <p><code className="hljs hl-inline">for</code> is the only looping statement in Go. The syntax is:</p>
                <pre><code className="hljs golang">{"\n"}for init_statement; condition_expression; post_statement {"{"}{"\n"}{"    "}// do something{"\n"}{"}"}{"\n"}</code></pre>
                <p>Before the iterations starts, this will first execute the <code className="hljs hl-inline">init_statement</code>.
                The loop body will be executed as long as <code className="hljs hl-inline">condition_expression</code> is true. The <code className="hljs hl-inline">post_statement</code> will be executed at the end of every iteration.
                Note, that <code className="hljs hl-inline">init_statement</code> and <code className="hljs hl-inline">post_statement</code> are optional. (Without them, the <code className="hljs hl-inline">for</code> statement is like the <code className="hljs hl-inline">while</code> statement in other languages)</p>
                <p>You can use <code className="hljs hl-inline">continue</code> to skip the iteration or <code className="hljs hl-inline">break</code> to terminate the execution, like in C, C#, Java etc.</p>
                
                <h3>Further reading</h3>
                <ul>
                    <li>A Tour of Go: <a href="https://tour.golang.org/">https://tour.golang.org/</a></li>
                </ul>
            </div>
        )
    }
}

export default GoControlStructures;