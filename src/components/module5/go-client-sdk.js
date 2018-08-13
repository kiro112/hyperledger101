import React, { Component } from 'react';

class GoClientSdk extends Component {

    render () {
        return (
            <div className="xblock xblock-student_view xblock-student_view-vertical" data-runtime-class="LmsRuntime" data-init="VerticalStudentView" data-course-id="course-v1:B9lab+HLF-12+2018-07" data-request-token="a2fc0f109e8b11e8be140a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@vertical+block@94fbfced22ad44b9beb357c57f3da2b1" data-block-type="vertical">
                <div className="vert-mod">
                <div className="vert vert-0" data-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@38dd5865f6bf4ecf82feef50058aeb0c">
                    <div className="xblock xblock-student_view xblock-student_view-html xmodule_display xmodule_HtmlModule" data-runtime-class="LmsRuntime" data-init="XBlockToXModuleShim" data-block-type="html" data-request-token="a2fc0f109e8b11e8be140a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@38dd5865f6bf4ecf82feef50058aeb0c" data-type="HTMLModule" data-course-id="course-v1:B9lab+HLF-12+2018-07">
                    <h2>Client SDK for Go</h2>
                    <p>Since you are learning Go in this course, you may be interested in the Client SDK for Go. Here, we want to give you a starting point to familiarise yourself with this Client SDK.</p>
                    <p>You can find the SDK at <a href="https://github.com/hyperledger/fabric-sdk-go">https://github.com/hyperledger/fabric-sdk-go</a>.</p>
                    <p>The SDK repository page tells you, how to install and to test it.</p>
                    <p>If your Go environment is well set, you can get the the SDK with:</p>
                    <pre><code className="hljs sh">{"\n"}go get -u github.com/hyperledger/fabric-sdk-go{"\n"}</code></pre>
                    <p>If you want to try it, do not forget to fix the commit level for Hyperledger Fabric[1] v1.0. You can find the corresponding level at the SDK repository.</p>
                    <p>Be sure, that you can use the Go binaries:</p>
                    <pre><code className="hljs sh">{"\n"}export GOROOT=/usr/local/go{"\n"}export PATH=$PATH:$GOROOT/bin {"\n"}</code></pre>
                    <p>After that, to try the test, run:</p>
                    <pre><code className="hljs sh">{"\n"}cd $GOPATH/src/github.com/hyperledger/fabric-sdk-go/{"\n"}{"\n"}make depend-install{"\n"}{"\n"}make{"\n"}{"\n"}</code></pre>
                    <div className="b9-tip">
                        Hit <a href="https://chat.hyperledger.org/channel/fabric-sdk-go">Go SDK's Rocketchat</a> if you get stuck at some point. The community is very helpful.
                    </div>
                    <p>So, what are the next steps?</p>
                    <ul>
                        <li>You can find a very well explained example <a href="https://github.com/chainHero/heroes-service">here</a>. It could be better to wait before you work on this, until we speak about the <strong>Fabric-CA</strong> in next module.</li>
                        <li>You can find various tests at <a href="https://github.com/hyperledger/fabric-sdk-go/tree/master/test/integration">https://github.com/hyperledger/fabric-sdk-go/tree/master/test/integration</a>.</li>
                        <li>There is a <a href="https://github.com/securekey/fabric-examples/tree/master/fabric-cli/">CLI example</a>, which covers almost the whole SDK.</li>
                    </ul>
                    <p>[1] Contributed by IBM and Digital Asset Holdings, Hyperledger Fabric is one of five Hyperledger Projects hosted by The Linux Foundation.</p>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default GoClientSdk;