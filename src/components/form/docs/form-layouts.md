## Elements that compose various form layouts

Compose form items into various layouts with these modifier classes and 
.form__inline wrapping element.

### Markup:
```
<form class="form">

  <div class="form__item form__item--inline-label">
    <label class="form__label" for="inlineLabel">Inline label</label>
    <input class="form__input" name="inlineLabel" type="text" />
    <span class="form__help">Form item for text input with .form__item--label-inline modifier class.</span>
  </div>

  <div class="form__item form__item--inline-label">
    <span class="form__label">Inline label</span>
    <label class="form__checkbox">
      <input type="checkbox" name="checkbox1" value="option1"/> Option 1
    </label>
    <label class="form__checkbox">
      <input type="checkbox" name="checkbox2" value="option2"/> Option 2
    </label>
    <label class="form__checkbox">
      <input type="checkbox" name="checkbox3" value="option3"/> Option 3
    </label>
    <span class="form__help">Form item for checkboxes or radios with .form__item--label-inline modifier class.</span>
  </div>

  <div class="form__item form__item--inline ">
    <span class="form__label">Inline checkboxes</span>
    <label class="form__checkbox">
      <input type="checkbox" name="checkbox1" value="option1"/> Option 1
    </label>
    <label class="form__checkbox">
      <input type="checkbox" name="checkbox2" value="option2"/> Option 2
    </label>
    <label class="form__checkbox">
      <input type="checkbox" name="checkbox3" value="option3"/> Option 3
    </label>
    <span class="form__help">Form item for checkboxes or radios with .form__item--inline modifier class.</span>
  </div>

  <div class="form__item form__item--combined">
    <input class="form__input" name="searchInput" type="search" placeholder="Input with button" />
    <button type="submit" class="btn">Search</button>
    <span class="form__help">Input combined together with button by .form__item--combined class.</span>
  </div>

  <div class="form__inline">
    <div class="form__item">
      <label class="form__label" for="firstName">Fist name</label>
      <input class="form__input" name="firstName" type="text" />
      <span class="form__help">Form item combined inline with another item by .form__inline wrapping element.</span>
    </div>
    <div class="form__item">
      <label class="form__label" for="lastName">Last name</label>
      <input class="form__input" name="lastName" type="text" />
      <span class="form__help">Form item combined inline with another item by .form__inline wrapping element.</span>
    </div>
  </div>

</form>
```