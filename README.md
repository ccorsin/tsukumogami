# Tsukumogami 
> a low tech open & collaborative platform to share technics of how you can value and repair textile

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

This website has been temporarily deployed on Netlify (https://www.netlify.com/).

## How to customize and propose your collaborative platform
- Create your own menu :
```bash
#  Add in nuxt.config.js a menu property with your categories and sub-categories.
    menu: {
      "Learn" : ["General", "Materials", "Knitting", "Weaving"],
      "Repair": ["Sashiko", "Holes"],
      "Reshape": ["Lenght", "Wide"],
      "Refresh": ["Color", "Acessorize"],
      "Recycle": ["Transform", "Give"]
    }
```
- End points to store data :
```bash
#  Add in nuxt.config.js a postDb property with the url where to send postData and store them in your database solution.
#  Add in nuxt.config.js a fileStorage property with the url where to store the dithered images.
    postDb: "https://***/posts/",
    fileStorage: "https://***/uploadFile"
```

## Resources and thank you
> Alex Harris and his help with https://github.com/alexharris/ditherit-v2 - https://ditherit.com/

> Leon Sorokin for his open source solution for dithering image - https://github.com/leeoniya/RgbQuant.js

> The low tech magazine - https://solar.lowtechmagazine.com/fr/

> Gauthier Roussilhe - http://gauthierroussilhe.com/en/posts

> Éco-conceptionweb / les 115 bonnes pratiques - https://communication-responsable.ademe.fr/sites/default/files/les-115-bonnes-pratiques-ecoconception-web-frederic-bordage.pdf

![alt text](https://github.com/ccorsin/tsukumogami/blob/master/screenshot/Screenshot%202020-06-07%20at%2019.01.48.png?raw=true)
![alt text](https://github.com/ccorsin/tsukumogami/blob/master/screenshot/Screenshot%202020-06-07%20at%2019.01.33.png?raw=true)
![alt text](https://github.com/ccorsin/tsukumogami/blob/master/screenshot/Screenshot%202020-06-07%20at%2019.03.07.png?raw=true)

