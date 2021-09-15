(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('ciam-js-sdk')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'ciam-js-sdk'], factory) :
  (global = global || self, factory(global['ciam-spa-sdk'] = {}, global.React, global.ciamJsSdk));
}(this, (function (exports, React, ciamJsSdk) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;

  var AuthContext = /*#__PURE__*/React__default.createContext(undefined);
  var useAuth = function useAuth() {
    var context = React.useContext(AuthContext);

    if (context === undefined) {
      throw new Error('useAuth must be used within a AuthProvider');
    }

    return context;
  };
  function withAuth(ComponentToWrap) {
    var WrappedComponent = function WrappedComponent(props) {
      var authProps = useAuth();
      return React__default.createElement(ComponentToWrap, Object.assign({}, authProps, props));
    };

    WrappedComponent.displayName = "withAuth_" + (ComponentToWrap.displayName || ComponentToWrap.name);
    return WrappedComponent;
  }

  var AuthProvider = function AuthProvider(props) {
    var authService = props.authService,
        children = props.children;
    return React__default.createElement(AuthContext.Provider, {
      value: {
        authService: authService
      }
    }, children);
  };

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;

    _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it) return (it = it.call(o)).next.bind(it);

    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var runtime_1 = /*#__PURE__*/createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2014-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var runtime = function (exports) {

      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined$1; // More compressible than void 0.

      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

      function define(obj, key, value) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return obj[key];
      }

      try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
      } catch (err) {
        define = function define(obj, key, value) {
          return obj[key] = value;
        };
      }

      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.

        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
      }

      exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.

      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }

      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.

      var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.

      function Generator() {}

      function GeneratorFunction() {}

      function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.


      var IteratorPrototype = {};
      define(IteratorPrototype, iteratorSymbol, function () {
        return this;
      });
      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }

      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = GeneratorFunctionPrototype;
      define(Gp, "constructor", GeneratorFunctionPrototype);
      define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
      GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.

      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function (method) {
          define(prototype, method, function (arg) {
            return this._invoke(method, arg);
          });
        });
      }

      exports.isGeneratorFunction = function (genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };

      exports.mark = function (genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          define(genFun, toStringTagSymbol, "GeneratorFunction");
        }

        genFun.prototype = Object.create(Gp);
        return genFun;
      }; // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.


      exports.awrap = function (arg) {
        return {
          __await: arg
        };
      };

      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);

          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;

            if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
              return PromiseImpl.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              });
            }

            return PromiseImpl.resolve(value).then(function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped;
              resolve(result);
            }, function (error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke("throw", error, resolve, reject);
            });
          }
        }

        var previousPromise;

        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }

          return previousPromise = // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).


        this._invoke = enqueue;
      }

      defineIteratorMethods(AsyncIterator.prototype);
      define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
        return this;
      });
      exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.

      exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function (result) {
          return result.done ? result.value : iter.next();
        });
      };

      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }

          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            } // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


            return doneResult();
          }

          context.method = method;
          context.arg = arg;

          while (true) {
            var delegate = context.delegate;

            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);

              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }

              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }

            state = GenStateExecuting;
            var record = tryCatch(innerFn, self, context);

            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;

              if (record.arg === ContinueSentinel) {
                continue;
              }

              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted; // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.

              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      } // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.


      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];

        if (method === undefined$1) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null;

          if (context.method === "throw") {
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (delegate.iterator["return"]) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined$1;
              maybeInvokeDelegate(delegate, context);

              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }

            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return ContinueSentinel;
        }

        var record = tryCatch(method, delegate.iterator, context.arg);

        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }

        var info = record.arg;

        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }

        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

          context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.

          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined$1;
          }
        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        } // The delegate iterator is finished, so forget it and continue with
        // the outer generator.


        context.delegate = null;
        return ContinueSentinel;
      } // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.


      defineIteratorMethods(Gp);
      define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.

      define(Gp, iteratorSymbol, function () {
        return this;
      });
      define(Gp, "toString", function () {
        return "[object Generator]";
      });

      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };

        if (1 in locs) {
          entry.catchLoc = locs[1];
        }

        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }

        this.tryEntries.push(entry);
      }

      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }

      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{
          tryLoc: "root"
        }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }

      exports.keys = function (object) {
        var keys = [];

        for (var key in object) {
          keys.push(key);
        }

        keys.reverse(); // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.

        return function next() {
          while (keys.length) {
            var key = keys.pop();

            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          } // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.


          next.done = true;
          return next;
        };
      };

      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];

          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }

          if (typeof iterable.next === "function") {
            return iterable;
          }

          if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }

              next.value = undefined$1;
              next.done = true;
              return next;
            };

            return next.next = next;
          }
        } // Return an iterator with no values.


        return {
          next: doneResult
        };
      }

      exports.values = values;

      function doneResult() {
        return {
          value: undefined$1,
          done: true
        };
      }

      Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          this.prev = 0;
          this.next = 0; // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.

          this.sent = this._sent = undefined$1;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined$1;
          this.tryEntries.forEach(resetTryEntry);

          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined$1;
              }
            }
          }
        },
        stop: function stop() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;

          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }

          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done) {
            throw exception;
          }

          var context = this;

          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;

            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined$1;
            }

            return !!caught;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;

            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }

            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }

          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }

          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;

          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }

          return this.complete(record);
        },
        complete: function complete(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }

          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }

          return ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;

              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }

              return thrown;
            }
          } // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.


          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };

          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined$1;
          }

          return ContinueSentinel;
        }
      }; // Regardless of whether this script is executing as a CommonJS module
      // or not, return the runtime object so that we can declare the variable
      // regeneratorRuntime in the outer scope, which allows this module to be
      // injected easily by `bin/regenerator --include-runtime script.js`.

      return exports;
    }( // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
     module.exports );

    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      // This module should not be running in strict mode, so the above
      // assignment should always work unless something is misconfigured. Just
      // in case runtime.js accidentally runs in strict mode, in modern engines
      // we can explicitly access globalThis. In older engines we can escape
      // strict mode using a global Function call. This could conceivably fail
      // if a Content Security Policy forbids using Function, but in that case
      // the proper solution is to fix the accidental strict mode problem. If
      // you've misconfigured your bundler to force strict mode and applied a
      // CSP to forbid Function, and you're not willing to fix either of those
      // problems, please detail your unique predicament in a GitHub issue.
      if (typeof globalThis === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  });

  /**
   * Implements *base64url-encode* (RFC 4648 § 5) without padding, which is NOT
   * the same as regular base64 encoding.
   */
  var base64urlEncode = function base64urlEncode(value) {
    var base64 = btoa(value);
    base64 = base64.replace(/\+/g, '-');
    base64 = base64.replace(/\//g, '_');
    base64 = base64.replace(/=/g, '');
    return base64;
  };
  /**
   * Generates a code_verifier and code_challenge, as specified in rfc7636.
   */

  /**
   * The maximum length for a code verifier for the best security we can offer.
   * Please note the NOTE section of RFC 7636 § 4.1 - the length must be >= 43,
   * but <= 128, **after** base64 url encoding. This means 32 code verifier bytes
   * encoded will be 43 bytes, or 96 bytes encoded will be 128 bytes. So 96 bytes
   * is the highest valid value that can be used.
   */


  var generatePKCECodes = function generatePKCECodes() {
    var RECOMMENDED_CODE_VERIFIER_LENGTH = 96;
    var PKCE_CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
    var output = new Uint32Array(RECOMMENDED_CODE_VERIFIER_LENGTH);
    var createdAt = new Date();
    crypto.getRandomValues(output);
    var codeVerifier = base64urlEncode(Array.from(output).map(function (num) {
      return PKCE_CHARSET[num % PKCE_CHARSET.length];
    }).join(''));
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(codeVerifier)).then(function (buffer) {
      var hash = new Uint8Array(buffer);
      var binary = '';
      var hashLength = hash.byteLength;

      for (var i = 0; i < hashLength; i++) {
        binary += String.fromCharCode(hash[i]);
      }

      return binary;
    }).then(base64urlEncode).then(function (codeChallenge) {
      return {
        codeChallenge: codeChallenge,
        codeVerifier: codeVerifier,
        createdAt: createdAt
      };
    });
  };

  var toSnakeCase = function toSnakeCase(str) {
    return str.split(/(?=[A-Z])/).join('_').toLowerCase();
  };
  var toUrlEncoded = function toUrlEncoded(obj) {
    return Object.keys(obj).map(function (k) {
      return encodeURIComponent(toSnakeCase(k)) + "=" + encodeURIComponent(obj[k]);
    }).join('&');
  };

  (function (ProtocolType) {
    ProtocolType["OIDC_PKCE"] = "OIDC_PKCE";
    ProtocolType["OIDC_NORMAL"] = "OIDC_NORMAL";
  })(exports.ProtocolType || (exports.ProtocolType = {}));

  var SpaClient = /*#__PURE__*/function (_BaseClient) {
    _inheritsLoose(SpaClient, _BaseClient);

    function SpaClient(props) {
      var _this;

      _this = _BaseClient.call(this, props) || this;
      _this.props = props;

      var code = _this.getCodeFromLocation(window.location); // 页面reload时，通过code获取token


      if (code !== null) {
        _this.fetchToken(code).then(function () {
          _this.reloadUri();
        })["catch"](function (e) {
          _this.removeItem('pkce');

          _this.removeItem('auth');

          _this.removeCodeFromLocation();

          console.warn({
            e: e
          });
        });
      } else if (_this.props.autoRefresh) {
        // 页面reload时，有本地auth则刷新token
        _this.startTimer();
      }

      return _this;
    }

    var _proto = SpaClient.prototype;

    _proto.getCodeFromLocation = function getCodeFromLocation(location) {
      var split = location.toString().split('?');

      if (split.length < 2) {
        return null;
      }

      var pairs = split[1].split('&');

      for (var _iterator = _createForOfIteratorHelperLoose(pairs), _step; !(_step = _iterator()).done;) {
        var pair = _step.value;

        var _pair$split = pair.split('='),
            key = _pair$split[0],
            value = _pair$split[1];

        if (key === 'code') {
          return decodeURIComponent(value || '');
        }
      }

      return null;
    };

    _proto.removeCodeFromLocation = function removeCodeFromLocation() {
      var _window$location$href = window.location.href.split('?'),
          base = _window$location$href[0],
          search = _window$location$href[1];

      if (!search) {
        return;
      }

      var newSearch = search.split('&').map(function (param) {
        return param.split('=');
      }).filter(function (_ref) {
        var key = _ref[0];
        return key !== 'code';
      }).map(function (keyAndVal) {
        return keyAndVal.join('=');
      }).join('&');
      window.history.replaceState(window.history.state, 'null', base + (newSearch.length ? "?" + newSearch : ''));
    };

    _proto.getItem = function getItem(key) {
      return window.localStorage.getItem(key);
    };

    _proto.setItem = function setItem(key, value) {
      return window.localStorage.setItem(key, value);
    };

    _proto.removeItem = function removeItem(key) {
      window.localStorage.removeItem(key);
    };

    _proto.getPkce = function getPkce() {
      var pkce = this.getItem('pkce');

      if (null === pkce) {
        throw new Error('PKCE pair not found in local storage');
      } else {
        return JSON.parse(pkce);
      }
    };

    _proto.setAuthTokens = function setAuthTokens(auth) {
      var _this$props$refreshSl = this.props.refreshSlack,
          refreshSlack = _this$props$refreshSl === void 0 ? 5 : _this$props$refreshSl;
      var now = new Date().getTime();
      auth.expires_at = now + (auth.expires_in + refreshSlack) * 1000;
      this.setAuth(auth);
    };

    _proto.getAuthTokens = function getAuthTokens() {
      return this.getAuth();
    };

    _proto.isPending = function isPending() {
      return this.getItem('pkce') !== null && this.getAuthTokens() === null;
    };

    _proto.logout = /*#__PURE__*/function () {
      var _logout = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
        var _this$props, clientId, userDomain, logoutRedirectUrl, url;

        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, clientId = _this$props.clientId, userDomain = _this$props.userDomain, logoutRedirectUrl = _this$props.logoutRedirectUrl;
                url = userDomain + '/logout' + ("?client_id=" + encodeURIComponent(clientId) + "&") + ("logout_redirect_uri=" + encodeURIComponent(logoutRedirectUrl));
                this.removeItem('pkce');
                this.clearAuth();
                window.location.replace(url);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function logout() {
        return _logout.apply(this, arguments);
      }

      return logout;
    }();

    _proto.login = /*#__PURE__*/function () {
      var _login = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
        var _this$props2, _this$props2$protocol, protocol, clientSecret;

        return runtime_1.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$props2 = this.props, _this$props2$protocol = _this$props2.protocol, protocol = _this$props2$protocol === void 0 ? exports.ProtocolType.OIDC_PKCE : _this$props2$protocol, clientSecret = _this$props2.clientSecret;

                if (!((protocol == null ? void 0 : protocol.toString().toUpperCase()) === exports.ProtocolType.OIDC_NORMAL)) {
                  _context2.next = 7;
                  break;
                }

                if (clientSecret) {
                  _context2.next = 4;
                  break;
                }

                throw new Error('普通授权模式需要传参数clientSecret');

              case 4:
                this.authorizeByNormal();
                _context2.next = 8;
                break;

              case 7:
                this.authorize();

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function login() {
        return _login.apply(this, arguments);
      }

      return login;
    }()
    /**
     * @name authorize
     * @description OAuth2 认证普通授权码模式登录,认证后302到redirect_url
     *
     * @returns {boolean}
     * @memberof SpaClient
     */
    ;

    _proto.authorizeByNormal =
    /*#__PURE__*/
    function () {
      var _authorizeByNormal = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3() {
        var _this$props3, clientId, userDomain, redirectUri, scopes, query, url;

        return runtime_1.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this$props3 = this.props, clientId = _this$props3.clientId, userDomain = _this$props3.userDomain, redirectUri = _this$props3.redirectUri, scopes = _this$props3.scopes;
                this.removeItem('auth');
                query = {
                  clientId: clientId,
                  scope: scopes.join(' '),
                  responseType: 'code',
                  redirectUri: redirectUri
                };
                url = userDomain + "/oauth2/authorize?" + toUrlEncoded(query);
                window.location.replace(url);
                return _context3.abrupt("return", true);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function authorizeByNormal() {
        return _authorizeByNormal.apply(this, arguments);
      }

      return authorizeByNormal;
    }()
    /**
     * @name authorize
     * @description OAuth2 认证,认证后302到redirect_url
     *
     * @returns {boolean}
     * @memberof SpaClient
     */
    ;

    _proto.authorize =
    /*#__PURE__*/
    function () {
      var _authorize = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4() {
        var _this$props4, clientId, userDomain, redirectUri, scopes, pkce, codeChallenge, query, url;

        return runtime_1.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this$props4 = this.props, clientId = _this$props4.clientId, userDomain = _this$props4.userDomain, redirectUri = _this$props4.redirectUri, scopes = _this$props4.scopes;
                _context4.next = 3;
                return generatePKCECodes();

              case 3:
                pkce = _context4.sent;
                this.setItem('pkce', JSON.stringify(pkce));
                this.removeItem('auth');
                codeChallenge = pkce.codeChallenge;
                query = {
                  clientId: clientId,
                  scope: scopes.join(' '),
                  responseType: 'code',
                  redirectUri: redirectUri,
                  codeChallenge: codeChallenge,
                  codeChallengeMethod: 'S256'
                };
                url = userDomain + "/oauth2/authorize?" + toUrlEncoded(query);
                window.location.replace(url);
                return _context4.abrupt("return", true);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function authorize() {
        return _authorize.apply(this, arguments);
      }

      return authorize;
    }()
    /**
     * @name fetchToken
     * @description 获取token，更新本地缓存
     *
     * @param {string} code authorize 302返回的code，或者本地auth中的refresh_token
     * @isRefresh {boolean} 是否刷新token
     *
     * @example
     * SpaClient.fetchToken(
     *  'code value',
     *  true
     * )
     *
     * @returns {Promise<AuthTokens>}
     * @memberof SpaClient
     */
    ;

    _proto.fetchToken =
    /*#__PURE__*/
    function () {
      var _fetchToken = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(code, isRefresh) {
        var _this$props5, clientId, clientSecret, contentType, userDomain, redirectUri, _this$props5$autoRefr, autoRefresh, _this$props5$protocol, protocol, grantType, payload, pkce, codeVerifier, response, json;

        return runtime_1.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (isRefresh === void 0) {
                  isRefresh = false;
                }

                _this$props5 = this.props, clientId = _this$props5.clientId, clientSecret = _this$props5.clientSecret, contentType = _this$props5.contentType, userDomain = _this$props5.userDomain, redirectUri = _this$props5.redirectUri, _this$props5$autoRefr = _this$props5.autoRefresh, autoRefresh = _this$props5$autoRefr === void 0 ? true : _this$props5$autoRefr, _this$props5$protocol = _this$props5.protocol, protocol = _this$props5$protocol === void 0 ? exports.ProtocolType.OIDC_PKCE : _this$props5$protocol;
                grantType = 'authorization_code';
                payload = _extends({
                  clientId: clientId
                }, clientSecret ? {
                  clientSecret: clientSecret
                } : {}, {
                  redirectUri: redirectUri,
                  grantType: grantType
                });

                if (isRefresh) {
                  payload = _extends({}, payload, {
                    grantType: 'refresh_token',
                    refresh_token: code
                  });
                } else {
                  if (protocol === exports.ProtocolType.OIDC_PKCE) {
                    pkce = this.getPkce();
                    codeVerifier = pkce.codeVerifier;
                    payload = _extends({}, payload, {
                      code: code,
                      codeVerifier: codeVerifier
                    });
                  }
                }

                _context5.next = 7;
                return this.request.post(userDomain + "/oauth2/token", {
                  headers: {
                    'Content-Type': contentType || 'application/x-www-form-urlencoded'
                  },
                  data: toUrlEncoded(payload)
                });

              case 7:
                response = _context5.sent;

                if (!((response == null ? void 0 : response.code) === 0)) {
                  _context5.next = 16;
                  break;
                }

                this.removeItem('pkce');
                _context5.next = 12;
                return response == null ? void 0 : response.data;

              case 12:
                json = _context5.sent;
                this.setAuthTokens(json);

                if (autoRefresh) {
                  this.startTimer();
                }

                return _context5.abrupt("return", this.getAuthTokens());

              case 16:
                return _context5.abrupt("return", Promise.reject(new Error((response == null ? void 0 : response.message) || '未知错误')));

              case 17:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function fetchToken(_x, _x2) {
        return _fetchToken.apply(this, arguments);
      }

      return fetchToken;
    }();

    _proto.armRefreshTimer = function armRefreshTimer(refreshToken, timeoutDuration) {
      var _this2 = this;

      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      this.timeout = window.setTimeout(function () {
        _this2.fetchToken(refreshToken, true).then(function (_ref2) {
          var newRefreshToken = _ref2.refresh_token,
              expiresAt = _ref2.expires_at;
          if (!expiresAt) return;
          var now = new Date().getTime();
          var timeout = expiresAt - now;

          if (timeout > 0) {
            _this2.armRefreshTimer(newRefreshToken, timeout);
          } else {
            _this2.removeItem('auth');

            _this2.removeCodeFromLocation();
          }
        })["catch"](function (e) {
          _this2.removeItem('auth');

          _this2.removeCodeFromLocation();

          console.warn({
            e: e
          });
        });
      }, timeoutDuration);
    };

    _proto.startTimer = function startTimer() {
      var authTokens = this.getAuthTokens();

      if (!authTokens) {
        return;
      }

      var refreshToken = authTokens.refresh_token,
          expiresAt = authTokens.expires_at;

      if (!expiresAt || !refreshToken) {
        return;
      }

      var now = new Date().getTime();
      var timeout = expiresAt - now;

      if (timeout > 0) {
        this.armRefreshTimer(refreshToken, timeout);
      } else {
        this.removeItem('auth');
        this.removeCodeFromLocation();
      }
    };

    _proto.reloadUri = function reloadUri() {
      this.removeCodeFromLocation();
      window.location.reload();
    };

    return SpaClient;
  }(ciamJsSdk.BaseClient);
  exports.AuthContext = AuthContext;
  exports.AuthProvider = AuthProvider;
  exports.SpaClient = SpaClient;
  exports.useAuth = useAuth;
  exports.withAuth = withAuth;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ciam-spa-sdk.umd.development.js.map
