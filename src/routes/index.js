import {client} from '$lib/js/graphql-client'
import {projectsQuery, pageInfoQuery} from '$lib/js/graphql-queries'

export async function GET() {
    try {
        const variables = {
            sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536
        }

        const [{projects}, {pageinfo}] = await Promise.all([
            client.request(projectsQuery, variables),
            client.request(pageInfoQuery)
        ])

        // Add validation
        if (!projects || !Array.isArray(projects)) {
            throw new Error('Invalid projects data received')
        }

        if (!pageinfo) {
            throw new Error('Invalid page info received')
        }

        return { 
            status: 200,
            body: { 
                projects,
                sm: variables.sm,
                md: variables.md,
                lg: variables.lg,
                xl: variables.xl,
                xxl: variables.xxl,
                pageinfo
            }
        }
    } catch (error) {
        console.error('GET handler error:', error)
        return {
            status: 500,
            body: {
                error: 'Failed to load data',
                message: error.message
            }
        }
    }
}