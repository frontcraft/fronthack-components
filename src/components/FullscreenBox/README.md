# Fullscreen Box

### Usage

```
fronthack component FullscreenBox
```

#### JSX example:

```jsx
<FullscreenBox
  title='Log in'
  footer={<>Do not have an account yet? <a href='#'>Register here</a>.</>}
>Login form can be put here.</FullscreenBox>
```

##### Properties

* `title` - a text for title
* `footer` - a text to be placed in footer


#### Static HTML example:

```html
<div className="fullscreen-box">
  <div className="fullscreen-box__box">
    <h2 className="fullscreen-box__title">Title</h2>}
    Content
  </div>
  <div className="fullscreen-box__footer">Footer text</div>
</div>
```