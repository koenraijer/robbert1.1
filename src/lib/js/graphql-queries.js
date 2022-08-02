import {gql} from 'graphql-request'

export const projectsQuery = gql`
    query GetProjects($sm: Int!, $md: Int!, $lg: Int!, $xl: Int!, $xxl: Int!) {
        projects(orderBy: index_ASC) {
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
            coverImage
        }
    }
`

export const projectQuery = gql`
    query GetProject($sm: Int!, $md: Int!, $lg: Int!, $xl: Int!, $xxl: Int!, $slug: String!) {
        project(where: {slug: $slug}) {
            colNum
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
            seoDescription
        }
    }
`

export const weddingsQuery = gql`
    query GetWeddings($sm: Int!, $md: Int!, $lg: Int!, $xl: Int!, $xxl: Int!) {
        weddings(orderBy: index_ASC) {
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
            coverImage
        }
    }
`

export const weddingQuery = gql`
    query GetWedding($sm: Int!, $md: Int!, $lg: Int!, $xl: Int!, $xxl: Int!, $slug: String!) {
        wedding(where: {slug: $slug}) {
            colNum
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
            seoDescription
        }
    }
`

export const commercialsQuery = gql`
    query GetWeddings($sm: Int!, $md: Int!, $lg: Int!, $xl: Int!, $xxl: Int!) {
        commercials(orderBy: index_ASC) {
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
            coverImage
        }
    }
`

export const commercialQuery = gql`
    query GetWedding($sm: Int!, $md: Int!, $lg: Int!, $xl: Int!, $xxl: Int!, $slug: String!) {
        commercial(where: {slug: $slug}) {
            colNum
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
            seoDescription
        }
    }
`

export const aboutQuery = gql`
    query getAbout($sm: Int!, $md: Int!, $lg: Int!, $xl: Int!, $xxl: Int!) {
        about(where: {id: "cl2lmkxsq96vm0btfax09pspv"}) {
            pageTitle
            content {
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
        posts(orderBy: date_DESC) {
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

export const messageQuery = gql`
    mutation createMessage($name: String!, $email: String!, $message: String!) {
        createContact(data: {name: $name, email: $email, message: $message}) {
          id
        }
    }
`

export const clientsQuery = gql`
    query GetClients {
        clients {
        name
        logo {
            url
            }
        }
    } 
`

export const configQuery = gql`
    query GetConfig {
        configuration(where: {id: "cl3bj58r6y7kf0bui0x2s0p0d"}) {
            ogImageUrl
        }
    }
`

export const socialsQuery = gql`
    query getSocials {
        socials(orderBy: index_ASC) {
            title
            url
            icon
        }
    }
`

export const navigationQuery = gql`
    query GetNav {
        navigation(where: {id: "cl3cnrtj0wiwn0buqy91n63wh"}) {
            items 
            navigation
        }
    }
`

export const contactContentQuery = gql`
    query getContactContent {
        contactContent(where: {id: "cl5nq8kulgj020dumejd4kwy1"}) {
        formIntro {
            markdown
        }
        formSuccessText {
            markdown
        }
        formSuccessTitle
        }
    }
`

export const pageInfoQuery = gql`
    query getPageInfo {
        pageinfo(where: {id: "cl6arq1pr1gdo0btc13a1oz67"}) {
        about {
            title
            description
        }
        blog {
            title
            description
        }
        commercial {
            title
            description
        }
        contact {
            title
            description
        }
        homepage {
            description
            title
        }
        wedding {
            title
            description
        }
        success {
            title
            description
        }
        }
  }
`