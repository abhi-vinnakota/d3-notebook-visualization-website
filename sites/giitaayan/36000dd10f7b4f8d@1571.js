import define1 from "./a33468b95d0b15b0@808.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["LataByGaneshKhare@3.jpeg",new URL("./files/aa7c28f7cf3e9d100ec243e80e2735947f9dcb2873fa9daffefe99133772d0bd9b51dd5d7f9ea2cbb3b1f22c27c210a1fc3c6b391caf5e528b613fa9338510f0",import.meta.url)],["giitaayanW@2.csv",new URL("./files/0f91afee9fbc0d29c0923d19e23bab84577f93a9866d5aaa0f1dd2f97bc37cfd01dc776047f438cde79971aa78f432a82c329276249016cde123c7740a729acd",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Giitaayan Archive of Hindi Film Music   
<br>
## Visualized
<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The Giitaayan Archive (https://www.giitaayan.com) holds the lyrics and all available metadata of about 10,000 songs. This notebook contains a subset of the metadata. Songs that are unambiguously identified as (Indian) Hindi Film Songs are included in this notebook, with the first line, lyricist, music directors, film, and the singers. the dataset has been reasonably cleaned after being collected from Giitaayan, with some periodic cleanings and corrections on an ongoing basis.  
<br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<style>
.round {
  display: inline-block;  
  border: 4px solid black; border-radius: 2rem;
  padding: 1rem 1.5rem; 
  margin-bottom: 1rem;
  background-color: white;
  text-decoration: none; 
  font-size: 20px;
  color: black;
  text-align:center;
  font-family: "Georgia";  
}
.round:hover {
  background-color: black;
  color: white;
}
</style>
<p class="round"><i>Each line a song .... </i></p>  

<br>`
)});
  main.variable(observer()).define(["Plot","d3","giitaayanW"], function(Plot,d3,giitaayanW){return(
Plot.plot({
  height: 800,
  width: 1000,
  marginBottom: 50,
  //  marginTop: 50,
  marginRight: 50,
  marginLeft: 50,
  color: {
    range: d3.schemeDark2
      .concat(d3.schemePastel2)
      .concat(d3.schemeCategory10)
      .concat(d3.schemeTableau10)
      .concat(d3.schemePastel1)
  },
  x: {
    tickFormat: (d) => `${d}`,
    tickRotate: 45
  },
  y: {
    grid: true,
    label: "Number of Songs",
    labelAnchor: "center"
  },
  marks: [
    Plot.rectY(
      giitaayanW,
      Plot.binX(
        { y: "count", title: "first" },
        {
          rx: 15,
          x: "Year",
          fill: "Song",
          title: (d) => `${d.Song}: ${d.Film}`
        }
      )
    ),
    Plot.ruleY([0, 1])
  ]
})
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
The chart above is a visualization of all songs on the *Giitaayan* database. This does not do anything more than give us a glimpse of the enormity of this dataset. **Hover** over each line to see the title of the song and the film and the year.  
The dataset becomes more interesting when we can peer into the distribution of people behind those songs: the composers, lyricists, and of course, the singers.  
In that spirit, the next graphs show ....
<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`-----------------------`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<style>
.round {
  display: inline-block;  
  border: 4px "#DDCCE4"; border-radius: 2rem;
  padding: 1rem 1.5rem; 
  margin-bottom: 1rem;
  background-color: white;
  text-decoration: none; 
  font-size: 20px;
  color: "#DDCCE4";
  text-align:center;
  font-family: "Georgia";  
}
.round:hover {
  background-color: "#DDCCE4";
  color: white;
}
</style>
<p class="round"><i>Each block a Composer ... </i></p>
<br>`
)});
  main.variable(observer()).define(["Plot","giitaayanW"], function(Plot,giitaayanW){return(
Plot.plot({
  //style: "background-color:#ccc",
  height: 800,
  width: 1000,
  marginBottom: 50,
  marginTop: 50,
  marginRight: 50,
  marginLeft: 50,
  color: {
    scheme: "PuRd",
    quantiles: 50
  },
  x: {
    tickFormat: (d) => `${d}`,
    tickRotate: 45
  },
  y: {
    grid: true,
    label: "Number of Songs",
    labelAnchor: "center"
  },
  marks: [
    Plot.rectY(
      giitaayanW,
      Plot.stackY(
        { order: "sum", reverse: true },
        Plot.binX(
          { y: "count", title: (v) => `${v[0].Composer}: ${v.length}` },
          { rx: 10, x: "Year", fill: "Composer" }
        )
      )
    ),

    Plot.ruleY([0, 1])
  ]
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
This is the same dataset above, but this graph has each block representing a composer. Clearly, there is a minority of major composers. The next graph separates those composers who have more than **100** songs in the dataset.
<br>`
)});
  main.variable(observer("Complot")).define("Complot", ["Plot","Comp100plus","d3"], function(Plot,Comp100plus,d3){return(
Plot.plot({
  height: 800,
  width: 1000,
  marginBottom: 150,
  marginTop: 30,
  marginRight: 50,
  marginLeft: 50,
  color: {
    scheme: "PuRd",
    reverse: true
    // range: d3.schemeDark2.concat(d3.schemeSet3)
  },
  x: {
    tickRotate: 45,
    label: null,
    domain: Comp100plus.sort((a, b) => d3.descending(a.Count, b.Count)).map(
      (d) => d.Composer
    )
  },
  y: {
    grid: true,
    nice: true,
    label: "Number of songs"
  },

  marks: [
    Plot.barY(
      Comp100plus,

      {
        y: "Count",
        x: "Composer",
        fill: "Composer",
        order: (a, b) => d3.descending(a.Count, b.Count),
        title: (d) => `${d.Composer}: ${d.Count} songs in the database`
      }
    ),

    Plot.ruleY([0])
  ]
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
Choose a composer below to see the output:
<br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer("viewof composer")).define("viewof composer", ["Inputs","giitaayanW"], function(Inputs,giitaayanW){return(
Inputs.select(
  giitaayanW.map((d) => d.Composer),
  {
    sort: true,
    unique: true,
    label: "Choose a composer",
    value: "R D Burman"
  }
)
)});
  main.variable(observer("composer")).define("composer", ["Generators", "viewof composer"], (G, _) => G.input(_));
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["Inputs","selectedcomposers"], function(Inputs,selectedcomposers){return(
Inputs.table(selectedcomposers, {
  format: {
    Year: (d) => `${d}`
  }
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
And just for fun, a word cloud that shows the composers sized according to the number of their compositions.
<br>`
)});
  main.variable(observer("chartC")).define("chartC", ["require","dataC","invalidation"], async function(require,dataC,invalidation)
{
  const d3 = Object.assign(await require("d3@6"), {
    cloud: await require("d3-cloud@1")
  });
  const fontFamily = "sans-serif";
  const fontScale = 1.5;
  const rotate = () => 0; // () => (~~(Math.random() * 6) - 3) * 30
  const padding = 0;
  const height = 400;
  const width = 700;

  const svg = d3
    .create("svg")
    .style("background-color", "rgb(221, 204, 228)")
    .attr("viewBox", [0, 0, width, height])
    .attr("font-family", fontFamily)
    .attr("text-anchor", "middle");

  const cloud = d3
    .cloud()
    .size([width, height])
    .words(dataC.map((d) => Object.create(d)))
    .padding(padding)
    .rotate(rotate)
    .font(fontFamily)
    .fontSize((d) => Math.sqrt(d.value) * fontScale)
    .on("word", ({ size, x, y, rotate, text }) => {
      svg
        .append("text")
        .attr("font-size", size)
        .attr("transform", `translate(${x},${y}) rotate(${rotate})`)
        .text(text);
    });

  cloud.start();
  invalidation.then(() => cloud.stop());
  return svg.node();
}
);
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>
<style>
.round {
  display: inline-block;  
  border: 4px solid black; border-radius: 2rem;
  padding: 1rem 1.5rem; 
  margin-bottom: 1rem;
  background-color: white;
  text-decoration: none; 
  font-size: 20px;
  color: black;
  text-align:center;
  font-family: "Georgia";  
}
.round:hover {
  background-color: black;
  color: white;
}
</style>
<p class="round"><i>Each block a Lyricist ... </i></p>
<br>`
)});
  main.variable(observer()).define(["Plot","giitaayanW"], function(Plot,giitaayanW){return(
Plot.plot({
  //style: "background-color:#000",
  height: 800,
  width: 1000,
  marginBottom: 50,
  marginTop: 50,
  marginRight: 50,
  color: { scheme: "YlGn" },
  x: {
    tickFormat: (d) => `${d}`,
    tickRotate: 45
  },
  y: {
    grid: true,
    label: "Number of Songs"
  },
  marks: [
    Plot.rectY(
      giitaayanW,
      Plot.stackY(
        { order: "sum", reverse: true },
        Plot.binX(
          { y: "count", title: (v) => `${v[0].Lyricist}: ${v.length}` },
          { rx: 5, x: "Year", fill: "Lyricist" }
        )
      )
    ),
    Plot.ruleY([0, 1])
  ]
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
This is the same dataset as above, but this graph has each block representing a **lyricist**. The distribution of songs among lyricists is different from the composers' graph; there is more of a concentration of lyricists with **> 50 < 100** songs. The graph below shows the lyricists with  50+ songs. There is an empty column between Kaifi Azmi and Anjaan with 95 songs whose lyricists are not known.
<br>`
)});
  main.variable(observer("Lyrplot")).define("Lyrplot", ["Plot","Lyr50plus","d3"], function(Plot,Lyr50plus,d3){return(
Plot.plot({
  height: 800,
  width: 1000,
  marginBottom: 150,
  marginTop: 30,
  marginRight: 50,
  marginLeft: 50,
  color: {
    scheme: "YlGn",
    reverse: true
  },
  x: {
    tickRotate: 45,
    label: null,
    domain: Lyr50plus.sort((a, b) => d3.descending(a.Count, b.Count)).map(
      (d) => d.Lyricist
    )
  },
  y: {
    grid: true,
    nice: true,
    label: "Number of songs"
  },

  marks: [
    Plot.barY(
      Lyr50plus,

      {
        y: "Count",
        x: "Lyricist",
        fill: "Lyricist",
        order: (a, b) => d3.descending(a.Count, b.Count),
        title: (d) => `${d.Lyricist}: ${d.Count} songs in the database`
      }
    ),

    Plot.ruleY([0])
  ]
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
Choose a lyricist below to see the output:
<br>`
)});
  main.variable(observer("viewof lyricist1")).define("viewof lyricist1", ["Inputs","giitaayanW"], function(Inputs,giitaayanW){return(
Inputs.select(
  giitaayanW.map((d) => d.Lyricist),
  {
    sort: true,
    unique: true,
    label: "Choose a lyricist",
    value: "Anand Bakshi"
  }
)
)});
  main.variable(observer("lyricist1")).define("lyricist1", ["Generators", "viewof lyricist1"], (G, _) => G.input(_));
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["Inputs","selectedlyricists1"], function(Inputs,selectedlyricists1){return(
Inputs.table(selectedlyricists1, {
  format: {
    Year: (d) => `${d}`
  }
})
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer("chartL")).define("chartL", ["require","dataL","invalidation"], async function(require,dataL,invalidation)
{
  const d3 = Object.assign(await require("d3@6"), {
    cloud: await require("d3-cloud@1")
  });
  const fontFamily = "sans-serif";
  const fontScale = 1.5;
  const rotate = () => 0; // () => (~~(Math.random() * 6) - 3) * 30
  const padding = 0;
  const height = 400;
  const width = 700;

  const svg = d3
    .create("svg")
    .style("background-color", "rgb(250, 253, 205)")
    .attr("viewBox", [0, 0, width, height])
    .attr("font-family", fontFamily)
    // .attr("stroke", "rgb(0, 69, 41)")
    // .attr("fill", "rgb(0, 69, 41)")
    .attr("text-anchor", "middle");

  const cloud = d3
    .cloud()
    .size([width, height])
    .words(dataL.map((d) => Object.create(d)))
    .padding(padding)
    .rotate(rotate)
    .font(fontFamily)
    .fontSize((d) => Math.sqrt(d.value) * fontScale)
    .on("word", ({ size, x, y, rotate, text }) => {
      svg
        .append("text")
        .attr("font-size", size)
        .attr("transform", `translate(${x},${y}) rotate(${rotate})`)
        .text(text);
    });

  cloud.start();
  invalidation.then(() => cloud.stop());
  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
<simple-greeting name="A star-centric system: a small majority of Music Directors and Lyricists"></simple-greeting>  
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
<style>
.round {
  display: inline-block;  
  border: 4px solid black; border-radius: 2rem;
  padding: 1rem 1.5rem; 
  margin-bottom: 1rem;
  background-color: white;
  text-decoration: none; 
  font-size: 20px;
  color: black;
  text-align:center;
  font-family: "Georgia";  
}
.round:hover {
  background-color: black;
  color: white;
}
</style>
<p class="round"><i>Collaborations ... </i></p>
<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
Here you can select a lyricist and a composer and see how many times they worked together.
<br>`
)});
  main.variable(observer("viewof lyricist")).define("viewof lyricist", ["Inputs","giitaayanW"], function(Inputs,giitaayanW){return(
Inputs.select(
  giitaayanW.map((d) => d.Lyricist),
  {
    sort: true,
    unique: true,
    label: "Lyricist",
    value: "Anand Bakshi"
  }
)
)});
  main.variable(observer("lyricist")).define("lyricist", ["Generators", "viewof lyricist"], (G, _) => G.input(_));
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer("viewof composer2")).define("viewof composer2", ["Inputs","selectedlyricists","lyricist"], function(Inputs,selectedlyricists,lyricist){return(
Inputs.select(
  selectedlyricists.map((d) => d.Composer),
  {
    sort: true,
    unique: true,
    value: "Laxmikant-Pyarelal",
    label: `Composers working with ${lyricist}`
  }
)
)});
  main.variable(observer("composer2")).define("composer2", ["Generators", "viewof composer2"], (G, _) => G.input(_));
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["Inputs","selectedcomposer2"], function(Inputs,selectedcomposer2){return(
Inputs.table(selectedcomposer2, {
  format: {
    Year: (d) => `${d}`
  }
})
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`<br>
<style>
.round {
  display: inline-block;  
  border: 4px solid black; border-radius: 2rem;
  padding: 1rem 1.5rem; 
  margin-bottom: 1rem;
  background-color: white;
  text-decoration: none; 
  font-size: 20px;
  color: black;
  text-align:center;
  font-family: "Georgia";  
}
.round:hover {
  background-color: black;
  color: white;
}
</style>
<p class="round"><i>The Legend of Lata ..... </i></p> <figure><img src="${await FileAttachment("LataByGaneshKhare@3.jpeg").url()}"  alt="Lata Mangeshkar" width="150" height="auto"></figure> 
<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
<div style="columns:2;-webkit-columns:2;-moz-columns:2;column-gap:3em;-webkit-column-gap:3em;-moz-column-gap:3em">
**Lata Mangeshkar** (b. 1929) is the most prolific singer who has recorded songs in dozens of languages, and has received numerous awards and honors, including the Bharat Ratna (Government of India, 2001) and the Legion of Honour (France, 2007). Here is a link to her [wikipedia page](https://en.wikipedia.org/wiki/Lata_Mangeshkar).   
The Giitaayan database contains **2,172** songs that have Lata Mangeshkar as a **solo** or **duet** singer.   
*Image: Drawing by Ganesh Khare, from the web.*
</div>
<br>`
)});
  main.variable(observer()).define(["Plot","latalata"], function(Plot,latalata){return(
Plot.plot({
  height: 500,
  width: 1200,
  marginTop: 50,
  marginBottom: 50,
  color: {
    scheme: "Blues",
    reverse: true
  },
  y: {
    grid: true,
    label: null
  },

  x: {
    tickFormat: (d) => `${d}`,
    label: "Year",
    tickRotate: 45
  },
  marks: [
    Plot.rectY(
      latalata,
      Plot.binX(
        { y: "count", title: "first" },
        {
          rx: 50,
          x: "Year",
          fill: "Song",
          title: (d) => `${d.Film}: ${d.Song}`
        }
      ),
      {}
    )
  ]
})
)});
  main.variable(observer("lataplot")).define("lataplot", ["Plot","singer"], function(Plot,singer){return(
Plot.plot({
  width: 1200,
  height: 700,
  marginBottom: 50,
  marginTop: 50,
  y: {
    grid: true,
    label: null
  },
  x: {
    tickFormat: (d) => `${d}`,
    tickRotate: 45,
    label: null
  },
  color: {
    domain: ["Lata"],
    unknown: "black"
  },
  marks: [
    Plot.barY(
      singer,
      Plot.groupX(
        { y: "count", title: "first" },
        { x: "Year", fill: "Singer", title: "Singer" }
      )
    ),
    Plot.ruleY([0])
  ]
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
Choose a singer below to see the number of songs, and then the list of songs. After **Lata**, **Rafi** has the highest number of songs.
<br>`
)});
  main.variable(observer("viewof singerChooseOne")).define("viewof singerChooseOne", ["Inputs","singer"], function(Inputs,singer){return(
Inputs.select(
  singer.map((d) => d.Singer),
  {
    sort: true,
    unique: true,
    label: "Singer",
    value: "Rafi"
  }
)
)});
  main.variable(observer("singerChooseOne")).define("singerChooseOne", ["Generators", "viewof singerChooseOne"], (G, _) => G.input(_));
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["Inputs","selectedsingerChooseOneCount"], function(Inputs,selectedsingerChooseOneCount){return(
Inputs.table(selectedsingerChooseOneCount, {
  columns: ["Singer", "Count"],
  format: {
    Year: (d) => `${d}`
  }
})
)});
  main.variable(observer()).define(["Inputs","selectedsingerChooseOne"], function(Inputs,selectedsingerChooseOne){return(
Inputs.table(selectedsingerChooseOne, {
  columns: ["Decade", "Song", "Film", "Year", "Composer", "Lyricist", "Singer"],
  format: {
    Year: (d) => `${d}`
  }
})
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
<style>
.round {
  display: inline-block;  
  border: 4px solid black; border-radius: 2rem;
  padding: 1rem 1.5rem; 
  margin-bottom: 1rem;
  background-color: white;
  text-decoration: none; 
  font-size: 20px;
  color: black;
  text-align:center;
  font-family: "Georgia";  
}
.round:hover {
  background-color: black;
  color: white;
}
</style>
<p class="round"><i>Explore the Archive: A General MESSY Search</i></p>  
***Type a word or a phrase*** and ***see the results visualized*** below, and further down, in tabular format.  Please note that this is a simple 'text search', that is, typing in 'dil' will search for both 'dil', 'dilbar', and 'dildaar'. 
<br>`
)});
  main.variable(observer("viewof search")).define("viewof search", ["Inputs","giitaayanW"], function(Inputs,giitaayanW){return(
Inputs.search(giitaayanW, {
  placeholder: "Type in a word or phrase"
})
)});
  main.variable(observer("search")).define("search", ["Generators", "viewof search"], (G, _) => G.input(_));
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["search"], function(search){return(
search
)});
  main.variable(observer()).define(["Plot","search"], function(Plot,search){return(
Plot.plot({
  height: 500,
  width: 1200,
  marginTop: 50,
  marginBottom: 50,
  color: {
    scheme: "Viridis"
  },

  x: {
    tickFormat: (d) => `${d}`,
    label: "Year",
    tickRotate: 45
  },
  marks: [
    Plot.rectY(
      search,
      Plot.binX(
        { y: "count", title: (bin) => bin.map((d) => d.Song) },
        { rx: 50, x: "Year", fill: "Song" }
      ),
      {}
    )
  ]
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
See the **search** results in **tabular** format.
<br>`
)});
  main.variable(observer()).define(["Inputs","search"], function(Inputs,search){return(
Inputs.table(search, {
  format: {
    Year: (d) => `${d}`
  }
})
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>
<br>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### And here is the entire *current* dataset, for browsing...
<br>`
)});
  main.variable(observer()).define(["Inputs","giitaayanW"], function(Inputs,giitaayanW){return(
Inputs.table(giitaayanW, { format: { Year: (d) => `${d}` } })
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
There's a lot more to an extended version of this dataset, including the texts of the songs, the actors who 'sang' the songs on screen, etc. Those are all on my TODO list, for the future...`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<hr>
<br>
<br>
<br>
<br>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Appendix`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`<style>svg { font-size: 14px !important }`
)});
  const child1 = runtime.module(define1);
  main.import("swatches", "Swatches", child1);
  main.variable(observer("giitaayanW")).define("giitaayanW", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("giitaayanW@2.csv").csv({ typed: true })
)});
  main.variable(observer("Comp")).define("Comp", ["d3","giitaayanW"], function(d3,giitaayanW){return(
d3.flatRollup(
  giitaayanW,
  (v) => v.length,
  (d) => d.Composer,
  (d) => d.Decade
)
)});
  main.variable(observer("CompAllDecades")).define("CompAllDecades", ["d3","giitaayanW"], function(d3,giitaayanW){return(
d3.flatRollup(
  giitaayanW,
  (v) => v.length,
  (d) => d.Composer
)
)});
  main.variable(observer("CompMapped")).define("CompMapped", ["Comp","d3"], function(Comp,d3){return(
Comp.map(([Composer, Decade, Count]) => ({
  Composer,
  Decade,
  Count
})).sort(d3.descending)
)});
  main.variable(observer("Comp100plus")).define("Comp100plus", ["CompAllDecades"], function(CompAllDecades){return(
CompAllDecades.map(([Composer, Count]) => ({
  Composer,
  Count
})).filter((d) => d.Count > 100)
)});
  main.variable(observer("Compcolor")).define("Compcolor", ["Complot"], function(Complot){return(
Complot.scale("color")
)});
  main.variable(observer("Lyr")).define("Lyr", ["d3","giitaayanW"], function(d3,giitaayanW){return(
d3.flatRollup(
  giitaayanW,
  (v) => v.length,
  (d) => d.Lyricist,
  (d) => d.Decade
)
)});
  main.variable(observer("LyrAllDecades")).define("LyrAllDecades", ["d3","giitaayanW"], function(d3,giitaayanW){return(
d3.flatRollup(
  giitaayanW,
  (v) => v.length,
  (d) => d.Lyricist
)
)});
  main.variable(observer("LyrMapped")).define("LyrMapped", ["Lyr","d3"], function(Lyr,d3){return(
Lyr.map(([Lyricist, Decade, Count]) => ({
  Lyricist,
  Decade,
  Count
})).sort(d3.descending)
)});
  main.variable(observer("Lyr50plus")).define("Lyr50plus", ["LyrAllDecades"], function(LyrAllDecades){return(
LyrAllDecades.map(([Lyricist, Count]) => ({
  Lyricist,
  Count
})).filter((d) => d.Count > 50)
)});
  main.variable(observer("wordsC")).define("wordsC", ["giitaayanW"], function(giitaayanW){return(
giitaayanW.map((d) => d.Composer)
)});
  main.variable(observer()).define(["wordsC"], function(wordsC){return(
wordsC.filter((w) => /\W/.test(w))
)});
  main.variable(observer("dataC")).define("dataC", ["d3","wordsC"], function(d3,wordsC){return(
d3
  .rollups(
    wordsC,
    (group) => group.length,
    (w) => w
  )
  .sort(([, a], [, b]) => d3.descending(a, b))
  .slice(0, 250)
  .map(([text, value]) => ({ text, value }))
)});
  main.variable(observer("wordsL")).define("wordsL", ["giitaayanW"], function(giitaayanW){return(
giitaayanW.map((d) => d.Lyricist)
)});
  main.variable(observer()).define(["wordsL"], function(wordsL){return(
wordsL.filter((w) => /\W/.test(w))
)});
  main.variable(observer("dataL")).define("dataL", ["d3","wordsL"], function(d3,wordsL){return(
d3
  .rollups(
    wordsL,
    (group) => group.length,
    (w) => w
  )
  .sort(([, a], [, b]) => d3.descending(a, b))
  .slice(0, 250)
  .map(([text, value]) => ({ text, value }))
)});
  main.variable(observer("Lyrcolor")).define("Lyrcolor", ["Lyrplot"], function(Lyrplot){return(
Lyrplot.scale("color")
)});
  main.variable(observer("singer")).define("singer", ["giitaayanW"], function(giitaayanW){return(
giitaayanW.flatMap((song) => [
  ...(song.Singers || "")
    .split(", ")
    .filter((singer) => singer) // remove empty strings
    .map((singer) => ({ ...song, Singer: singer, role: "singer" }))
])
)});
  main.variable(observer("TopSingersByDecade")).define("TopSingersByDecade", ["d3","singer"], function(d3,singer){return(
d3.flatRollup(
  singer,
  (v) => v.length,
  (d) => d.Singer,
  (d) => d.Decade
)
)});
  main.variable(observer("TopSingersAll")).define("TopSingersAll", ["d3","singer"], function(d3,singer){return(
d3.flatRollup(
  singer,
  (v) => v.length,
  (d) => d.Singer
)
)});
  main.variable(observer("TopSingersAllmapped")).define("TopSingersAllmapped", ["TopSingersAll"], function(TopSingersAll){return(
TopSingersAll.map(([Singer, Count]) => ({
  Singer,
  Count
}))
)});
  main.variable(observer("selectedsingerChooseOne")).define("selectedsingerChooseOne", ["singer","singerChooseOne"], function(singer,singerChooseOne){return(
singer.filter((d) => d.Singer === singerChooseOne)
)});
  main.variable(observer("selectedsingerChooseOneCount")).define("selectedsingerChooseOneCount", ["TopSingersAllmapped","singerChooseOne"], function(TopSingersAllmapped,singerChooseOne){return(
TopSingersAllmapped.filter(
  (d) => d.Singer === singerChooseOne
)
)});
  main.variable(observer("viewof lata")).define("viewof lata", ["Inputs","giitaayanW"], function(Inputs,giitaayanW){return(
Inputs.search(giitaayanW, {
  placeholder: "Type in a word or phrase",
  value: "Lata"
})
)});
  main.variable(observer("lata")).define("lata", ["Generators", "viewof lata"], (G, _) => G.input(_));
  main.variable(observer()).define(["lata"], function(lata){return(
lata
)});
  main.variable(observer("latalata")).define("latalata", ["singer"], function(singer){return(
singer.filter((d) => d.Singer === "Lata")
)});
  main.variable(observer("selectedlyricists")).define("selectedlyricists", ["giitaayanW","lyricist"], function(giitaayanW,lyricist){return(
giitaayanW.filter((d) => d.Lyricist === lyricist)
)});
  main.variable(observer("selectedlyricists1")).define("selectedlyricists1", ["giitaayanW","lyricist1"], function(giitaayanW,lyricist1){return(
giitaayanW.filter((d) => d.Lyricist === lyricist1)
)});
  main.variable(observer("selectedcomposers")).define("selectedcomposers", ["giitaayanW","composer"], function(giitaayanW,composer){return(
giitaayanW.filter((d) => d.Composer === composer)
)});
  main.variable(observer("selectedcomposer2")).define("selectedcomposer2", ["selectedlyricists","composer2"], function(selectedlyricists,composer2){return(
selectedlyricists.filter((d) => d.Composer === composer2)
)});
  main.variable(observer()).define(["lyricist"], function(lyricist){return(
lyricist
)});
  main.variable(observer()).define(["composer2"], function(composer2){return(
composer2
)});
  return main;
}
