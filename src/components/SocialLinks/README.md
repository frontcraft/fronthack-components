# Social links

### Usage

`fronthack component`, then `social-links`

#### JSX example:

```js
<SocialLinks url={window.location.href} />
```

##### Properties

* `url` - an url to share


#### Static HTML example:

```html
<nav class="social-links">
  <a href="https://www.facebook.com/sharer.php?u=http%3A%2F%2Ffronthack.com%2Ffronthack%2F" class="social-links__link" target="_blank">
    <i class="icon icon--social-facebook"></i>
  </a>
  <a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Ffronthack.com%2Ffronthack%2F" class="social-links__link" target="_blank">
    <i class="icon icon--social-twitter"></i>
  </a>
  <a href="https://plus.google.com/share?url=http%3A%2F%2Ffronthack.com%2Ffronthack%2F" class="social-links__link" target="_blank">
    <i class="icon icon--social-gplus"></i>
  </a>
  <a href="https://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Ffronthack.com%2Ffronthack%2F" class="social-links__link" target="_blank">
    <i class="icon icon--social-linkedin"></i>
  </a>
</nav>
```