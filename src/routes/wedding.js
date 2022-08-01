import {client} from '$lib/js/graphql-client'
import {weddingsQuery} from '$lib/js/graphql-queries'
import {browser} from '$app/env'

export async function get() {
        try {
            let sm = 640;
            let md = 768;
            let lg = 1024;
            let xl = 1280;
            let xxl = 1536;
            
            const variables = {sm, md, lg, xl, xxl}
    
            const res = await client.request(weddingsQuery, variables).catch(err => console.log(err))
            const  {weddings} = res
            
            return { 
                body: { 
                    weddings, sm, md, lg, xl, xxl
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