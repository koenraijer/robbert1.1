import {client} from '$lib/js/graphql-client'
import {commercialsQuery, clientsQuery} from '$lib/js/graphql-queries'

export async function get() {
        try {
            let sm = 640;
            let md = 768;
            let lg = 1024;
            let xl = 1280;
            let xxl = 1536;
    
            const variables = {sm, md, lg, xl, xxl}
            const width = {width: md}
            const {commercials} = await client.request(commercialsQuery, variables) 
            const {clients} = await client.request(clientsQuery, width)
            return {
                body: {
                    commercials, sm, md, lg, xl, xxl, clients
                }
            }
        } catch (err) {
            const error = 'Error in getting data from server, try refreshing the page!'
            console.error(error);
            return {
                status: 500,
                error
            }
        }
}