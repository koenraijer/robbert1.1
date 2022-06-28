import {client} from '$lib/js/graphql-client'
import {postsQuery} from '$lib/js/graphql-queries'

export async function get() {
        let sm = 640;
        let md = 768;
        let lg = 1024;
        let xl = 1280;
        let xxl = 2560;

        const variables = {sm, md, lg, xl, xxl}

        const {posts} = await client.request(postsQuery, variables) 

        return {
            body: {
                posts, sm, md, lg, xl, xxl
            }
        }
}