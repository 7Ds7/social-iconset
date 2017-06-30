# social-iconset
Social icons as Polymer <=1.8.1 iron-iconset-svg element

## Demo
Run ```$ polyserve``` or check the [codepen live](http://codepen.io/binaryunit/pen/jrVyPX)

## Usage
```$ bower install social-iconset```

There are 2 ways to import social-iconset icons
- with styles
    ```html
    <link rel="import" href="../social-iconset/social-iconset.html">
    <link rel="import" href="../social-iconset/social-iconset-styles.html">
    ```
- simple version without styles
    ```html
    <link rel="import" href="../social-iconset/social-iconset-simple.html">
    ```

Then as markup use them as regular iron-icon
```html
<iron-icon icon="social-iconset:twitter"></iron-icon>
<iron-icon class="colorize" icon="social-iconset:twitter"></iron-icon>
<iron-icon class="size48" icon="social-iconset:twitter"></iron-icon>
```

### Available classes
- .size16 (default size is 24px)
- .size48
- .size72
- .colorize
- .invert

### Available icons
- twitter
- github
- facebook
- instagram
- linkedin
- youtube
- rss
- vimeo
- google +
