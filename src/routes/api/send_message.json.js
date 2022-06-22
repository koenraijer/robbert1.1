import { GraphQLClient, gql } from 'graphql-request'
const GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_API
const AUTH_TOKEN = import.meta.env.VITE_GRAPHQL_MUTATION_TOKEN

const messageQuery = gql`
    mutation createMessage($name: String!, $email: String!, $message: String!) {
        createContact(data: {name: $name, email: $email, message: $message}) {
          id
        }
    }
`

const client = new GraphQLClient(GRAPHQL_ENDPOINT, {
      headers: {
        authorization: `Bearer ${AUTH_TOKEN}`
      }
})

export async function post({request}) {
    const params = await request.json()

    variables = {name: params.name, email: params.email, message: params.message}

    try {
      res = await client.request(messageQuery, variables) 

      if (res.ok) {
        return {
          status: 200,
          body: JSON.stringify({message: "Message sent!"})
        }
      }
      if (res.status !== 200) {
        return {
          status: res.status,
          body: JSON.stringify({res})
        }
      }
    } catch (error) {
      return {
        status: 500,
        body: error.response.errors[0].message + error.response.status
      }
    } 
}