import {client} from '$lib/js/graphql-client'
import {commercialsQuery, clientsQuery} from '$lib/js/graphql-queries'

export async function get() {
        let sm = 640;
        let md = 768;
        let lg = 1024;
        let xl = 1280;
        let xxl = 2560;

        const variables = {sm, md, lg, xl, xxl}
        width = {width: md}
        const {commercials} = await client.request(commercialsQuery, variables) 
        const {clients} = await client.request(clientsQuery, width)
        return {
            body: {
                commercials, sm, md, lg, xl, xxl, clients
            }
        }
}