import React, { Component } from 'react';

class Basics extends Component {

    render () {
        return (
            <div className="course-content">
                <h2>Data &amp; Databases</h2>

                <p>To put blockchain into context we are going all the way back to the advent of computing. 
                The aim of this and the following modules is to give you a sense of how blockchain technology fits into the overall development of computing and what concepts it draws from.</p>

                <p><img alt="" src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/database.svg" /></p>

                <p>Of course all of this is known to you, but let us start by taking a look at data and databases, the developmental steps and concepts involved.</p>

                <p>First, a few definitions:</p>

                <ul>
                    <li>Data is a series of one or more symbols given meaning by acts of interpretation. </li>
                    <li>A database is an organised collection of data.</li>
                    <li>A database management system (DBMS) is a program (or system), used to manage and interact with a database.</li>
                </ul>

                <p>The history of databases is often categorised into 3 different eras: Navigational, relational and post-relational databases. </p>

                <p>Let us have a closer look at the different types of databases and their evolution in time.</p>

                <h3 class="hd hd-2">Data and Databases</h3>
                <iframe width="100%" height="415"
                    src="https://www.youtube.com/embed/8BhzjcF79B8?autoplay=0">
                </iframe> 


                <h3>Navigational Databases</h3>

                <p>One of the early storage medium used in database technology was magnetic tape, which replaced punch cards and paper tape. 
                The earliest implementations of database management systems would iterate through the whole tape and check whether the unit of data at hand fit a given set of criteria. 
                Therefore, magnetic tape was introduced as a possibility to allow for searching. 
                The first major innovation in database structure was the development of navigational databases, in which a record includes a location reference to another linked piece of data. 
                This way, data was retrieved from tape machines, and later hard disks, by following the location pointer, rather than having to iterate through all the data.</p>

                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/anavigationaldatabase.png" /></p>

                <p>One of the first data management systems (databases) were the Integrated Data Store (IDS), designed by Charles W. Bachman, as well as the Information Management System (IMS) by IBM. Both were precursors for navigational databases.</p>

                <p>In the mid-1960s the commercial use of database systems became more common and with it the need for standardisation. 
                Charles W. Bachman founded the Database Task Group as part of the Conference on Data Systems Languages (CODASYL) and working closely with the CODASYL subgroup the Data Description Language Committee (DDLC). 
                In 1971 the so-called CODASYL approach was presented. 
                In it linked data sets were formed into a network, in which one could find records by using a primary key, the CALC key, navigating the single sets, or scanning the records sequentially. </p>

                <p>The most popular data models were CODASYL, a network model, and IMS, a hierarchical model.</p>

                <h3>Hierarchical Database Model</h3>

                <p>In the 1960s, IBM crated the first hierarchical database, IMS. They were mainly used in beginning mainframe DBMS. </p>

                <p>Hierarchical data base models have a tree-like structure. Data is stored as a record, which again is connected to other records by links. 
                The tree-like structure is a result of record relationships. </p>

                <p>Whereby, a record is a compilation of fields containing exactly <strong>one</strong> value and its entity type defines the field the record comprises. 
                A record is comparable to a row/tuple in relational databases and an entity type to a table/relation. 
                Each record in a hierarchical database has <strong>one</strong> parent record and can have <strong>one or more</strong> children records. </p>

                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/hierarchicaldatabasemodel.png" /></p>

                <p>The structure is quite simple, but at the same time confined to a one-to-many-relationship and therefore inflexible. 
                To retrieve data, one has to run through the whole &quot;tree&quot; starting at the root node and continuing throughout the tree-like structure. </p>

                <p>Hierarchical models lost ground after Codd&#39;s relational model was introduced. 
                With the Extensible Markup Language (XML) coming up in the late 1990s hierarchical database models re-emerged. 
                Nowadays, they are mostly utilised for applications needing high performance and data availability. 
                Application areas are geographic information data storing, as well as file systems and databases in banking and telecommunications.</p>

                <p>Examples of hierarchical models include the IBM Information Management System (IMS), RDM Mobile and the Windows Registry in Microsoft Windows.</p>

                <h3>Network Model</h3>

                <p>Network models were introduced by Charles Bachman. 
                They follow a schema, in which object types are the nodes of a graph and relationship types the arcs. 
                Thus, hierarchical structure or lattice, where graphs illustrations would follow a regular tiling, is not a characteristic of this model. 
                In addition, network models have a generalised graph schema, in which record types are connected by relationship types, while at the same time, the database is a generalised graph of recorded events connected through their relationships. </p>

                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/networkmodel.png" /></p>

                <p>Therefore, network database models are flexible and seem more natural in regard to the modelling of relationships between entities/objects. </p>

                <p>Even though network models have several benefits, other models were more dominant due to several reasons. 
                Among them, this type of model did not become dominant because of IBM’s preference for hierarchical models, as well as the emergence of relational models with a higher level and more descriptive interface. </p>

                <p>Examples of a network model are the Integrated Data Store (IDS), Integrated Database Management System (IDMS) and Raima Database Manager. </p>

                <h3>A Comparison: Differences between Hierarchical Databases and Network Models</h3>

                <p>Hierarchical models follow a simple structure, but this makes them also inflexible. 
                They are not suited for large amounts of relationships because of the navigational constraints and tree-like schema. 
                In addition, the implementation is quite complex and they are difficult to manage. A lack of structural independence and standards can be observed.</p>

                <p>Network models have a more natural manner of modelling relations between entities and thus more flexible, but create a complex system, which is difficult to design and to maintain. 
                As hierarchical models, they lack structural independence. </p>

                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/datatable.png" /></p>

                <p>This makes them differently fitting for networks.</p>

                <p>In the beginning 1980s, low-level navigational interfaces based on hierarchical and network models were used for large-scale applications due to their benefits in performance. 
                With hardware evolving, relational models provided more productivity and flexibility. 
                In the end, relational models made them more and more obsolete, especially in the context of networks for corporate enterprises. </p>

                <h2>Relational Databases</h2>

                <p>In 1970 Edgar F. Codd published his influential paper <a href="https://github.com/dmvaldman/library/blob/master/computer%20science/Codd%20-%20A%20Relational%20Model%20of%20Data%20for%20Large%20Shared%20Data%20Banks.pdf"><em>A Relational Model of Data for Large Shared Data Banks</em></a>.
                It proposed a new model for databases that relied on fixed-size tables sharing identifiers across tables to tie content together.
                Rather than searching by following links, Codd suggested a search for data by content. </p>

                <p>Not only was this an important technological development, but it also created a new, abstracted space in which data was conceptually unbound by data banks by virtually merging them together and therefore disconnecting them from physical data storage. 
                SEQUEL or SQL, initially developed to manage data in relational databases by IBM to utilise the model Codd proposed in the 1970s, enabled new kinds of applications by making it possible to effectively search databases and create large inter-relational data sets that did not rely on a linked-list approach.</p>

                <div class="b9-info">
                    The Structured English Query Language (SEQUEL) was initially developed by IBM in the early 1970s, specifically by Donald D. Chamberlin and Raymond F. Boyce. The acronym SEQUEL was later changed to SQL due to legal reasons; The original acronym was trademarked by Hawker Siddeley, an aircraft company based in the UK.
                </div>

                <p>The most commonly used relational database (management) systems today all use a very similar (but not identical) SQL version (eg. PostgreSQL, MySQL, DB2, Microsoft SQL Server).</p>

                <h2>Desktop Databases</h2>

                <p>Increased computer sales led to relational databases becoming a commercial success. 
                While network and hierarchical database models became more and more unpopular, computing hardware became more powerful. 
                Thus, the 1980s brought desktop computers and the possibility to store data, as well as run database software on desktop hardware. Originally data was kept in silos and SQL brought them together into one virtual space. 
                With the advent of desktop computing data was now siloed in desktop computers.</p>

                <p>In the 1990s, object-oriented programming, in which data is conceptualised as objects, allowed solving the problem of having to translate between database tables and programmed objects and led to object and object-relational databases (ORD). 
                This difficulty was also tried to be solved through the use of object-relational mappings.</p>

                <p>New post-relational databases as a response to the Internet and need for fast processing of unstructured data appeared in the 2000s. 
                NoSQL databases, which are non-relational, introduced key-value stores and document-orientation. 
                These new type of databases are resource intensive and can confront the database admins (DBA) and maintainers with new issues, unknown in the context of relational databases.
                NoSQL databases are often differentiated as:</p>
                
                <ul>
                    <li>document-oriented databases with strong query engines and index controls, such as MongoDB, Amazon Dynamo DB;</li>
                    <li>column stores that store data as portions of columns and not rows, for example Cassandra or Cloudera;</li>
                    <li>key-value stores, like Redis, Berkeley DB or Aerospike;</li>
                    <li>graph data stores based on graph theory, e.g. Neo4j, GraphBase, Titan.</li>
                </ul>

                <p>While all of this development was taking place, networking between computers was developed and improved. We will cover this in the next section.</p>

                <h2>Data Transfer</h2>

                <p>The most basic attribute of networks is the ability to transfer data between computers. 
                Let us briefly recall how that process works in the context of databases.</p>

                <p>Imagine two machines that are connected to each other and have access to two different databases.</p>

                <ol>
                    <li>Computer A sends a discrete request for a set of information that is located on another machine.</li>
                    <li>Computer B accesses its database, querying for the data Computer A asked for.</li>
                    <li>Computer B retrieves the data and compiles a <em>document</em>, a set of structured data that has a beginning and an end.</li>
                    <li>Computer B sends the document to Computer A.</li>
                    <li>Computer A receives the document and interprets the data, perhaps storing it in its own database or executing a series of actions.</li>
                </ol>

                <p>The role of the document is important to highlight here. 
                To synchronise data between machines, an encode-decode sequence happens on the two computers involved by first including a sequence of characters in a specialised format and afterwards reversing the process. 
                Common codes include the American Standard Code for Information (ASCII) for text files, Unicode, MIME, BinHex and Uuencode, and in the context of data communications among others Manchester encoding. </p>

                <p>A good example for a document transfer is an API request.</p>

                <ol>
                    <li>A client sends a request to an API endpoint, along with attributes for the data requested, e.g. <code class='hljs hl-inline'>GET https://example.com/inventory?id=2311</code>.</li>
                    <li>The server receives the request and queries its inventory database for the data requested, e.g. <code class='hljs hl-inline'>SELECT * FROM inventory.products WHERE id=2311;</code>.</li>
                    <li>Server forms a JSON response, the <em>document</em>, from the data, e.g. 
                        <code class='hljs hl-inline'>
                        {`
                            {
                                "products": [
                                    2311: {
                                        "name": Raw Linseed Oil
                                    }
                                ]
                            }
                        `}
                        </code>.
                    </li>
                    <li>Server sends the document to the client, which is waiting for the response.</li>
                    <li>Client reads the document, attempts to parse it as JSON, and stores the product information in a local SQLite database, e.g. <code class='hljs hl-inline'>INSERT INTO favourites (ext_id, name)
                    VALUES (2311, &quot;Raw Linseed Oil&quot;);</code>.</li>
                </ol>
                
                <p>
                    What are potential failures?
                    * The client could send a request that the server does not understand, or send a malformed request.
                    * The server could create a document that the client does not understand, e.g. server sends XML when client expects JSON.
                    * The server could send a malformed document.
                    * Either party could send a malicious request, e.g. SQL injection <code class='hljs hl-inline'>GET https://example.com/inventory?id=2311;DROP TABLE;</code>.
                </p>

                <p>A lot of effort in modern network systems, and in fact the web itself, goes into mitigating these translation and synchronisation issues. 
                Traditionally, synchronisation issues were often mitigated by implementing hierarchy. 
                Blockchain is effectively a non-hierarchical approach to mitigate these issues by making sure that every participant always has access to enough data to verify the integrity of ALL the data in the network.</p>

                <h2>Protocols &amp; Fault Tolerance</h2>
                <p>Before we dive into how these issues are approached with blockchain technology, lets re-visit how protocols in networking solve problems inherent to a hierarchy-free, fault-prone environment.</p>

                <p>The term computer networking covers both the hardware side, as well as the software protocols used to transmit data and let computers communicate with one another. 
                Because networks have a physical aspect, the interaction between software and hardware is especially interesting in a blockchain context.</p>

                <p>Imagine a cable connection between two computers. Traditionally a coaxial cable would have been used to carry a signal. 
                Cables can be subject to interference from a broad range of things, so there is no guarantee that the signal originating at point A will be received by point B.
                To mitigate this problem and ensure communication a whole stack of protocols on the hardware and software level has been developed, with many foundations laid in the famous Xerox Parc.</p>

                <p>Protocols are behaviour guidelines for machines, so that they can cooperate and understand each other, as well as mitigate translation and synchronisation issues.</p>

                <p>Whereas the capability of a computer or electronic system, or a network to keep operating while components fail is subsumed under the term fault tolerance. 
                In case of a failure, it requires a system to continue operation without interruption while it is repaired (no single point of failure). 
                In addition, failures shall not affect the entire system by being isolated (fault isolation) and contained (fault containment). 
                The availability of reversion modes is also of importance.</p>
                
                <p>In order to facilitate the transfer of data, protocols like TCP split data into small packets and transmit each one of them individually. 
                On the hardware level these bits of digital data are converted into an analogue signal. 
                On the receiving end the signals are reconstructed and the other end of the software protocol re-assembles the original piece of data. 
                If a packet is missing, the receiving computer can ask for the re-transmission of the missing bundle of data.</p>

                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/document.svg" /></p>

                <p>When approaching blockchain technology it is worth recalling these basics of computing because the technology operates in a similarly uncertain environment and is designed to minimise the potential for disruption and damage in adverse conditions.</p>

                <h3>Ledgers</h3>
                <p>A ledger is a book or file recording and totalling economic transactions. Importantly, transactions are recorded in chronological order as they are executed. The order of transactions is extremely relevant and is one of the reasons why Blockchain protocols are designed the way they are.</p>

                <p>In order to get a picture of the state of accounts at any point one must tally all transactions up to that point. One by one, every transaction record alters the state.</p>

                <p>Every transaction in a ledger contains an arbitrary set of data, depending on their purpose. In ledgers that record monetary transactions the ledger might contain the following data:</p>

                <ul>
                    <li>Sender</li>
                    <li>Recipient</li>
                    <li>Amount</li>
                    <li>Credit/Debit</li>
                    <li>Reference</li>
                </ul>

                <p>Ultimately the data recorded depends on the structure and purpose of the ledger. This will be important later, so remember that transactions are ultimately chronologically ordered chunks of data.</p>

                <p>Going through and processing each transaction in the ledger enables us to derive all kinds of meta information. This can include number of transactions, activity per account and of course, individual account balances. An account balance, like the balance of your bank account, is an abstract representation and summary of a list of transactions.</p>

                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/authority.svg" /></p>

                <p>Traditionally ledgers are maintained by a trusted authority, a ledger keeper. These days ledger keepers include insurance companies, banks, tax collectors and many others. In order to make a transaction you will go through the following steps:</p>
                
                <ol>
                    <li>Identify yourself to the ledger keeper</li>
                    <li>Request data from the ledger keeper, eg. about your account balance</li>
                    <li>Request the recording of a new transaction</li>
                    <li>Ledger keeper will check the validity of the transaction (is your balance sufficient, is your account frozen etc.)</li>
                    <li>Ledger keeper enters the transaction into the ledger and informs other ledger keepers of the transaction if necessary. For example, another bank if your transaction involves sending money elsewhere.</li>
                    <li>Recipient can now identify themselves with their ledger keeper and ascertain their updated balance</li>
                </ol>
                
                <p>This system works well as long as ledger keepers can be trusted. There is reason to believe that the development of the Bitcoin protocol, the first successful implementation of Blockchain technology, was in part motivated by the financial crisis in 2008.</p>

                <h3>Eventual consensus</h3>

                <p>The CAP theorem states that in a distributed system, you can at most pick 2 out of the 3:</p>

                <ul>
                    <li>Consistency</li>
                    <li>Availability</li>
                    <li>Partition tolerance</li>
                </ul>
                
                <p>Blockchain aims for perfect availability and reaches eventual consistency by making partitions economically uninteresting.
                The consensus is eventual. Indeed, two, or more, nodes may win the mining puzzle at the same time. Other nodes then receive competing claims. However individual nodes are unlikely to receive both claims simultaneously. The protocol provides for that. The block with the most transactions or with the most complex puzzle solved is selected.
                If undecided, then we have a fork, i.e. two competing truths. As further blocks are added to each side of the fork, nodes will reevaluate for length and complexity and potentially decide which side of the fork to keep working with. As time moves on, it becomes less and less likely that both sides of the fork will have identical lengths and complexities.
                Hence the eventual consensus.</p>

                <h3>Forking</h3>

                <p>Forking in software engineering describes a process, in which a developer works on a copy of a source code to create a new, independent piece of software.
                In the blockchain context, the term forking includes an analogous mechanism, but is applied and intended for different purposes.
                In the case a blockchain could continue on two different paths in its transaction history or regulation on transaction validation, forks are introduced as a mean to solution.</p>

                <p>A more recent block points to the block that came right before itself.
                It does so by storing the hash of its immediately preceding block.
                Thus, it is possible for 2 different blocks to claim to be the successor of a given block.
                In this case, we say that there is a fork. The protocol provides a mechanism to eventually focus on a single branch of the fork automatically, if the user does not explicitly instruct its client to follow a specific fork.</p>

                <p><img src="https://s3-eu-west-1.amazonaws.com/b9-academy-assets/course-assets/HLF-0/blockchain_forking.png" /></p>

                <h3>Learn more</h3>

                <ul>
                    <li><a href="http://www.springer.com/cda/content/document/cda_downloaddocument/9781447156000-c2.pdf?SGWID=0-0-45-1430025-p175494435">A History of Databases</a></li>
                    <li><a href="http://www-03.ibm.com/ibm/history/exhibits/builders/builders_codd.html">Achievements of Edgar F. Codd</a></li>
                    <li><a href="https://www.fing.edu.uy/inco/grupos/csi/esp/Cursos/cursos_act/2000/DAP_DisAvDB/documentacion/OO/Evol_DataModels.html">Evolution of Database Models</a></li>
                    <li><a href="https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed">CAP &quot;theorem&quot;</a></li>
                </ul>
                    
            </div>
        );
    }
}


export default Basics;