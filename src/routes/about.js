import {client} from '$lib/js/graphql-client'
import {authorQuery} from '$lib/js/graphql-queries'

export async function get() {
        let sm = 640;
        let md = 768;
        let lg = 1024;
        let xl = 1280;
        let xxl = 1536;

        const name = "Robbert Lalisang"
        const variables = {name, sm, md, lg, xl, xxl}
        const {author} = await client.request(authorQuery, variables) 

        return {
            body: {
                author, sm, md, lg, xl, xxl
            }
        }
}