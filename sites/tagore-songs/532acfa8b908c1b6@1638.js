import define1 from "./253d3c1b5eb8410c@1930.js";
import define2 from "./1131d8b2f152e8a8@463.js";
import define3 from "./a33468b95d0b15b0@808.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["groupbyPupa.csv",new URL("./files/c6490300e970c48ba34a14669ab5ed40ab99f38f0e6ab6e1555ec5db7bc21aa5501e716fde79b04d8aed85205a4f3759253f2e0de725fea36cf8bae1d183128e",import.meta.url)],["onlyTaalmini.csv",new URL("./files/42d300b336dae168e6e8825b831e37f4afd499c6580536fd2cc72767709b5ae610fa045f20a89d7c706939cd295607a7e42773b0800fe31dd4f79d1a0761e85b",import.meta.url)],["tabla1.jpg",new URL("./files/0f7ebefafe9409e45dcef3c59147b8c9d92aabc2d110e136a30b23fa3bf51eae6b80df05cda5c26409485563f85bcdbc4169c092a64ca9cd3f4d1dc300515e66",import.meta.url)],["musicnotes@1.png",new URL("./files/4a60ca7b5e0379debd8421e70bf8042b2a0bf05d0787d9e57a85db2f8751596fa687cacc0c89fbedfa6c7632b06098b3f561b8ae3d4655231d5f0038597e3428",import.meta.url)],["prakriti@1.csv",new URL("./files/c339d39183665fd48dd3466263eb472d4ffb35415f309581998ab0b0843593453b9c13f834c694d9132ec1edc836678fd5b63df1f43b3c1fcf9bf53dfeb0b9d8",import.meta.url)],["ParjayRaag.csv",new URL("./files/cf100a48db8170b6a235847a8bfb0a11db34d97907e5a3996f858afce91298ba4466eb3dd5d40c4e511a1e7bb730de5283a1c2113a9e92fdfdaf9eb8628e686e",import.meta.url)],["tagoreUpaParjayC@3.csv",new URL("./files/e0a7e88e59e58c8d31a852cdefffbc344bee488c6f756e42c065bad732e10e6f27c93b11c8753f7b558ab8b5d5567a4006645ce6918d6785446b9cec7b03b9e7",import.meta.url)],["groupbyTraag@1.csv",new URL("./files/8f05d607845693d4ad79d1c6c8d62470bd79318fa2e71776719d2c89cf2f2a3bcb9080eb0aa96539901c8b2cb455998ce9f8adbc1751e6f198fafd2c6e927c75",import.meta.url)],["tagoreParjayCounts@4.csv",new URL("./files/6d20833bc44a1712a97d049b6dcefe577f3c1e074ce91f9e8c58af4f083e46d62d243bfc4f7940899832577eec41c9795e5d8ca41904b25dd05956def77e04d8",import.meta.url)],["tagoreAll_nodupl@3.csv",new URL("./files/484e3b83271028df6a6a3195c47ff3297708876fdd5e2bfa957a5a4f876b18a74f41da0bfbf4d8f05b7a1a33de256eeb38379293740ec3b30ef66426c6133c39",import.meta.url)],["groupbyParjayTaal@2.csv",new URL("./files/d0cc453c6f637559e097ea324d383ed20c6736ed5829c2ae7b0eb3fd845b4322e4c5fa57bd7bf60b7452f9cd6bb984fa6269da30b24d8d20f34d785774467ff7",import.meta.url)],["tagoreclusters.json",new URL("./files/efc5589e90e7d759d449474f4c1d5da41a57da7353391d672e32f14f39b59087f9f88cfd1ac52351883bd1ef109075d5657a0c046db7299e7960152f27a7d84e",import.meta.url)],["onlyPrakriti-2.csv",new URL("./files/62f0c7b9aa62d94e4765338fea3d2ab6435a3f2af39efa4ab9febc99c14c5a6f3d79f79f18e36bf7a572b84f8cd426b4ca87abf79ea272646a3dafed127cc103",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`
  # Tagore Songs Dataset: Draft 1

`
)});
  main.variable(observer()).define(["markdeep"], function(markdeep){return(
markdeep`

