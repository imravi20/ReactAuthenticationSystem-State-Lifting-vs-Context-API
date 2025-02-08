import React from "react";

const Home = () => {
  return (
    <div>
      <h3>Welcome to the Auth System Demo</h3>
      <p>
        This demo showcases two approaches to managing authentication state in
        React:
      </p>
      <ul>
        <li>State Lifting</li>
        <li>Context Api</li>
      </ul>
      <p>Use the toggle above to switch between the two approaches</p>
    </div>
  );
};

export default Home;
