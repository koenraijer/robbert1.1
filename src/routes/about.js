import {client} from '$lib/js/graphql-client'
import {aboutQuery} from '$lib/js/graphql-queries'

export async function get() {
        let sm = 640;
        let md = 768;
        let lg = 1024;
        let xl = 1280;
        let xxl = 1536;

        const variables = {sm, md, lg, xl, xxl}
        const {about} = await client.request(aboutQuery, variables) 

        return {
            body: {
                about, sm, md, lg, xl, xxl
            }
        }
}