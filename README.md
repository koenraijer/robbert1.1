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
- Use mutations API to make contact form. Then use GraphCMS webhooks to listen for new submissions, and use anothe API route forward that onto a service of your chocie, such as email, Slack or Zapier. 
- Use blurred low quality images as placeholders.
- Use of i as index for figures doesn't seem to switch between lazy and eager loading. 
- Prefetch first image for every page in the <head>
- Make caching longer
- Add imagesizes to Figure component

Check this out:
- Afbeeldingen laden bij het wisselen van pagina is merkbaar sneller (n.a.v. van wat je zei over de foto op de aboutpagina. De techniek die dat versnelt zorgt er nu ook op alle andere pagina's voor dat de bovenste afbeelding eerder geladen wordt).
- Footer is toegevoegd
- Design van het menu lijkt meer op waar je om vroeg (kleuren, alles in hoofdletters, actieve link oranje)
- Het 'hover' effect van de projecten op de homepage lijkt nu meer op waar je om vroeg (tekst in hoofdletters linksonder, fade to black ipv wit)
- Bij de projectpagina's kun je nu in GraphCMS zelf de volgorde bepalen
- Portretfoto's in projecten nemen nu de helft van de breedte in beslag (kijk bijvoorbeeld op de projectpagina van Landscape)

