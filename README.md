# hugo-materialized
Clean and simple blog/portfolio theme for hugo. The theme is  based on [MaterializeCSS](http://materializecss.com/), which is a modern responsive front end framework that follows Google's material design principles

This is my first project working with hugo, and programming in general, so I am sure that there are improvements to be made. Please feel free to contribute to this theme.

### Install this theme
To install hugo-materialized, make a `themes` directory in your working direction
```
mkdir themes
cd themes
```
Then clone the latest version 
```
git clone https://github.com/jchatkinson/hugo-materialized
```

### Images
You should specify a headshot image for the sidenav. It should be roughly square and centered on your face, unless you plan on messing around with the css. Place the image in your site's `\static\images\` folder (or make one if it doesn't exist). This folder is directly copied to `public` when the site is generated.
Add the following to your site's `config.toml` file to specifiy the headshot path:
```
[params]
  sidenav = "/images/yourImageName.png"
```
You can also place a `favicon.ico` file in your site's `static\images\`, and it will be used on all pages.

### Archetypes
You can save a copy of the `post.md` , `project.md` , and `bio.md` archetypes with information updated to suit yourself. They are populated with dummy text and should be updated.

### Creating new posts
Before creating your first post, you should update the `post.md` archetype so you don't have to always re-enter information. With that out of the way:
```
cd mySite
hugo new post/nameOfYourNewPost.md
```
you now have a `nameOfYourNewPost.md` file located in `mySite\content\post\` , which you can open with your favorite editor and begin writing.


### Creating new projects
Before creating your first project, you should update the `project.md` archetype so you don't have to always re-enter information. With that out of the way:
```
cd mySite
hugo new project/projectName.md
```
you now have a `projectName.md` file located in `mySite\content\project\` , which you can open with your favorite editor and fill out the details.
In the front matter, there are variables to define the url to a project title, image, description, repository, and website. This are displayed on the card in the Projects portion of your site.


### Creating a bio page
Follow along with the `bio.md` archetype. The bio page will display a few recent projects and posts if you specify the number in the front matter. Otherwise, specify 0


### License
This theme is released under the MIT License. For further information, see the `License.md` file 


