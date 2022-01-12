import define1 from "./a33468b95d0b15b0@808.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["state.csv",new URL("./files/483631e13d49873f1b7aad1cd334e307104cec8121c365fc44af25c150f4953ca2771d30e166bc550a2ef013b2c963c3f2621d7bcfdcfdde33e8ed8464d6be75",import.meta.url)],["states-albers-10m.json",new URL("./files/75faaaca1f1a4f415145b9db520349a3a0b93a53c1071346a30e6824586a7c251f45367d9262ed148b7a2b5c2694aa7703f3ac88051abc65066fd0074fdf9c9e",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Where the UIUC Religion Alumni Are
<br>
The [Department of Religion](https://religion.illinois.edu/) at the [University of Illinois](https://illinois.edu/) will celebrate its golden jubilee in 2021. The department's alumni are spread over 32 states. Hover mouse over the map to see the number of alumni from each of the 32 states.
<br>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `
<br>
<a href="https://religion.illinois.edu/" target="_blank">Link to the Department of Religion at the University of Illinois</a>
<br>
`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer("chart")).define("chart", ["d3","topojson","us","color","data","path","format"], function(d3,topojson,us,color,data,path,format)
{
  const svg = d3
    .create("svg")
    .attr("viewBox", [0, 0, 975, 710])
    .attr("style", "background-color:white");

  /* svg.append("g")
      .attr("transform", "translate(610,20)")
      .append(() => legend({color, title: data.title, width: 260}));*/

  svg
    .append("g")
    .selectAll("path")
    .data(topojson.feature(us, us.objects.states).features)
    .join("path")
    .attr("fill", (d) => color(data.get(d.properties.name)))
    .attr("d", path)
    .append("title")
    .text(
      (d) => `${d.properties.name}
${format(data.get(d.properties.name))}`
    );

  svg
    .append("path")
    .datum(topojson.mesh(us, us.objects.states, (a, b) => a !== b))
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-linejoin", "round")
    .attr("d", path);

  return svg.node();
}
);
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`  
--------------------
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`#     
#     
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Appendix
<br>`
)});
  main.variable(observer("data")).define("data", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
Object.assign(new Map(d3.csvParse(await FileAttachment("state.csv").text(), ({name, value}) => [name, +value])), {title: "Religion Majors @UIUC"})
)});
  main.variable(observer("color")).define("color", ["d3"], function(d3){return(
d3.scaleThreshold()
  .domain([1, 5, 10, 20, 148])
  .range(["#cccccc", "#e84a27", "#e84a27", "#e84a27", "#13294b"])
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`style: "background-color:green"`
)});
  main.variable(observer("path")).define("path", ["d3"], function(d3){return(
d3.geoPath()
)});
  main.variable(observer("format")).define("format", function(){return(
d => `${d}`
)});
  main.variable(observer("us")).define("us", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("states-albers-10m.json").json()
)});
  main.variable(observer("height")).define("height", function(){return(
600
)});
  main.variable(observer("width")).define("width", function(){return(
800
)});
  main.variable(observer("topojson")).define("topojson", ["require"], function(require){return(
require("topojson-client@3")
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@5")
)});
  const child1 = runtime.module(define1);
  main.import("legend", child1);
  return main;
}
