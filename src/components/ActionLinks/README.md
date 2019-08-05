# Action links

### Usage

```
fronthack component ActionLinks
```

Important note: Make sure that parent element has set `position: relative`.

#### JSX example:


```jsx
const isLoggedIn = true
const slug = 123

return (
  <ActionLinks
    visible={isLoggedIn}
    editUrl={`/projects/${slug}/edit`}
    deleteAction={() => alert('Delete action callback.')}
  />
)
```

##### Properties

* `editUrl` - an url to edit page of given element
* `deleteAction` - callback for delete function
* `visible` - should edit links be displayed or not (eg. depending on whether user is logged in)
* `still` - by default links are visible only on hover. Set it to true to show them always.

#### Static HTML example:

Static version is not prepared.
