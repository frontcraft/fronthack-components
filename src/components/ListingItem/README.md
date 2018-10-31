# Accordion

### Usage

`fronthack component`, then `listing-item`

#### JSX example:

```js
<ListingItem
  id="12345"
  title="Featured article name"
  date="16 October 2018"
  description="Teaser text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
  mediaUrl="http://placehold.it/200x145"
/>
```

##### Properties

* `id` - unique item id
* `title` - featured title
* `date` - formatted date
* `description` - teaser text
* `mediaUrl` - url for the featured image


#### Static HTML example:

```html
<div class="listing-item">
  <div class="listing-item__media">
    <img src="http://placehold.it/200x145" alt="" />
  </div>
  <div class="listing-item__text">
    <span class="listing-item__meta">16 October 2018</span>
    <h3 class="listing-item__title">Featured article name</h3>
    <div class="listing-item__description">Teaser text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</div>
    <div class="listing-item__footer">
      <a href="#" class="btn btn--xs pull-right">More information</a>
    </div>
  </div>
</div>
```