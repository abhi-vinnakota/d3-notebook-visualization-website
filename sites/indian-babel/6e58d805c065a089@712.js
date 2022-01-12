export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["filmlangs_1931_2019.csv",new URL("./files/dd61795d38c3d4eea9b3dc8ada0ecff129e080ed04d33f4c7d1f79d2b62608983a1a86c8319885fd0c26e180823c1c004c363bf519ed32137bf2b8447a1671b7",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Indian Cinema's Babel
<br>
`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<p>The first 'sound' films were released in India in 1931. Between April 2018 and March 2019, India produced 2,446 films in 55 languages and dialects.</p>The x-axis represents years; the last reported year is 2019. The y-axis represents number of films produced each year. Data: <a href="http://www.filmfed.org/" target="_blank">Film Federation of India</a> and various publications of Ministry of Information and Broadcasting, Government of India.
</p>
<br>`
)});
  main.variable(observer("legend")).define("legend", ["DOM","html","color"], function(DOM,html,color)
{
  const id = DOM.uid().id;
  return html`<style>

.${id} {
  display: block;
  columns: 140px auto;
  font: 10px sans-serif;
  margin-left: 130px;
}

.${id}-item {
  break-inside: avoid;
  display: flex;
  align-items: center;
  padding-bottom: 1px;
}

.${id}-swatch {
  width: 20px;
  height: 20px;
  margin: 0 5px 0 0;
}

</style>
<div class="${id}">${color.domain().map(name => html`
  <div class="${id}-item">
    <div class="${id}-swatch" style="background:${color(name)};"></div>
    ${document.createTextNode(name)}
  </div>`)}
</div>`;
}
);
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer("chart")).define("chart", ["d3","width","height","series","color","area","xAxis","yAxis"], function(d3,width,height,series,color,area,xAxis,yAxis)
{  
  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height]);

  svg.append("g")
    .selectAll("path")
    .data(series)
    .enter()
    .append("path")
      .attr("fill", ({key}) => color(key))
      .attr("d", area)
    .append("title")
      .text(({key}) => key);

  svg.append("g")
      .call(xAxis);

  svg.append("g")
      .call(yAxis);

  return svg.node();
}
);
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>
<hr>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Appendix
<br>`
)});
  main.variable(observer("data")).define("data", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
Object.assign(d3.csvParse(await FileAttachment("filmlangs_1931_2019.csv").text(), d3.autoType), {y: "films"})
)});
  main.variable(observer("series")).define("series", ["d3","data"], function(d3,data){return(
d3.stack().order(d3.stackOrderAscending.text).keys(data.columns.slice(1))(data)
)});
  main.variable(observer("area")).define("area", ["d3","x","y"], function(d3,x,y){return(
d3.area()
    .x(d => x(d.data.Date))
    .y0(d => y(d[0]))
    .y1(d => y(d[1]))
)});
  main.variable(observer("x")).define("x", ["d3","margin","width"], function(d3,margin,width){return(
d3.scalePoint()
    .domain([1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019])
    .range([margin.left, width - margin.right])
)});
  main.variable(observer("y")).define("y", ["d3","series","height","margin"], function(d3,series,height,margin){return(
d3.scaleLinear()
    .domain([0, d3.max(series, d => d3.max(d, d => d[1]))]).nice()
    .range([height - margin.bottom, margin.top])
)});
  main.variable(observer("color")).define("color", ["d3","data"], function(d3,data){return(
d3.scaleOrdinal()
    .domain(data.columns.slice(1))
    .range(d3.schemeCategory10)
)});
  main.variable(observer("xAxis")).define("xAxis", ["height","margin","d3","x"], function(height,margin,d3,x){return(
g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x)
    .tickValues(x.domain())
    .tickFormat((interval,i) => {
        return i%8 !== 0 ? " ": interval;
       })
    .tickSizeOuter(0))
)});
  main.variable(observer("yAxis")).define("yAxis", ["margin","d3","y","data"], function(margin,d3,y,data){return(
g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove())
    .call(g => g.select(".tick:last-of-type text").clone()
        .attr("x", 3)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(data.y))
)});
  main.variable(observer("width")).define("width", function(){return(
800
)});
  main.variable(observer("height")).define("height", function(){return(
600
)});
  main.variable(observer("margin")).define("margin", function(){return(
{top: 20, right: 30, bottom: 30, left: 40}
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@5")
)});
  return main;
}
