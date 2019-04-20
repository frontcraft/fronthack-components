# Language selector

### Usage

```
fronthack component LanguageSelect
```

#### JSX example:

```jsx
<LanguageSelect
  languages={['English', 'Polish']}
  current='English'
  callback={newLanguage => alert(`Switch to ${newLanguage}`)}
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