
export default function Browser() {
    return <div className="content">
        <h3>Neo4j Browser</h3>
        <br />
        <p>
            <a href="https://neo4j.com/docs/browser-manual/current/" target="_blank">Neo4j Browser</a> is a web-based tool that allows you to interact with a Neo4j graph database.

           It is a powerful tool for working with graph data. It is easy to use and provides a variety of features for exploring, querying, and visualizing graph data.
        </p>
        <p>It provides a number of features for working with graph data, including:</p>
        <ul>
            <li>A Cypher query editor with syntax highlighting, code completion, and warnings.</li>
            <li>A graph visualization of query results.</li>
            <li>The ability to export query results to a variety of formats, including CSV, JSON, and XML.</li>
            <li>The ability to import and export graph data.</li>
        </ul>
        <p>Please click <a href="http://localhost:7474/browser">here</a> to explore, query and visualize the PKG.</p>

    </div >
        ;
}