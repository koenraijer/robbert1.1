import {writable} from 'svelte/store'

export const config = writable({
    title: 'Robbert Lalisang Photography', // SEO
    descr: 'Personal website of Robbert Lalisang', // SEO
    domain: "localhost:3000",
    OG_image: "",
    author: {
      first_name: 'Robbert', // Used by Title component
      last_name: 'Lalisang', // Used by Title component
      intro: '🌸',
      bio: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      picture: '/assets/maskable@512.png',
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

export const nav_items = writable()
  // https://codepen.io/shshaw/post/responsive-placeholder-image