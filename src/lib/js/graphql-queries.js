import {gql} from 'graphql-request'

export const projectsQuery = gql`
    query GetProjects($sm: Int!, $md: Int!, $lg: Int!, $xl: Int!, $xxl: Int!) {
        projects {
            image {
                sm: url(
                    transformation: {image: {resize: {fit: clip, width: $sm}}, document: {output: {format: webp}}}
                )
                md: url(
                    transformation: {image: {resize: {fit: clip, width: $md}}, document: {output: {format: webp}}}
                )
                lg: url(
                    transformation: {image: {resize: {fit: clip, width: $lg}}, document: {output: {format: webp}}}
                )
                xl: url(
                    transformation: {image: {resize: {fit: clip, width: $xl}}, document: {output: {format: webp}}}
                )
                xxl: url(
                    transformation: {image: {resize: {fit: clip, width: $xxl}}, document: {output: {format: webp}}}
                )
                height
                width
            }
            slug
            name
            index
        }
    }
`

export const projectQuery = gql`
    query GetProject($sm: Int!, $md: Int!, $lg: Int!, $xl: Int!, $xxl: Int!, $slug: String!) {
        project(where: {slug: $slug}) {
            name
            slug
            description {
                markdown
            }
            image {
                sm: url(
                    transformation: {image: {resize: {fit: clip, width: $sm}}, document: {output: {format: webp}}}
                )
                md: url(
                    transformation: {image: {resize: {fit: clip, width: $md}}, document: {output: {format: webp}}}
                )
                lg: url(
                    transformation: {image: {resize: {fit: clip, width: $lg}}, document: {output: {format: webp}}}
                )
                xl: url(
                    transformation: {image: {resize: {fit: clip, width: $xl}}, document: {output: {format: webp}}}
                )
                xxl: url(
                    transformation: {image: {resize: {fit: clip, width: $xxl}}, document: {output: {format: webp}}}
                )
                height
                width
            }
        }
    }
`

export const commercialsQuery = gql`
    query GetCommercials($sm: Int!, $md: Int!, $lg: Int!, $xl: Int!, $xxl: Int!) {
        commercials {
            image {
                sm: url(
                    transformation: {image: {resize: {fit: clip, width: $sm}}, document: {output: {format: webp}}}
                )
                md: url(
                    transformation: {image: {resize: {fit: clip, width: $md}}, document: {output: {format: webp}}}
                )
                lg: url(
                    transformation: {image: {resize: {fit: clip, width: $lg}}, document: {output: {format: webp}}}
                )
                xl: url(
                    transformation: {image: {resize: {fit: clip, width: $xl}}, document: {output: {format: webp}}}
                )
                xxl: url(
                    transformation: {image: {resize: {fit: clip, width: $xxl}}, document: {output: {format: webp}}}
                )
            }
            slug
            name
            description {
                markdown
            }
        }
    }
`

export const commercialQuery = gql`
    query GetCommercial($sm: Int!, $md: Int!, $lg: Int!, $xl: Int!, $xxl: Int!, $slug: String!) {
        commercial(where: {slug: $slug}) {
            name
            slug
            description {
                markdown
            }
            image {
                sm: url(
                    transformation: {image: {resize: {fit: clip, width: $sm}}, document: {output: {format: webp}}}
                )
                md: url(
                    transformation: {image: {resize: {fit: clip, width: $md}}, document: {output: {format: webp}}}
                )
                lg: url(
                    transformation: {image: {resize: {fit: clip, width: $lg}}, document: {output: {format: webp}}}
                )
                xl: url(
                    transformation: {image: {resize: {fit: clip, width: $xl}}, document: {output: {format: webp}}}
                )
                xxl: url(
                    transformation: {image: {resize: {fit: clip, width: $xxl}}, document: {output: {format: webp}}}
                )
                height
                width
            }
        }
    }
`

export const authorQuery = gql`
    query GetAuthor($name: String!, $sm: Int!, $md: Int!, $lg: Int!, $xl: Int!, $xxl: Int!) {
        author(where: {name: $name}) {
        name
        bio {
            markdown
        }
        intro {
            markdown
        }
        picture {
            sm: url(
                transformation: {image: {resize: {fit: clip, width: $sm}}, document: {output: {format: webp}}}
            )
            md: url(
                transformation: {image: {resize: {fit: clip, width: $md}}, document: {output: {format: webp}}}
            )
            lg: url(
                transformation: {image: {resize: {fit: clip, width: $lg}}, document: {output: {format: webp}}}
            )
            xl: url(
                transformation: {image: {resize: {fit: clip, width: $xl}}, document: {output: {format: webp}}}
            )
            xxl: url(
                transformation: {image: {resize: {fit: clip, width: $xxl}}, document: {output: {format: webp}}}
                )
            height
            width
        }
        }
    }
`

export const postsQuery = gql`
    query GetPosts($sm: Int!, $md: Int!, $lg: Int!, $xl: Int!, $xxl: Int!) {
        posts {
            date
            slug
            tags
            title
            snippet
            content {
                markdown
            }
            coverImage {
                sm: url(
                    transformation: {image: {resize: {fit: clip, width: $sm}}, document: {output: {format: webp}}}
                )
                md: url(
                    transformation: {image: {resize: {fit: clip, width: $md}}, document: {output: {format: webp}}}
                )
                lg: url(
                    transformation: {image: {resize: {fit: clip, width: $lg}}, document: {output: {format: webp}}}
                )
                xl: url(
                    transformation: {image: {resize: {fit: clip, width: $xl}}, document: {output: {format: webp}}}
                )
                xxl: url(
                    transformation: {image: {resize: {fit: clip, width: $xxl}}, document: {output: {format: webp}}}
                )
                height
                width
            }
        }
    }
`

export const postQuery = gql`
query GetPost($sm: Int!, $md: Int!, $lg: Int!, $xl: Int!, $xxl: Int!, $slug: String!) {
    post(where: {slug: $slug}) {
      slug
      date
      title
      snippet
      content {
        markdown
      }
      coverImage {
        sm: url(
          transformation: {image: {resize: {fit: clip, width: $sm}}, document: {output: {format: webp}}}
        )
        md: url(
          transformation: {image: {resize: {fit: clip, width: $md}}, document: {output: {format: webp}}}
        )
        lg: url(
          transformation: {image: {resize: {fit: clip, width: $lg}}, document: {output: {format: webp}}}
        )
        xl: url(
          transformation: {image: {resize: {fit: clip, width: $xl}}, document: {output: {format: webp}}}
        )
        xxl: url(
            transformation: {image: {resize: {fit: clip, width: $xxl}}, document: {output: {format: webp}}}
        )
        height
        width
      }
    }
  }
`

export const clientsQuery = gql`
    query GetClients($width: Int!) {
        clients {
        name
        logo {
            url(
                transformation: {image: {resize: {fit: clip, width: $width}}, document: {output: {format: webp}}}
            )
            }
        }
    } 
`

export const configQuery = gql`
    query GetConfig {
        configuration(where: {id: "cl3bj58r6y7kf0bui0x2s0p0d"}) {
        domain
        title
        description
        openGraphImage {
            url
        }
        }
    }
`

export const navQuery = gql`
    query getNav {
        navigation(where: {id: "cl3cnrtj0wiwn0buqy91n63wh"}) {
        name
        items
        }
    }
`