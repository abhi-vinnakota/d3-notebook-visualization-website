import define1 from "./a33468b95d0b15b0@808.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["paksvg.svg",new URL("./files/07dd42c1908a18d713c23492af961d3a02e432ee746e3b621ce151487663d4e0e22cacb79438b50309e4171551f9c12c73fba4706d52a30a20c053aa9d6fbf5d",import.meta.url)],["pakfilmsbylang.csv",new URL("./files/9b246100b139d94d8163279c80ae8e3568e2af374fd4ebb4d401e0caacdbd1b639fa5c68716e51f71a5ef8174d73e1c9ff0f34241eb65ab24215328cb6aefb5b",import.meta.url)],["allpakfilmsTidy@2.csv",new URL("./files/6b710b63df4cba1d0fe9d8562f505447b1069926d6b62794eed1aded717ed0dbd3de346d5f08303ba6737720d827383e4f00142085b261129e212347afc2b2b9",import.meta.url)],["allpakfilmsTidyMinus147.csv",new URL("./files/976bd894f62eebb6c0b899fe1d44c952cda8c2e09c350552ed7760ceb31c606ff6dbd5800a9d987b51f3ff9eb76ca720ccfb6e98be0d2e9d9fadde003321dcee",import.meta.url)],["PakFilmsWikipedia2021Sept11.csv",new URL("./files/d9367bb4fbfe76927c08f2963261c1a2c7541cc34c7b8f5f206cd69656371206164bce58a092583fe2b3201be199c375533c04579a9ad6295bb22eb32d557630",import.meta.url)],["PakActorsWikipedia2021Sept11.csv",new URL("./files/c9ac6198149f3f3b8a9bf524b55a0b63bd1cd94a25e15c5abffb8797482686ce5c2eda0f02d39b331cbee560edbc7ac7b9e10d51597a28532a1f9838ffcf4d09",import.meta.url)],["pak1928_2014.csv",new URL("./files/f13965810e5a44a9a6b43a033f6e879dee351d7f9094ec614b735811cc71c7346321b70d71ef704a26161024a9df3ff80e60a46ae0351c97435b9f83ec453f25",import.meta.url)],["pakfilmstotal.csv",new URL("./files/bce79f57b7d05cb50ea33419c33ecf11308879f2244bb35c0bed9bc5b2ab3a7ae311658e107af2f97444bafc448a9c8952ae7725c5fe103304d91eec50bc851f",import.meta.url)],["pakfilmsbylangsorted.csv",new URL("./files/af244e232071943ea3a54924f565dac22900701dc10a1f33619380054268ca0b07601cb52c525642b5b16f64b178f0ca1e844e60c6a9af954625b4414ad3e2a3",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Cinema in Pakistan: Selected Datasets  
<br>
A number of visualizations based on the data provided by [Pakistan Film Magazine](https://pakmag.net/film/).  
Scroll down to find comparisons with other data, such as from IMDb.
<br>`
)});
  main.variable(observer()).define(["Plot","formatYear","pakfilmstotal"], function(Plot,formatYear,pakfilmstotal){return(
Plot.plot({
  inset: 10,
  width: 800,

  marginBottom: 100,
  marginTop: 50,
  x: {
    tickFormat: formatYear,
    tickRotate: 45,
    label: "Film Production in Pakistan, by Year →"
  },
  y: {
    grid: true,
    label: "↑ Total number of films produced each year"
  },
  marks: [
    Plot.line(pakfilmstotal, {
      x: "Films",
      y: "Total",
      stroke: "#012811"
    }),
    Plot.dot(pakfilmstotal, {
      x: "Films",
      y: "Total",
      fill: "#012811",
      opacity: 0.1,
      title: "Total",
      r: 3
    }),

    Plot.text(pakfilmstotal, {
      filter: (d) => d.Films % 10 === 0,
      x: "Films",
      y: "Total",
      text: "Total",
      dy: -6
    })
  ]
})
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
Pakistan has produced around 5,000 films since 1948, in 10 languages. According to the Pak Films Magazine, the films had two *circuits* of distribution: the *Lahore circuit* and the *Karachi circuit*. Someone unfamiliar with the geopolitical divisions within Pakistan can hover over each state to see the name of the state. This map can be color-coded to show the two circuits. (On my to-do list.)
<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`







`
)});
  main.variable(observer("graphic1")).define("graphic1", ["FileAttachment","DOMParser","d3"], async function(FileAttachment,DOMParser,d3)
{
  const text = await FileAttachment("paksvg.svg").text();
  const document = new DOMParser().parseFromString(text, "image/svg+xml");
  const svg = d3.select(document.documentElement).remove();
  return svg.node();
}
);
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>
<br>`
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
 ### Broad Outline of languages of Pakistani Cinema.  
A more detailed graph can be found further down.
<br>`
)});
  main.variable(observer()).define(["Swatches","d3","pakfilmlangsort"], function(Swatches,d3,pakfilmlangsort){return(
Swatches({
  color: d3.scaleOrdinal(
    d3.sort(pakfilmlangsort.map((d) => d.Lang)),
    d3.schemeTableau10
  )
})
)});
  main.variable(observer()).define(["Plot","formatYear","pakfilmlangsort"], function(Plot,formatYear,pakfilmlangsort){return(
Plot.plot({
  marginBottom: 50,
  marginTop: 50,
  width: 800,
  height: 350,

  x: {
    grid: true,
    tickFormat: formatYear,
    tickRotate: 45,
    label: "Year"
  },

  y: {
    grid: true,
    label: "Number of films"
  },
  marks: [
    Plot.areaY(pakfilmlangsort, {
      x: "Year",
      y: "Num",
      fill: (d) => d.Lang,
      title: (d) => d.Lang
    }),
    Plot.lineY(
      pakfilmlangsort,
      Plot.stackY1({
        x: "Year",
        y: "Num",
        z: "Lang",
        stroke: "white",
        strokeWidth: 1
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
### Another view, for its own sake ...
<br>`
)});
  main.variable(observer()).define(["Plot","formatYear","pakfilmlangsort"], function(Plot,formatYear,pakfilmlangsort){return(
Plot.plot({
  width: 800,
  height: 400,
  marginTop: 50,
  marginBottom: 50,
  x: { tickFormat: formatYear },
  y: {
    grid: true,
    label: "↑ Unemployed (thousands)"
  },
  marks: [
    Plot.areaY(
      pakfilmlangsort,
      Plot.stackY({ offset: "silhouette", x: "Year", y: "Num", fill: "Lang" })
    )
  ]
})
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["Swatches","d3","pakfilmlangsort"], function(Swatches,d3,pakfilmlangsort){return(
Swatches({
  color: d3.scaleOrdinal(
    d3.sort(pakfilmlangsort.map((d) => d.Lang)),
    d3.schemeTableau10
  )
})
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
### Yet another view, where you can see the discrete main languages compete. 
<br>`
)});
  main.variable(observer()).define(["Plot","formatYear","pakfilmlangsort"], function(Plot,formatYear,pakfilmlangsort){return(
Plot.plot({
  marginBottom: 50,
  width: 800,
  marginTop: 50,

  y: {
    grid: true,
    label: "Number of films in each language"
  },
  x: {
    tickFormat: formatYear,
    tickRotate: 45
  },

  marks: [
    Plot.lineY(pakfilmlangsort, {
      x: "Year",
      y: "Num",
      stroke: "Lang",
      strokeWidth: 2,
      title: "Lang"
    }),
    Plot.ruleY([0])
  ]
})
)});
  main.variable(observer()).define(["Swatches","d3","pakfilmlangsort"], function(Swatches,d3,pakfilmlangsort){return(
Swatches({
  color: d3.scaleOrdinal(
    d3.sort(pakfilmlangsort.map((d) => d.Lang)),
    d3.schemeTableau10
  )
})
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>
<br>`
)});
  main.variable(observer()).define(["Plot","formatYear","pakfilmlangsort","fmt"], function(Plot,formatYear,pakfilmlangsort,fmt){return(
Plot.plot({
  width: 800,
  height: 300,
  marginBottom: 50,
  marginTop: 50,
  y: {
    grid: true,
    label: "Number of films in each language"
  },
  x: {
    domain: [
      1948,
      1950,
      1955,
      1960,
      1965,
      1970,
      1975,
      1980,
      1985,
      1990,
      1995,
      2000,
      2005,
      2010,
      2015,
      2020,
      2021
    ],
    tickFormat: formatYear,
    tickRotate: 45,
    label: "Year"
  },
  marks: [
    Plot.barY(pakfilmlangsort, {
      x: "Year",
      y: "Num",
      fill: "Lang",
      title: (d) =>
        `${d.Lang}\nYear: ${formatYear(d.Year)}\nFilms: ${fmt(d.Num)}`
    }),
    Plot.ruleY([0]),
    Plot.ruleX([0])
  ]
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
### The data from the above charts, in tabular form.
<br>`
)});
  main.variable(observer()).define(["Inputs","pakfilmlangs"], function(Inputs,pakfilmlangs){return(
Inputs.table(pakfilmlangs, {
  format: {
    Films: (d) => `${d}`
  }
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`















`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<hr>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
<simple-greeting name="Let's take a deeper dive into the data"></simple-greeting>    
***Each line*** in the table below is a film. Hover to see the title, year, and more details.
<br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["Plot","d3","formatYear","paktidy"], function(Plot,d3,formatYear,paktidy){return(
Plot.plot({
  //style: "background-color:#000",
  height: 800,
  width: 1000,
  marginBottom: 50,
  marginTop: 50,
  marginRight: 50,
  marginLeft: 50,
  color: {
    range: d3.schemeDark2.concat(d3.schemeCategory10).concat(d3.schemeTableau10)
  },
  x: {
    tickFormat: formatYear,
    tickRotate: 45
  },
  y: {
    grid: true,
    label: "Pakistani Films",
    labelAnchor: "center"
  },
  marks: [
    Plot.rectY(
      paktidy,
      Plot.binX(
        { y: "count", title: "first" },
        //(bin) => bin.map((d) => d.Song) },
        {
          rx: 15,
          x: "Year",
          fill: "Filmtitle",
          title: (d) =>
            `${d.Filmtitle},${d.Year}; ${d.Language}, directed by ${d.Directors}, featuring actors: ${d.Actors}`
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
Here is the same graph, with **films** replaced by **languages**. Why come back to **languages**, you ask? As you can see, this graph is more nuanced than the earlier/above versions, as it is based on the categories spelled out in Pakistan Film Magazine. There is Punjabi, there is Urdu, but Urdu/Punjabi double version is in a category of its own. **Hover** over each rectangle to see the counts per language group. The rectangles are stacked in descending order from the bottom: you can see that between 1970 and 1990, Punjabi films outnumbered Urdu films.  
<br>`
)});
  main.variable(observer()).define(["Plot","d3","formatYear","paktidy"], function(Plot,d3,formatYear,paktidy){return(
Plot.plot({
  //style: "background-color:#000",
  height: 800,
  width: 1000,
  marginBottom: 50,
  marginTop: 50,
  marginRight: 50,
  marginLeft: 50,
  color: {
    range: d3.schemeTableau10.concat(d3.schemeCategory10)
  },
  x: {
    tickFormat: formatYear,
    tickRotate: 45
  },
  y: {
    grid: true,
    label: "Number of Films"
  },
  marks: [
    Plot.rectY(paktidy, {
      ...Plot.binX(
        { y: "count", title: (v) => `${v[0].Language}: ${v.length}` },
        {
          rx: 5,
          x: "Year",
          fill: "Language"
          //    title: (d) => `${d.Language}`
        }
      ),
      order: "value",
      reverse: true
    }),
    Plot.ruleY([0, 1])
  ]
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
Here is yet another version of the same graph, with **directors**. Note the sizeable 'burnt orange' chunk: those represent missing data from the 'Directors' column in the database.  
**Hover** over each rectangle to see the counts per director in the range of years as shown by the *x-axis*. 
<br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["Plot","formatYear","d3","paktidy"], function(Plot,formatYear,d3,paktidy){return(
Plot.plot({
  width: 1200,
  height: 800,
  marginTop: 40,
  marginBottom: 50,
  y: {
    grid: true
  },
  x: {
    tickRotate: 45,
    // ticks: 10,
    tickFormat: formatYear
  },
  color: {
    range: d3.schemeDark2
      .concat(d3.schemePastel2)
      .concat(d3.schemeCategory10)
      .concat(d3.schemeTableau10)
      .concat(d3.schemePastel1)
  },
  marks: [
    Plot.rectY(paktidy, {
      ...Plot.binX(
        {
          y: "count",
          title: (v) =>
            `${v[0].Directors}: ${v.length} films in the range of years`
        },
        {
          //rx: 15,
          x: "Year",
          fill: "Directors"
        }
      ),
      order: "order",
      reverse: true
    }),
    Plot.ruleY([0])
  ]
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
Here is yet another version of the same graph, with **individual actors**.   
**Hover** over each rectangle to see the counts of films per actor in the range of years as shown by the *x-axis*. 
<br>`
)});
  main.variable(observer()).define(["Plot","formatYear","d3","paktidyactor"], function(Plot,formatYear,d3,paktidyactor){return(
Plot.plot({
  width: 1200,
  height: 1000,
  marginTop: 40,
  marginBottom: 50,
  y: {
    grid: true
  },
  x: {
    tickRotate: 45,
    // ticks: 10,
    tickFormat: formatYear
  },
  color: {
    range: d3.schemeDark2
      .concat(d3.schemePastel2)
      .concat(d3.schemeCategory10)
      .concat(d3.schemeTableau10)
      .concat(d3.schemePastel1)
  },
  marks: [
    Plot.rectY(paktidyactor, {
      ...Plot.binX(
        {
          y: "count",
          title: (v) =>
            `${v[0].person}: ${v.length} films in the range of years`
        },
        {
          // rx: 5,
          x: "Year",
          fill: "person"
        }
      ),
      order: "sum",
      reverse: true
    }),
    Plot.ruleY([0])
  ]
})
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<hr>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
<simple-greeting name="The lacunae in IMDb"></simple-greeting>    
IMDb lists roughly half of the films mentioned in the Pak Film Magazine.   
The following chart is based on the list of films categorized as Pakistani (country/region = "pk") on IMDb, from 1928 to 2014. The dataset was created by extracting the list from IMDb using imdbpy, a Python library. I ran into some problems while scraping the years 2015 onwards; I will update the list to cover the remaining years (2015-2020) soon.  

The huge gap between the actual number of films and the listings on IMDb can be easily corrected by assembling a small group of volunteers, who will create the remaining listings on IMDb.
<br>`
)});
  main.variable(observer()).define(["Plot","d3","formatYear","pakIMDb"], function(Plot,d3,formatYear,pakIMDb){return(
Plot.plot({
  //style: "background-color:#000",
  height: 800,
  width: 1000,
  marginBottom: 50,
  marginTop: 50,
  marginRight: 50,
  marginLeft: 50,
  color: {
    range: d3.schemeDark2.concat(d3.schemeCategory10).concat(d3.schemeTableau10)
  },
  x: {
    tickFormat: formatYear,
    tickRotate: 45
  },
  y: {
    grid: true,
    label: "Pakistani FIlms on IMDb"
  },
  marks: [
    Plot.rectY(
      pakIMDb,
      Plot.binX(
        { y: "count", title: "first" },

        {
          rx: 15,
          x: "Year_int",
          fill: "Movie",
          title: (d) => `${d.Movie} (${d.Year_int}) in ${d.language}`
        }
        // title: "Movie" }
      )
    ),
    Plot.ruleY([0, 1])
  ]
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
Here is the same graph: list of Pakistani films listed on **IMDb**, color-coded according to **language**. Hover over the rectangles to see what language each represents. 
<br>`
)});
  main.variable(observer()).define(["Plot","d3","formatYear","pakIMDb"], function(Plot,d3,formatYear,pakIMDb){return(
Plot.plot({
  //style: "background-color:#000",
  height: 800,
  width: 1000,
  marginBottom: 50,
  marginTop: 50,
  marginRight: 50,
  marginLeft: 50,
  color: {
    range: d3.schemeTableau10.concat(d3.schemeCategory10)
  },
  x: {
    tickFormat: formatYear,
    tickRotate: 45
  },
  y: {
    grid: true,
    label: "Number of Films"
  },
  marks: [
    Plot.rectY(pakIMDb, {
      ...Plot.binX(
        { y: "count", title: (v) => `${v[0].language}: ${v.length}` },
        {
          rx: 5,
          x: "Year_int",
          fill: "language"
          //    title: (d) => `${d.Language}`
        }
      ),
      order: "value",
      reverse: true
    }),
    Plot.ruleY([0, 1])
  ]
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
Here is the IMDb data (1928-2014), in tabular format. You can click each column heading to sort that particular column in ascending or descending order.
<br>`
)});
  main.variable(observer()).define(["Inputs","pakIMDb"], function(Inputs,pakIMDb){return(
Inputs.table(pakIMDb, {
  format: {
    Year_int: (d) => `${d}`
  }
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
<br>
<simple-greeting name="What about Wikipedia?"></simple-greeting>    
The listings about Pakistani films and film-related persons are even **sparser** in Wikipedia.  
The 2 tables below are the results of accessing Wikipedia data using the SPARQL endpoint query that I created. *Feel free to try the 2 links and run the query to generate a fresh list.  *
List of all film-related persons of Pakistani origin on Wikipedia: [https://w.wiki/43xF](https://w.wiki/43xF).   I basically grabbed the names of people who are listed as Pakistani and have IMDb IDs.    
List of all films of Pakistani origin on Wikipedia: [https://w.wiki/43xP](https://w.wiki/43xP).   
Editing Wikipedia is more complicated than entering listings on IMDb, but a group of volunteers can undertake a systematic effort to do this.
<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
List of Pakistani film personalities on Wikipedia.
<br>`
)});
  main.variable(observer()).define(["Inputs","pakactorswiki"], function(Inputs,pakactorswiki){return(
Inputs.table(pakactorswiki)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
List of Pakistani films on Wikipedia.
<br>`
)});
  main.variable(observer()).define(["Inputs","pakfilmswiki"], function(Inputs,pakfilmswiki){return(
Inputs.table(pakfilmswiki)
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>
<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
**That's it for now. ...  **  
Look forward to collaborating with film scholars on populating the web with more Pakistani film data. 
<br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>
<br>
<br>
<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`













`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<hr>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Appendix`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`topojson link = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/pakistan/pakistan-provinces.json"`
)});
  main.variable(observer("topojson")).define("topojson", ["require"], function(require){return(
require("topojson-client@3")
)});
  main.variable(observer("pakfilmlangs")).define("pakfilmlangs", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("pakfilmsbylang.csv").csv({ typed: true })
)});
  main.variable(observer("pakfilmlangsort")).define("pakfilmlangsort", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("pakfilmsbylangsorted.csv").csv({
  typed: true
})
)});
  main.variable(observer("pakfilmstotal")).define("pakfilmstotal", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("pakfilmstotal.csv").csv({ typed: true })
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Tidydata [...]`
)});
  main.variable(observer("paktidy")).define("paktidy", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("allpakfilmsTidyMinus147.csv").csv({ typed: true })
)});
  main.variable(observer("pakdatatidytemp")).define("pakdatatidytemp", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("allpakfilmsTidy@2.csv").csv({ typed: true })
)});
  main.variable(observer("coltidy")).define("coltidy", ["pakdatatidytemp"], function(pakdatatidytemp){return(
pakdatatidytemp.columns
)});
  main.variable(observer("paktidyYear")).define("paktidyYear", ["d3","paktidy"], function(d3,paktidy){return(
d3.rollups(
  paktidy,
  (v) => v.length,
  (d) => d.Year
)
)});
  main.variable(observer("paktidyactor")).define("paktidyactor", ["paktidy"], function(paktidy){return(
paktidy.flatMap((film) => [
  ...(film.Actors || "")
    .split(", ")
    .filter((actor) => actor) // remove empty strings
    .map((actor) => ({ ...film, person: actor, role: "actor" }))
])
)});
  main.variable(observer("pakIMDb")).define("pakIMDb", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("pak1928_2014.csv").csv({ typed: true })
)});
  main.variable(observer("pakactorswiki")).define("pakactorswiki", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("PakActorsWikipedia2021Sept11.csv").csv({
  typed: true
})
)});
  main.variable(observer("pakfilmswiki")).define("pakfilmswiki", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("PakFilmsWikipedia2021Sept11.csv").csv({
  typed: true
})
)});
  main.variable(observer()).define(["Inputs","paktidyactor"], function(Inputs,paktidyactor){return(
Inputs.table(paktidyactor)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Format [ ...**`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`<style>svg { font-size: 14px !important }`
)});
  main.variable(observer("LitElement")).define("LitElement", ["lit"], function(lit){return(
lit.LitElement
)});
  main.variable(observer("lit")).define("lit", function(){return(
import("https://unpkg.com/lit@2.0.0-rc.2/index.js?module")
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
  main.variable(observer("fmt")).define("fmt", ["d3"], function(d3){return(
(n) => d3.format(",d")(n)
)});
  main.variable(observer("formatYear")).define("formatYear", function(){return(
(year) => `${year}`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**...]**`
)});
  const child1 = runtime.module(define1);
  main.import("swatches", "Swatches", child1);
  return main;
}
