import define1 from "./a2e58f97fd5e8d7c@672.js";
import define2 from "./a33468b95d0b15b0@808.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["heroes-1@1.csv",new URL("./files/358f6675a87d37fe7619cbf006294ec652ba9a489dd9ae6a38d3e72008a58076afa4042796608adc45226b07f1dad185edc6cdd525477f699db47e11db87adab",import.meta.url)],["HeroesRangeCount.csv",new URL("./files/b870e57a0ad9af04955cfb3b8bdfddd380d0923a0815b57b090557a7c413bce9fbdf97db305bf6d30b7988f9684a3e97e9b9a41bf77629c3c324f7f21543bc4e",import.meta.url)],["heroes-1.csv",new URL("./files/358f6675a87d37fe7619cbf006294ec652ba9a489dd9ae6a38d3e72008a58076afa4042796608adc45226b07f1dad185edc6cdd525477f699db47e11db87adab",import.meta.url)],["actors_cleaned.csv",new URL("./files/e04935a99334ba0d3315aedbf0f3a7dd765710848493f1d8199df17d4002f487dd8c35045e2190bb53c2409827f75ab4cbee3959f780aea1dc5d8cdbecbace61",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# 25 Heroes of Hindi Cinema, 1931-2020
<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`This project is more playful than a comprehensive study: a visualization of the number of films featuring 25 top male stars of the Hindi film industry based in Bombay/Mumbai, known as Bollywood in the 21st century.  The number 25 is chosen to keep the chart manageable, and stars are chosen to represent a reasonably even spread over the decades.  The dataset is created using imdbpy, a python library, then cleaned and organized into simpler sets.  A more detailed dataset, with titles and IMDbID of films, is available for viewing as a table below.  
 Data: [IMDb](https:https://www.imdb.com/)
 <br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["swatches","color","margin"], function(swatches,color,margin){return(
swatches({ color, columns: "160px 4", marginLeft: margin.left })
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
#    

The actors are color-coded: see the awatches above to identify the actors.  
Hover over each bar-segment to see the number of films with that actor, by year.  
<br>`
)});
  main.variable(observer("chart")).define("chart", ["d3","width","height","series","color","x","y","xAxis","yAxis"], function(d3,width,height,series,color,x,y,xAxis,yAxis)
{
  const svg = d3.create("svg").attr("viewBox", [0, 0, width, height]);

  svg
    .append("g")
    .selectAll("g")
    .data(series)
    .join("g")
    .attr("fill", ({ key }) => color(key))
    .call((g) =>
      g
        .selectAll("rect")
        .data((d) => d)
        .join("rect")
        .attr("x", (d) => x(d.data.year))
        .attr("y", (d) => y(d[1]))
        .attr("width", x.bandwidth() - 1)
        .attr("height", (d) => y(d[0]) - y(d[1]))
        .append("title")
        .text((d) => `${d.data.name}, ${d.data.year}, ${d.data.value}`)
    );

  //${formatUnits(d.data.Units)}`));

  svg.append("g").call(xAxis);

  svg.append("g").call(yAxis);

  return svg.node();
}
);
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`  
---------------------
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
<simple-greeting name="The Impressive Shelf-life of Heroes in a Star-Centric System "></simple-greeting>   
<br>
Male actors in Bollywood and pre-Bollywood Hindi cinema have remarkable shelf-lives: they keep on acting as the lead or the second lead in films while the female leads playing with them get replaced by younger actresses.  The graph below represents the range of years that these stars had in the Bombay film industry.
<br>
The color codes have been shared among charts to maintain continuity. 
<br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["Plot","heroesR","formatYear","d3"], function(Plot,heroesR,formatYear,d3){return(
Plot.plot({
  height: heroesR.length * 25,
  marginLeft: 150,
  width: 800,
  color: {
    domain: [
      "Saigal",
      "Prithviraj Kapoor",
      "Ashok Kumar",
      "Raj Kapoor",
      "Dilip Kumar",
      "Rajendra Kumar",
      "Raaj Kumar",
      "Shashi Kapoor",
      "Shammi Kapoor",
      "Dev Anand",
      "Guru Dutt",
      "Jeetendra",
      "Dharmendra",
      "Rajesh Khanna",
      "Amitabh Bachchan",
      "Mithun Chakraborty",
      "Sanjay Dutt",
      "Anil Kapoor",
      "Shah Rukh Khan",
      "Salman Khan",
      "Aamir Khan",
      "Akshay Kumar",
      "Shahid Kapoor",
      "Ranbir Kapoor",
      "Ranveer Singh"
    ],
    range: [
      "#8dd3c7",
      "#ffffb3",
      "#bebada",
      "#fb8072",
      "#80b1d3",
      "#fdb462",
      "#7F7F7F",
      "#b3de69",
      "#fccde5",
      "#d9d9d9",
      "#bc80bd",
      "#ccebc5",
      "#ffed6f",
      "#4e79a7",
      "#d62728",
      "#e78ac3",
      "#76b7b2",
      "#f6e2a1",
      "#59a14f",
      "#edc949",
      "#af7aa1",
      "#ff9da7",
      "#9c755f",
      "#bab0ab",
      "#f28e2c"
    ]
  },
  x: {
    axis: "top",
    grid: true,
    tickFormat: formatYear
  },
  y: {
    axis: null,
    domain: heroesR
      .sort((a, b) => d3.ascending(a.Year_x, b.Year_x))
      .map((d) => d.Actor)
  },
  marks: [
    Plot.barX(heroesR, {
      x1: "Year_x",
      rx: 10,
      x2: "Year_y",
      y: "Actor",
      order: (a, b) => d3.ascending(a.Start, b.Start),
      fill: (d) => d.Actor,
      title: (d) =>
        `${d.Actor} :  ${d.count} films between ${d.Year_x} and ${d.Year_y} in the current dataset.`
    }),
    Plot.text(heroesR, {
      x: "Year_x",
      y: "Actor",
      text: "Actor",
      textAnchor: "Year_y",
      dx: -70
    })
  ]
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`  
---------------------  
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
<simple-greeting name="Explore the filmography of each star .... "></simple-greeting>   
<br>
Use the dropdown menu below to see the films that are included in our dataset.
<br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer("viewof actorsdata")).define("viewof actorsdata", ["Inputs","actors"], function(Inputs,actors){return(
Inputs.select(
  actors.map((d) => d.Actor),
  { label: "Select Actor", sort: true, unique: true }
)
)});
  main.variable(observer("actorsdata")).define("actorsdata", ["Generators", "viewof actorsdata"], (G, _) => G.input(_));
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["Inputs","selectedactor"], function(Inputs,selectedactor){return(
Inputs.table(selectedactor, {
  columns: ["Actor", "movie/non-movie", "movieID", "Year"],
  format: {
    Year: (d) => `${d}`
  }
})
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`    
--------------------------
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Appendix
<br>`
)});
  main.variable(observer("selectedactor")).define("selectedactor", ["actors","actorsdata"], function(actors,actorsdata){return(
actors.filter((d) => d.Actor === actorsdata)
)});
  main.variable(observer("heroes")).define("heroes", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("heroes-1@1.csv").csv({ typed: true })
)});
  main.variable(observer("heroesR")).define("heroesR", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("HeroesRangeCount.csv").csv({ typed: true })
)});
  main.variable(observer("data")).define("data", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
Object.assign(
  d3.csvParse(
    await FileAttachment("heroes-1.csv").text(),
    ({ Actor, Year, ["Films"]: Films }) => ({
      name: Actor,
      year: +Year,
      value: +Films
    })
  ),
  { y: "No. of Films" }
)
)});
  main.variable(observer("actors")).define("actors", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("actors_cleaned.csv").csv({ typed: true })
)});
  main.variable(observer("colors2")).define("colors2", function(){return(
new Map([
  ["Saigal", "#8dd3c7"],
  ["Prithviraj Kapoor", "#ffffb3"],
  ["Ashok Kumar", "#bebada"],
  ["Raj Kapoor", "#fb8072"],
  ["Dilip Kumar", "#80b1d3"],
  ["Rajendra Kumar", "#fdb462"],
  ["Raaj Kumar", "#7F7F7F"],
  ["Shashi Kapoor", "#b3de69"],
  ["Shammi Kapoor", "#fccde5"],
  ["Dev Anand", "#d9d9d9"],
  ["Guru Dutt", "#bc80bd"],
  ["Jeetendra", "#ccebc5"],
  ["Dharmendra", "#ffed6f"],
  ["Rajesh Khanna", "#4e79a7"],
  ["Amitabh Bachchan", "#d62728"],
  ["Mithun Chakraborty", "#e78ac3"],
  ["Sanjay Dutt", "#76b7b2"],
  ["Anil Kapoor", "#f6e2a1"],
  ["Shah Rukh Khan", "#59a14f"],
  ["Salman Khan", "#edc949"],
  ["Aamir Khan", "#af7aa1"],
  ["Akshay Kumar", "#ff9da7"],
  ["Shahid Kapoor", "#9c755f"],
  ["Ranbir Kapoor", "#bab0ab"],
  ["Ranveer Singh", "#f28e2c"]
])
)});
  main.variable(observer("color")).define("color", ["d3","colors2"], function(d3,colors2){return(
d3
  .scaleOrdinal()
  .domain(Array.from(colors2.keys()))
  .range(Array.from(colors2.values()))
)});
  main.variable(observer("formatYear")).define("formatYear", function(){return(
(year) => `${year}`
)});
  main.variable(observer("fmt")).define("fmt", ["d3"], function(d3){return(
(n) => d3.format(",d")(n)
)});
  main.variable(observer("height")).define("height", function(){return(
700
)});
  main.variable(observer("margin")).define("margin", function(){return(
{ top: 20, right: 30, bottom: 30, left: 30 }
)});
  main.variable(observer("xAxis")).define("xAxis", ["height","margin","d3","x","width"], function(height,margin,d3,x,width){return(
(g) =>
  g.attr("transform", `translate(0,${height - margin.bottom})`).call(
    d3
      .axisBottom(x)
      .tickValues(d3.ticks(...d3.extent(x.domain()), width / 80))
      .tickSizeOuter(0)
  )
)});
  main.variable(observer("yAxis")).define("yAxis", ["margin","d3","y","data"], function(margin,d3,y,data){return(
(g) =>
  g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call((g) => g.select(".domain").remove())
    .call((g) =>
      g
        .select(".tick:last-of-type text")
        .clone()
        .attr("x", 3)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(data.y)
    )
)});
  main.variable(observer("x")).define("x", ["d3","data","margin","width"], function(d3,data,margin,width){return(
d3
  .scaleBand()
  .domain(data.map((d) => d.year))
  .rangeRound([margin.left, width - margin.right])
)});
  main.variable(observer("y")).define("y", ["d3","height","margin"], function(d3,height,margin){return(
d3
  .scaleLinear()
  .domain([0, 100])
  .range([height - margin.bottom, margin.top])
)});
  main.variable(observer("series")).define("series", ["d3","colors2","data"], function(d3,colors2,data){return(
d3
  .stack()
  .keys(Array.from(colors2.keys()))
  .value((group, key) => group.get(key).value)
  .order(d3.stackOrderReverse)(
    Array.from(
      d3
        .rollup(
          data,
          ([d]) => d,
          (d) => d.year,
          (d) => d.name
        )
        .values()
    )
  )
  .map((s) => (s.forEach((d) => (d.data = d.data.get(s.key))), s))
)});
  const child1 = runtime.module(define1);
  main.import("Search", child1);
  main.import("Table", child1);
  main.variable(observer("previews")).define("previews", ["htl","preview"], function(htl,preview){return(
function previews(notebooks, options) {
  return htl.html`<div style="display: grid; grid-gap: .875rem; grid-template-columns: repeat(auto-fill, minmax(160px, 5fr));">${notebooks.map(
    (notebook) => preview(notebook, options)
  )}</div>`;
}
)});
  main.variable(observer("preview")).define("preview", ["htl"], function(htl){return(
function preview(
  { path, title, author, thumbnail },
  { target = "_blank" } = {}
) {
  return htl.html`<a href=${`/${path}`} target=${target} title="${title}${
    author ? `by ${author}` : ""
  }" style="display: inline-flex; flex-direction: column; align-items: start; font: 400 .75rem var(--sans-serif); color: #1b1e23; width: 100%;" onmouseover=${(
    event
  ) =>
    (event.currentTarget.firstElementChild.style.borderColor =
      "#1b1e23")} onmouseout=${(event) =>
    (event.currentTarget.firstElementChild.style.borderColor = "#e8e8e8")}>
  <div style="border: solid 1px #e8e8e8; border-radius: 4px; box-sizing: border-box; width: 100%; padding-top: 62.5%; background-size: cover; background-image: url(https://static.observableusercontent.com/thumbnail/${encodeURI(
    thumbnail
  )}.jpg);"></div>
  <div style="width: 100%; white-space: nowrap; text-overflow: ellipsis; overflow: hidden;">${title}</div>
</a>`;
}
)});
  const child2 = runtime.module(define2);
  main.import("swatches", child2);
  main.variable(observer()).define(["html"], function(html){return(
html`<style>svg { font-size: 14px !important }`
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
  main.variable(observer()).define(["d3"], function(d3){return(
d3.scaleBivariate = function () {
  function scaleBivariate(value) {
    var r = reds(value[0]);
    var b = blues(value[1]);

    return "rgb(" + r + "," + (r + b) / 2 + "," + b + ")";
  }

  var blues = d3
    .scaleThreshold()
    .range([255, 205, 155, 105, 55])
    .domain([0, 1, 2, 3, 4, 5]);

  var reds = d3
    .scaleThreshold()
    .range([255, 205, 155, 105, 55])
    .domain([0, 1, 2, 3, 4, 5]);

  return scaleBivariate;
}
)});
  return main;
}
