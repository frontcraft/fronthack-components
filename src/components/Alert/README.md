# Alert

### Usage

```
fronthack component Alert
```

#### JSX example:

```jsx
<Alert message="Successful message" type="success" />
```

##### Avaliable props

* `type` - color of the alert
* `message` - each object must contain a title and content that is visible when expanded

#### Static HTML example:

```html
<div class="alert alert--success">
  <div class="alert__icon"><i class="icon icon--warning"></i></div>
  Successful message.
</div>
```

### Avaliable types

* (default)
* success
* warning
* error