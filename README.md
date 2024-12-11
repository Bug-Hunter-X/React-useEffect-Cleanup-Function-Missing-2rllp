# React useEffect Cleanup Function Missing
This example demonstrates a common error in React's `useEffect` hook: forgetting to include a cleanup function.  The `setInterval` call in the `useEffect` hook is not properly cleaned up when the component unmounts, potentially leading to memory leaks and unexpected behavior.

The `bug.js` file contains the erroneous code, while `bugSolution.js` demonstrates the correct implementation with a cleanup function.