//debouncing ensures that the function only runs after a certain  period of inactivity following the last event
// Debouncing is a technique that delays the execution of a function until a specified time has passed after the last event. It’s mainly used for events that fire rapidly, like scroll, resize, or button clicks. This prevents unnecessary function calls and improves performance.

// The function executes only after the user stops triggering the event.
// Multiple rapid events are collapsed into a single call.
// Example: If a user clicks 5 times in 100ms, the function won’t run during that burst.
// With a 2000ms debounce delay, the function runs 2 seconds after the final click.
// Helps reduce lag, avoid unnecessary processing, and optimize UI performance.
function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
function handleSearch(query) {
  console.log("Searching for:", query);
}

const debouncedSearch = debounce(handleSearch, 500);

// Simulate rapid calls
debouncedSearch("h");
debouncedSearch("he");
debouncedSearch("hel");
debouncedSearch("hell");
debouncedSearch("hello");