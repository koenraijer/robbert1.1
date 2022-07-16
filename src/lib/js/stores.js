import {client} from '$lib/js/graphql-client'
import {socialsQuery, navigationQuery, configQuery} from '$lib/js/graphql-queries'
import {writable} from 'svelte/store'

export const config = writable({
    title: 'Robbert Lalisang Photography', // SEO
    descr: 'Personal website of Robbert Lalisang', // SEO
    domain: "https://www.robbertlalisang.com/",
    OG_image: "https://media.graphassets.com/resize=fit:clip,width:1536/output=format:webp/fUUBqEASyeFzwMjQ8jjA",
    author: {
      first_name: 'Robbert', // Used by Title component
      last_name: 'Lalisang', // Used by Title component
    },
    svg_placeholder: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E",
    image_sizes: {
      sm: "640w",
      md: "768w",
      lg: "1024w",
      xl: "1280w",
      xxl: "1536w",
    },
  })

export const menu = writable({
  open: false
})

export const socials = writable([], (set) => { 
  client.request(socialsQuery)
    .then(res => set(res.socials))
 });

export const nav = writable([], (set) => { 
  client.request(navigationQuery)
    .then(res => set(res.navigation.items))
 });
  // https://codepen.io/shshaw/post/responsive-placeholder-image

