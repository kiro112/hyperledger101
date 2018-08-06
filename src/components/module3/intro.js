import React, { Component } from 'react';

class Intro extends Component {

    render() {
        return (
            <div>
                <h3>Welcome back!</h3>
                <p>We've already covered a lot of theory, at an overview level, to understand approximately what Hyperledger Fabric is and how it compares to other blockchain offerings. We will now turn our attention to setting it up and developing chaincode. We will also continue our exploration of Go for those who are new to this language. </p>
                <p>Hyperledger Fabric [1] networks are flexible by design. As such, there are innumerable ways to build up a HLF network. That is, topology is an important design consideration and you have considerable latitude in this area. Hyperledger Fabric offers various samples in the <a href="https://gerrit.hyperledger.org/r/#/admin/projects/fabric-samples">fabric-samples</a> repository. </p>
                <p>In this module, you will learn:</p>
                <ol>
                <li>to set up the official "Building Your First Network" example.<br /></li>
                <li>to use the command-line interface(CLI) for interacting with the network. You will learn to write clients in module five. So, until we will use the CLI as client.</li>
                <li>to set up and work with the official "dev mode" network. This is a very basic network and is pre-created for testing chaincode. This platform will prepare us for chaincode development.</li>
                <li>to write chaincode. But don't panic, we will start with the simplest chaincode you can build. We will put a key/value pair into the ledger and read it back without editing. We will build and run this simple chaincode in the "dev mode" network.
                </li>
                </ol>
                <p>So, the idea is, that you first understand the official networks and in the next module we will create a custom network for a given use case step-by-step. </p>
                <h3>Prerequisites</h3>
                <p>You need the following on your machine:</p>
                <ul>
                <li><em>cURL</em> : a tool to transfer data to and from a server and which supports a wide range of protocols.</li>
                <li><em>Go</em>: you should have already installed Golang.</li>
                </ul>
                <p>Note:</p>
                <ol>
                <li>that your machine needs <code className="hljs hl-inline">gnu-tar</code> to unpack Hyperledger Fabric archives. If you use the <code className="hljs hl-inline">bsdtar</code>, for instance in MacOS, then you will probably get an error. </li>
                <li>for Windows, install <em>Git Bash</em>.</li>
                </ol>
                <p>We strongly recommend you to use a VM, where we have a defined environment. That will make the support easier for you and for us.</p>
                <p>Watch Rob create an Ubuntu Virtual Machine on Windows, install Docker-CE and Hyperledger samples. Downloads are from <a href="https://www.virtualbox.org/wiki/Downloads">https://www.virtualbox.org/wiki/Downloads</a> and <a href="https://www.ubuntu.com/download/desktop">https://www.ubuntu.com/download/desktop</a></p>
                <div className="vert vert-1" data-id="block-v1:B9lab+HLF-12+2018-07+type@video+block@47524ce3f73f48b29804bda02e61bced">
                <div className="xblock xblock-student_view xblock-student_view-video xmodule_display xmodule_VideoModule" data-runtime-class="LmsRuntime" data-init="XBlockToXModuleShim" data-block-type="video" data-request-token="65386ffa913111e8be120a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@video+block@47524ce3f73f48b29804bda02e61bced" data-type="Video" data-course-id="course-v1:B9lab+HLF-12+2018-07">
                    <h3 className="hd hd-2">HLF in VM</h3>
                    <iframe src="https://www.youtube.com/embed/jVC423asZLM" allow="autoplay; encrypted-media" allowFullScreen width={809} height={455} frameBorder={0} />
                </div>
                <div className="vert vert-2" data-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@cd5e364dadf24995b95bfdc3c82b7860">
                    <div className="xblock xblock-student_view xblock-student_view-html xmodule_display xmodule_HtmlModule" data-runtime-class="LmsRuntime" data-init="XBlockToXModuleShim" data-block-type="html" data-request-token="65386ffa913111e8be120a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@cd5e364dadf24995b95bfdc3c82b7860" data-type="HTMLModule" data-course-id="course-v1:B9lab+HLF-12+2018-07">
                    <h4>Docker</h4>
                    <p>Docker offers so-called software containers to execute applications inside it. It is a similar concept to Virtual Machines and it is based on libcontainer. The isolation level is not as strong as in a VM because Docker containers share the host OS kernel. On the other hand, it makes them lighter weight and faster in execution compared to a VM.</p>
                    <p><strong>Dockerfiles</strong> are blueprints for creating <strong>Docker Images</strong> which are used to start <strong>containers</strong>. You will not need to write Dockerfiles. We will use the Images provided by Hyperledger Fabric. 
                        If you wish to dig into <strong>Dockerfiles</strong>, this is a useful starting point: <a href="https://docs.docker.com/engine/reference/builder/">https://docs.docker.com/engine/reference/builder/</a></p>
                    <p>You can find public images on <a href="https://hub.docker.com/">Docker Hub</a>. </p>
                    <p>Docs: <a href="https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/">Install Docker-CE on Ubuntu</a></p>
                    <h4>Docker Compose</h4>
                    <p>We will use Docker Compose to define our Docker container and run the network. Hyperledger Fabric sample networks use the version 2. You will need the <a href="https://docs.docker.com/compose/compose-file/compose-file-v2/">reference</a> to understand Docker Compose files.
                        <a href="https://docs.docker.com/compose/install/">Docs: Install docker-compose</a></p>
                    <h4>YAML</h4>
                    <p>The network configuration is set by different YAML files. YAML is a data serialization language, like JSON or XML. You should be familar with basic syntax and keep in mind:</p>
                    <ol>
                        <li>YAML is case sensitive.</li>
                        <li>Tab characters are now allowed. Use only spaces.</li>
                    </ol>
                    <p>This <a href="https://learnxinyminutes.com/docs/yaml/">one</a> should be helpful for you to understand the syntax.</p>
                    <p>[1] Contributed by IBM and Digital Asset Holdings, Hyperledger Fabric is one of five Hyperledger Projects hosted by The Linux Foundation.</p>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Intro;