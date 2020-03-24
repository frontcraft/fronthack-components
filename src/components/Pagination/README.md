# Pagination

### Usage

```
fronthack component Pagination
```

#### JSX example:

```jsx
<Pagination
  pagesInTotal={5}
  onClick={item => alert(item)}
  page={3}
/>
```

##### Properties

* `pagesInTotal` - total amount of pages
* `onClick` - callback to perform after click
* `page` - current page number


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