<br>
<div style="columns:2;-webkit-columns:2;-moz-columns:2;column-gap:3em;-webkit-column-gap:3em;-moz-column-gap:3em">
Rabindranath Tagore (1861-1941) composed around 2,000 songs that came to be considered as a genre in Bengali music: Rabindrasangit or Rabindrasangeet, literally Rabindra-music. The songs are organized under 17 categories in the compendium Gitabitan / G&imacr;tabit&amacr;n / Geetabitan (the *Garden of Songs*).  As a dataset, Rabindrasangeet has approximately   
**280** unique Raags/R&amacr;gas/*tunes*,  
 **64** Taals/T&amacr;las/*rhythms*,  
**17** Parjay/Pary&amacr;ya/*thematic categories* further divided into **36** Upa-parjays or *sub-categories*.    

The categorization was mostly done under Tagore's guidance, when the first edition of the **G&imacr;tabit&amacr;n** was published.  
The dataset used in this draft visualization is follows the romanization scheme of the website [geetabitan.com](https://www.geetabitan.com/). The data has been cleaned, the romanization has been slightly altered in the *thematic categories* and *sub-categories*. However, most duplicate listings of songs have been retained, on the basis of variation in categorization of Parjay or Raag or Taal. The unique number of songs in the dataset is **1,713**, and the number with duplicate listings is **1,982**.
</div>
<br>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
 *This project will be updated in future with [ITRANS](https://en.wikipedia.org/wiki/ITRANS) transliteration, and with more links.*
<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
<simple-greeting name="The main themeatic categories or Parjays of Rabindrasangeet "></simple-greeting>   
<br>`
)});
  main.variable(observer()).define(["Plot","tagoreParjayC","d3"], function(Plot,tagoreParjayC,d3){return(
Plot.plot({
  height: 800,
  width: 1000,
  marginBottom: 150,
  marginTop: 30,
  marginRight: 50,
  marginLeft: 50,
  x: {
    tickRotate: 45,
    label: null,
    domain: tagoreParjayC
      .sort((a, b) => d3.descending(a.count, b.count))
      .map((d) => d.parjay)
  },
  y: {
    grid: true,
    nice: true,
    label: "Hover over the bars for more information about the categories:"
  },

  marks: [
    Plot.barY(
      tagoreParjayC,

      {
        y: "count",
        x: "parjay",
        order: (a, b) => d3.descending(a.count, b.count),
        title: (d) => `${d.count} songs in category ${d.parjay} (${d.trans})`
        //title: "parjay"
      }
    ),

    Plot.ruleY([0])
  ]
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`------------------------`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
The following **table** allows you to select a single **Parjay** to see all the songs that are categorized under it.  
You can sort each column alphabetically by clicking the column heading.
<br>
<br>`
)});
  main.variable(observer("viewof Parjay")).define("viewof Parjay", ["Inputs","dataA"], function(Inputs,dataA){return(
Inputs.select(
  dataA.map((d) => d.Parjay),
  { sort: true, unique: true, label: "Parjay: Thematic Category" }
)
)});
  main.variable(observer("Parjay")).define("Parjay", ["Generators", "viewof Parjay"], (G, _) => G.input(_));
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["Inputs","selectedParjay","columnsA"], function(Inputs,selectedParjay,columnsA){return(
Inputs.table(selectedParjay, { columnsA })
)});
  main.variable(observer()).define(["md"], function(md){return(
md`


`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`  
---------------------
`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
<simple-greeting name="Prakriti Parjay: Songs for All Seasons"></simple-greeting>   
<br>
Rabindrasangeet inherits its **6** seasons from the Sanskrit literary tradition. The songs on Barsha, the rainy season, often evoke motifs from Kalidasa's works.  
Besides the songs that are categorized under the **6** seasons, there are 8 songs that are categorized as 'Sadharon/General' under 'Prakriti.'
<br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`|<svg width="15" height="15" viewBox="0 0 12 12"><circle r="40" fill="#CCAD8F"></svg> Gr&imacr;shma: **Summer**, 15 songs           
|<svg width="15" height="15" viewBox="0 0 15 15"><circle r="40" fill="#8DB580"></circle></svg> Barsha: **Rainy Season**, 107 songs  
|<svg width="15" height="15" viewBox="-3 -3 15 15"><circle r="40" fill="#8A89A9"></circle></svg> Sharat: **Early Autumn**, 35 songs  
|<svg width="15" height="15" viewBox="-3 -3 15 15"><circle r="40" fill="#DDD1C7"></circle></svg> Hemanta: **Late Autumn**, 5 songs  
|<svg width="15" height="15" viewBox="-3 -3 15 15"><circle r="40" fill="#156FA2"></circle></svg> Sheet: **Winter**, 13 songs  
|<svg width="15" height="15" viewBox="-3 -3 15 15"><circle r="40" fill="#D05353"></circle></svg> Basanta: **Spring**, 94 songs  
 Besides these, there are **8** songs that are categorized as **Sadharon/General** under **Prakriti.**`
)});
  main.variable(observer("chartP")).define("chartP", ["pie","Prakriti","d3","width","height1","colorUpa","arc","arcLabel"], function(pie,Prakriti,d3,width,height1,colorUpa,arc,arcLabel)
{
  const arcs = pie(Prakriti);

  const svg = d3
    .create("svg")
    .attr("viewBox", [-width / 2, -height1 / 2, width, height1]);

  svg
    .append("g")
    .attr("stroke", "white")
    .selectAll("path")
    .data(arcs)
    .join("path")
    .attr("fill", (d) => colorUpa(d.data.UpaParjay))
    .attr("d", arc)
    .append("title")
    .text((d) => `${d.data.UpaParjay}: ${d.data.count} songs`);

  svg
    .append("g")
    .attr("font-family", "sans-serif")
    .attr("font-size", 12)
    .attr("text-anchor", "middle")
    .selectAll("text")
    .data(arcs)
    .join("text")
    .attr("transform", (d) => `translate(${arcLabel.centroid(d)})`)
    .call((text) =>
      text
        .append("tspan")
        .attr("y", "-0.4em")
        .attr("font-weight", "bold")
        .text((d) => d.data.UpaParjay)
    )
    .call((text) =>
      text
        .filter((d) => d.endAngle - d.startAngle > 0.25)
        .append("tspan")
        .attr("x", 0)
        .attr("y", "0.7em")
        .attr("fill-opacity", 0.7)
        .text((d) => d.data.count)
    );

  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`










`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
Here are all the songs from the Prakriti Parjay, in tabular form. Select by each Season, or browse the general/Sadharon category.
<br>`
)});
  main.variable(observer("viewof Ritu")).define("viewof Ritu", ["Inputs","onlyPrakriti"], function(Inputs,onlyPrakriti){return(
Inputs.select(
  onlyPrakriti.map((d) => d.Ritu),
  { sort: true, unique: true, label: "Select Ritu or Season" }
)
)});
  main.variable(observer("Ritu")).define("Ritu", ["Generators", "viewof Ritu"], (G, _) => G.input(_));
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["Inputs","selectedRitu"], function(Inputs,selectedRitu){return(
Inputs.table(selectedRitu)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`























`
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
  main.variable(observer()).define(["markdeep","FileAttachment"], async function(markdeep,FileAttachment){return(
markdeep`
## Parjay and Taal: Synergy Part 1
<br>
<div style="columns:2;-webkit-columns:2;-moz-columns:2;column-gap:3em;-webkit-column-gap:3em;-moz-column-gap:3em">
**Dadra**, a rhythm of 6 beats divided into two parts of 3 beats each, is the most popular Taal in the entire corpus of Rabindrasangeet. A total of **675** songs are set to *Dadra* rhythm, followed by **348** songs in *Kaharwa*, **220** songs in *Ektaal*, **181** songs in *Tritaal*, 115 in *Jhaptaal*, 95 songs in *Teora* etc.   
<br>
But how are the Taals aligned with the themes of the songs? There is not much anomaly there, as *Dadra* seems to be the dominant Taal in each Parjay.
<br>
The color code for the most used *Taals* are given below: you can also hover over the color blocks in the graph to see the name of the *Taal*. </div>
<figure><img src="${await FileAttachment("tabla1.jpg").url()}"></figure>
<br>
<br>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`|<svg width="15" height="15" viewBox="0 0 12 12"><circle r="40" fill="#ff9da7"></svg> Dadra: 6 beats: 3|3           
|<svg width="15" height="15" viewBox="0 0 15 15"><circle r="40" fill="#b3e2cd"></circle></svg> Kaharwa: 8 beats: 4|4  
|<svg width="15" height="15" viewBox="-3 -3 15 15"><circle r="40" fill="#f28e2c"></circle></svg> Tritaal: 16 beats: 4|4|4|4  
|<svg width="15" height="15" viewBox="-3 -3 15 15"><circle r="40" fill="#e377c2"></circle></svg> Jhaptaal: 10 beats: 2|3|2|3   
|<svg width="15" height="15" viewBox="-3 -3 15 15"><circle r="40" fill="#f1e2cc"></circle></svg> Teora: 7 beats: 3|2|2    
|<svg width="15" height="15" viewBox="-3 -3 15 15"><circle r="40" fill="#af7aa1"></circle></svg> Sasthi: 6 beats: 4|2  
|<svg width="15" height="15" viewBox="-3 -3 15 15"><circle r="40" fill="#d62728"></circle></svg> Ektaal: 12 beats: 3|3|3|3  
`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["Plot","d3","tagoreParjayC","byParjayTaal"], function(Plot,d3,tagoreParjayC,byParjayTaal){return(
Plot.plot({
  marginLeft: 50,
  marginBottom: 150,
  marginTop: 50,
  width: 1200,
  height: 900,
  color: {
    range: d3.schemePastel2
      .concat(d3.schemeTableau10)
      .concat(d3.schemeCategory10)
  },

  x: {
    tickRotate: 45,
    label: "Parjay",
    domain: tagoreParjayC
      .sort((a, b) => d3.descending(a.count, b.count))
      .map((d) => d.parjay)
  },
  y: {
    grid: true,
    label: "count"
  },

  marks: [
    Plot.barY(byParjayTaal, {
      x: "Parjay",
      order: (a, b) => d3.descending(a.count, b.count),
      y: "count",
      rx: 5,
      title: (d) =>
        `${d.count} Song/s set to ${d.Taal} Taal in ${d.Parjay} Parjay`,
      fill: (d) => d.Taal
    }),
    Plot.ruleY([0])
  ]
})
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Here is a view of the frequency of **Taals** in the entire corpus.`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer("chartT")).define("chartT", ["pieTaal","onlyTaal","d3","width","height1","colorTaal2","arcTaal","arcLabel"], function(pieTaal,onlyTaal,d3,width,height1,colorTaal2,arcTaal,arcLabel)
{
  const arcs = pieTaal(onlyTaal);

  const svg = d3
    .create("svg")
    .attr("viewBox", [-width / 2, -height1 / 2, width, height1]);

  svg
    .append("g")
    .attr("stroke", "white")
    .selectAll("path")
    .data(arcs)
    .join("path")
    .attr("fill", (d) => colorTaal2(d.data.Taal))
    .attr("d", arcTaal)
    .append("title")
    .text((d) => `${d.data.Taal}: ${d.data.count} songs`);

  svg
    .append("g")
    .attr("font-family", "sans-serif")
    .attr("font-size", 12)
    .attr("text-anchor", "middle")
    .selectAll("text")
    .data(arcs)
    .join("text")
    .attr("transform", (d) => `translate(${arcLabel.centroid(d)})`)
    .call((text) =>
      text
        .append("tspan")
        .attr("y", "-0.4em")
        .attr("font-weight", "bold")
        .text((d) => d.data.Taal)
    )
    .call((text) =>
      text
        .filter((d) => d.endAngle - d.startAngle > 0.25)
        .append("tspan")
        .attr("x", 0)
        .attr("y", "0.7em")
        .attr("fill-opacity", 0.7)
        .text((d) => d.data.count)
    );

  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`




`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`------------------`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>
<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
The following table allows you to select a single Taal to see all songs that utilize it.  
You can sort each column alphabetically by clicking the column heading.
<br>`
)});
  main.variable(observer("viewof Taal")).define("viewof Taal", ["Inputs","dataA"], function(Inputs,dataA){return(
Inputs.select(
  dataA.map((d) => d.Taal),
  { sort: true, unique: true, label: "Taal" }
)
)});
  main.variable(observer("Taal")).define("Taal", ["Generators", "viewof Taal"], (G, _) => G.input(_));
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["Inputs","selectedTaal","columnsA"], function(Inputs,selectedTaal,columnsA){return(
Inputs.table(selectedTaal, { columnsA })
)});
  main.variable(observer()).define(["md"], function(md){return(
md`





`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`























`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>
<br>`
)});
  main.variable(observer()).define(["markdeep"], function(markdeep){return(
markdeep`
## Parjay and Raag: Synergy Part 2
<br>
<div style="columns:2;-webkit-columns:2;-moz-columns:2;column-gap:3em;-webkit-column-gap:3em;-moz-column-gap:3em">
**Bhairavi**, a morning Raag, is the most popular Raag in the entire corpus of Rabindrasangeet. A total of **181** songs are set to *Bhairavi*, followed by **82** songs in *Baul-Sur*, **82** songs in *Pilu*, **81** songs in *Behag*, 77 in the *Kirtan* style, **77** songs in *Khambaj*, **60** songs in *Kafi*, etc.   
<br>
How are the Raags aligned with the themes of the songs? *Bhairavi* seems to be the dominant Raag in the top Parjays.  
<br>
Hover over each block of color in the following graph to have the name of the *Raag* displayed.
</div>
<br>
`
)});
  main.variable(observer()).define(["FileAttachment","htl"], async function(FileAttachment,htl){return(
htl.html`<br>
<figure><img src="${await FileAttachment("musicnotes@1.png").url()}"></figure>
<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`




`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
Raags in each Parjay: hover over each color block in the following graph to see the name of the **Raag**.
<br>`
)});
  main.variable(observer()).define(["Plot","d3","byParjayRaag"], function(Plot,d3,byParjayRaag){return(
Plot.plot({
  marginLeft: 50,
  marginBottom: 150,
  marginTop: 50,
  width: 1200,
  height: 800,
  color: {
    range: d3.schemePastel1
      .concat(d3.schemeDark2)
      .concat(d3.schemeAccent)
      .concat(d3.schemePaired)
  },
  x: {
    tickRotate: 45,
    label: "Parjay",
    domain: byParjayRaag
      .sort((a, b) => d3.descending(a.count, b.count))
      .map((d) => d.Parjay)
  },
  y: {
    grid: true
  },

  marks: [
    Plot.barY(byParjayRaag, {
      x: "Parjay",
      order: (a, b) => d3.descending(a.count, b.count),
      y: "count",
      rx: 5,
      title: (d) => `${d.count} Song/s in ${d.Raag} within ${d.Parjay} Parjay`,
      fill: (d) => d.Raag
    }),
    Plot.ruleY([0])
  ]
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`------------------`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
The Raags used in Rabindrasangeet are far too many to provide a color index.  
The following table allows you to select a single Raag to see all the songs based on it.  
*The Raag column also includes the Tunes, including the English songs that Tagore borrowed from  
*. 
<br>
You can sort each column alphabetically by clicking the column heading.
<br>`
)});
  main.variable(observer("viewof Raag")).define("viewof Raag", ["Inputs","dataA"], function(Inputs,dataA){return(
Inputs.select(
  dataA.map((d) => d.Raag),
  { sort: true, unique: true, label: "Raags/Scales and Tunes" }
)
)});
  main.variable(observer("Raag")).define("Raag", ["Generators", "viewof Raag"], (G, _) => G.input(_));
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["Inputs","selectedRaag","columnsA"], function(Inputs,selectedRaag,columnsA){return(
Inputs.table(selectedRaag, { columnsA })
)});
  main.variable(observer()).define(["md"], function(md){return(
md`























`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>
<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
## Clusters: Parjay + Raag + Taal
<br>
<div style="columns:2;-webkit-columns:2;-moz-columns:2;column-gap:3em;-webkit-column-gap:3em;-moz-column-gap:3em">
We have so far seen the synergy between *Parjay and Raag* and *Parjay and Taal*. But how about popular combinations of all three? The following network graph is an experimental visualization of the clusters of *Parjay*-*Raag*-*Taal*. The biggest cluster is of **24** songs, in the *Puja Parjay*, *Baul*-*Sur* *Raag/Tune*, and *Dadra* *Taal/Rhythm*.  The size of the circles correspond with the size of the cluster, i.e., the number of songs in each cluster.  
<br>
The color code for the *Parjays* of ther clusters are given below: you can also **hover** over the circles for a description of the clusters and the number of songs included in it. To avoid overcrowding, the actual songs are not visible on hover; but you can see them in tabular form using the select function that follows the graph. Inside the graph, feel free to drag and move the circles around. </div>
<br>
`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["swatches","d3"], function(swatches,d3){return(
swatches({
  color: d3.scaleOrdinal(
    [
      "Puja",
      "Prem",
      "Prakriti",
      "Geetinatya O Nrityanatya",
      "Bichitra",
      "Natyageeti",
      "Prem O Prakriti",
      "Puja O Prarthana",
      "Swadesh",
      "Anushthanik",
      "Bhanusingha Thakurer Padabali",
      "Jatiya Sangeet",
      "Aanushthanik Sangeet",
      "Nrityanatya Mayar Khela",
      "Porishishta 3",
      "Bhumika",
      "Porishodh"
    ],
    d3.schemeTableau10
  ),
  columns: "180px"
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`



`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer("viewof replay")).define("viewof replay", ["html"], function(html){return(
html`<button>Replay Animation`
)});
  main.variable(observer("replay")).define("replay", ["Generators", "viewof replay"], (G, _) => G.input(_));
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer("chart")).define("chart", ["replay","dataClusters","d3","width","heightH","drag","r","invalidation"], function(replay,dataClusters,d3,width,heightH,drag,r,invalidation)
{
  replay;
  const links = dataClusters.links.map((d) => Object.create(d));
  const nodes = dataClusters.nodes.map((d) => Object.create(d));

  console.log(nodes);

  //create simulation, nodes, links
  const simulation = d3
    .forceSimulation(nodes)
    .force(
      "link",
      d3.forceLink(links).id((d) => d.name)
    )
    .force("charge", d3.forceManyBody().strength(-1))
    .force("center", d3.forceCenter(width / 2, heightH / 2));

  const svg = d3.create("svg").attr("viewBox", [0, 0, width, heightH]);

  //create links
  const link = svg
    .append("g")
    .selectAll(".link")
    .data(links)
    .join("g")
    .attr("class", "link")
    .call(drag(simulation));

  //create lines to SHOW the links
  const line = link
    .append("line")
    .attr("stroke", "#cccccc")
    .attr("stroke-opacity", 0)
    .attr("stroke-dasharray", "2");

  //add css attribute "title" to each link; this is visible only with a tooltip
  link.append("title").text((d) => d.relation);

  //create colors for each node
  const groups = [
    "Puja",
    "Prem",
    "Prakriti",
    "Geetinatya O Nrityanatya",
    "Bichitra",
    "Natyageeti",
    "Prem O Prakriti",
    "Puja O Prarthana",
    "Swadesh",
    "Anushthanik",
    "Bhanusingha Thakurer Padabali",
    "Jatiya Sangeet",
    "Aanushthanik Sangeet",
    "Nrityanatya Mayar Khela",
    "Porishishta 3",
    "Bhumika",
    "Porishodh"
  ];
  const colorN = d3.scaleOrdinal().domain(groups).range(d3.schemeTableau10);

  //create the nodes
  const node = svg
    .append("g")
    .selectAll(".node")
    .data(nodes)
    .join("g")
    .attr("class", "node")
    .call(drag(simulation));

  //create circles to SHOW the nodes
  const circle = node
    .append("circle")
    .attr("stroke", null)
    .attr("stroke-width", 1.5)
    .attr("fill", (d) => colorN(d.group))
    .attr("opacity", 1)
    .attr("r", function (d) {
      return r(d.nodesize);
    })

    .call(drag(simulation));

  node
    .append("title")
    .text((d) => `${d.nodesize} songs in the cluster "${d.name}" `);

  const text = node
    .append("text")
    .attr("font-family", "HelveticaNeue-Light")
    .attr("font-size", "18px")
    .attr("text-anchor", "middle")
    .attr("stroke", "#2D2D34")
    .text(function (d) {
      return "";
    });

  simulation.on("tick", () => {
    line
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);

    text.attr("x", (d) => d.x).attr("y", (d) => d.y);

    circle.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
  });

  invalidation.then(() => simulation.stop());

  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md `






`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>
<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Find out the songs in the clusters by selecting *Parjay*, *Raag* and *Taal* below:`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer("viewof parjay")).define("viewof parjay", ["Inputs","tA"], function(Inputs,tA){return(
Inputs.select(
  tA.map((d) => d.Parjay),
  { sort: true, unique: true, label: "Parjay" }
)
)});
  main.variable(observer("parjay")).define("parjay", ["Generators", "viewof parjay"], (G, _) => G.input(_));
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>
<br>`
)});
  main.variable(observer("viewof raag")).define("viewof raag", ["Inputs","tA"], function(Inputs,tA){return(
Inputs.select(
  tA.map((d) => d.Raag),
  { sort: true, unique: true, label: "Raag" }
)
)});
  main.variable(observer("raag")).define("raag", ["Generators", "viewof raag"], (G, _) => G.input(_));
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>
<br>`
)});
  main.variable(observer("viewof taal")).define("viewof taal", ["Inputs","tA"], function(Inputs,tA){return(
Inputs.select(
  tA.map((d) => d.Taal),
  { sort: true, unique: true, label: "Taal" }
)
)});
  main.variable(observer("taal")).define("taal", ["Generators", "viewof taal"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`<br>
If your selections are part of a *valid* cluster, the songs in the cluster will appear below, in tabular form.
<br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["Inputs","tA","parjay","raag","taal"], function(Inputs,tA,parjay,raag,taal){return(
Inputs.table(
  tA.filter((d) => d.Parjay === parjay && d.Raag === raag && d.Taal === taal)
)
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
md`## This is it, for now .....
This notebook is indeed a **draft**; the data is incomplete and not tidy enough.  
 <br>
Wait for a ITRANS-coded transliteration for the next verion of this archive. Write to me if you would like to a volunteer in the transliteration process.
<br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["markdeep"], function(markdeep){return(
markdeep`
# General Search: Use at your own peril.
<br>
Here is a table with a search option in any category. Use at your own peril. In this draft format, the transliteration of the first lines of the songs are derived from the schema used by geetabitan.com. Wait for a ITRANS-coded transliteration for the next verion of this archive. Write to me if you would like to a volunteer in the transliteration process. 
<br>
`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer("viewof search")).define("viewof search", ["Inputs","dataA"], function(Inputs,dataA){return(
Inputs.search(dataA)
)});
  main.variable(observer("search")).define("search", ["Generators", "viewof search"], (G, _) => G.input(_));
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["Inputs","search","dataA"], function(Inputs,search,dataA){return(
Inputs.table(search, dataA.columns)
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Finally, here is ....
a bare view of the data, similar to what we get with the .describe() function in pandas for python.  
Please note that there are **36** UpaParjays or sub-cateogires and not 37 as indicated below: the code here counts 'none' as a catgeory.
<br>`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer("viewof summary_data")).define("viewof summary_data", ["SummaryTable","dataA"], function(SummaryTable,dataA){return(
SummaryTable(dataA, { label: "Rabindrasangeet" })
)});
  main.variable(observer("summary_data")).define("summary_data", ["Generators", "viewof summary_data"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`









`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`----------------`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`


















`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`-----------------`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`

















`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`-------------------------------`
)});
  main.variable(observer()).define(["htl"], function(htl){return(
htl.html`<br>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Appendix
<br>`
)});
  main.variable(observer("markdeep")).define("markdeep", ["require","html"], async function(require,html)
{
  window.markdeepOptions = { mode: "script", detectMath: false };
  const md = await require("https://morgan3d.github.io/markdeep/0.10/markdeep.min.js");
  const unescape = /(\\[$`])/g;

  return (strings, ...exprs) => {
    let template = "";
    for (let i = 0; i < strings.length - 1; i++) {
      template += strings.raw[i] + exprs[i];
    }
    template += strings.raw[strings.length - 1];
    template = template.replace(unescape, "`");
    const output = window.markdeep.format(template);
    return html`
    <meta charset="utf-8">
    <style>${window.markdeep.stylesheet()}</style>
  <style>h1:before, h2:before { content: none; }</style>
    ${output}
  `;
  };
}
);
  main.variable(observer("columnsA")).define("columnsA", ["dataA"], function(dataA){return(
dataA.columns
)});
  main.variable(observer("columnsP")).define("columnsP", ["onlyPrakriti"], function(onlyPrakriti){return(
onlyPrakriti.columns
)});
  main.variable(observer("dataA")).define("dataA", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("tagoreAll_nodupl@3.csv").csv({ typed: true })
)});
  main.variable(observer("tagoreParjayC")).define("tagoreParjayC", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("tagoreParjayCounts@4.csv").csv({ typed: true })
)});
  main.variable(observer("dataP")).define("dataP", ["d3","dataA"], function(d3,dataA){return(
d3.group(dataA, (d) => d.Parjay)
)});
  main.variable(observer("dataUP")).define("dataUP", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("tagoreUpaParjayC@3.csv").csv({ typed: true })
)});
  main.variable(observer("data_Traag")).define("data_Traag", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("groupbyTraag@1.csv").csv({ typed: true })
)});
  main.variable(observer("dataP_UP")).define("dataP_UP", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("groupbyPupa.csv").csv({ typed: true })
)});
  main.variable(observer("byParjayTaal")).define("byParjayTaal", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("groupbyParjayTaal@2.csv").csv({ typed: true })
)});
  main.variable(observer("byParjayRaag")).define("byParjayRaag", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("ParjayRaag.csv").csv({ typed: true })
)});
  main.variable(observer("selectedParjay")).define("selectedParjay", ["dataA","Parjay"], function(dataA,Parjay){return(
dataA.filter((d) => d.Parjay === Parjay)
)});
  main.variable(observer("selectedRaag")).define("selectedRaag", ["dataA","Raag"], function(dataA,Raag){return(
dataA.filter((d) => d.Raag === Raag)
)});
  main.variable(observer("selectedTaal")).define("selectedTaal", ["dataA","Taal"], function(dataA,Taal){return(
dataA.filter((d) => d.Taal === Taal)
)});
  main.variable(observer("selectedRitu")).define("selectedRitu", ["onlyPrakriti","Ritu"], function(onlyPrakriti,Ritu){return(
onlyPrakriti.filter((d) => d.Ritu === Ritu)
)});
  main.variable(observer("onlyTaal")).define("onlyTaal", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("onlyTaalmini.csv").csv({ typed: true })
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Taal Pie [......`
)});
  main.variable(observer("pieTaal")).define("pieTaal", ["d3"], function(d3){return(
d3
  .pie()
  .sort(null)
  .padAngle(0.01)
  .value((d) => d.count)
)});
  main.variable(observer("arcTaal")).define("arcTaal", ["d3","width","height1"], function(d3,width,height1){return(
d3
  .arc()
  .innerRadius(0)
  .outerRadius(Math.min(width, height1) / 2 - 1)
  .cornerRadius(10)
)});
  main.variable(observer("colorTaal")).define("colorTaal", function(){return(
new Map([
  ["Dadra", "#ff9da7"],
  ["Kaharwa", "#b3e2cd"],
  ["Ektaal", "#d62728"],
  ["Tritaal", "#f28e2c"],
  ["Jhaptaal", "#f1e2cc"],
  ["Teora", "#f1e2cc"],
  ["Sasthi", "#af7aa1"],
  ["Jhampak", "#8c564b"],
  ["Khemta", "#cbd5e8"],
  ["other", "#ffffff"]
])
)});
  main.variable(observer("colorTaal2")).define("colorTaal2", ["d3"], function(d3){return(
d3
  .scaleOrdinal()
  .domain([
    "Dadra",
    "Kaharwa",
    "Ektaal",
    "Tritaal",
    "Jhaptaal",
    "Teora",
    "Sasthi",
    "Jhampak",
    "Khemta",
    "other"
  ])
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
    "#ffffff"
  ])
)});
  main.variable(observer()).define(["md"], function(md){return(
md`.....] Taal Pie`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Prakriti [.....`
)});
  main.variable(observer("Prakriti")).define("Prakriti", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("prakriti@1.csv").csv({ typed: true })
)});
  main.variable(observer("onlyPrakriti")).define("onlyPrakriti", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("onlyPrakriti-2.csv").csv({ typed: true })
)});
  main.variable(observer("colorUpa")).define("colorUpa", ["d3"], function(d3){return(
d3
  .scaleOrdinal()
  .domain(["Grishma", "Barsha", "Sharat", "Hemanta", "Sheet", "Basanta"])
  .range(["#CCAD8F", "#8DB580", "#8A89A9", "#DDD1C7", "#156FA2", "#D05353"])
)});
  main.variable(observer("height1")).define("height1", function(){return(
500
)});
  main.variable(observer("arc")).define("arc", ["d3","width","height1"], function(d3,width,height1){return(
d3
  .arc()
  .innerRadius(0)
  .outerRadius(Math.min(width, height1) / 2 - 1)
  .cornerRadius(50)
)});
  main.variable(observer("arcLabel")).define("arcLabel", ["width","height1","d3"], function(width,height1,d3)
{
  const radius = (Math.min(width, height1) / 2) * 0.8;
  return d3.arc().innerRadius(radius).outerRadius(radius);
}
);
  main.variable(observer("pie")).define("pie", ["d3"], function(d3){return(
d3
  .pie()
  .sort(null)
  .padAngle(0.07)
  .value((d) => d.count)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`....] Prakriti`
)});
  const child1 = runtime.module(define1);
  main.import("SummaryTable", child1);
  const child2 = runtime.module(define2);
  main.import("bannerTitle", child2);
  main.variable(observer("bannerTitleHeight")).define("bannerTitleHeight", function(){return(
160
)});
  main.variable(observer("rabindraBannerTwoLine")).define("rabindraBannerTwoLine", ["DOM","html"], function(DOM,html){return(
(title1, title2, pageTitle = title1 + " " + title2) => {
  const { id, href } = DOM.uid("banner");
  return html`
    <h1 style="display: none">${pageTitle}</h1> <!-- extracted title -->
    <svg id="${id}" width="100%" viewBox="0 0 960 160">
      <text x="50%" y="50%" text-anchor="middle">
        <tspan x="50%" dy="-0.34em">Rab&imacr;ndasang&imacr;t: </tspan>
        <tspan x="50%" dy="1.3em">Tagore Songs</tspan>
      </text>
    </svg>
    <style>
      #${id} {background: black;}
      #${id} text {fill: rgba(256, 256, 256, .8); font-family: sans-serif; font-size: 45px; font-weight: bold;}
    </style>
  `;
}
)});
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
  main.variable(observer("fmt")).define("fmt", ["d3"], function(d3){return(
(n) => d3.format(",d")(n)
)});
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
  main.variable(observer()).define(["md"], function(md){return(
md`[clusters .....`
)});
  main.variable(observer("dataClusters")).define("dataClusters", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("tagoreclusters.json").json()
)});
  main.variable(observer("r")).define("r", ["d3"], function(d3){return(
d3.scaleLinear().domain([0, 15]).range([1, 30])
)});
  main.variable(observer("drag")).define("drag", ["d3"], function(d3){return(
(simulation) => {
  function dragstarted(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }

  function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  function dragended(event) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }

  return d3
    .drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended);
}
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@6")
)});
  main.variable(observer("heightH")).define("heightH", function(){return(
580
)});
  const child3 = runtime.module(define3);
  main.import("swatches", child3);
  main.variable(observer("tA")).define("tA", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("tagoreAll_nodupl@3.csv").csv({ typed: true })
)});
  main.variable(observer("selectedP")).define("selectedP", ["tA","parjay"], function(tA,parjay){return(
tA.filter((d) => d.Parjay === parjay)
)});
  main.variable(observer("selectedR")).define("selectedR", ["tA","raag"], function(tA,raag){return(
tA.filter((d) => d.Raag === raag)
)});
  main.variable(observer("selectedT")).define("selectedT", ["tA","taal"], function(tA,taal){return(
tA.filter((d) => d.Taal === taal)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`..... clusters]`
)});
  return main;
}
