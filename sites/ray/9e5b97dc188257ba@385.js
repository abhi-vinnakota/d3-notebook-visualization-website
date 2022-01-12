export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["ray_gender_actor_05_26_20_mod@1.json",new URL("./files/5b0501b27a0ce172ce9becf64f5c377942ea2de8e053f3914096bee0f90ccdc9b76347bea4849f7e19a3661ffe2b969e775b7d0aaa9f7ee8b3cba1bcb076f175",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# The Circle of Ray: A Few Good Women
<br>
This is a visualization of the male-female ratio of credited actors in the films of **Satyajit Ray** (1921-1992).  
Data source: [IMDb](https://IMDb.com). All actors listed on IMDb are included.  See the gender division in **Aparna Sen**'s films [here](https://observablehq.com/d/0b5e1f5b417cb133).
*Hover on a node to see the name of the actor.*  
<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`|<svg width="12" height="12" viewBox="-6 -6 12 12"><circle r="40" fill="#e15759" /></svg> = female actor| |<svg width="12" height="12" viewBox="-6 -6 12 12"><circle r="40" fill="#4e79a7" /></svg> = male actor| `
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer("chart")).define("chart", ["pack","data","d3","width","height","DOM","circle","autoBox"], function(pack,data,d3,width,height,DOM,circle,autoBox)
{
  const root = pack(data);

  const svg = d3
    .create("svg")
    .attr("viewBox", [0, 0, width, height])
    .style("font", "12px sans-serif")
    .style("overflow", "visible")
    .attr("text-anchor", "middle");

  const node = svg
    .append("g")
    .attr("pointer-events", "all")
    .selectAll("g")
    .data(root.descendants().slice(0))
    .join("g")
    .attr("transform", (d) => `translate(${d.x},${d.y})`);

  const values = ["none", "Male", "Female"];
  const colors2 = ["#ffffff", "#118AB2", "#F47C98"];

  const getColorByGender = d3.scaleOrdinal().domain(values).range(colors2);

  node
    .append("path")
    .attr("id", (d) => (d.circleUid = DOM.uid("circle")).id)
    .attr("d", (d) => circle(d.r + 6))
    .attr("display", "none");

  node
    .append("circle")
    .attr("r", (d) => d.r)
    .attr("stroke", (d) => (d.height > 1 ? "#ccc" : null))
    .attr("fill", (d) => getColorByGender(d.data.gender));

  node
    .filter((d) => d.children)
    .append("text")
    .attr("fill", "#000000")
    .append("textPath")
    .attr("xlink:href", (d) => d.circleUid.href)
    .attr("startOffset", "50%")
    .text((d) => d.data.name);

  node
    .append("title")
    .attr("fill", "#000000")
    .style("font", "12px sans-serif")
    .text((d) => d.data.name);

  return svg.attr("viewBox", autoBox).node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`---

## Appendix
<br>
`
)});
  main.variable(observer("data")).define("data", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("ray_gender_actor_05_26_20_mod@1.json").json()
)});
  main.variable(observer("circle")).define("circle", ["d3"], function(d3){return(
d3.arc()
    .innerRadius(0)
    .outerRadius(d => d)
    .startAngle(-Math.PI)
    .endAngle(Math.PI)
)});
  main.variable(observer("pack")).define("pack", ["d3","width","height"], function(d3,width,height){return(
data => d3.pack()
    .size([width, height])
    .padding(d => d.height === 1 ? 3 : 20)
  (d3.hierarchy(data)
    .sum(d => d.value)
    .sort((a, b) => b.value - a.value))
)});
  main.variable(observer("autoBox")).define("autoBox", function(){return(
function autoBox() {
  document.body.appendChild(this);
  const {x, y, width, height} = this.getBBox();
  document.body.removeChild(this);
  return [x, y, width, height];
}
)});
  main.variable(observer("width")).define("width", function(){return(
1100
)});
  main.variable(observer("height")).define("height", ["width"], function(width){return(
width
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@5")
)});
  main.variable(observer("format")).define("format", ["d3"], function(d3){return(
d3.format(",d")
)});
  return main;
}
