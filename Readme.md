# Demo Solid with CONTEXT pattern

Check out <https://githubbox.com/ndrean/demo-ctx-solid>

## The CONTEXT pattern

A component is a function takes some props and renders a view. In these props, you may have some state elements. When you do multi-page SPAs, you rebuild components on every new page. You may want to use a global store to share state between then. A useful pattern for this is to parametrise the function component:

```js
(context) => (props) => [HTML - JSX like stuff]
```

You can pass in all the stuff you may need along the road such as themes, useful functions...

With **SolidJS**, you can declare state outside of components. You use `createSignal` to declare a state element; it can be encapsulated in a component, or declared outside of it. In this case, you can take advantage of this "context": you can declare it at the context level or from a component.

You can also inject data in the context from a component, and it will be available to other components during navigation.

This is demonstrated here.
