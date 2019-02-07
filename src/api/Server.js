/*
* Wrap existing REST API with GraphQL using Graphql-yoga and axios
*/
const { GraphQLServer } = require('graphql-yoga');
const axios = require('axios');
const baseURL = `http://apifirstcms.dd:8083/fullpageview?_format=json`;

const convertResponse = (data) => (
    data.map(item =>({ 
                title: item.title[0].value, 
                id: item.nid[0].value, 
                body: [{
                    value: item.body[0].value,
                    summary: item.body[0].summary,
                    processed: item.body[0].processed,
                    format: item.body[0].format,
                }],
                })));
const resolvers = {
    Query: {
        page: () => {
            return axios.get(`${baseURL}`).then(res => convertResponse(res.data))
        },

    },
};

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
});

server.start(() => {
    console.log(`Server is running on http://localhost:4000`);
});