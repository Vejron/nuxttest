import * as cheerio from "cheerio";
import fetch from "node-fetch";

const mapping = {
  "Brattby-Gubböle skidspår, 3,6 km (elljus)": {
    name: "Brattby-Gubböle",
    length: 3.6,
    electric: true,
    payed: false,

  },
  "Bräntevägens skidspår, 0,7 km (Holmsund)": {
    name: "Bräntevägens skidspår 0,7",
    length: 0.7,
    electric: false,
    payed: false,
  },
  "Bräntevägens skidspår, 1,5 km (elljus, Holmsund)": {
    name: "Bräntevägens skidspår 1,5",
    length: 1.5,
    electric: true,
    payed: false,
  },
  "Bräntevägens skidspår, 3,3 km (elljus, Holmsund)": {
    name: "Bräntevägens skidspår 3,3",
    length: 3.3,
    electric: true,
    payed: false,
  },
  "Bräntevägens skidspår, 4,4 km (elljus, Holmsund)": {
    name: "Bräntevägens skidspår 4,4",
    length: 4.4,
    electric: true,
    payed: false,
  },
  "Ersboda skidspår, 1,5 km (elljus)": {
    name: "Bräntevägens skidspår 1,5",
    length: 1.5,
    electric: true,
    payed: false,
  },
  "Ersboda skidspår, 4,1 km (elljus)": {
    name: "Ersboda skidspår 4,1",
    length: 4.1,
    electric: true,
    payed: false,
  },
  "Ersbodaängarnas skidspår": {
    name: "Ersbodaängarna",
    length: 1,
    electric: false,
    payed: false,
  },
  "Flurkmarks skidspår, 2,3 km (elljus)": {
    name: "Flurkmarks skidspår",
    length: 2.3,
    electric: true,
    payed: false,
  },
  "Gimonäs skidspår, 2,2 km (elljus)": {
    name: "Gimonäs skidspår 2,2",
    length: 2.2,
    electric: true,
    payed: false,
  },
  "Gimonäs skidspår, 3,5 km (elljus)": {
    name: "Gimonäs skidspår 3,5",
    length: 3.5,
    electric: true,
    payed: false,
  },
  "Gimonäs skidspår, 9 km": {
    name: "Gimonäs skidspår 9",
    length: 9,
    electric: false,
    payed: false,
  },
  "Holmsunds golfbana skidspår, 7,5 km (Holmsund)": {
    name: "Holmsunds golfbana",
    length: 7.5,
    electric: false,
    payed: false,
  },
  "Hällnäs skidspår, 2,5 km": {
    name: "Hällnäs",
    length: 2.5,
    electric: false,
    payed: false,
  },
  "Hörnefors skidspår, 1,4 km (elljus)": {
    name: "Hörnefors skidspår 1,4",
    length: 1.4,
    electric: true,
    payed: false,
  },
  "Hörnefors skidspår, 2,2 km (elljus)": {
    name: "Hörnefors skidspår 2.2",
    length: 2.2,
    electric: true,
    payed: false,
  },
  "Hörnefors skidspår, 3,6 km (elljus)": {
    name: "Hörnefors skidspår 3,6",
    length: 3.6,
    electric: true,
    payed: false,
  },
  "I 20:s skidspår, 10 km": {
    name: "I 20:s skidspår 10",
    length: 10,
    electric: false,
    payed: false,
  },
  "I 20:s skidspår, 5 km": {
    name: "I 20:s skidspår 5",
    length: 5,
    electric: false,
    payed: false,
  },
  "Kläppaspåret, 1,5 km (elljus)": {
    name: "Kläppaspåret 1,5",
    length: 1.5,
    electric: true,
    payed: false,
  },
  "Kläppaspåret, 2,5 km (elljus)": {
    name: "Kläppaspåret 2,5",
    length: 2.5,
    electric: true,
    payed: false,
  },
  "Mariehemsängarnas skidspår, 2,6 km": {
    name: "Mariehemsängarna",
    length: 2.6,
    electric: false,
    payed: false,
  },
  "Nydala hund- och pulkskidspår, 8,6 km": {
    name: "Nydala hund- och pulkskidspår",
    length: 8.6,
    electric: false,
    payed: false,
    dogs: true
  },
  "Nydala konstsnöspår 1.2 km (elljus)": {
    name: "Nydala konstsnöspår 1.2",
    length: 1.2,
    electric: true,
    payed: true,
  },
  "Nydala konstsnöspår 2.1 km (elljus)": {
    name: "Nydala konstsnöspår 2.1",
    length: 0.7,
    electric: true,
    payed: true,
  },
  "Nydala skidspår, 10 km": {
    name: "Nydala dagspår 10",
    length: 10,
    electric: false,
    payed: false,
  },
  "Nydala skidspår, 5 km (elljus)": {
    name: "Nydala skidspår 5",
    length: 5,
    electric: true,
    payed: false,
  },
  "Nydala skidspår, 6,4 km": {
    name: "Nydala dagspår 6.4",
    length: 6.4,
    electric: false,
    payed: false,
  },
  "Obbola skidspår, 1,5 km": {
    name: "Obbola skidspår 1,5",
    length: 1.5,
    electric: false,
    payed: false,
  },
  "Obbola skidspår, 3,2 km (elljus)": {
    name: "Obbola skidspår 3,2",
    length: 3.2,
    electric: true,
    payed: false,
  },
  "Olles spår, 11,4 km": {
    name: "Olles spår 11,4",
    length: 11.4,
    electric: false,
    payed: false,
  },
  "Olles spår, 5 km": {
    name: "Olles spår 5",
    length: 5,
    electric: false,
    payed: false,
  },
  "Olles spår, 9,4 km": {
    name: "Olles spår 9,4",
    length: 9.4,
    electric: false,
    payed: false,
  },
  "Röbäcks skidspår, 1,3 km (elljus)": {
    name: "Röbäcks skidspår 1,3",
    length: 1.3,
    electric: true,
    payed: false,
  },
  "Röbäcks skidspår, 2,4 km (elljus)": {
    name: "Röbäcks skidspår 2,4",
    length: 2.4,
    electric: true,
    payed: false,
  },
  "Röbäcks skidspår, 5,3 km": {
    name: "Röbäcks skidspår 5,3",
    length: 5.3,
    electric: false,
    payed: false,
  },
  "Rödbergets skidspår, 1,6 km (elljus)": {
    name: "Rödbergets skidspår",
    length: 1.6,
    electric: true,
    payed: false,
  },
  "Rödåsel Äventyrsparken skidspår, 7 km (elljus)": {
    name: "Rödåsel Äventyrsparken",
    length: 7,
    electric: true,
    payed: false,
  },
  "Skivsjö skidspår, 1 km (elljus)": {
    name: "Skivsjö skidspår 1",
    length: 1,
    electric: true,
    payed: false,
  },
  "Skivsjö skidspår, 2,5 km (elljus)": {
    name: "Skivsjö skidspår 2.5",
    length: 2.5,
    electric: true,
    payed: false,
  },
  "Stadslidens skidspår, 1,9 km (elljus)": {
    name: "Stadslidens skidspår 1,9",
    length: 1.9,
    electric: true,
    payed: false,
  },
  "Stadslidens skidspår, 10 km (elljus)": {
    name: "Stadslidens skidspår 10",
    length: 10,
    electric: true,
    payed: false,
  },
  "Stadslidens skidspår, 3,1 km (elljus)": {
    name: "Stadslidens skidspår 3.1",
    length: 3.1,
    electric: true,
    payed: false,
  },  
  "Stadslidens skidspår, 3,6 km (elljus)": {
    name: "Stadslidens skidspår 3,6",
    length: 3.6,
    electric: true,
    payed: false,
  },
  "Stadslidens skidspår, 5 km (elljus)": {
    name: "Stadslidens skidspår 5",
    length: 5,
    electric: true,
    payed: false,
  },
  "Strycksele skidspår, 2,5 km (elljus)": {
    name: "Strycksele skidspår",
    length: 2.5,
    electric: true,
    payed: false
  },
  "Sävars skidspår, 3,7 km (elljus)": {
    name: "Sävars skidspår 3,7",
    length: 3.7,
    electric: true,
    payed: false,
  },
  "Tegs skidspår, 1,4 km (elljus)": {
    name: "Tegs skidspår",
    length: 1.4,
    electric: true,
    payed: false,
  },
  "Tegsnäsets skidspår, 5 km, elljus": {
    name: "Tegsnäsets skidspår",
    length: 5,
    electric: true,
    payed: false,
  },
  "Tvärålunds skidspår, 1,5 km (elljus)": {
    name: "Tvärålunds skidspår",
    length: 1.5,
    electric: true,
    payed: false,
  },
  "Umedalens skidspår, 2 km (elljus)": {
    name: "Umedalens skidspår",
    length: 2,
    electric: true,
    payed: false,
  },
  "Vindeln-Ånäset-spåret, 3,5 km": {
    name: "Vindeln-Ånäset-spåret",
    length: 3.5,
    electric: false,
    payed: false,
  },
  "Åmsele skidspår, 2,5 km (elljus)": {
    name: "Åmsele skidspår",
    length: 2.5,
    electric: true,
    payed: false,
  },
  "Överrödå väster om älven skidspår 10,0 km": {
    name: "Överrödå väster om älven",
    length: 10,
    electric: false,
    payed: false,
  }
}

export default async (req, res) => {
  const tracks = await doIt();
  return tracks;
};

async function doIt() {
  const response = await fetch(
    "http://anlaggningsregister.umea.se/SmsGrupp.aspx?gid=16"
  );
  const body = await response.text();
  const $ = cheerio.load(body);
  const rows = $("table tbody tr:not(.GridViewHeader):not(.GridViewFooter)");
  const tracks = [];
  rows.each((i, row) => {
    console.log(i);
    let trackInfo = {
      name: "",
      length: 0,
      electric: false,
      payed: false,
      info: "",
      date: "",
    };
    $(row)
      .children("td")
      .each((idx, td) => {
        if (idx == 0) {
          const name = $(td).text().trim();
          trackInfo = {...mapping[name]};
        }
        if (idx == 1) {
          const info = $(td, "span").text().trim();
          trackInfo.date = info.substring(info.length - 19);
          trackInfo.info = info.substring(0, info.length - 19);
          tracks.push(trackInfo);
        }
      });
  });
  return tracks;
}
