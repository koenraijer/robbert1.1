import {client} from '$lib/js/graphql-client'
import {aboutQuery, pageInfoQuery} from '$lib/js/graphql-queries'

export async function GET() {
        try {
            let sm = 640;
            let md = 768;
            let lg = 1024;
            let xl = 1280;
            let xxl = 1536;
    
            const variables = {sm, md, lg, xl, xxl}
            const {about} = await client.request(aboutQuery, variables) 
            const res2 = await client.request(pageInfoQuery).catch(err => console.log(err))
            const {pageinfo} = res2
    
            return {
                body: {
                    about, sm, md, lg, xl, xxl, pageinfo
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