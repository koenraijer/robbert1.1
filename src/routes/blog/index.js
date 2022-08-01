import {client} from '$lib/js/graphql-client'
import {postsQuery, pageInfoQuery} from '$lib/js/graphql-queries'

export async function get() {
        try {
            let sm = 640;
            let md = 768;
            let lg = 1024;
            let xl = 1280;
            let xxl = 1536;
    
            const variables = {sm, md, lg, xl, xxl}
    
            const {posts} = await client.request(postsQuery, variables) 
            const res2 = await client.request(pageInfoQuery).catch(err => console.log(err))
            const {pageinfo} = res2
    
            return {
                body: {
                    posts, sm, md, lg, xl, xxl, pageinfo
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