# Instructions

`cache-function` should return a function that invokes `cb`.

If the returned function is invoked with arguments that it has already seen
then it should return the cached result and not invoke `cb` again.

`cb` should only ever be invoked once for a given set of arguments.

# Requirements

### **What are some good real-life use cases for such a function?**
*Write your response here*
1) Efficient way of Computing (caching avoids re-computing the same result).
2) This type of cache-function can be used in applications to read certain "Configuration-values" required for the business requirement. Because repeatedly reading these "Configuration-values" may lead to application instablity and thus putting a limit on that is required.

### **What *extra* test cases can you add to the test file?**

*Add relevant test-cases in the test file*