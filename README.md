# Example Theme - Narrow Jumbotron

> This is an example status page theme for use with your [Sorry](http://www.sorryapp.com) account based on [Bootstrap's Narrow Jumbotron example](http://getbootstrap.com/examples/jumbotron-narrow/).
>
> Whilst this is a production ready theme you're more than welcome to use, you'll probably want to use this as a basis for your own theme, or as a learning resource for getting your head around theme development.
>
> **For more details on theme development, read our [Theme documenation](http://docs.sorryapp.com/themes)**.

## Getting started

1. <a href="https://github.com/supporttime/theme-example-narrow-jumbotron/archive/master.zip">Download</a> the latest version
2. or clone the git repo: <code>git clone https://github.com/supporttime/theme-example-narrow-jumbotron</code>

## Manual Deployment

The simplest option if you don't wish to make any changes to the theme is to upload the [zip file found in the dist folder](dist/theme.zip) through your user interface of your Sorry account.

**If you make any changes you'll need to rezip your theme before you upload it, [as per our guide](http://docs.sorryapp.com/getting-started/uploading-your-theme.html).**

## Automatic Deployment with Grunt

To make development and deployment of your themes even easier we created [grunt-sorry-theme-deploy](https://github.com/supporttime/grunt-sorry-theme-deploy) - a grunt task to automate the deployment of your status page themes to your Sorry account.

This task takes your themes source code, bundles it up into a deployable zip and uploads it to your status page through the Sorry API.

### Install Grunt

From the command line, navigate to the root of this downloaded theme project and run `npm install`. npm will look at [package.json](package.json) and automatically install the necessary local dependencies listed there.

**Unfamiliar with `npm`? Don't have node installed?** That's a-okay. npm stands for [node packaged modules](http://npmjs.org/) and is a way to manage development dependencies through node.js. [Download and install node.js](http://nodejs.org/download/) before proceeding.

### Create the `sorry.json` File

We need somewhere to keep your Sorry login credentials. In the root of your project create a file called `sorry.json` which contains your username and password - don't worry, this will NOT be commited to your repo.

```json
{
  "username": "your email address goes here",
  "password": "your password goes here"
}
```

### Available Grunt commands

#### Deploy - `grunt sorry_theme_deploy`

We wrap up the files in your `src` directory into a `dist/theme.zip` before deploying it to your requested page.

#### Watch - `grunt watch`

This is a convenience method for watching all the core HTML, CSS and JS assets in your theme, whenever you make a change to these files grunt will automaticly bundle and deploy your theme as above.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Versioning

For transparency and insight into our release cycle, and for striving to maintain backward compatibility, This project will be maintained under the Semantic Versioning guidelines as much as possible.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* Breaking backward compatibility bumps the major (and resets the minor and patch)
* New additions without breaking backward compatibility bumps the minor (and resets the patch)
* Bug fixes and misc changes bumps the patch

For more information on SemVer, please visit <http://semver.org/>.

## Authors & Contributors

**Robert Rawlins**

+ <http://twitter.com/sirrawlins>
+ <https://github.com/SirRawlins>

**Robin Geall**

+ <http://twitter.com/robingeall>

## Copyright

Copyright & 2014 Support Time Limited. See [LICENSE](LICENSE) for details.