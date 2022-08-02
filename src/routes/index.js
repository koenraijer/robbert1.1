import {client} from '$lib/js/graphql-client'
import {projectsQuery, pageInfoQuery} from '$lib/js/graphql-queries'
import {browser} from '$app/env'

export async function GET() {
        try {
            let sm = 640;
            let md = 768;
            let lg = 1024;
            let xl = 1280;
            let xxl = 1536;
            
            const variables = {sm, md, lg, xl, xxl}
    
            const res = await client.request(projectsQuery, variables).catch(err => console.log(err))
            const res2 = await client.request(pageInfoQuery).catch(err => console.log(err))
            const {pageinfo} = res2
            const  {projects} = res
            
            return { 
                status: 200,
                body: { 
                    projects, sm, md, lg, xl, xxl, pageinfo
                }
            }
                
            
        } catch (err) {
            console.error(err);
            return {
                status: 500,
                body: err.message
            }
        }
}
