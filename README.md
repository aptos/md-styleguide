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
  - run `live-server` in a second terminal

## Updating css

SASS files are arranged in the scss directory

  |-- styleguide.scss

  |-- womply

      |-- _partner_logos.scss

      |-- _typography.scss (for example purposes)

      |-- _variables.scss (overrides and additions to angular-material.scss)

## Adding new Templates

While the component library is based on the angular-material documentation as a seed, templates which define new component designs as well as layouts which are comprised of multiple components can be added to the styleguide.

1. Place new templates as html files in the /templates directory
1. Add the template information into the PAGES section of  js/content-data.js. This will render a new link in the side menu under Templates