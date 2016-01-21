# Womply Material Design Styleguide

This style guide contains a set of visual design standards based on the Google Material Design Specification. It is intended to be used by Womply product teams as tool for accessing common components that can be referenced in Womply product designs. This is an interactive style guide which provides Component Demos, Templates composed of multiple Components as well as information about CSS and Theming through color palatte selections.

## Getting Started

1. Install node version 0.12 or higher
1. Install 'gulp' globally:
  - `npm install -g gulp`
1. Install npm libraries:
  - `npm install`
1. If you will update SASS files or Templates, and only want to build
  - `gulp build`
1. To view in browser as you make updates (default)
  - `gulp`
  - run `live-server` in a second terminal to see your changes automatically reflected in your browser

## Updating css

SASS files are arranged in the scss directory

    |-- styleguide.scss
    |-- womply
        |-- _partner_logos.scss
        |-- _typography.scss (for example purposes)
        |-- _variables.scss (overrides and additions to angular-material.scss)

## Adding new Compositions and Pages

While the component library is based on the angular-material documentation as a seed, templates which define new component designs as well as layouts which are comprised of multiple components can be added to the styleguide. These are broken into two categories - Compositions, which are smaller pieces of html that make up part of a page body and Pages, which include complete navigation elements and headings as well as body components..

Compositions are stored in the /compositions directory. They are automatically discovered and listed in the COMPOSITIONS menu dropdown in the sidebar when you run 'gulp build'. Compositions can include any of the elements listed in DEMOS as well as custom html/css. You can include custom css within a `<style>` tag at the top of the file, similar to ChipsStyling.html.

Pages are stored in the /pages directory. They should include an entire webpage including the head section. Here's an example:

    <!doctype html>
    <html ng-app="docsApp" ng-controller="DocsCtrl" lang="en" ng-strict-di>

      <head>
        <title>
          Womply Global Nav
        </title>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <meta name="viewport" content="initial-scale=1" />
        <link href='https://fonts.googleapis.com/css?family=Lato:400,300,400italic,700' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="../dist/styleguide.css">
        <base href="/">
      </head>

## Adding image assets

Image assets should be dropped directly into dist/assets/images

## Building

    `gulp build`

This compiles scss files and creates a single styleguide.css file within dist/

