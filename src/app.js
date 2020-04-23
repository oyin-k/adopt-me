const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Oby"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h2", {}, "German Shephard"),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Oby",
      animal: "Dog",
      breed: "German Shephard",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
