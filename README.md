# Crownstone website

You can find this website at [https://crownstone.rocks](https://crownstone.rocks).

## Prerequisites

    sudo apt-get install rake
    sudo apt-get install rubyX.X.X-dev
    sudo gem install jekyll
    sudo gem install jekyll-assets
    sudo gem install jekyll-lunr-js-search

## Users

You can add a blog post by:

    rake post title="Your fancy title"
    
Now navigate to the file created for you and adjust it.

In case you have never worked with a markdown syntax before. It is quite easy. This very file is written in it! The variant of markdown that is used is called kramdown. A very short overview:

### Movie

A movie can be embedded by using 

    {% youtube YOUTUBE_ID %}

### Image

An image can be embedded by placing it in the attachments folder and link it through 

    ![Alternative description]({{ site.url }}/attachments/image_file.png "Image description")

An example of a right-floated image: 

    ![Meccano Spykee]({{ site.url }}/attachments/meccano_spykee_400.jpg "Meccano Spykee"){: .float-right} 

Here we use kramdown to use the css style `float-right`.

An example of a resized image: 

    ![Barbecue color]({{ site.url }}/attachments/barbecue_test_5.png "Barbecue color"){: style="width: 500px"}

### Equation

A mathematical equation can be described with

    $$y=x^2$$

### Code snippet

To add a piece of code formatted as a given language, use
 	~~~
	def what?
	 42
	end
	~~~
	{: .language-ruby}

Other syntax options you can probably find in no time searching online or checking other posts.

## Admin

The site is run through Jekyll:

    jekyll serve

Or if you have an older jekyll installation

    jekyll --server --auto

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

## Copyrights

The license for the Jekyll part is MIT. The license for Bootstrap as well. The copryights of Bootstrap belong to Twitter.

* [MIT](http://opensource.org/licenses/MIT)

With respect to our companies theme, please, try to create a distinct look for your users compared to ours. However, we won't mind if you use parts of it. The copyrights (2013) of these belong to:

* Author: Anne van Rossum
* Almende B.V., http://www.almende.com and DoBots, http://www.dobots.nl
* Rotterdam, The Netherlands

The theme design itself is done by Ahmet Bektes. The content of our website is our own, and thanks to Bart, Remco, Dominik, Marc, Peet, Anne, Roemer, Laurens, Jorik, Merel, Bhenaz, Remco, Janny, Alexander, and others.
