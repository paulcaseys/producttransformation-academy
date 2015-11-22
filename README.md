Angular boilerplate
===================

This boilerplate provides a good starting point for AngularJS projects.

* Most of the functionality is in `app/scripts/`
* Entrypoint is `app/index.html`

Example
=======

[Angular boilerplate example](http://paulcasey.net/clients/personal/angular-boilerplate/angular/dist/index.html)

Installation
============

Clone or download the app to your project folder.

1. Install the node modules

	sudo npm install

2. Install the bower components

	bower install

*What did this do?*
Yeoman creates a .gitignore file for you. This file adds `node_modules` and `bower_components` folders to the blacklist. So, to run the serve task and download the Javascript dependencies listed in the bower and package json files.

Usage
=====

This boilerplate works with either [grunt](http://gruntjs.com/) or [gulp](http://gulpjs.com/). by default it will use grunt.

### with grunt

Run grunt while developing

	grunt serve

Build grunt for production

	grunt build

Refer to the grunt installation guide below for more information setting up

### with gulp

Run gulp while developing

	grunt dev

Build gulp for production

	gulp prod

Refer to the gulp installation guide below for more information setting up


File overview
===============

`/app/scripts/app.js`
Configures the angular app and declares where the '#hash' URIs are routed

`/app/scripts/controllers/`
Project controllers

`/app/scripts/controllers/navigation.js`
Configures global navigation

`/app/views/`
Project views or templates

`/app/styles/`
SCSS files to be compiled by compass

`/app/styles/skeleton.scss`
Base grid, provided by [skeleton](http://getskeleton.com)


System requirements
===================

## have correct ruby installed

1. make sure correct ruby version is installed `rvm install ruby-2.0.0-p481`

2. set the ruby version to default `rvm --default use ruby-2.0.0-p481`

3. open xcode and update to latest version

4. install line command tool, type `xcode-select --install` into terminal then accept the installation

5. open and close xcode

6. install compass `sudo gem install compass`

## fixing ruby if you have recently upgraded osx

install rvm

   \curl -sSL https://get.rvm.io | bash -s stable --ruby

view all versions of ruby

   rvm list

remove all versions of ruby

   sudo rvm uninstall xxxxxxxx

reinstall the version of ruby

   rvm install ruby-2.0.0-p481

set default

    rvm --default use ruby-2.0.0-p481

install compass

   gem install compass 

## make sure npm is up to date
if you are receiving 'WARN unmet dependencies' on the npm installs below, then download from [nodejs.org](https://nodejs.org/en/)

and simply install the latest version

	sudo npm update npm -g

	sudo npm install -g


## npm permission issues

There are times when you do not want to change ownership of the default directory that npm uses; for example, if you are sharing a machine with other users.

In this case, you can configure npm to use a different directory.

Make a directory for global installations:

	mkdir ~/npm-global

Configure npm to use the new directory path:

	npm config set prefix '~/npm-global'

Open or create a ~/.profile file and add this line:

	export PATH=~/npm-global/bin:$PATH

Back on the command line, update your system variables:

	source ~/.profile

then 

	sudo chmod -R 777 /Users/paulcasey/npm-global/


need to run the following in the terminal tab, to exicute any of the default installations (eg grunt/_

	export PATH=~/npm-global/bin:$PATH

[source](https://docs.npmjs.com/getting-started/fixing-npm-permissions)


## installing yeoman
* yeoman is tool with an ecosystem of plugins called generators cthat can be used to scaffold new projects
* grunt: a javascript runner that helps automate repetitive tasks 
* bower: a dependency management utility so you no longer have to manually download and manage your front 

install yoeman, grunt, bower, gulp and angular

	sudo npm install -g yo bower grunt-cli gulp
	sudo npm install -g generator-karma
	sudo npm install -g generator-angular

Creating an app yourself with yoeman
====================================

	yo angular AngularBoilerplate


## installing grunt

1. Install grunt globally:

	npm install --global grunt-cli

2. Install grunt in your project devDependencies:

	npm install --save-dev grunt-cli

3. install dependencies

	npm install


## installing gulp

1. Install gulp globally:

	npm install --global gulp

2. Install gulp in your project devDependencies:

	npm install --save-dev gulp

3. install dependencies

	npm install

	npm uninstall --save-dev gulp-sass
	npm install --save-dev gulp-sass@2

[source](https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate)
	

## Testing

Running `grunt test` will run the unit tests with karma.
