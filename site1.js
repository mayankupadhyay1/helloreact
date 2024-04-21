/*const head=React.createElement("h1",{id:"heading"},"Hello world from react!");
      const root=ReactDOM.createRoot(document.getElementById("root"));
      root.render(head);*/
      /*This is the eg of nested div tag through React */
      const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child1"},
      [React.createElement("h1",{},"hi!!This is h1 tag")],
      [React.createElement("h2",{},"hi!!This is h2 tag")]),

      React.createElement("div",{id:"child2"},[
      React.createElement("h1",{},"hi!!This is h1 tag")],
      [React.createElement("h2",{},"hi!!This is h2 tag")]
      ))
      

      const root=ReactDOM.createRoot(document.getElementById("root"))
      root.render(parent);