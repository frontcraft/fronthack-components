## Single form input with all elements

Form item is independent group of elements, which combined togeher build
fully customizable form widget. Form item may consist of following elements:

1. Input
2. Label
3. Help text
4. Addon icon (envelope on example below)

Markup:
```
<div class="form__item">
  <label class="form__label" for="textInput">Input label</label>
  <input class="form__input" name="textInput" type="text" placeholder="Placeholder text" />
  <div class="form__addon"><i class="icon icon--envelope"></i></div>
  <span class="form__help">Help text</span>
</div>
```