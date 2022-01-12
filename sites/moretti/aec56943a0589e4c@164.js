export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["novelgenres1.csv",new URL("./files/5f05e2d6f496e68ab6f2916bbcae468a05564218fdd19e283c0daefed9167be0a12d29dfd48212cd7c7aaa44126be3ea2c75bdea098e0520d77745878b01e5f3",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Moretti: British Novel Genres  
<br>
This notebook is based on the dataset in Franco Moretti's <a href="https://www.amazon.com/Graphs-Maps-Trees-Abstract-Literary/dp/1844671852" target="_blank">*Graphs, Maps, Trees: Abstract Models for Literary History*</a> (2007), pp. 31-33. the first chart is Figure 9, p. 19.
<br>
*Hover over each bar to see the metadata.*
<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`








`
)});
  main.variable(observer()).define(["Plot","novelgenres","formatYear","d3"], function(Plot,novelgenres,formatYear,d3){return(
Plot.plot({
  height: novelgenres.length * 25,
  marginLeft: 150,
  width: 1000,

  x: {
    axis: "top",
    grid: true,
    tickFormat: formatYear
  },
  y: {
    axis: null,
    domain: novelgenres
      .sort((a, b) => d3.ascending(a.start, b.start))
      .map((d) => d.genre)
  },
  marks: [
    Plot.barX(novelgenres, {
      x1: "start",
      x2: "end",
      y: "genre",
      order: (a, b) => d3.ascending(a.start, b.start),
      fill: "#000000",
      title: (d) =>
        `${d.genre}: ${d.start} to ${d.end}. Data Source: ${d.reference}`
    }),
    Plot.text(novelgenres, {
      x: "start",
      y: "genre",
      text: "genre",
      textAnchor: "end",
      dx: -10
    })
  ]
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md` 













`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`------------------------`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`


&nbsp;











`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
<simple-greeting name="The range in years for each of the genres"></simple-greeting>   
<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
This graph is Figure 10 in *Graphs, Maps, Trees*, p. 23. 
<br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["Plot","novelgenres","d3"], function(Plot,novelgenres,d3){return(
Plot.plot({
  height: 850,
  width: 1200,
  marginBottom: 150,
  marginTop: 30,
  marginRight: 50,
  marginLeft: 50,
  x: {
    tickRotate: 45,
    label: null,
    domain: novelgenres
      .sort((a, b) => d3.descending(a.range, b.range))
      .map((d) => d.genre)
  },
  y: {
    grid: true,
    //nice: true,
    label: "Range for genres"
  },

  marks: [
    Plot.barY(
      novelgenres,

      {
        y: "range",
        x: "genre",
        order: (a, b) => d3.descending(a.range, b.range),
        title: (d) => `${d.genre}: ${d.range} years`
      }
    ),

    Plot.ruleY([0])
  ]
})
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`










`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
Here is the list of sources for the data, from *Graphs, Maps, Trees*, pp. 31-33.
<br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["Inputs","novelgenres"], function(Inputs,novelgenres){return(
Inputs.table(novelgenres, { columns: ["genre", "reference"] })
)});
  main.variable(observer()).define(["md"], function(md){return(
md`












`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`-----------------------`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`












`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`












`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Appendix
<br>`
)});
  main.variable(observer("novelgenres")).define("novelgenres", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("novelgenres1.csv").csv({ typed: true })
)});
  main.variable(observer()).define(["html"], function(html){return(
html`<style>svg { font-size: 14px !important }`
)});
  main.variable(observer("formatYear")).define("formatYear", function(){return(
(year) => `${year}`
)});
  main.variable(observer("fmt")).define("fmt", ["d3"], function(d3){return(
(n) => d3.format(",d")(n)
)});
  main.variable(observer("lit")).define("lit", function(){return(
import("https://unpkg.com/lit@2.0.0-rc.2/index.js?module")
)});
  main.variable(observer("LitElement")).define("LitElement", ["lit"], function(lit){return(
lit.LitElement
)});
  main.variable(observer("SimpleGreeting")).define("SimpleGreeting", ["LitElement","lit"], function(LitElement,lit)
{
  class SimpleGreeting extends LitElement {
    static get styles() {
      return lit.css`
        :host {
          display: inline-block; }

        div {
          color: black; font-family: 'Georgia';
          border: 4px solid black; border-radius: 2rem;
      	  padding: 1rem 1.5rem; margin-bottom: 1rem; }

        div:hover {
          background-color: black; color: white; }`;
    }

    static get properties() {
      return {
        name: { type: String }
      };
    }

    constructor() {
      super();
      this.name = "Somebody";
    }

    render() {
      return lit.html`<div><em>${this.name}</em></div>`;
    }
  }
  if (!window.customElements.get("simple-greeting")) {
    window.customElements.define("simple-greeting", SimpleGreeting);
  }
  return SimpleGreeting;
}
);
  return main;
}
