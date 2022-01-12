export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["Aparna_Sen_actor_mod@1.json",new URL("./files/bac301cc25db15d2cd8615378a706a8a5288d45d6cc2ef37cef1ab32869989e4abc18a57c35f5128fb0dd3d6cc3c0d97ca0bb404d8c8a8237555c846a7b7b579",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# The Circle of Sen: A Few More Good Women
<br>
This is a visualization of the male-female ratio of credited actors in the films of Aparna Sen(b. 1945).
Data source: IMDb. All actors listed on IMDb are included. See the gender division in Satyajit Ray's films [here](https://observablehq.com/@rbhttchr/theworldofraypic2). Hover on a node to see the name of the actor.
<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`|<svg width="12" height="12" viewBox="-6 -6 12 12"><circle r="40" fill="#DBA506"></svg> = female actor| |<svg width="12" height="12" viewBox="-6 -6 12 12"><circle r="40" fill="#000000"></circle></svg> = male actor| `
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer("chart")).define("chart", ["pack","data","d3","width","height","DOM","circle","autoBox"], function(pack,data,d3,width,height,DOM,circle,autoBox)
{
  const root = pack(data);

  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height])
      .style("font", "12px sans-serif")
      .style("overflow", "visible")
      .attr("text-anchor", "middle");

  const node = svg.append("g")
      .attr("pointer-events", "all")
    .selectAll("g")
    .data(root.descendants().slice(0))
    .join("g")
      .attr("transform", d => `translate(${d.x},${d.y})`);
  
 const values = ["none", "Male", "Female"]
 const colors2 = ["#ffffff","#000000", "#DBA506"]
   
 const getColorByGender = d3.scaleOrdinal()
        .domain(values)
        .range(colors2);

  node.append("path")
      .attr("id", d => (d.circleUid = DOM.uid("circle")).id)
      .attr("d", d => circle(d.r + 6))
      .attr("display", "none");

  node.append("circle")
      .attr("r", d => d.r)
      .attr("stroke", d => d.height > 1 ? "#ccc" : null)
      .attr("fill", d => getColorByGender(d.data.gender));
    

  node.filter(d => d.children).append("text")
      .attr("fill", "#000000")
    .append("textPath")
      .attr("xlink:href", d => d.circleUid.href)
      .attr("startOffset", "50%")
      .text(d => d.data.name);
  
 node.append("title")
      .attr("fill", "#000000")
      .style("font", "12px sans-serif")
      .text(d => d.data.name);
/*
  node.filter(d => d.height).append("title")
          .attr("fill", "#000000")
          .text(d => d.data.name);
         .text(d => `${d.ancestors().slice(0).map(d => d.data.name).reverse().join("/")}\n${format(d.value)}`);*/

  return svg.attr("viewBox", autoBox).node();
}
);
  main.variable(observer("chart2")).define("chart2", ["d3","width","height"], function(d3,width,height)
{
  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height]);


return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`---

## Appendix
<br>
`
)});
  main.variable(observer("data")).define("data", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("Aparna_Sen_actor_mod@1.json").json()
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
750
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
