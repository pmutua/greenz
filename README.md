<<<<<<< HEAD

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badge/)


- [3 steps to setup this theme at your website!](#3-steps-to-setup-this-theme-at-your-website)
- [Features](#features)
  - [Index page](#index-page)
    - [`_data/*.yml`](#_datayml)
  - [Chart Skills](#chart-skills)
  - [Categories in blog page](#categories-in-blog-page)
  - [Pagination](#pagination)
  - [Page views counter](#page-views-counter)
  - [Multilingual Page](#multilingual-page)
  - [Web analytics](#web-analytics)
  - [Comment](#comment)
  - [Share](#share)
  - [Search engines](#search-engines)
  - [Compress CSS and JS files](#compress-css-and-js-files)
- [Put in a Jalpc Plug](#put-in-a-jalpc-plug)
- [Upgrading Jalpc](#upgrading-jalpc)
  - [Ensure there's an upstream remote](#ensure-theres-an-upstream-remote)
  - [Pull in the latest changes](#pull-in-the-latest-changes)
- [Todo](#todo)
- [Donate Jalpc](#donate-jalpc)
- [Wiki](#wiki)
- [Ad](#ad)

This is a simple, beautiful and swift theme for Jekyll. It's mobile first, fluidly responsive, and delightfully lightweight.

If you're completely new to Jekyll, I recommend checking out the documentation at <http://jekyllrb.com> or there's a tutorial by Smashing Magazine.


# Features

## Index page

The index page is seprated into several sections and they are located in `_includes/sections`,the configuration is in `_data/landing.yml` and section's detail configuration is in `_data/*.yml`.

### `_data/*.yml`

These files are used to dynamically render pages, so you almost don't have to edit *html files* to change your own theme, besides you can use `jekyll serve --watch` to reload changes.

The following is mapping between *yml files* to *sections*.
=======
# Brandi - OnePage Bootstrap Business Template

Looking for something unique for your next business and corporate websites? Meet Brandi, the free responsive one page bootstrap business template. Twitter Bootstrap 3.x framework powers the template. No extra code, no additional feature which provides end users a dominant power to build any kind awesome website having ease in mind. The bootstrap based one page HTML template lightweight and fast loading perfectly suited for the site either they have high or low traffic. Business, corporate, portfolio, agency, blog, app showcase, photography, resume, creative agency, portfolio showcase, and creative platform are the perfect place to suit niches of this HTML theme.

PSD credit: https://dribbble.com/themecurve

<img src="https://cloud.githubusercontent.com/assets/10640964/5989549/0f93dfc8-a9b6-11e4-8f1e-75189f6a5759.jpg" alt="Free bootstrap business template by themefisher">

**NOTE:** Please remember to **STAR** this project and **FOLLOW** [my Github](https://github.com/themefisher) to keep you update with this template.

## Demo & Download 

A fully functional demo is available at <a href="http://demo.themefisher.com/demos/?theme=brandi">Demo</a>
You can visit our website to download this theme <a href="https://themefisher.com/products/brandi-responsive-one-page-bootstrap-business-template/">Download Now</a>
 


## Bugs Reports

Have a bug or a feature request? Please open a new issue.

## Copyright and license

Copyright 2017 themefisher.com, <a target="_blank" href="https://themefisher.com/license">License</a>

## Support Themefisher Development
This template is a MIT licensed open source project and completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. You can support development by buying one of our [premium templates](https://themefisher.com/premium-templates/).
>>>>>>> gh-pages

* landing.yml ==> index.html
* index/language.yml ==> index.html
* index/careers.yml  ==>  _includes/sections/career.html
* index/skills.yml  ==>  _includes/sections/skills.html
* index/projects.yml  ==>  _includes/sections/projects.html
* index/links.yml  ==>  _includes/sections/links.html

<<<<<<< HEAD
This *yml file* is about blog page navbar

* blog.yml ==> _includes/header.html

The following is mapping between *yml files* to *donation*

* donation/donationlist.yml ==> blog/donate.html
* donation/alipay.yml  ==>  blog/donate.html
* donation/wechat_pay.yml ==> blog/donate.yml

## Chart Skills

I use [Chart.js](http://www.chartjs.org/) to show skills, the type of skills' chart is radar, if you want to custom, please read document of Chart.js and edit **_includes/sections/skills.html** and **_data/index/skills.yml**.

## Categories in blog page

In blog page, we categorize posts into several categories by url, all category pages use same template html file - `_includes/category.html`.

For example: URL is `http://127.0.0.1:4000/python/`. In `_data/blog.yml`, we define this category named `Python`, so in `_includes/category.html` we get this URL(/python/) and change it to my category(Python), then this page are posts about **Python**. The following code is about how to get url and display corresponding posts in  `_includes/category.html`.

```html
<div class="row">
    <div class="col-lg-12 text-center">
        <div class="navy-line"></div>
        {% assign category = page.url | remove:'/' | capitalize %}
        {% if category == 'Html' %}
        {% assign category = category | upcase %}
        {% endif %}
        <h1>{{ category }}</h1>
    </div>
</div>
<div class="wrapper wrapper-content  animated fadeInRight blog">
    <div class="row">
        <ul id="pag-itemContainer" style="list-style:none;">
            {% assign counter = 0 %}
            {% for post in site.categories[category] %}
            {% assign counter = counter | plus: 1 %}
            <li>
```

## Pagination

The pagination in jekyll is not very perfect,so I use front-end web method,there is a [blog](http://www.jarrekk.com/html/2016/06/04/jekyll-pagination-with-jpages.html) about the method and you can refer to [jPages](http://luis-almeida.github.io/jPages).

## Page views counter

Many third party page counter platforms are too slow,so I count my website page view myself,the javascript file is [static/js/count.min.js](https://github.com/jarrekk/jalpc_jekyll_theme/blob/gh-pages/static/js/count.min.js) ([static/js/count.js](https://github.com/jarrekk/jalpc_jekyll_theme/blob/gh-pages/static/js/count.js)),the backend API is written with flask on [Vultr VPS](https://www.vultr.com/), detail code please see [ztool-backhend-mongo](https://github.com/Z-Tool/ztool-backhend-mongo).

## Multilingual Page

The landing page has multilingual support with the [i18next](http://i18next.com) plugin.

Languages are configured in the `_data/index/language.yml` file.

> Not everyone needs this feature, so I make it very easy to remove it, just clear content in file `_data/language.yml` and folder `static/locales/`.

About how to custom multilingual page, please see [wiki](https://github.com/jarrekk/Jalpc/wiki/Multilingual-Page).

## Web analytics

I use [Google analytics](https://www.google.com/analytics/) and [GrowingIO](https://www.growingio.com/) to do web analytics, you can choose either to realize it,just register a account and replace id in `_config.yml`.

## Comment

I use [Disqus](https://disqus.com/) to realize comment. You should set disqus_shortname and get public key and then, in `_config.yml`, edit the disqus value to enable Disqus.

## Share

I use [AddToAny](https://www.addtoany.com/) to share my blog on other social network platform. You can go to this website to custom your share buttons and paste code at `_includes/share.html`.

![share](https://github.com/jarrekk/Jalpc/raw/master/readme_files/share.png)

## Search engines

I use javascript to realize blog search,you can double click `Ctrl` or click the icon at lower right corner of the page,the detail you can got to this [repository](https://github.com/androiddevelop/jekyll-search). Just use it.

![search](https://github.com/jarrekk/Jalpc/raw/master/readme_files/search.gif)

## Compress CSS and JS files

All CSS and JS files are compressed at `/static/assets`.

I use [UglifyJS2](https://github.com/mishoo/UglifyJS2), [clean-css](https://github.com/jakubpawlowicz/clean-css) to compress CSS and JS files, customised CSS files are at `_sass` folder which is feature of [Jekyll](https://jekyllrb.com/docs/assets/). If you want to custom CSS and JS files, you need to do the following:

1. Install [NPM](https://github.com/npm/npm) then install **UglifyJS2** and **clean-css**: `npm install -g uglifyjs; npm install -g clean-css`, then run `npm install` at root dir of project.
2. Compress script is **build.js**
3. If you want to add or remove CSS/JS files, just edit **build/build.js** and **build/files.conf.js**, then run `npm run build` at root dir of project, link/src files will use new files.

OR

Edit CSS files at `_sass` folder.






=======
### Check out our FREE Bootstrap & HTML5 Templates
Get More FREE Bootstrap templates from our store <a href="https://themefisher.com/free-bootstrap-templates">Bootstrap Templates Store</a>
And if you want FREE HTML5 Templates then please visit our listing content <a href="https://themefisher.com/best-free-html5-templates-2016/">HTML5 Templates</a>
Visit Our Website For More Amazing Works
<a href="https://themefisher.com">Website</a>

>>>>>>> gh-pages
