// lib/js/graphql-client.js
import {GraphQLClient} from 'graphql-request'

function createClientWithRetry(endpoint, options = {}) {
    const client = new GraphQLClient(endpoint)
    
    const requestWithRetry = async (query, variables, retries = 3) => {
        for (let i = 0; i < retries; i++) {
            try {
                return await client.request(query, variables)
            } catch (error) {
                if (i === retries - 1) throw error
                
                // Log retry attempts
                console.warn(`GraphQL request failed, attempt ${i + 1} of ${retries}:`, error)
                
                // Wait before retrying (exponential backoff)
                await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000))
            }
        }
    }

    return {
        request: requestWithRetry
    }
}

const GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_API
export const client = createClientWithRetry(GRAPHQL_ENDPOINT)