```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: The interval keeps running even after unmount
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Missing cleanup function
    return () => {
      clearInterval(intervalId); // This line is crucial
    };
  }, []);

  return <div>Count: {count}</div>;
}
```