const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
​
class PestoPromise {
  constructor(executorFn) {
    if (typeof executorFn !== 'function') {
      throw new TypeError(`Expected a function, got ${typeof executorFn}`);
    }
​
    this.state = PENDING;
    this.callback = [];
​
    const resolve = value => {
      if (this.state !== PENDING) {
        return undefined;
      }
​
      const isObject = el => el !== null && typeof el === 'object';
​
      if (isObject(value) && typeof value.then === 'function') {
        return value.then(resolve, reject);
      }
​
      this.state = FULFILLED;
      this.result = value;
​
      for (const { onFulfilled } of this.callback) {
        onFulfilled(this.result);
      }
      return value;
    };
    const reject = error => {
      if (this.state !== PENDING) {
        return;
      }
      this.state = REJECTED;
      this.result = error;
​
      for (const { onRejected } of this.callback) {
        onRejected(this.result);
      }
    };
    try {
      executorFn(resolve, reject);
    } catch (ex) {
      reject(ex);
    }
  }
​
  then(onFulfilled, onRejected) {
    return new PestoPromise((resolve, reject) => {
      const onFulfilledInternal = value => {
        if (typeof onFulfilled === 'function') {
          try {
            return resolve(onFulfilled(value));
          } catch (ex) {
            return reject(ex);
          }
        } else {
          return resolve(value);
        }
      };
​
      const onRejectedInternal = value => {
        if (typeof onRejected === 'function') {
          try {
            return resolve(onRejected(value));
          } catch (ex) {
            return reject(ex);
          }
        } else {
          return reject(value);
        }
      };
​
      if (this.state === FULFILLED) {
        return onFulfilledInternal(this.result);
      } else if (this.state === REJECTED) {
        return onRejectedInternal(this.result);
      } else {
        this.callback.push({
          onFulfilled: onFulfilledInternal,
          onRejected: onRejectedInternal,
        });
      }
    });
  }
​
  catch(fn) {
    return this.then(undefined, fn);
  }
​
  finally(fn) {
    return this.then(
      () => fn(),
      () => fn()
    );
  }
​
  static resolve(maybePromise) {
    if (maybePromise instanceof PestoPromise) {
      return maybePromise;
    }
    const value = maybePromise;
    return new PestoPromise(res => res(value));
  }
​
  static reject(value) {
    return new PestoPromise((_, rej) => rej(value));
  }
​
  static all(iterable) {
    const totalLength = iterable.length;
    let count = 0;
    const result = new Array(totalLength);
​
    const onlyPromises = iterable.map(PestoPromise.resolve);
​
    return new PestoPromise((res, rej) => {
      if (iterable.length === 0) {
        res([]);
      }
​
      for (const [i, promise] of Object.entries(onlyPromises)) {
        promise.then(
          value => {
            result[i] = value;
            count++;
            if (count === totalLength) {
              res(result);
            }
          },
          err => {
            rej(err);
          }
        );
      }
    });
  }
}
​
module.exports = {
  MyPromise: PestoPromise,
};
