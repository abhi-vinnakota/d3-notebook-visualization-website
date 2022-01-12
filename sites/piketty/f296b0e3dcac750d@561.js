import define1 from "./a33468b95d0b15b0@808.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["pikLong.csv",new URL("./files/cebe1a368bf7533317e3ed738ca71c6e44859e06cf6dcde8b028b4d0c41862c6b81e8aecfab011e582649103aaa97ac028a93e046525ed8eddc28575fc1dda74",import.meta.url)],["pikUSA_converted.csv",new URL("./files/950cb1d4785248d5e54aca74b44c3899224531f4de65bbb961a01c577ecfdc01b7ed4acb43ae01cc06abd6389eb54a0631699687d94bc682efaf9ffc9cfddd3c",import.meta.url)],["worldOutputLong.csv",new URL("./files/497690d9335c5ab1f6cbaa19dfa76d312aa6635e3b78b284efa741ad85a05a8b5d72ad801f2ccb063b06036f52d9089c4f372d4e84dd96b63a4bafa1395e61ee",import.meta.url)],["Ch1_worldoutputBillionEuros.csv",new URL("./files/bcfe66baf840b83a40a8292b08199958bf47da5604f3d8657474e5ad0a609b407269a3583a25981f601aaa7d9bfff12785ce49d6b09829d7b32d43d50001d22e",import.meta.url)],["WorldOutputDetail.csv",new URL("./files/373acc566fff69c38e5f62eed3405c73942c7a863b47927aaaabc43e6bd25372224879e17e05ae98f8299d45c547a0dbbc7ebcdcd7e559da660ef65dba337793",import.meta.url)],["worldOutputDetailLongNoTotal@1.csv",new URL("./files/dee6eb7953fb7f118860c8afa643e46930b2c02b606fb34ef1f9687be62b9de419b62e036f3b12a76ea61fd999bc40203162b49ba5d6048f7c2b7d827f0d56cf",import.meta.url)],["pikWeuros.csv",new URL("./files/c5096b243502effc9ac2403bf0f62b214aa176ab272ebf5cc48287822212c1f2944bce4da112745f2dad73882c01aa9c07723ffb9eee1336451e75f5e6cd7039",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# *from* Piketty: Capital in the 21st Century  
<br>
*Capital in the Twenty-First Century* (French: *Le Capital au XXIe siècle*) is the magnum opus of the French economist Thomas Piketty. It focuses on wealth and income inequality in Europe and the United States since the 18th century. 
The book's central thesis is that when the rate of return on capital (r) is greater than the rate of economic growth (g) over the long term, the result is concentration of wealth, and this unequal distribution of wealth causes social and economic instability. Piketty proposes a global system of progressive wealth taxes to help reduce inequality and avoid the vast majority of wealth coming under the control of a tiny minority.
[Source: [Wikipedia](https://en.wikipedia.org/wiki/Capital_in_the_Twenty-First_Century)]

*This notebook is based on data and graphs from the English translation of the book.  I have adhered to the original styles of graphs in Piketty's book and website as much as possible.*
<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`











`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
<simple-greeting name="Income Inequality in the US: 1910-2010"></simple-greeting>     
The top decile share in U.S. national income dropped from 45-50% in the 1910s-1920s to less than 35% in the 1950s.  It then rose from less than 35% in the 1970s to 45-50% in the 2000s-2010s.
<br>`
)});
  main.variable(observer()).define(["Plot","formatYear","usa"], function(Plot,formatYear,usa){return(
Plot.plot({
  width: 1000,
  height: 600,
  marginBottom: 80,
  marginTop: 50,
  marginLeft: 50,
  marginRight: 30,
  y: {
    grid: true,
    domain: [25, 50],
    ticks: 6,
    label: "Share of top decile in percentage of national income"
  },
  x: {
    ticks: [1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010],
    tickFormat: formatYear,
    //domain: [1910, 2010],
    //ticks: [11],
    // domain: usa.map((d) => d.year),
    tickRotate: 45,
    label:
      "The top decile income share in the United States  (included capital gains) , 1910-2010"
  },

  marks: [
    Plot.lineY(usa, { x: "year", y: "percent", stroke: "#000000" }),
    Plot.dot(usa, {
      x: "year",
      y: "percent",
      r: 5,
      fill: "#000000",
      title: (d) => `USA,\n${d.year},\n${d.percent}%`
    })
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
md`--------------------`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
<simple-greeting name="Inequality in Europe: Private Capital as % of National Income, 1870-2010"></simple-greeting>     
Aggregate private wealth was worth about 6-7 years of national income in Europe in 1910, between 2 and 3 years in 1950, and between 4 and 6 years in 2010.  
Sources and series: see piketty.pse.ens.fr/capital21c. 
<br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<svg width="14" height="14" viewBox="-6 -6 14 14"><circle r="40" fill="#4e79a7"></svg> Britain &nbsp;   &nbsp;   
<svg width="14" height="14" viewBox="-6 -6 14 14"><circle r="40" fill="#f28e2c"></circle></svg> France   &nbsp;&nbsp;
<svg width="14" height="14" viewBox="-6 -6 14 14"><circle r="40" fill="#e15759"></circle></svg> Germany  `
)});
  main.variable(observer()).define(["Plot","data"], function(Plot,data){return(
Plot.plot({
  width: 1000,
  height: 600,
  marginBottom: 80,
  marginTop: 25,
  marginLeft: 50,
  y: {
    grid: true,
    domain: [100, 800],
    ticks: 8,
    label: "Market value of private capital ( as % of national income)"
  },
  x: {
    domain: data.map((d) => d.year),
    tickRotate: 45,
    label:
      "The top decile income share in the United States  (included capital gains) , 1910-2010"
  },

  marks: [
    Plot.lineY(data, { x: "year", y: "value", stroke: "country" }),
    Plot.dot(data, {
      x: "year",
      y: "value",
      r: 5,
      fill: "country",
      title: (d) => `${d.country}\n${d.year}\n${d.value}\%`
    })
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
md`



`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
<simple-greeting name="Distribution of World Output: Year 0-2012"></simple-greeting>     
Piketty based his calculations on Angus Maddison's historical series, "Historical statistics of the world economy 1-2008" (February 2010) and on official series from the UN and the World Bank for the period 1990-2012 (October 2012). Russia was included in Europe and former Central Asian Republiques and Oceania in Asia.  
Sources and series: see piketty.pse.ens.fr/capital21c. 
<br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<svg width="14" height="14" viewBox="-6 -6 14 14"><circle r="40" fill="#57C4E5"></svg> Europe   &nbsp;&nbsp;    
<svg width="14" height="14" viewBox="-6 -6 14 14"><circle r="40" fill="#212738"></circle></svg> America   &nbsp;&nbsp;
<svg width="14" height="14" viewBox="-6 -6 14 14"><circle r="40" fill="#F97068"></circle></svg> Africa  &nbsp;&nbsp;
<svg width="14" height="14" viewBox="-6 -6 14 14"><circle r="40" fill="#D1D646"></circle></svg> Asia`
)});
  main.variable(observer()).define(["Plot","formatYear","wOutputPercent"], function(Plot,formatYear,wOutputPercent){return(
Plot.plot({
  marginBottom: 50,
  marginTop: 30,
  marginLeft: 50,
  width: 1000,
  height: 500,

  x: {
    tickFormat: formatYear,
    tickRotate: 45,
    label: "Year"
  },
  color: {
    domain: ["Europe", "America", "Africa", "Asia"],
    range: ["#57C4E5", "#212738", "#F97068", "#D1D646"]
  },
  y: {
    grid: true,
    label: "Percentage of World Output"
  },
  marks: [
    Plot.areaY(wOutputPercent, {
      x: "year",
      y: "output",
      fill: (d) => d.country,
      title: (d) => d.country
    }),
    Plot.lineY(
      wOutputPercent,
      Plot.stackY1({
        x: "year",
        y: "output",
        z: "country",
        stroke: "white",
        strokeWidth: 2
      })
    ),
    Plot.ruleY([0])
  ]
})
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
Here is the above dataset in tabular form, and in **billion of euros**.
<br>`
)});
  main.variable(observer()).define(["Inputs","wOutpuBillionEuros"], function(Inputs,wOutpuBillionEuros){return(
Inputs.table(wOutpuBillionEuros, {
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




`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`------------------------`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
<simple-greeting name="Distribution of World Output in Detail: Year 0-2012, Normalized View"></simple-greeting>     
Piketty based his calculations on Angus Maddison's historical series, "Historical statistics of the world economy 1-2008" (February 2010) and on official series from the UN and the World Bank for the period 1990-2012 (October 2012). 
Sources and series: see piketty.pse.ens.fr/capital21c.   

*The colors are coded according to Piketty's grouping of regions.   *
<br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<svg width="14" height="14" viewBox="-6 -6 14 14"><circle r="40" fill="#BBE7F4"></svg> Western Europe   &nbsp;&nbsp;    
<svg width="14" height="14" viewBox="-6 -6 14 14"><circle r="40" fill="#3C89A0"></circle></svg> Eastern Europe   &nbsp;&nbsp;
<svg width="14" height="14" viewBox="-6 -6 14 14"><circle r="40" fill="#67C9E7"></circle></svg> Russia (+Ukraine/ Belarus/ Moldavia)  &nbsp;&nbsp;
 <svg width="14" height="14" viewBox="-6 -6 14 14"><circle r="40" fill="#a2a3a4"></svg> North America   &nbsp;&nbsp;    
<svg width="14" height="14" viewBox="-6 -6 14 14"><circle r="40" fill="#1D2332"></circle></svg> Latin America   &nbsp;&nbsp;
<svg width="14" height="14" viewBox="-6 -6 14 14"><circle r="40" fill="#FCC5C2"></circle></svg> Northern Africa  &nbsp;&nbsp;
  <svg width="14" height="14" viewBox="-6 -6 14 14"><circle r="40" fill="#95433E"></svg> Sub-Saharan Africa   &nbsp;&nbsp;    
<svg width="14" height="14" viewBox="-6 -6 14 14"><circle r="40" fill="#686A23"></circle></svg> China   &nbsp;&nbsp;
<svg width="14" height="14" viewBox="-6 -6 14 14"><circle r="40" fill="#D5DA58"></circle></svg> India  &nbsp;&nbsp;
  <svg width="14" height="14" viewBox="-6 -6 14 14"><circle r="40" fill="#008000"></svg> Japan   &nbsp;&nbsp;    
<svg width="14" height="14" viewBox="-6 -6 14 14"><circle r="40" fill="#4B46D6"></circle></svg> Australia/NZ   &nbsp;&nbsp;
<svg width="14" height="14" viewBox="-6 -6 14 14"><circle r="40" fill="#FEEE85"></circle></svg> Middle East (incl. Turkey)  &nbsp;&nbsp;
  <svg width="14" height="14" viewBox="-6 -6 14 14"><circle r="40" fill="#B79E01"></svg> Central Asia   &nbsp;&nbsp;    
<svg width="14" height="14" viewBox="-6 -6 14 14"><circle r="40" fill="#FFF7C2"></circle></svg> Other Asian countries   &nbsp;&nbsp;
`
)});
  main.variable(observer()).define(["Plot","formatYear","wDetailLong"], function(Plot,formatYear,wDetailLong)
{
  const xy = {
    x: "year",
    y: "value",
    z: "variable",
    offset: "expand"
    //order: "appearance"
  };
  return Plot.plot({
    width: 1200,
    height: 800,
    marginTop: 30,
    marginBottom: 80,
    marginLeft: 30,
    x: {
      tickRotate: 45,
      tickFormat: formatYear,
      label: "Year"
    },

    color: {
      domain: [
        "Western Europe",
        "Eastern Europe",
        "Russia (+Ukraine/ Belarus/ Moldavia)",
        "North America",
        "Latin America",
        "Northern Africa",
        "Sub-Saharan Africa",
        "China",
        "India",
        "Japan",
        "Australia/NZ",
        "Middle East (incl. Turkey)",
        "Central Asia",
        "Other Asian countries"
      ],
      range: [
        "#BBE7F4",
        "#3C89A0",
        "#67C9E7",
        "#a2a3a4",
        "#1D2332",
        "#FCC5C2",
        "#95433E",
        "#686A23",
        "#D5DA58",
        "#008000",
        "#4B46D6",
        "#FEEE85",
        "#B79E01",
        "#FFF7C2"
      ]
    },
    //  x: { domain: [1757, 1947] },
    y: {
      grid: true,
      label: "↑ Output of each region as percentage of World Ouput",
      percent: true
    },
    marks: [
      Plot.areaY(
        wDetailLong,
        Plot.stackY({
          ...xy,
          fill: (d) => `${d.variable}`,
          title: (d) => `${d.variable}`
        })
      ),
      Plot.lineY(
        wDetailLong,
        Plot.stackY1({ ...xy, stroke: "white", strokeWidth: 2 })
      ),
      Plot.ruleY([0])
    ]
  });
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
<simple-greeting name="Same Data as Above: In Descending Order by Percentage of Global Total"></simple-greeting>     
Note how the order of the regions in terms of their percentage share of world's total output keep changing. 
On the left, the order in 0 C.E.
On the right, the order in 2012 C.E.
Sources and series: see piketty.pse.ens.fr/capital21c.   

*The colors are coded according to Piketty's grouping of regions.   *
<br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["Plot","formatYear","bumpMarks","wDetailLong"], function(Plot,formatYear,bumpMarks,wDetailLong){return(
Plot.plot({
  height: 800,
  width: 1300,
  marginTop: 20,
  marginBottom: 35,
  marginLeft: 250,
  marginRight: 250,
  x: {
    //domain: yearsyears,
    //domain: [1000, 1500, 1700, 1820, 1870, 1913, 1950, 1970, 1990, 2012],
    tickFormat: formatYear,
    label: null
  },
  y: {
    axis: null,
    domain: [14.5, 1]
  },
  color: {
    domain: [
      "Western Europe",
      "Eastern Europe",
      "Russia (+Ukraine/ Belarus/ Moldavia)",
      "North America",
      "Latin America",
      "Northern Africa",
      "Sub-Saharan Africa",
      "China",
      "India",
      "Japan",
      "Australia/NZ",
      "Middle East (incl. Turkey)",
      "Central Asia",
      "Other Asian countries"
    ],
    range: [
      "#BBE7F4",
      "#3C89A0",
      "#67C9E7",
      "#a2a3a4",
      "#1D2332",
      "#FCC5C2",
      "#95433E",
      "#686A23",
      "#D5DA58",
      "#008000",
      "#4B46D6",
      "#FEEE85",
      "#B79E01",
      "#FFF7C2"
    ]
  },
  marks: [
    bumpMarks(wDetailLong, {
      x: "year",
      z: "variable",
      order: (d) => d.value,
      //      order: "value",
      reverse: true
    })
  ]
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
Here is the above dataset in tabular form, and in **billion of euros**.
<br>`
)});
  main.variable(observer()).define(["Inputs","wOutputDetail"], function(Inputs,wOutputDetail){return(
Inputs.table(wOutputDetail, {
  format: {
    Year: (d) => `${d}`
  }
})
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>
<br>
<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`








`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`












`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---------------------`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`









`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`






`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Appendix
<br>`
)});
  main.variable(observer("data")).define("data", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("pikLong.csv").csv({ typed: true })
)});
  main.variable(observer("usa")).define("usa", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("pikUSA_converted.csv").csv({ typed: true })
)});
  main.variable(observer("wOutputPercent")).define("wOutputPercent", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("worldOutputLong.csv").csv({ typed: true })
)});
  main.variable(observer("wOutpuBillionEuros")).define("wOutpuBillionEuros", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("Ch1_worldoutputBillionEuros.csv").csv({
  typed: true
})
)});
  main.variable(observer("wOutputDetail")).define("wOutputDetail", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("WorldOutputDetail.csv").csv({ typed: true })
)});
  main.variable(observer("wDetailLong")).define("wDetailLong", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("worldOutputDetailLongNoTotal@1.csv").csv({
  typed: true
})
)});
  main.variable(observer("wContinentsEuros")).define("wContinentsEuros", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("pikWeuros.csv").csv({ typed: true })
)});
  main.variable(observer("fmt")).define("fmt", ["d3"], function(d3){return(
(n) => d3.format(",d")(n)
)});
  main.variable(observer("formatYear")).define("formatYear", function(){return(
(year) => `${year}`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`<style>svg { font-size: 14px !important }`
)});
  const child1 = runtime.module(define1);
  main.import("swatches", "Swatches", child1);
  main.variable(observer()).define(["md"], function(md){return(
md`greeting block [...`
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
  main.variable(observer()).define(["md"], function(md){return(
md`..... ] greeting block`
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@6")
)});
  main.variable(observer("yearsyears")).define("yearsyears", ["wDetailLong"], function(wDetailLong){return(
new Set(wDetailLong.map(d => d.year))
)});
  main.variable(observer("bumpMarks")).define("bumpMarks", ["Plot"], function(Plot){return(
function bumpMarks(wDetailLong, { r = 5, curve = "bump-x", ...options }) {
  options = Plot.stackY2(options);
  return [
    Plot.line(wDetailLong, {
      ...options,
      stroke: options.z,
      curve,
      fill: null
    }),
    Plot.dot(wDetailLong, {
      ...options,
      fill: options.z,
      r,
      //title: "value"
      title: (d) =>
        `Output of ${d.variable} in ${d.year}: ${d.value} percent of global total.`
    }),
    Plot.text(wDetailLong, {
      fill: options.z,
      dy: -6,
      ...options,
      text: options.y
    }),
    Plot.text(
      wDetailLong,
      Plot.selectFirst({
        ...options,
        text: options.z,
        dx: -(5 + (r || options.strokeWidth / 2)),
        textAnchor: "end",
        fill: "currentColor"
      })
    ),
    Plot.text(
      wDetailLong,
      Plot.selectLast({
        ...options,
        text: options.z,
        dx: 5 + (r || options.strokeWidth / 2),
        textAnchor: "start",
        fill: "currentColor"
      })
    )
  ];
}
)});
  return main;
}
