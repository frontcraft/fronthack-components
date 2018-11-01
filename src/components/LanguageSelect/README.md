# Language selector

### Usage

`fronthack component`, then `language-select`

#### JSX example:

```js
<LanguageSelect
  languages={[
    {
      name: 'English',
      callback: () => alert('Callback. It can be history.push or anything'),
    },
    {
      name: 'Polish',
      callback: () => alert('Callback. It can be history.push or anything'),
    },
  ]}
  current="English"
/>
```

##### Properties

* `languages` - objects that contains language name and callback
* `current` - currently selected language


#### Static HTML example:

```html
<<div class="language-select">
  <a href="#" class="language-select__link is-active">English</a>
  <a href="#" class="language-select__link">Polish</a>
</div>
```