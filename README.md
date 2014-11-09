# dip.js

[![Build Status](https://secure.travis-ci.org/stephanebachelier/dip.js.png?branch=master)](http://travis-ci.org/stephanebachelier/dip.js)

Dependency Injection Promise based

## Installation

This library work both on node and browser.

```
$ npm install --save-dev dip.js
```

As of now this library has no dependency as long as your browser or environment support promise.

## Usage

For now the best way to understand what's the purpose of this micro library is to have a look at tests.

## Documentation

The idea of Dip is to provide a way to inject dependency by sing promise. In asynchronous context is not always possible to guarantee that all dependencies are already defined. I know it does break a little the dependency injection pattern, but the idea here is to use the service locator pattern to ask for a dependency and defer any logic depending on it while this is resolve.
By using promise, it supports resolution or rejection status, but it's up to the developer to make his/her code to handle the possible rejection of a dependency.

An example is as simple as :
```js
dip.getItem('dependency').then(resolve, reject);
```

with `resolve` and `reject` two functions to handle the possible status of the promise.

The syntax being a promise any of the following syntaxes can be used:

```js
// using then(resolve, reject) form
dip.getItem('dependency').then(resolve, reject);

// using then().catch() form
dip.getItem('dependency').then(resolve).catch(reject);


// possible of multiple chaining
dip.getItem('dependency')
  .then(resolve)
  .then(resolve2)
  .catch(reject);

```

See any good article on promises. 

More to come.

## API

TODO

## TODO

* [ ] add more example
* [ ] complete documentation
* [ ] enable Store override
* [ ] add support for setting promise if not supported natively

## License

MIT
