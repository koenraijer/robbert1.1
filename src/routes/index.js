import {client} from '$lib/js/graphql-client'
import {projectsQuery, pageInfoQuery} from '$lib/js/graphql-queries'

export async function GET() {
            let sm = 640;
            let md = 768;
            let lg = 1024;
            let xl = 1280;
            let xxl = 1536;
            
            const variables = {sm, md, lg, xl, xxl}

            // await multiple promises, store them in two deconstructed consts, combined with .then().catch() syntax. 
            const [{projects}, {pageinfo}] = await Promise.all([
                client.request(projectsQuery, variables),
                client.request(pageInfoQuery)
            ]).catch(err => console.error(JSON.stringify(err, null, 2)))
            
            return { 
                status: 200,
                body: { 
                    projects, sm, md, lg, xl, xxl, pageinfo
                }
            }
}
