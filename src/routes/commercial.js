import {client} from '$lib/js/graphql-client'
import {commercialsQuery, clientsQuery, pageInfoQuery} from '$lib/js/graphql-queries'
import {browser} from '$app/env'

export async function GET() {
        try {
            let sm = 640;
            let md = 768;
            let lg = 1024;
            let xl = 1280;
            let xxl = 1536;
            
            const variables = {sm, md, lg, xl, xxl}
            const width = {width: md}
            const res = await client.request(commercialsQuery, variables).catch(err => console.log(err))

            const res2 = await client.request(clientsQuery, width).catch(err => console.log(err))

            const res3 = await client.request(pageInfoQuery).catch(err => console.log(err))
            const {pageinfo} = res3

            const {clients} = res2
            const  {commercials} = res
            
            return { 
                body: { 
                    commercials, clients, sm, md, lg, xl, xxl, pageinfo
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
