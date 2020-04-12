### the usage of react-router-dom

#### 1 install

```js
  npm install --save react-router-dom
```

#### 2 import && basic use

```js
import { Route, Switch, Redirect } from "react-router-dom";
```

(1) in index.js wrapper the dom with BrowserRouter
(2) use when need in components

```js
<Switch>
  <Route path="/" exact component={Home} />
  <Route path="/products/:id" component={ProductDetails} />} />
  <Route
    path="/products"
    render={(props) => <Products sortBy="newest" {...props} />}
  />
  <Route path="/posts/:year?/:month?" component={Posts} />} />
  <Route path="/admin" component={Dashboard} />} />
</Switch>
```

#### 3 basic API

(1)each route component will pass the `router object` to component witch can be obtained by ` prop.history``prop.history,props.location,props.match `
(2) if need to pass other props to component
use render function---check the '/product/:id' demo

#### 5 pass mutiple router params

if mutiple params need to be passed ,check the post,jsx ;

#### 6 nested route

if you need to use nested route, please check the admin.jsx as a demo;
