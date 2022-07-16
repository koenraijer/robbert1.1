import {client} from '$lib/js/graphql-client'
import {marked} from 'marked';
import {contactTextQuery} from '$lib/js/graphql-queries'

export async function get() {
        const {contactText} = await client.request(contactTextQuery) 

        return {
            body: {
                contactText
            }
        }
}
