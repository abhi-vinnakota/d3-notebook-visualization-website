import define1 from "./a33468b95d0b15b0@808.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["John Ford_filmography_revised.csv",new URL("./files/0a7f0f145ac98c57e95574699434c4e5bd7b74fe02b3b32dd4e291259fd12e6a91466f04111db6a2a03154cfbe6cba6565994d7f1c4af1c46509d87e227333a8",import.meta.url)],["FordActors.csv",new URL("./files/15b9f7b72d8c2f35bad01b2a41c678b870fcaead7512f106df8088753202d9d2a0096cf0b902b633e142bbe69c8f5ed2fbea9d1d77629e03fc2780125312408c",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# John Ford (1894 - 1973)  
<br>
Short Bio from [Wikipedia](https://en.wikipedia.org/wiki/John_Ford): John Martin Feeney (February 1, 1894 – August 31, 1973), known professionally as John Ford, was an American film director and naval officer. He is renowned both for Westerns such as Stagecoach (1939), The Searchers (1956), and The Man Who Shot Liberty Valance (1962), as well as adaptations of classic 20th century American novels such as The Grapes of Wrath (1940). He was the recipient of six Academy Awards including a record four wins for Best Director.

In a career of more than 50 years, Ford directed more than 140 films (although most of his silent films are now lost) and he is widely regarded as one of the most important and influential filmmakers of his generation.[2] Ford's work was held in high regard by his colleagues, with Orson Welles and Ingmar Bergman among those who named him one of the greatest directors of all time.

Ford made frequent use of location shooting and wide shots, in which his characters were framed against a vast, harsh, and rugged natural terrain.`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<BR>
<BR>`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
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
<p class="round"><i>The many hats John Ford wore </i></p>
<br>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
John Ford wore many hats during the five decades of his career. Besides directing films, he produced, worked as an assistant director, did stunts, and wrote screenplays.... Hover over the different colors in the chart below to see the roles he played.
<be>`
)});
  main.variable(observer()).define(["Plot","fordRoles","FordFilmography"], function(Plot,fordRoles,FordFilmography){return(
Plot.plot({
  height: 600,
  width: 1000,
  marginBottom: 50,
  marginTop: 50,
  marginRight: 50,
  marginLeft: 50,
  font: 14,
  color: {
    domain: fordRoles.map((d) => d.profession),
    range: [
      "#ff9da7",
      "#b3e2cd",
      "#d62728",
      "#f28e2c",
      "#e377c2",
      "#f1e2cc",
      "#af7aa1",
      "#8c564b",
      "#cbd5e8",
      "#156FA2",
      "#000000"
    ]
  },
  x: {
    tickRotate: 45,

    tickFormat: (d) => `${d}`
  },
  y: {
    grid: true,
    label: "JOHN FORD'S MANY HATS",
    labelAnchor: "center"
  },
  marks: [
    Plot.rectY(FordFilmography, {
      ...Plot.binX(
        {
          y: "Count",
          title: (v) =>
            `John Ford appeared as ${v[0].profession}: in ${v.length} films.`
        },
        {
          rx: 15,
          x: "year",
          fill: "profession"
        }
      ),
      order: "value",
      reverse: true
    }),
    Plot.ruleY([0])
  ]
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
Here is the same chart, with individual movies. Hover over each block to see the names of each movie and the number of jobs Ford had in it.
<br>`
)});
  main.variable(observer()).define(["Plot","d3","FordFilmography"], function(Plot,d3,FordFilmography){return(
Plot.plot({
  height: 600,
  width: 1000,
  marginBottom: 50,
  marginTop: 50,
  marginRight: 50,
  marginLeft: 50,
  font: 14,
  color: { range: d3.schemePastel1.concat(d3.schemePastel2) },
  x: {
    tickRotate: 45,

    tickFormat: (d) => `${d}`
  },
  y: {
    grid: true,
    label: "JOHN FORD'S MANY HATS",
    labelAnchor: "center"
  },
  marks: [
    Plot.rectY(FordFilmography, {
      ...Plot.binX(
        {
          y: "Count",
          title: (v) =>
            `John Ford had ${v.length} job(s) in ${v[0].movie} (${v[0].year}).`
        },
        {
          rx: 15,
          x: "year",
          fill: "movie"
        }
      ),
      order: "value",
      reverse: true
    }),
    Plot.ruleY([0])
  ]
})
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>
Use the dropdown menu below to see how many films had John Ford in a particular role.
<br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer("viewof profession")).define("viewof profession", ["Inputs","FordFilmography"], function(Inputs,FordFilmography){return(
Inputs.select(
  FordFilmography.map((d) => d.profession),
  {
    sort: true,
    unique: true,
    value: "actor",
    label: "John Ford as:"
  }
)
)});
  main.variable(observer("profession")).define("profession", ["Generators", "viewof profession"], (G, _) => G.input(_));
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["Inputs","FordFilmography","profession"], function(Inputs,FordFilmography,profession){return(
Inputs.table(
  FordFilmography.filter((d) => d.profession === profession),
  {
    columns: ["movie", "movieID", "year", "profession"],
    format: { year: (d) => `${d}` }
  }
)
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
Use the next dropdown menu to see Ford's roles in a particular movie:
<br>`
)});
  main.variable(observer("viewof movie")).define("viewof movie", ["Inputs","FordFilmography"], function(Inputs,FordFilmography){return(
Inputs.select(
  FordFilmography.map((d) => d.movie),
  {
    sort: true,
    unique: true,
    label: "John Ford in:"
  }
)
)});
  main.variable(observer("movie")).define("movie", ["Generators", "viewof movie"], (G, _) => G.input(_));
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["Inputs","FordFilmography","movie"], function(Inputs,FordFilmography,movie){return(
Inputs.table(
  FordFilmography.filter((d) => d.movie === movie),
  {
    columns: ["movie", "movieID", "year", "profession"],
    format: { year: (d) => `${d}` }
  }
)
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
Here is a picture of the total output of John Ford, ordered according to his jobs in each film.  The color code is given below. 
<br>`
)});
  main.variable(observer()).define(["d3","fordRoles"], function(d3,fordRoles)
{
  // declare the margins and size etc.
  const width = 700;
  const height = 400;
  const radius = Math.min(width, height) / 2;
  const svg = d3.create("svg").attr("viewBox", [0, 0, width, height]);

  const g = svg
    .append("g")
    .attr("transform", `translate(${width / 2},${height / 2})`);

  const data = fordRoles.map((d) => d.Count);
  const color = d3
    .scaleOrdinal()
    .domain(fordRoles.map((d) => d.profession))
    .range([
      "#ff9da7",
      "#b3e2cd",
      "#d62728",
      "#f28e2c",
      "#e377c2",
      "#f1e2cc",
      "#af7aa1",
      "#8c564b",
      "#cbd5e8",
      "#156FA2",
      "#000000"
    ]);

  const arc = d3
    .arc()
    .outerRadius(radius - 10)
    .innerRadius(0)
    .cornerRadius(10);

  const pie = d3.pie();
  const pied_data = pie(data);

  const arcs = g
    .selectAll(".arc")
    .data(pied_data)
    .join((enter) =>
      enter
        .append("path")
        .attr("class", "arc")
        .style("stroke", "white")
        .style("fill", color)
    );

  arcs.attr("d", arc);

  return svg.node();
}
);
  main.variable(observer()).define(["Swatches","d3","fordRoles"], function(Swatches,d3,fordRoles){return(
Swatches(
  d3.scaleOrdinal(
    fordRoles.map((d) => d.profession),
    [
      "#ff9da7",
      "#b3e2cd",
      "#d62728",
      "#f28e2c",
      "#e377c2",
      "#f1e2cc",
      "#af7aa1",
      "#8c564b",
      "#cbd5e8",
      "#156FA2",
      "#000000"
    ]
  ),
  {
    columns: 2
  }
)
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
Here is yet another graph of the same data, shown by year.
<br>`
)});
  main.variable(observer()).define(["Plot","fordRoles","fordfilmog"], function(Plot,fordRoles,fordfilmog){return(
Plot.plot({
  width: 1200,
  marginBottom: 50,
  x: {
    // tickFormat: d => d.toLocaleString("en", {month: "narrow"}),
    tickRotate: 45,
    label: null
  },
  color: {
    domain: fordRoles.map((d) => d.profession),
    range: [
      "#ff9da7",
      "#b3e2cd",
      "#d62728",
      "#f28e2c",
      "#e377c2",
      "#f1e2cc",
      "#af7aa1",
      "#8c564b",
      "#cbd5e8",
      "#156FA2",
      "#000000"
    ]
  },
  marks: [
    Plot.barY(
      fordfilmog.map(([year, profession, Count]) => ({
        year,
        profession,
        Count
      })),
      { x: "year", y: "Count", fill: "profession", title: "profession" }
    ),
    Plot.ruleY([0])
  ]
})
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<hr>
<BR>

   
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
<p class="round"><i>John Ford's stars </i></p>
<br>
  
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
Notwithstanding the numerous roles Ford played in the film industry, he is mostly remembered for the films he directed. The charts below are based on the **143** feature films that he directed between 1917 and 1976, featuring **2,706 unique actors** in **3,065 roles**. The difference between the number of actors and roles is of course due to the recurrence of actors in his films.  
<br>`
)});
  main.variable(observer("viewof fAct")).define("viewof fAct", ["Inputs","fordA"], function(Inputs,fordA){return(
Inputs.select(
  fordA.map((d) => d.actor),
  {
    sort: true,
    unique: true,
    label: "Actor/Actress",
    // value: "Jack Pennick",
    placeholder: "Select an Actor/Actress"
  }
)
)});
  main.variable(observer("fAct")).define("fAct", ["Generators", "viewof fAct"], (G, _) => G.input(_));
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["Inputs","selectedforActC"], function(Inputs,selectedforActC){return(
Inputs.table(selectedforActC, {
  format: {
    year: (d) => `${d}`
  }
})
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>
<br>`
)});
  main.variable(observer()).define(["Inputs","selectedfordA"], function(Inputs,selectedfordA){return(
Inputs.table(selectedfordA, {
  format: {
    year: (d) => `${d}`
  }
})
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>
<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
### Look up by number:
The query below makes it easy to look for actors/actresses on the basis of their appearances in Ford's films. Jack Pennick appeared in 42 films!  
<br>`
)});
  main.variable(observer("viewof recurrence")).define("viewof recurrence", ["Inputs","fordActorCounts"], function(Inputs,fordActorCounts){return(
Inputs.select(
  fordActorCounts.map((d) => d.Count),
  {
    sort: true,
    unique: true,
    label: "Actor/Actress's recurrence in Ford's films:"
  }
)
)});
  main.variable(observer("recurrence")).define("recurrence", ["Generators", "viewof recurrence"], (G, _) => G.input(_));
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["Inputs","fordActorCounts","recurrence"], function(Inputs,fordActorCounts,recurrence){return(
Inputs.table(fordActorCounts.filter((d) => d.Count === recurrence))
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
<p class="round"><i>Finally, just for fun.... </i></p>
<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
Here is a word cloud that shows the stars' names in the order of magnitude.  
<br>
<br>`
)});
  main.variable(observer("chart")).define("chart", ["require","width","data","invalidation"], async function(require,width,data,invalidation)
{
  const d3 = Object.assign(await require("d3@6"), {
    cloud: await require("d3-cloud@1")
  });
  const fontFamily = "sans-serif";
  const fontScale = 5;
  const rotate = () => 0; // () => (~~(Math.random() * 6) - 3) * 30
  const padding = 0;
  const height = 500;

  const svg = d3
    .create("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("font-family", fontFamily)
    .attr("text-anchor", "middle");

  const cloud = d3
    .cloud()
    .size([width, height])
    .words(data.map((d) => Object.create(d)))
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
  main.variable(observer("FordFilmography")).define("FordFilmography", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("John Ford_filmography_revised.csv").csv({
  typed: true
})
)});
  main.variable(observer("fordfilmog")).define("fordfilmog", ["d3","FordFilmography"], function(d3,FordFilmography){return(
d3.flatRollup(
  FordFilmography,
  (v) => v.length,
  (d) => d.year,
  (d) => d.profession
)
)});
  main.variable(observer("fordA")).define("fordA", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("FordActors.csv").csv({ typed: true })
)});
  main.variable(observer("fordActors")).define("fordActors", ["d3","fordA"], function(d3,fordA){return(
d3
  .rollups(
    fordA,
    (v) => v.length,
    (d) => d.actor
  )
  .sort((a, b) => b[1] - a[1])
)});
  main.variable(observer("selectedfordA")).define("selectedfordA", ["fordA","fAct"], function(fordA,fAct){return(
fordA.filter((d) => d.actor === fAct)
)});
  main.variable(observer("fordActorCounts")).define("fordActorCounts", ["fordActors"], function(fordActors){return(
fordActors.map(([actor, Count]) => ({ actor, Count }))
)});
  main.variable(observer("selectedforActC")).define("selectedforActC", ["fordActorCounts","fAct"], function(fordActorCounts,fAct){return(
fordActorCounts.filter((d) => d.actor === fAct)
)});
  main.variable(observer("selectedrecurrence")).define("selectedrecurrence", ["fordActorCounts","recurrence"], function(fordActorCounts,recurrence){return(
fordActorCounts.filter(d=> d.Count === recurrence)
)});
  main.variable(observer("FordRoleCounts")).define("FordRoleCounts", ["d3","FordFilmography"], function(d3,FordFilmography){return(
d3
  .rollups(
    FordFilmography,
    (v) => v.length,
    (d) => d.profession
  )
  .sort((a, b) => b[1] - a[1])
)});
  main.variable(observer("fordRoles")).define("fordRoles", ["FordRoleCounts"], function(FordRoleCounts){return(
FordRoleCounts.map(([profession, Count]) => ({
  profession,
  Count
}))
)});
  const child1 = runtime.module(define1);
  main.import("Legend", child1);
  main.import("Swatches", child1);
  main.variable(observer("words")).define("words", ["fordA"], function(fordA){return(
fordA.map((d) => d.actor)
)});
  main.variable(observer()).define(["words"], function(words){return(
words.filter(w => /\W/.test(w))
)});
  main.variable(observer("data")).define("data", ["d3","words"], function(d3,words){return(
d3.rollups(words, group => group.length, w => w)
  .sort(([, a], [, b]) => d3.descending(a, b))
  .slice(0, 250)
  .map(([text, value]) => ({text, value}))
)});
  return main;
}
