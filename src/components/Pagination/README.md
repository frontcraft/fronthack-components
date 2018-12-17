# Pagination

### Usage

`fronthack component`, then `pagination`

#### JSX example:

```js
<Pagination
  pages={5}
  onClick={item => alert(item)}
  current={3}
/>
```

##### Properties

* `pages` - total amount of pages
* `onClick` - callback to perform after click
* `current` - current page number


#### Static HTML example:

```html
<div class="pagination">
  <a href="#" class="pagination__item"><i class="icon icon--arrow-left"></i></a>
  <a href="#" class="pagination__item">1</a>
  <div href="#" class="pagination__item pagination__item--active">2</div>
  <a href="#" class="pagination__item">3</a>
  <a href="#" class="pagination__item">4</a>
  <a href="#" class="pagination__item">5</a>
  <a href="#" class="pagination__item"><i class="icon icon--arrow-right"></i></a>
</div>
```