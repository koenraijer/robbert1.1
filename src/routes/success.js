import {client} from '$lib/js/graphql-client'
import {marked} from 'marked';
import {contactContentQuery} from '$lib/js/graphql-queries'

export async function get() {
    try {
        const {contactContent} = await client.request(contactContentQuery) 

        return {
            body: {
                contactContent
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
