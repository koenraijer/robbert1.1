import {client} from '$lib/js/graphql-client'
import {projectsQuery} from '$lib/js/graphql-queries'
import {config} from '$lib/js/stores'

export async function get() {
        let sm = 640;
        let md = 768;
        let lg = 1024;
        let xl = 1280;
        let xxl = 1536; // 1536 oud
        
        const variables = {sm, md, lg, xl, xxl}

        const {projects} = await client.request(projectsQuery, variables) 

        return {
            body: {
                projects, sm, md, lg, xl, xxl
            }
        }
}
