(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios'), require('jwt-decode')) :
  typeof define === 'function' && define.amd ? define(['exports', 'axios', 'jwt-decode'], factory) :
  (global = global || self, factory(global['ciam-js-sdk'] = {}, global.Axios, global.jwtDecode));
}(this, (function (exports, Axios, jwtDecode) { 'use strict';

  Axios = Axios && Object.prototype.hasOwnProperty.call(Axios, 'default') ? Axios['default'] : Axios;
  jwtDecode = jwtDecode && Object.prototype.hasOwnProperty.call(jwtDecode, 'default') ? jwtDecode['default'] : jwtDecode;

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

  var Request = /*#__PURE__*/function () {
    function Request(config) {
      this.CancelToken = Axios.CancelToken;
      this.theQueue = [];
      this.instance = this.genInstance(config);
      this.interceptorsRequest();
      this.interceptorsResponse();
    }

    var _proto = Request.prototype;

    _proto.request = /*#__PURE__*/function () {
      var _request = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(config) {
        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.instance.request(config);

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function request(_x) {
        return _request.apply(this, arguments);
      }

      return request;
    }();

    _proto.genInstance = function genInstance(config) {
      return Axios.create(_extends({
        timeout: 1000 * 10
      }, config));
    } // 添加请求拦截器
    ;

    _proto.interceptorsRequest = function interceptorsRequest() {
      var _this = this;

      this.instance.interceptors.request.use(function (config) {
        config.cancelToken = new _this.CancelToken(function (c) {
          _this.findInQueue({
            info: config.url + "_" + config.method,
            c: c
          }); // 类似这种取消请求
          // 其实服务端是有收到的
          // 只是浏览器层面做了一层处理

        });
        return config;
      }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
      });
    } // 添加响应拦截器
    ;

    _proto.interceptorsResponse = function interceptorsResponse() {
      var _this2 = this;

      this.instance.interceptors.response.use(function (response) {
        var config = response.config;

        _this2.removeQueue({
          info: config.url + "_" + config.method
        }); // 格式化响应数据


        return Promise.resolve(_extends({}, response, {
          code: 0,
          message: 'success'
        }));
      }, function (error) {
        // 遗留问题: 超时时拿不到响应对象，就无法删除 theQueue 队列
        var config = error.response && error.response.config || {};

        _this2.removeQueue({
          info: config.url + "_" + config.method
        });

        var _ref = error.response || {},
            data = _ref.data;

        return Promise.reject(_extends({}, error.response, {
          code: -1,
          message: (data == null ? void 0 : data.error_description) || error.message
        }));
      });
    };

    _proto.findInQueue = function findInQueue(requestInfo) {
      var index = this.theQueue.findIndex(function (request) {
        return request.info === requestInfo.info;
      });

      if (index >= 0) {
        this.theQueue[index].c('取消请求');
        this.theQueue.splice(index, 1);
      }

      this.theQueue.push(requestInfo);
    };

    _proto.removeQueue = function removeQueue(requestInfo) {
      var index = this.theQueue.findIndex(function (request) {
        return request.info === requestInfo.info;
      });
      if (index < 0) return;
      this.theQueue.splice(index, 1);
    };

    return Request;
  }();

  var RequestProxy = /*#__PURE__*/function () {
    function RequestProxy(config, authStorage) {
      this.defaultCustomConfig = {
        isNeedLoading: true,
        isNeedToken: true,
        isNeedShowError: true
      }; // 记录并行的请求次数

      this.requestCount = 0; // Loading 控制
      // eslint-disable-next-line @typescript-eslint/member-ordering

      this.loadingConfig = {};
      config.baseURL = this.transformUrl(config.baseURL, true);
      this.axios = new Request(config);
      this.authStorage = authStorage;
    }
    /**
     * 发起请求
     * @param config 配置项
     * @param customConfig 自定义配置
     */


    var _proto = RequestProxy.prototype;

    _proto.transfromRquest =
    /*#__PURE__*/
    function () {
      var _transfromRquest = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(config, customConfig) {
        var result;
        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (customConfig === void 0) {
                  customConfig = {};
                }

                customConfig = _extends({}, this.defaultCustomConfig, customConfig);
                this.transformUrl(config.url); // this.handleLoading(customConfig, true)

                this.addToken(config, customConfig); // eslint-disable-next-line no-plusplus

                customConfig.isNeedLoading && this.requestCount++;
                _context.prev = 5;
                _context.next = 8;
                return this.axios.request(config);

              case 8:
                result = _context.sent;
                return _context.abrupt("return", result);

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](5);
                this.handleError(customConfig, _context.t0);
                return _context.abrupt("return", Promise.reject(_context.t0));

              case 16:
                _context.prev = 16;
                // eslint-disable-next-line no-plusplus
                customConfig.isNeedLoading && this.requestCount--; // this.handleLoading(customConfig, false)

                return _context.finish(16);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 12, 16, 19]]);
      }));

      function transfromRquest(_x, _x2) {
        return _transfromRquest.apply(this, arguments);
      }

      return transfromRquest;
    }()
    /**
     * Loading 的开启关闭
     * @param customConfig 自定义配置项
     * @param isOpen 是否开启
     */
    // private handleLoading(customConfig: CustomConfigType, isOpen: boolean) {
    //   if (!customConfig.isNeedLoading) return
    //   // 不重复开启 Loading
    //   if (this.requestCount !== 0) return
    //   if (isOpen) {
    //     this.loadingConfig.timeId = setTimeout(() => {
    //       this.loadingConfig.service = message.loading({
    //         content: '拼命加载中...'
    //       })
    //     }, 300)
    //     return
    //   }
    //   clearInterval(this.loadingConfig.timeId)
    //   this.loadingConfig.service && this.loadingConfig.service.destroy()
    // }

    /**
     * token 处理
     * @param config 配置项
     * @param customConfig 自定义配置项
     */
    ;

    _proto.addToken =
    /*#__PURE__*/
    function () {
      var _addToken = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(config, customConfig) {
        var token;
        return runtime_1.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!customConfig.isNeedToken) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 3;
                return this.authStorage.getToken();

              case 3:
                token = _context2.sent;

                if (token) {
                  config.headers = {
                    Authorization: "Bearer " + token
                  };
                }

                _context2.next = 8;
                break;

              case 7:
                config.headers = {};

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function addToken(_x3, _x4) {
        return _addToken.apply(this, arguments);
      }

      return addToken;
    }()
    /**
     * 错误处理
     * @param customConfig 配置项
     * @param error 错误信息对象
     */
    ;

    _proto.handleError = function handleError(customConfig, error) {
      if (error.message === '取消请求') return;
      customConfig.isNeedShowError && console.error({
        content: "\u9519\u8BEF\u63D0\u793A\uFF1A" + (error.message || '太火爆了，请稍后再试！')
      });
    }
    /**
     * 处理路径
     * @param url 路径
     * @param isBaseURL 是否是根路径
     */
    ;

    _proto.transformUrl = function transformUrl(url, isBaseURL) {
      if (url === void 0) {
        url = '';
      }

      if (isBaseURL === void 0) {
        isBaseURL = false;
      }

      if (!url) return url;

      if (isBaseURL) {
        if (!/\/$/.test(url)) {
          return url + "/";
        }

        return url;
      }

      if (/^\//.test(url)) {
        return "" + url.substr(1);
      }

      return url;
    } // eslint-disable-next-line @typescript-eslint/member-ordering
    ;

    _proto.get =
    /*#__PURE__*/
    function () {
      var _get = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(url, config, customConfig) {
        return runtime_1.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", this.transfromRquest(_extends({
                  url: url,
                  method: 'GET'
                }, config), customConfig));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function get(_x5, _x6, _x7) {
        return _get.apply(this, arguments);
      }

      return get;
    }() // eslint-disable-next-line @typescript-eslint/member-ordering
    ;

    _proto.post =
    /*#__PURE__*/
    function () {
      var _post = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(url, config, customConfig) {
        return runtime_1.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (customConfig === void 0) {
                  customConfig = this.defaultCustomConfig;
                }

                return _context4.abrupt("return", this.transfromRquest(_extends({
                  url: url,
                  method: 'POST'
                }, config), customConfig));

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function post(_x8, _x9, _x10) {
        return _post.apply(this, arguments);
      }

      return post;
    }() // eslint-disable-next-line @typescript-eslint/member-ordering
    ;

    _proto.put =
    /*#__PURE__*/
    function () {
      var _put = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(url, config, customConfig) {
        return runtime_1.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (customConfig === void 0) {
                  customConfig = this.defaultCustomConfig;
                }

                return _context5.abrupt("return", this.transfromRquest(_extends({
                  url: url,
                  method: 'PUT'
                }, config), customConfig));

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function put(_x11, _x12, _x13) {
        return _put.apply(this, arguments);
      }

      return put;
    }() // eslint-disable-next-line @typescript-eslint/member-ordering
    ;

    _proto.patch =
    /*#__PURE__*/
    function () {
      var _patch = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(url, config, customConfig) {
        return runtime_1.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (customConfig === void 0) {
                  customConfig = this.defaultCustomConfig;
                }

                return _context6.abrupt("return", this.transfromRquest(_extends({
                  url: url,
                  method: 'PATCH'
                }, config), customConfig));

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function patch(_x14, _x15, _x16) {
        return _patch.apply(this, arguments);
      }

      return patch;
    }() // eslint-disable-next-line @typescript-eslint/member-ordering
    ;

    _proto["delete"] =
    /*#__PURE__*/
    function () {
      var _delete2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(url, config, customConfig) {
        return runtime_1.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (customConfig === void 0) {
                  customConfig = this.defaultCustomConfig;
                }

                return _context7.abrupt("return", this.transfromRquest(_extends({
                  url: url,
                  method: 'DELETE'
                }, config), customConfig));

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function _delete(_x17, _x18, _x19) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }();

    return RequestProxy;
  }();

  function createInstance(Con, authStorage) {
    return new Con({
      baseURL: '/'
    }, authStorage);
  }

  function createRequest(authStorage) {
    var request = createInstance(RequestProxy, authStorage);
    return request;
  }

  var isEmpty = function isEmpty(value) {
    return value === undefined || value === null || typeof value === 'object' && Object.keys(value).length === 0 || typeof value === 'string' && value.trim().length === 0;
  };

  var authKey = 'CIAM_AUTH_STORAGE';
  var userKey = 'CIAM_USER_STORAGE';
  var BaseAuthProxy = /*#__PURE__*/function () {
    function BaseAuthProxy() {
      this.auth = null;
      this.user = null;
    }

    var _proto = BaseAuthProxy.prototype;

    _proto.setAuth = function setAuth(auth) {
      if (typeof localStorage !== 'undefined') {
        window.localStorage.setItem(authKey, JSON.stringify(auth));
      } else {
        this.auth = auth;
      }
    };

    _proto.getAuth = function getAuth() {
      return typeof localStorage !== 'undefined' ? JSON.parse(window.localStorage.getItem(authKey) || '{}') : this.auth;
    };

    _proto.clearAuth = function clearAuth() {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem(authKey);
      } else {
        this.auth = null;
      }
    };

    _proto.getToken = function getToken() {
      var auth = this.getAuth();
      if (isEmpty(auth)) return null;
      return auth == null ? void 0 : auth.access_token;
    };

    _proto.getUser = function getUser() {
      return typeof localStorage !== 'undefined' ? JSON.parse(window.localStorage.getItem(userKey) || '{}') : this.user;
    };

    _proto.setUser = function setUser(user) {
      if (typeof localStorage !== 'undefined') {
        window.localStorage.setItem(userKey, JSON.stringify(user));
      } else {
        this.user = user;
      }
    };

    _proto.clearUser = function clearUser() {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem(userKey);
      } else {
        this.user = null;
      }
    };

    _proto.clear = function clear() {
      this.clearAuth();
      this.clearUser();
    };

    return BaseAuthProxy;
  }();

  function createAuthLocal() {
    return new BaseAuthProxy();
  }

  var BaseClient = /*#__PURE__*/function () {
    function BaseClient(props) {
      var _props$authStoragePro, _props$requestProxy;

      var authStorage = (((_props$authStoragePro = props.authStorageProxy) == null ? void 0 : _props$authStoragePro.createAuthLocal) || createAuthLocal)();
      this.props = props;
      this.request = (((_props$requestProxy = props.requestProxy) == null ? void 0 : _props$requestProxy.createRequest) || createRequest)(authStorage);
      this.authStorage = authStorage;
    }

    var _proto = BaseClient.prototype;

    _proto.setAuth = function setAuth(auth) {
      if (isEmpty(auth)) return;
      var user = jwtDecode(auth.id_token);
      this.authStorage.setUser(user);
      this.authStorage.setAuth(auth);
    };

    _proto.getAuth = function getAuth() {
      return this.authStorage.getAuth();
    };

    _proto.clearAuth = function clearAuth() {
      return this.authStorage.clear();
    };

    _proto.getUser = function getUser() {
      return this.authStorage.getUser();
    }
    /**
     * @name updateUser
     * @name_zh 发送短信验证码
     * @description 发送短信验证码, 短信验证码的有效时间为 60 s。
     *
     * @param {any} payload 更新的用户字段
     * @example
     * authenticationClient.updateUser({phoneNumber: '176xxxx6754')}
     *
     * @returns {Promise<JWTIDToken>}
     * @memberof AuthenticationClient
     */
    ;

    _proto.updateUser =
    /*#__PURE__*/
    function () {
      var _updateUser = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(payload) {
        var user, api, res;
        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                user = this.authStorage.getUser();

                if (user != null && user.sub) {
                  _context.next = 4;
                  break;
                }

                console.error('缺少sub参数', user);
                throw new Error('缺少sub参数');

              case 4:
                api = this.props.userDomain + "/user/" + user.sub;
                _context.prev = 5;
                _context.next = 8;
                return this.request.put(api, {
                  data: _extends({}, payload)
                });

              case 8:
                res = _context.sent;

                if (!(res.statusCode === 200)) {
                  _context.next = 12;
                  break;
                }

                this.authStorage.setUser(Object.assign({}, user, res.data));
                return _context.abrupt("return", res.data);

              case 12:
                return _context.abrupt("return", Promise.reject(res));

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](5);
                throw _context.t0;

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 15]]);
      }));

      function updateUser(_x) {
        return _updateUser.apply(this, arguments);
      }

      return updateUser;
    }();

    _proto.isAuthenticated = function isAuthenticated() {
      return !isEmpty(this.authStorage.getAuth());
    };

    return BaseClient;
  }();

  exports.BaseClient = BaseClient;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ciam-js-sdk.umd.development.js.map
