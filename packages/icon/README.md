# @react-md/icon
This package is for including icons within react-md. There is included support for both font icons and SVG icons.
There is also a helper component for applying spacing between icons and text.

Exported components:
- `FontIcon`
- `SVGIcon`
- `TextIconSpacing`


This source code of this package can be found at: https://github.com/mlaursen/react-md/tree/next/packages/icon

<!-- TOC_START -->
## Table of Contents
- [Installation](#installation)
  * [Including a font icon library](#including-a-font-icon-library)
    + [Updating Sass to include `node_modules`](#updating-sass-to-include-node_modules)
    + [webpack](#webpack)
    + [create-react-app and node-sass-chokidar](#create-react-app-and-node-sass-chokidar)
  * [Styles](#styles)
- [Usage](#usage)
  * [Simple Icon Usage](#simple-icon-usage)
  * [Spacing Icons and Text](#spacing-icons-and-text)
- [Prop Types](#prop-types)
  * [FontIcon](#fonticon)
  * [SVGIcon](#svgicon)
  * [TextIconSpacing](#texticonspacing)
  * [IconRotator](#iconrotator)
- [SassDoc](#sassdoc)
  * [Mixins](#mixins)
    + [Examples](#examples)
      - [Example SCSS Usage](#example-scss-usage)
      - [Example SCSS Usage](#example-scss-usage-1)
      - [Example SCSS Usage](#example-scss-usage-2)
      - [Example SCSS Usage](#example-scss-usage-3)
      - [Updating Selectors](#updating-selectors)
      - [Internal Example](#internal-example)
      - [Providing a selector](#providing-a-selector)
      - [create-react-app Example Usage](#create-react-app-example-usage)
      - [Example Usage SCSS](#example-usage-scss)
      - [create-react-app Example Usage](#create-react-app-example-usage-1)
      - [Example Usage SCSS](#example-usage-scss-1)
  * [Variables](#variables)
<!-- TOC_END -->

## Installation
```sh
$ npm install --save @react-md/icon
```

`SVGIcon`s will be inline svgs by default to make it easier to install-and-use. If you want to use spritemaps, please read the documentation in the [@react-md/material-icons](https://github.com/mlaursen/react-md/tree/next/packages/material-icons/README.md#creating-spritemaps) and if you
want to use `FontIcon`s, you will need to first include the font icon library into your app for the icons to display.

### Including a font icon library
The easiest way to include a font icon library is to update your `index.html` file to have a link to material icons. The following example would show how you can update
your `index.html` template file from create-react-app. Edit `public/index.html`;

```diff
     <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
+    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

Now you should have access to the material icons and can use them as expected.

An alternative is to use the [webfontloader](https://github.com/typekit/webfontloader) to load the fonts. Edit `src/index.tsx`:

```diff
 import * as React from 'react';
 import * as ReactDOM from 'react-dom';
+import * as WebFontLoader from 'webfontloader';
 import App from './App';
 import registerServiceWorker from './registerServiceWorker';
 import './index.css';

+WebFontLoader.load({
+  google: {
+    families: ['Material Icons'],
+  },
+});

 ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
 registerServiceWorker();
```

#### Updating Sass to include `node_modules`
If you want to include the SCSS styles for `@react-md/icon`, you will need to update your Sass compiler to include the `node_modules` in the paths as well as add [autoprefixer](https://github.com/postcss/autoprefixer) to handle multiple browser compatibility.

> If you are using [create-react-app](https://github.com/facebook/create-react-app), the autoprefixer is already included.

#### webpack
```diff
 {
   test: /.scss$/,
   use: [{
     loader: 'style-loader',
     options: { sourceMap: true },
   }, {
     loader: 'css-loader',
     options: { sourceMap: true, importLoaders: 2 },
   }, {
     loader: 'postcss',
     options: { sourceMap: true },
   }, {
     loader: 'sass-loader',
     options: {
       sourceMap: true,
+      includePaths: [
+        './node_modules', // or whatever relative path it is to node_modules
+      ],
     },
   }],
 }
```

#### create-react-app and node-sass-chokidar
```diff
   "scripts": {
+    "build-css": "node-sass-chokidar --include-path ./node_modules src/ -o src/",
+    "watch-css": "npm run build-csss && npm run build-css -- --watch --recursive"
   }
```

### Styles
Including all the base styles can be done by either importing the styles file from the `dist` folder or importing the helpers file and using the mixin `react-md-icon`:

```scss
// This import will generate styles by default.
@import "@react-md/icon/dist/styles";
```

or

```scss
// This import only includes all the utility variables, mixins, and functions.
@import "@react-md/icon/dist/icon";

// Once everything has been imported, you can generate the styles with the following mixin
@include react-md-icon;
```

If you would like to just import all the utility variables, mixins, and functions:
```scss
@import "@react-md/icon/dist/icon";

// Any custom styles that use the utilities
```


## Usage
### Simple Icon Usage
```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import { SVGIcon, FontIcon } from "@react-md/icon";

const App = () => (
  <main>
    <FontIcon>home</FontIcon>
    <FontIcon>menu</FontIcon>
    <FontIcon iconClassName="fa fa-github" />
    <SVGIcon><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></SVGIcon>{/* menu icon */}
  </main>
);

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
```

### Spacing Icons and Text
```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import { SVGIcon, FontIcon, TextIconSpacing } from "@react-md/icon";

const App = () => (
  <main>
    <TextIconSpacing icon={<FontIcon>home</FontIcon>}>
      This text will appear after the icon
    </TextIconSpacing>
    <TextIconSpacing icon={<SVGIcon><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></SVGIcon>}>
      This text will appear before the icon
    </TextIconSpacing>
  </main>
);

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
```

<!-- PROPS_START -->
## Prop Types
### FontIcon


> Note: Required props will have an asterisk (*) after their name.

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>children</td>
<td><code>ReactNode</code></td>
<td><code>null</code></td>
<td>
Any children to render to create the font icon. This is required for material-icons.
<br /><br />
</td>
</tr>
<tr>
<td>style</td>
<td><code>CSSProperties</code></td>
<td><code>null</code></td>
<td>
An optional style to apply.
<br /><br />
</td>
</tr>
<tr>
<td>className</td>
<td><code>string</code></td>
<td><code>null</code></td>
<td>
An optional className to apply.
<br /><br />
</td>
</tr>
<tr>
<td>iconClassName</td>
<td><code>string</code></td>
<td><code>material-icons</code></td>
<td>
The font icon class name to use.
<br /><br />
</td>
</tr>
<tr>
<td>dense</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>
Boolean if the font icon should use the dense spec.
<br /><br />
</td>
</tr>
<tr>
<td>forceSize</td>
<td><code>number | boolean</code></td>
<td><code>false</code></td>
<td>
Either a boolean that will enforce the 24x24 size of the font icon or a number of the size
to enforce. This is useful when using other font icon libraries that do not have a consistent
size.
<br /><br />
</td>
</tr>
<tr>
<td>forceFontSize</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>
Boolean if the <code>forceSize</code> prop should also force the <code>font-size</code> instead of only <code>width</code> and <code>height</code>.
<br /><br />
</td>
</tr>
</tbody>
</table>


### SVGIcon


> Note: Required props will have an asterisk (*) after their name.

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>children</td>
<td><code>ReactNode</code></td>
<td><code>null</code></td>
<td>
Any <code>&#60;svg&#62;</code> children to render to create your icon. This can not be used with the <code>use</code> prop.
<br /><br />
</td>
</tr>
<tr>
<td>style</td>
<td><code>CSSProperties</code></td>
<td><code>null</code></td>
<td>
An optional style to apply to the svg element.
<br /><br />
</td>
</tr>
<tr>
<td>className</td>
<td><code>string</code></td>
<td><code>null</code></td>
<td>
An optional className to apply to the svg element.
<br /><br />
</td>
</tr>
<tr>
<td>role</td>
<td><code>"img" | "presentation"</code></td>
<td><code>img</code></td>
<td>
The role to apply to the SVG. When using icons, it is generally recommended to leave it as the default
<code>img</code> so that it is insured as a graphic.
<br /><br />
</td>
</tr>
<tr>
<td>aria-labelledby</td>
<td><code>string</code></td>
<td><code>null</code></td>
<td>
An optional list of ids to use to label the SVG icon with. This is helpful to add when you use the <code>title</code>
and <code>desc</code> props as this is used to create ids for those two props. This is super beneficial to screen readers.
<br /><br />
When this is defined, it is a space-delimited string of ids to provide to the title and desc (in order). If
this is omitted and the <code>use</code> prop is defined, it will take everything after the <code>#</code> sign and append <code>-title</code> and
<code>-desc</code> as a fallback. Check out the examples for more information about this.
<br /><br />
@link #title}
@see {
@link #desc}
@docgen
</td>
</tr>
<tr>
<td>title</td>
<td><code>string</code></td>
<td><code>null</code></td>
<td>
An optional title to give to your SVG icon. This is generally recommended for accessibility when not using
the <code>use</code> prop, or your spritemap does not contain <code>&#60;title&#62;</code> and `&#60;desc&#62;.
   *
   * 
   * @docgen
   *
</td>
</tr>
<tr>
<td>desc</td>
<td><code>string</code></td>
<td><code>null</code></td>
<td>
An optional description to give to your SVG icon. This is generally recommended for accessibility when not using
the <code>use</code> prop, or your spritemap does not contain <code>&#60;title&#62;</code> and `&#60;desc&#62;.
   *
   * 
   * @docgen
   *
</td>
</tr>
<tr>
<td>focusable</td>
<td><code>string</code></td>
<td><code>false</code></td>
<td>
Boolean if the SVG should gain the <code>focusable</code> attribute. This is disabled by default since IE11
and Edge actually default this to true and keyboard&#39;s will tab focus all SVGs.
<br /><br />
</td>
</tr>
<tr>
<td>size</td>
<td><code>number</code></td>
<td><code>null</code></td>
<td>
An optional size to apply to the SVG. This can be used to set both the
<code>height</code> and <code>width</code> simultaneously. This will be provided as inline styles
since the <code>height</code> and <code>width</code> are normally controlled by CSS, and CSS has
higher precedence than the <code>height</code>/<code>width</code> attributes.
<br /><br />
</td>
</tr>
<tr>
<td>viewBox</td>
<td><code>string</code></td>
<td><code>0 0 24 24</code></td>
<td>
The viewBox attribute allows you to specify that a given set of graphics stretch to
fit a particular container element.
<br /><br />
The value of the viewBox attribute is a list of four numbers min-x, min-y, width and
height, separated by white space and/or a comma, which specify a rectangle in user
space which should be mapped to the bounds of the viewport established by the given
element, taking into account attribute preserveAspectRatio.
<br /><br />
Negative values for width or height are not permitted and a value of zero disables
rendering of the element.An optional viewbox for the SVG.
<br /><br />
For example, if the SVG element is 250 (width) by 200 (height) and you provide
`viewBox=&#34;0 0 25 20&#34;`, the coordinates inside the SVG will go from the top left corner
(0, 0) to the bottom right (25, 20) and each unit will be worth <code>10px</code>.
<br /><br />
</td>
</tr>
<tr>
<td>xmlns</td>
<td><code>string</code></td>
<td><code>http://www.w3.org/2000/svg</code></td>
<td>
An optional xmlns string to provide. The <code>use</code> prop will not work without this prop
defined.
<br /><br />
</td>
</tr>
<tr>
<td>use</td>
<td><code>string</code></td>
<td><code>null</code></td>
<td>
This should be a link to a part of an SVG spritemap. So normally one of the following:
- <code>&#39;#some-custom-svg&#39;</code>
- <code>&#39;/images/spritemap.svg#some-custom-svg&#39;</code>
<br /><br />
This prop <b>should not</b> be used with the <code>children</code> prop as only one will be rendered.
<br /><br />
&#62; NOTE: IE **does not support** external SVGs. Please see the demo for more details.
<br /><br />
</td>
</tr>
</tbody>
</table>


### TextIconSpacing


> Note: Required props will have an asterisk (*) after their name.

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>children</td>
<td><code>ReactNode</code></td>
<td><code>null</code></td>
<td>
The children to render before or after the provided icon.
<br /><br />
</td>
</tr>
<tr>
<td>className</td>
<td><code>string</code></td>
<td><code>null</code></td>
<td>
An optional className to apply to the surroudning <code>&#60;span&#62;</code> when the <code>forceIconWrap</code> prop is enabled
or the icon is not a valid React Element.
<br /><br />
</td>
</tr>
<tr>
<td>icon</td>
<td><code>string | number | boolean | {} | ReactElement<any> | ReactNodeArray | ReactPortal | ReactElement<...</code></td>
<td><code>null</code></td>
<td>
An optional icon to display with a text button. This is invalid for icon buttons. If this is
a single element, a new class name will be cloned into the element to get correct spacing so
if you have a custom icon element, you <b>must</b> also pass that class name down. If you are using
one of the react-md icon component packages, this is handled automatically.
<br /><br />
If this is not a valid react element, the icon will be wrapped in a <code>&#60;span&#62;</code> instead
with the class names applied.
<br /><br />
</td>
</tr>
<tr>
<td>iconAfter</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>
Boolean if the icon should appear after the text instead of before.
<br /><br />
</td>
</tr>
<tr>
<td>beforeClassName</td>
<td><code>string</code></td>
<td><code>rmd-icon--before</code></td>
<td>
The class name to use for an icon that is placed before text.
<br /><br />
</td>
</tr>
<tr>
<td>afterClassName</td>
<td><code>string</code></td>
<td><code>rmd-icon--after</code></td>
<td>
The class name to use for an icon that is placed after text.
<br /><br />
</td>
</tr>
<tr>
<td>forceIconWrap</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>
Boolean if the icon should be forced into a <code>&#60;span&#62;</code> with the class names applied instead of attempting
to clone into the provided icon.
<br /><br />
</td>
</tr>
</tbody>
</table>


### IconRotator


> Note: Required props will have an asterisk (*) after their name.

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>style</td>
<td><code>CSSProperties</code></td>
<td><code>null</code></td>
<td>
An optional style to apply to the surrounding span when the <code>forceIconWrap</code> prop is enabled
or the children is not a single react element.
<br /><br />
</td>
</tr>
<tr>
<td>className</td>
<td><code>string</code></td>
<td><code>null</code></td>
<td>
An optional className to apply.
<br /><br />
</td>
</tr>
<tr>
<td>from</td>
<td><code>number</code></td>
<td><code>null</code></td>
<td>
The starting degree amount that should be used. This should be one of the values in the
<code>$rmd-icon-rotator-rotation-degrees</code> list or a value specified when using the <code>rmd-icon-rotator-degrees</code>
mixin so that a valid class name can be applied.
<br /><br />
</td>
</tr>
<tr>
<td>to</td>
<td><code>number</code></td>
<td><code>null</code></td>
<td>
The ending degree amount that should be used. This should be one of the values in the
<code>$rmd-icon-rotator-rotation-degrees</code> list or a value specified when using the <code>rmd-icon-rotator-degrees</code>
mixin so that a valid class name can be applied.
<br /><br />
</td>
</tr>
<tr>
<td>animate</td>
<td><code>boolean</code></td>
<td><code>null</code></td>
<td>
Boolean if the rotation should be animated instead of static.
<br /><br />
</td>
</tr>
<tr>
<td>rotated *</td>
<td><code>boolean</code></td>
<td><code>null</code></td>
<td>
Boolean if the icon is currently rotated.
<br /><br />
</td>
</tr>
<tr>
<td>forceIconWrap</td>
<td><code>boolean</code></td>
<td><code>null</code></td>
<td>
Boolean if the child icon should be &#34;forcefully&#34; wrapped in a <code>&#60;span&#62;</code> element. This should be enabled if
you have a custom icon that does not pass the <code>className</code> prop down.
<br /><br />
</td>
</tr>
<tr>
<td>children *</td>
<td><code>ReactNode</code></td>
<td><code>null</code></td>
<td>
The icon that should be rotated. If this is a valid React Element, the class names will be cloned into
that icon, otherwise the icon will be wrapped in a span with the correct class names applied.
<br /><br />
</td>
</tr>
</tbody>
</table>


<!-- PROPS_END -->


<!-- SASSDOC_START -->
## SassDoc

### Mixins

<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>rmd-icon-base</code></td>
<td>Creates the base styles for icons. This should be combined with the <code>rmd-icon-font</code> or
<code>rmd-icon-svg</code> mixins to get the full styles.
<br /><br />

</td>
</tr>
<tr>
<td><code>rmd-icon-font</code></td>
<td>Creates the base styles for a font icon.

</td>
</tr>
<tr>
<td><code>rmd-icon-font-dense</code></td>
<td>Creates the styles for updating a font icon to use the dense spec. This requires the
base font icon styles to already be applied.

</td>
</tr>
<tr>
<td><code>rmd-icon-svg</code></td>
<td>Creates the base styles for an svg icon.

</td>
</tr>
<tr>
<td><code>rmd-icon-svg-dense</code></td>
<td>Creates the styles for updating an svg icon to use the dense spec. This requires the
base svg icon styles to already be applied.

</td>
</tr>
<tr>
<td><code>rmd-icon-spacing-before-text(spacing)</code></td>
<td>Creates the styles that should be applied to an icon that is placed before text.
<h5>Parameters</h5>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</thead>
<tbody>
<tr>
<td>spacing</td>
<td>Number</td>
<td>rmd-icon-spacing-with-text</td>
<td>The amount of spacing to apply.</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td><code>rmd-icon-spacing-after-text(spacing)</code></td>
<td>Creates the styles that should be applied to an icon that is placed after text.
<h5>Parameters</h5>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</thead>
<tbody>
<tr>
<td>spacing</td>
<td>Number</td>
<td>rmd-icon-spacing-with-text</td>
<td>The amount of spacing to apply.</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td><code>rmd-icon-spaced-with-text(before-selector, after-selector, spacing)</code></td>
<td>A mixin to create the styles to space an icon before or after text with the provided selectors and
spacing.
<h5>Parameters</h5>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</thead>
<tbody>
<tr>
<td>before-selector</td>
<td>String</td>
<td>'&--before'</td>
<td>The selector to use for determining if an icon is placed
  before or after the text. If this is set to <code>null</code>, no before styles will be created.</td>
</tr>
<tr>
<td>after-selector</td>
<td>String</td>
<td>'&--after'</td>
<td>The selector to use for determining if an icon is placed
  before or after the text. If this is set to <code>null</code>, no after styles will be created.</td>
</tr>
<tr>
<td>spacing</td>
<td>Number</td>
<td>rmd-icon-spacing-with-text</td>
<td>The amount of spacing to apply.</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td><code>rmd-icon-rotator-rotated(degrees, selector)</code></td>
<td>A simple mixin to create the icon rotator&#39;s rotation values.
<h5>Parameters</h5>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</thead>
<tbody>
<tr>
<td>degrees</td>
<td>Number</td>
<td></td>
<td>The amount of degrees to rotate</td>
</tr>
<tr>
<td>selector</td>
<td>String</td>
<td>'&'</td>
<td>the selector to use to create the class.</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td><code>rmd-icon-rotator</code></td>
<td>Creates the styles for the <code>IconRotator</code> component. These styles are extremely simple and basically
apply different rotate transforms based on a class name.
<br /><br />

</td>
</tr>
<tr>
<td><code>react-md-icon</code></td>
<td>Creates the styles for icons within react-md. This requires either the <code>rmd-icon-use-font-icons</code> or <code>rmd-icon-use-svg-icons</code> variables
to be enabled to generate any styles.
<br /><br />

</td>
</tr>
<tr>
<td><code>rmd-icon-material-icons-font-face(font-url-or-map, old-ie-support)</code></td>
<td>Creates the font face for material icons. This takes either a font url prefix string or a map of urls for each required
font file. If you are using create-react-app, you <b>must</b> use the Map version so the fonts can be
correctly included by the build process.
<h5>Parameters</h5>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</thead>
<tbody>
<tr>
<td>font-url-or-map</td>
<td>String | Map</td>
<td>'/fonts/material-icons'</td>
<td>This is either a font url prefix for the folder
  that is &#34;hosting&#34; the material icons or a Map of direct urls for the eot, woff2, woff, and truetype material icon fonts.</td>
</tr>
<tr>
<td>old-ie-support</td>
<td>Boolean</td>
<td>false</td>
<td>Boolean if there should be a fallback for IE6-8 by including a url to
  the eot font. If this is set to true and using the Map version of <code>$font-url-or-map</code>, you must also include a url
  to the eot font.</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td><code>rmd-icon-material-icons-class(include-font-size)</code></td>
<td>Creates the material-icons css class if hosting material icons locally instead of using the
Google fonts service. By default, this will not include the font-size size you <i>should</i> be using
the <code>FontIcon</code> component from react-md which adds the correct font-size.
<h5>Parameters</h5>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</thead>
<tbody>
<tr>
<td>include-font-size</td>
<td>Boolean</td>
<td>false</td>
<td>Boolean if the material icons class name should include
  the default icon font size.</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td><code>rmd-icon-host-material-icons(font-url-or-map, include-font-size, old-ie-support)</code></td>
<td>Creates both the font face and css class for material icons when hosting the fonts locally instead of using
the Google fonts service.  This takes either a font url prefix string or a map of urls for each required
font file. If you are using create-react-app, you <b>must</b> use the Map version so the fonts can be
correctly included by the build process.
<h5>Parameters</h5>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</thead>
<tbody>
<tr>
<td>font-url-or-map</td>
<td>String | Map</td>
<td>'/fonts/material-icons'</td>
<td>This is either a font url prefix for the folder
  that is &#34;hosting&#34; the material icons or a Map of direct urls for the eot, woff2, woff, and truetype material icon fonts.</td>
</tr>
<tr>
<td>include-font-size</td>
<td>Boolean</td>
<td>false</td>
<td>Boolean if the material icons class name should include
  the default icon font size.</td>
</tr>
<tr>
<td>old-ie-support</td>
<td>Boolean</td>
<td>false</td>
<td>Boolean if there should be a fallback for IE6-8 by including a url to
  the eot font. If this is set to true and using the Map version of <code>$font-url-or-map</code>, you must also include a url
  to the eot font.</td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

#### Examples


##### Example SCSS Usage

```scss
.font-icon {
  @include rmd-icon-base;
  @include rmd-icon-font;
}
```


##### Example SCSS Usage

```scss
.font-icon {
  @include rmd-icon-base;
  @include rmd-icon-font;
}

@media (min-width: 1200px) {
  .font-icon {
    @include rmd-icon-font-dense;
  }
}
```


##### Example SCSS Usage

```scss
.svg-icon {
  @include rmd-icon-base;
  @include rmd-icon-svg;
}
```


##### Example SCSS Usage

```scss
.svg-icon {
  @include rmd-icon-base;
  @include rmd-icon-svg;
}

@media (min-width: 1200px) {
  .svg-icon {
    @include rmd-icon-svg-dense;
  }
}
```


##### Updating Selectors

```scss
// create a component so that it uses the :first-child and :last-child css
// selectors instead of class names that must be applied.
.my-wrapper {
  @include rmd-icon-spaced-with-text('&:first-child', '&:last-child');
}
```


##### Internal Example

```scss
.rmd-icon-rotator {
  // generates .rmd-icon-rotator--rotated-0
  @include rmd-icon-rotator-rotated(0);

  // generates .rmd-icon-rotator--rotated-180
  @include rmd-icon-rotator-rotated(180);
}
```

##### Providing a selector

```scss
// generates .rmd-icon-rotator--rotated-45
@include rmd-icon-rotator(45, '.rmd-icon-rotator')
```


##### create-react-app Example Usage

```scss
// This is going to assume you have downloaded the material-icons zip with all the icon font files and copied it into
// `src/fonts/material-icons` and you are including the fonts in `src/index.scss`
@include rmd-icon-material-icons-font-face((
  woff2: url(./fonts/material-icons/MaterialIcons-Regular.woff2),
  woff: url(./fonts/material-icons/MaterialIcons-Regular.woff),
  truetype: url(./fonts/material-icons/MaterialIcons-Regular.ttf)
));
```

##### Example Usage SCSS

```scss
$local-font-url: '/fonts/material-icons';
@include rmd-icon-material-icons-font-face($local-font-url);
```


##### create-react-app Example Usage

```scss
// This is going to assume you have downloaded the material-icons zip with all the icon font files and copied it into
// `src/fonts/material-icons` and you are including the fonts in `src/index.scss`
@include rmd-icon-material-icons-font-face((
  woff2: url(./fonts/material-icons/MaterialIcons-Regular.woff2),
  woff: url(./fonts/material-icons/MaterialIcons-Regular.woff),
  truetype: url(./fonts/material-icons/MaterialIcons-Regular.ttf)
));
```

##### Example Usage SCSS

```scss
$local-font-url: '/fonts/material-icons';
@include rmd-icon-material-icons-font-face($local-font-url);
```


### Variables
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>rmd-icon-size</code></td>
<td>The base icon size to use.
<br /><br /></td>
</tr>
<tr>
<td><code>rmd-icon-dense-size</code></td>
<td>The dense icon size to use. If you do not want to include the dense icon spec, disable the
<code>$rmd-icon-include-dense</code> variable.
<br /><br /></td>
</tr>
<tr>
<td><code>rmd-icon-include-dense</code></td>
<td>Boolean if the dense spec for icons should be included. This will just generate <code>.md-icon--font-dense</code> and <code>.md-icon--svg-dense</code> class names
that can be applied.</td>
</tr>
<tr>
<td><code>rmd-icon-use-font-icons</code></td>
<td>Boolean if font icons should be used. Normally only one of font icons or svg icons should be used within your application, so you can
disable the style generation for the unused type to save a few bytes.</td>
</tr>
<tr>
<td><code>rmd-icon-use-svg-icons</code></td>
<td>Boolean if svg icons should be used. Normally only one of font icons or svg icons should be used within your application, so you can
disable the style generation for the unused type to save a few bytes.</td>
</tr>
<tr>
<td><code>rmd-icon-spacing-with-text</code></td>
<td>The amount of spacing to apply between an icon and text within the <code>TextIconSpacing</code> component.
<br /><br /></td>
</tr>
<tr>
<td><code>rmd-icon-rotator-transition-time</code></td>
<td>The transition time for the icon rotator to fully rotate.
<br /><br /></td>
</tr>
<tr>
<td><code>rmd-icon-rotator-rotation-degrees</code></td>
<td>The &#34;allowed&#34; rotation degrees for the icon rotator. These are used to automatically generate the
rotation animations for the icon rotator and should contain all values that are used in the
<code>to</code> and <code>from</code> props.
<br /><br /></td>
</tr>
</tbody>
</table>

<!-- SASSDOC_END -->

