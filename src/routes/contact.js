import {client} from '$lib/js/graphql-client'
import {marked} from 'marked';
import {contactTextQuery} from '$lib/js/graphql-queries'

export async function get() {
    try {
        const {contactText} = await client.request(contactTextQuery) 

        return {
            body: {
                contactText
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
