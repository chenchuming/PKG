//import { ApolloExplorer } from '@apollo/explorer';
import { ApolloExplorer } from '@apollo/explorer/react';

import { ApolloSandbox } from '@apollo/sandbox/react';
var document = "&document=query%20Chromosomes%20%7B%0A%20%20chromosomes%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%7D%0A%7D";


export default function GraphQL() {
    return <div>
        <h3>GraphQL APIs</h3>
        <br />
        <p><a href="https://neo4j.com/docs/graphql-manual/current/" target="_blank">GraphQL</a> is an open-source data query and manipulation language and a server-side query runtime engine for APIs.
        GraphQL enables declarative data fetching where a client can specify exactly what data it needs from an API. Instead of multiple endpoints that return separate data, a GraphQL server exposes a single endpoint and responds with precisely the data a client asked for.
            </p>
        <p>Here are some of the benefits of using GraphQL:</p>
        <ul>
            <li><strong>Declarative data fetching:</strong> Clients can specify exactly what data they need from an API, which can lead to more efficient and performant requests.</li>
            <li><strong>Flexibility:</strong> GraphQL is a flexible language that can be used to query a wide variety of data sources.</li>
            <li><strong>Evolvability:</strong> GraphQL APIs can be easily evolved over time without breaking client code.</li>
            <li><strong>Developer experience:</strong> GraphQL provides a better developer experience than traditional REST APIs, with features like type safety and validation.</li>
        </ul>
        <p>Please click <a href="http://localhost:4000/{document}">here</a> to access PKG GraphQL APIs supported by <a href="https://www.apollographql.com/docs/graphos/explorer">Apollo Explorer Sandbox</a>.</p>
        {/* <ApolloExplorer style={{ minHeight: "600px" }}
            graphRef=''
            endpointUrl='http://localhost:4000/{document}'
        /> */}
        {/* <div style={{ height: '100vh' }}>
            <ApolloSandbox
                initialEndpoint='http://localhost:4000/'
            />
        </div> */}
        {/* <ApolloExplorerReact /> */}
    </div >
        ;
}