# Crownstone website

[![Website](https://img.shields.io/website-up-down-green-red/https/crownstone.rocks.svg)]()
[![Build website](https://github.com/crownstone/website/actions/workflows/website-continuous-integration.yml/badge.svg)](https://github.com/crownstone/website/actions/workflows/website-continuous-integration.yml)

You can find this website at [https://crownstone.rocks](https://crownstone.rocks).

## Prerequisites

Install ruby, jekyll, and bundler.

```
sudo apt install ruby-full
gem install jekyll bundler
```

Subsequently run:

```
bundle config set --local path 'vendor/bundle'
bundle install
bundle exec jekyll serve
```

What this does is setting a local path as directory to store gems in. This reduces conflicts with a global installation. It then runs jekyll serve through bundle (so the right gems are used).

## Update

If you want to update, e.g. regarding fixes for security vulnerabilities, run:

```
bundle update
```

Note that this is a static website.

## Bug fixing

Jekyll uses `site.safe` to use `BASE_PATH`. Here we are only in production, but we do not want to set `safe: true` because that disables custom plugins. Hence in `_includes/JB/setup` we have removed the `site.safe` clause as indicated by ubershmekel at https://github.com/plusjade/jekyll-bootstrap/issues/84.

## Blog posts

You can add a blog post by:

    rake post title="Your fancy title"

Now navigate to the file created for you and adjust it.

In case you have never worked with a markdown syntax before. It is quite easy. This very file is written in it! The variant of markdown that is used is called kramdown. A very short overview:

* links
* movies
* images
* social cards
* equations
* code snippets

### Links

An external link has the following syntax.

    [Description](https://twitter.com/CrownstoneRocks)

An internal link is preceded by `{{ site.url }}`.

    [Description]({{ site.url }}/scenarios)

A link to another blog post

    [Description]({{ site.url }}{% link _posts/2020-06-22-automation-the-key-ingredient-for-a-truly-smart-home.md %})

Given that `auto_ids: true` is set, within the same page can also be linked:

    ## Some heading

    See [above](#some-heading) for the into.

### Movies

A movie can be embedded by using:

    {% youtube YOUTUBE_ID %}

### Images

An image can be embedded by placing it in the attachments folder and link it through 

    ![Alternative description]({{ site.url }}/attachments/image_file.png "Image description")

An example of a right-floated image: 

    ![Meccano Spykee]({{ site.url }}/attachments/meccano_spykee_400.jpg "Meccano Spykee"){: .float-right} 

Here we use kramdown to use the css style `float-right`.

An example of a centered image:

    ![Mould]({{ site.url }}/attachments/mould0.png "Mould for Crownstone"){: style="display:block;margin-left: auto;margin-right: auto;"}

Or, the short-hand:

    ![Mould]({{ site.url }}/attachments/mould0.png "Mould for Crownstone"){: .img-center}

With maximum width set to the complete view port (100%):

    ![Mould]({{ site.url }}/attachments/mould0.png "Mould for Crownstone"){: .limit-width}

An example of a resized image: 

    ![Barbecue color]({{ site.url }}/attachments/barbecue_test_5.png "Barbecue color"){: style="width: 500px"}

To set for example maximum width to half the page and have it aligned to the right:

    ![Mould]({{ site.url }}/attachments/mould0.png "Mould for Crownstone"){: style="max-width: 50%"}{: .float-right}

### Social cards

A social card, either open graph or twitter can be set through adding the following to the Jekyll preamble.

    social-image: /attachments/image.jpg

You cannot use liquid tags like `{{ site.url }}` here.

### Equations

A mathematical equation can be described with

    $$y=x^2$$

### Code snippet

To add a piece of code formatted as a given language, use

 	~~~ c
	int main() {
	 printf("Hi, this is Crownstone!\n")
	}
	~~~

You will need to add the .css file then. We use `rouge` as highlighter and use the style `github` for now.

    rougify style monokai > assets/themes/flat/css/syntax.css

To include this file add the following to the header:

	local_css:
	  - syntax.css

Other syntax options you can probably find in no time searching online or checking other posts.

## Website configuration

The site is run through Jekyll:

    bundle exec jekyll serve

Or if you have an older jekyll installation

    bundle exec jekyll --server --auto

If you run an incremental version, you will run into polyglot errors regarding `out` not being defined on a `doc` yet:

    bundle exec jekyll serve -w -i

It might actually be the case that running it once without `-i` or `--interactive` already repairs the build.

You can then see the website served at:

    localhost:4000

There is Procfile that allows you to run it on Heroku:

    web: jekyll serve -P $PORT

You can install a theme through:

    rake theme:install git="https://github.com/jekyllbootstrap/theme-the-program.git"

And switch a theme through:

    rake theme:switch name="flat"

If you want to adjust the theme, you have to navigate to `\_includes/themes/flat/` and `assets/themes/flat/`.

For running on Heroku, there is a Gemfile added. You add for example kramdown to it, or oembed and run "bundle install".

The information for the different plugins is stored in an `.env` file which is not pushed to github (it is part of the `.gitignore` file. Its content currently defines identifiers for Embedly and Google:

    EMBEDLY_KEY=...
    GOOGLE_ANALYTICS_KEY=...

Write here your own keys to get the analytics and use embedly (although the latter I found not so convenient in the end, requiring paid subscriptions already after showing a movie only several times).

## Localization

Added as plugin in Gemfile: [polyglot](https://github.com/untra/polyglot).

## Deploy

The "source code" for the website is required before you can uploaded the compiled website:

    git clone git@github.com:crownstone/website

This will download the source of the website. You build in the usual way, by something like:

    export GOOGLE_ANALYTICS_KEY=UA-*
    bundle exec jekyll build --config _config.yml,_config-authors.yml

In `.gitignore` you will notice that the website generated in `_site` is excluded from the master branch. This is because this directory is stored as the `gh-pages` branch:

    cd _site
    git clone -b gh-pages git@github.com:crownstone/website

So, the result in `_site/.git/config` should be:

    [remote "gh-pages"]
        url = git@github.com:crownstone/website.git
        fetch = +refs/heads/*:refs/remotes/gh-pages/*
    [branch "gh-pages"]
        remote = gh-pages
        merge = refs/heads/gh-pages

Now, you can just build the website and subsequently push the source as well as the website itself by `git push` in the respective directory.

Note, that `_config.yml` and `_config-authors.yml` are not in the github repository. Although the information is not entirely confidential, if someone wants to use this as a basis of their website, these files need to be adapted anyway.

## Website structure

The defaults for a page or post can be found in `_includes/themes/flat/default.html`.

The particular stylesheet in use for Crownstone can be found in `assets/themes/flat/css/crownstone-global.css`.

### Snippets

You can include snippets through the following syntax:

    {% include snippets/social-card %}

To add arguments:

    {% include snippets/social-card channel="opengraph" %}
    {% include snippets/social-card channel="twitter" %}

Something like `page` is available in such a snippet.

## Build problems

Let's single out compilation of native extensions because that's most likely to give issues.

### Native extensions

The RedCloth code needs Ruby to compile its extension natively. For this you will need to be able to compile with gcc and make. You can test `make` on the command line.

```
sudo apt install gcc make build-essential
sudo apt install ruby-dev
```

If this is not sufficient, run `make` in the directory that's visible in your error messages. You will probably find out that the compiler has become more strict. For example, what might have been a warning in the past is now an error. You can pass build information like this:

```
bundle config --local build.RedCloth --with-cflags=-w
```


## Copyrights

The license for the Jekyll part is MIT. The license for Bootstrap as well. The copryights of Bootstrap belong to Twitter.

* [MIT](http://opensource.org/licenses/MIT)

With respect to our companies theme, please, try to create a distinct look for your users compared to ours. However, we won't mind if you use parts of it. The copyrights (2013) of these belong to:

* Author: Anne van Rossum
* Crownstone B.V., https://crownstone.rocks
* Rotterdam, The Netherlands

The theme design is done by Alex de Mulder. The contents of the website is Crownstone's; thanks to Bart, Remco, Dominik, Marc, Peet, Anne, Roemer, Laurens, Jorik, Merel, Bhenaz, Remco, Janny, Alexander, and many others.

# License

## Open-source license

This software is provided under a noncontagious open-source license towards the open-source community. It's available under three open-source licenses:
 
* License: LGPL v3+, Apache, MIT

<p align="center">
  <a href="http://www.gnu.org/licenses/lgpl-3.0">
    <img src="https://img.shields.io/badge/License-LGPL%20v3-blue.svg" alt="License: LGPL v3" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT" />
  </a>
  <a href="https://opensource.org/licenses/Apache-2.0">
    <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License: Apache 2.0" />
  </a>
</p>

## Commercial license

This software can also be provided under a commercial license. If you are not an open-source developer or are not planning to release adaptations to the code under one or multiple of the mentioned licenses, contact us to obtain a commercial license.

* License: Crownstone commercial license

# Contact

For any question contact us at <https://crownstone.rocks/contact/> or on our discord server through <https://crownstone.rocks/forum/>.
