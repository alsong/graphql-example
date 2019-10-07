const express = require('express'),
    graphqlHTTP = require('express-graphql'),
    schema = require('./schema/schema'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    app = express()

//allow cross-origin requets
app.use(cors())

mongoose.connect("mongodb://alsong:test123@ds042898.mlab.com:42898/graphql_demo")
mongoose.connection.once('open', () => {
    console.log('Connected to Database')
})
app.use("/graphql", graphqlHTTP({
    schema, graphiql: true
}))

app.listen(4000, () => console.log('Listening to port 4000'))