export default function Sparql() {
    return <div className="content">
        <h3>Neosemantics</h3>
        <br />
        <p>
            <a href="https://neo4j.com/labs/neosemantics/4.0/introduction/" target="_blank">Neosemantics
            (n10s) </a> is a plugin that enables the use of RDF in Neo4j. <a href="https://www.w3.org/RDF/" target="_blank">RDF
            Resource Description Framework (RDF)</a> is a W3C standard model for data
        interchange.
        </p>
        <p>Neosemantics is a powerful tool that can be used to integrate RDF data with Neo4j. It can be used to store, query, and reason about RDF data in a graph database. Neosemantics can be used in a variety of applications, including:</p>
        <ul>
            <li>Knowledge graphs</li>
            <li>Linked data</li>
            <li>Semantic web</li>
            <li>Ontology engineering</li>
            <li>Data integration</li>
        </ul>
        <p>Neosemantics can be used to solve:</p>
        <ul>
            <li>Store RDF data in Neo4j in a lossless manner (imported RDF can subsequently be exported without losing a single triple in the process).</li>
            <li>On-demand export property graph data from Neo4j as RDF.</li>
            <li>Model validation based on the W3C SHACL language.</li>
            <li>Import of Ontologies and Taxonomies in OWL/RDFS/SKOS/...</li>
            <li>Query RDF data using Cypher.</li>
            <li>Expose RDF data through a SPARQL endpoint.</li>
        </ul>
        <p>Please click <a href="" target="_blank">here</a> to acces RDF data in Protein Knowledge Graph via <a href="https://yasgui.org/" target="_blank">YASGUI (Yet Another Sparql GUI)</a>, a web application to query any SPARQL endpoint. YASGUI provides various advanced features for creating, sharing, and visualizing SPARQL queries and their results. We also provided a comprehensive set of example SPARQL queries.

</p>

    </div >
        ;
}