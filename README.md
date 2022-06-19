# Portfolio Robbert

## Navigation
- Hamburger menu op kleine schermen
    - Half-transparante drawer vanuit rechts (of anders boven)
    - Zelf menu-items aan/uit kunnen zetten in GraphCMS
- Items: 
    - Portfolio (collectie van projecten)
    - Commercial (collectie van collecties)
        - Wedding (collectie van projecten)
        - Product (collectie van projecten)
        - Selected clients ([Tycho Litjens – Home](https://www.tychografie.nl))
    - Blog
    - About
    - Contact

## Pagina's
### Portfolio (homepage)
- 1 kolom, breed 
- kleine top/bottom marge tussen foto's
- Witte achtergrond, primair:donkergroen. 
- Titel: all caps. Uitgelijnd. 

### Commercial
- a la Homepage, met links naar collecties van projecten

### Projectpagina
- Banner image
- Infotekst
- Foto 
    - Caption (optioneel)
- Masonry grid

### About
- Avatar
- Tekstpagina
- Instagram Feed

## Footer
- Social icons in footer

## Overig
### Design
- Colors: [A Beginner’s Guide to Applying Color in UI Design | George Francis](https://georgefrancis.dev/writing/a-beginners-guide-to-applying-color-in-ui-design/)

### Inspiratie
- [max muench photography](https://www.muenchmax.com/)
- [Hannes Becker](https://www.hannesbecker.com/)
- [Sam Oetiker Photography](https://samoetiker.com/)
- [max muench photography](https://www.muenchmax.com/)

### Niet vergeten
- Page transitions
- Titel zoals Benjamin Hardman
- Dark mode optioneel
- Kopieerbeveiliging => <html oncontextmenu="return false;">
- Font
- Favicon
- 404

### PM
- Also query width and height to add aspect ratio's and prevent unwanted layout shifting.
- Query author in config and add that to store to minimize API calls. 
- Bug: when switching from product to wedding, the images don't change. (https://stackoverflow.com/questions/68921960/sveltekit-component-is-not-being-rendered-second-time-though-the-url-has-been-c)
- Use mutations API to make contact form.
- Add nav menu to GraphCMS
- Use blurred low quality images as placeholders.
- Fetch config/menu info in __layout from a general endpoint. This ensures that even when users navigate to a page other than the homepage, all relevant data is fetched (but only once, and then stored in a store)
- Use of i as index for figures doesn't seem to switch between lazy and eager loading. 

## NOW:
- Project pages

Author info: let's fetch from layout page and then store all config info in store. 


