# Fronthack form framework

### Usage

`fronthack component`, then `form`

The advanced Fronthack React Form component has been promoted to a standalone npm package. To use it on a project, do following:

```
yarn add react-standalone-form
```

#### Static HTML example:

##### Single form input structure

Form item is independent group of elements, which combined togeher build
fully customizable form widget. Form item may consist of following elements:

1. Input
2. Label
3. Help text
4. Addon icon (envelope on example below)

```
<div class="form__item">
  <label class="form__label" for="textInput">Input label</label>
  <input class="form__input" name="textInput" type="text" placeholder="Placeholder text" />
  <div class="form__addon"><i class="icon icon--envelope"></i></div>
  <span class="form__help">Help text</span>
</div>
```

##### Basic form inputs

All types of text inputs, file inputs, selects, textarea, checkboxes, radios
and action buttons are avaliable.

```html
<form class="form">

  <div class="form__item">
    <label class="form__label" for="textInput">Text input</label>
    <input class="form__input" name="textInput" type="text" />
  </div>

  <div class="form__item">
    <label class="form__label" for="emailInput">Email input</label>
    <input class="form__input" name="emailInput" type="email" />
  </div>

  <div class="form__item">
    <label class="form__label" for="passwordInput">Password input</label>
    <input class="form__input" name="passwordInput" type="password" />
  </div>

  <div class="form__item">
    <label class="form__label" for="urlInput">URL input</label>
    <input class="form__input" name="urlInput" type="url" />
  </div>

  <div class="form__item">
    <label class="form__label" for="telInput">Phone input</label>
    <input class="form__input" name="telInput" type="tel" />
  </div>

  <div class="form__item">
    <label class="form__label" for="numberInput">Number input</label>
    <input class="form__input" name="numberInput" type="number" />
  </div>

  <div class="form__item">
    <label class="form__label" for="searchInput">Search input</label>
    <input class="form__input" name="searchInput" type="search" />
  </div>

  <div class="form__item">
    <label class="form__label" for="fileInput">File input</label>
    <input class="form__input" name="fileInput" type="file" />
  </div>

  <div class="form__item">
    <label class="form__label" for="dateInput">Date input</label>
    <input class="form__input" name="dateInput" type="date" />
  </div>

  <div class="form__item">
    <label class="form__label" for="dateTimeInput">Datetime input</label>
    <input class="form__input" name="dateTimeInput" type="datetime-local" />
  </div>

  <div class="form__item">
    <label class="form__label" for="monthInput">Month input</label>
    <input class="form__input" name="monthInput" type="month" />
  </div>

  <div class="form__item">
    <label class="form__label" for="weekInput">Week input</label>
    <input class="form__input" name="weekInput" type="week" />
  </div>

  <div class="form__item">
    <label class="form__label" for="timeInput">Time input</label>
    <input class="form__input" name="timeInput" type="time" />
  </div>

  <div class="form__item">
    <label class="form__label" for="textArea">Textarea</label>
    <textarea class="form__input" name="textArea" rows="3"></textarea>
  </div>

  <div class="form__item">
    <label class="form__label" for="selectInput">Select</label>
    <select class="form__input" name="selectInput" class="form__item__select">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
      <option>Option 4</option>
      <option>Option 5</option>
    </select>
  </div>

  <div class="form__item">
    <label class="form__label" for="selectInput">Select multiple</label>
    <select class="form__input" name="selectInput" multiple>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
      <option>Option 4</option>
      <option>Option 5</option>
    </select>
  </div>

  <div class="form__item">
    <span class="form__label">Checkboxes</span>
    <label class="form__checkbox">
      <input type="checkbox" name="checkbox1" value="option1"/> Option 1
    </label>
    <label class="form__checkbox">
      <input type="checkbox" name="checkbox2" value="option2"/> Option 2
    </label>
    <label class="form__checkbox">
      <input type="checkbox" name="checkbox3" value="option3"/> Option 3
    </label>
  </div>

  <div class="form__item">
    <span class="form__label">Radios</span>
    <label class="form__radio">
      <input type="radio" name="radio" value="option1"/> Option 1
    </label>
    <label class="form__radio">
      <input type="radio" name="radio" value="option2"/> Option 2
    </label>
    <label class="form__radio">
      <input type="radio" name="radio" value="option3"/> Option 3
    </label>
  </div>

  <div class="form__actions">
    <button type="submit" class="btn">Submit button</button>
  </div>

</form>
```

## Form input states

Input states to communicate the error, success or disabled input. Contains
styles for help text and addon.

```html
<form class="form">

  <div class="form__item has-success">
    <label class="form__label" for="textInput">Input with success</label>
    <input class="form__input" name="textInput" type="text" />
    <div class="form__addon"><i class="icon icon--ok"></i></div>
    <span class="form__help">Help text</span>
  </div>

  <div class="form__item has-success">
    <span class="form__label">Checkboxes/Radios with success</span>
    <label class="form__radio">
      <input type="radio" name="radio" value="option1" /> Option 1
    </label>
    <label class="form__radio">
      <input type="radio" name="radio" value="option2" /> Option 2
    </label>
  </div>

  <div class="form__item has-error">
    <label class="form__label" for="textInput">Input with error</label>
    <input class="form__input" name="textInput" type="text" />
    <div class="form__addon"><i class="icon icon--x"></i></div>
    <span class="form__help">Help text</span>
  </div>

  <div class="form__item has-error">
    <span class="form__label">Checkboxes/Radios with error</span>
    <label class="form__radio">
      <input type="radio" name="radio" value="option1" /> Option 1
    </label>
    <label class="form__radio">
      <input type="radio" name="radio" value="option2" /> Option 2
    </label>
  </div>

  <div class="form__item" disabled>
    <label class="form__label" for="textInput">Disabled input</label>
    <input class="form__input" name="textInput" type="text" />
    <span class="form__help">Help text</span>
  </div>

  <div class="form__item" disabled>
    <span class="form__label">Disabled Checkboxes/Radios</span>
    <label class="form__radio">
      <input type="radio" name="radio" value="option1" /> Option 1
    </label>
    <label class="form__radio">
      <input type="radio" name="radio" value="option2" /> Option 2
    </label>
  </div>

</form>
```

## Form inputs with special, alternative look and feel

More acttractive elements for wider user experience.

```html
<form class="form">

  <div class="form__item form__item--alt">
    <label class="form__checkbox">
      <input type="checkbox" name="checkbox1" value="option1" />
      Checkbox in switch theme
      <span class="form__help">Themed by .form__item--alt class.</span>
    </label>
  </div>

</form>
```

## Elements that compose various form layouts

Compose form items into various layouts with these modifier classes and
.form__inline wrapping element.

```html
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