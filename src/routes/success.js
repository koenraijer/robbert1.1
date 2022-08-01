import {client} from '$lib/js/graphql-client'
import {marked} from 'marked';
import {contactContentQuery, pageInfoQuery} from '$lib/js/graphql-queries'

export async function get() {
    try {
        const {contactContent} = await client.request(contactContentQuery) 
        const res2 = await client.request(pageInfoQuery).catch(err => console.log(err))
        const {pageinfo} = res2

        return {
            body: {
                contactContent, pageinfo
            }
        }
    } catch (err) {
        const error = 'Error in getting data from server, try refreshing the page!'
        console.error(err);
        return {
            status: 500,
            error
        }
    }
}
