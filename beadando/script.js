
const missions =
  [
    {
      "title": "Az erdő széle",
      "description": "A térképed szélével szomszédos erdőmezőidért egy-egy pontot kapsz."
    },
    {
      "title": "Álmos-völgy",
      "description": "Minden olyan sorért, amelyben három erdőmező van, négy-négy pontot kapsz."
    },
    {
      "title": "Krumpliöntözés",
      "description": "A farmmezőiddel szomszédos vízmezőidért két-két pontot kapsz."
    },
    {
      "title": "Határvidék",
      "description": "Minden teli sorért vagy oszlopért 6-6 pontot kapsz."
    },
    {
      "title": "Fasor",
      "description": "A leghosszabb, függőlegesen megszakítás nélkül egybefüggő erdőmezők mindegyikéért kettő-kettő pontot kapsz. Két azonos hosszúságú esetén csak az egyikért."
    },
    {
      "title": "Gazdag város",
      "description": "A legalább három különböző tereptípussal szomszédos falurégióidért három-három pontot kapsz."
    },
    {
      "title": "Öntözőcsatorna",
      "description": "Minden olyan oszlopodért, amelyben a farm illetve a vízmezők száma megegyezik, négy-négy pontot kapsz. Mindkét tereptípusból legalább egy-egy mezőnek lennie kell az oszlopban ahhoz, hogy pontot kaphass érte."
    },
    {
      "title": "Mágusok völgye",
      "description": "A hegymezőiddel szomszédos vízmezőidért három-három pontot kapsz."
    },
    {
      "title": "Üres telek",
      "description": "A városmezőiddel szomszédos üres mezőkért 2-2 pontot kapsz."
    },
    {
      "title": "Sorház",
      "description": "A leghosszabb, vízszintesen megszakítás nélkül egybefüggő falumezők mindegyikéért kettő-kettő pontot kapsz."
    },
    {
      "title": "Páratlan silók",
      "description": "Minden páratlan sorszámú teli oszlopodért 10-10 pontot kapsz."
    },
    {
      "title": "Gazdag vidék",
      "description": "Minden legalább öt különböző tereptípust tartalmazó sorért négy-négy pontot kapsz."
    }

  ]

  const elements = [
    {
        time: 2,
        type: 'water',
        shape: [[1,1,1],
                [0,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'town',
        shape: [[1,1,1],
                [0,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false        
    },
    {
        time: 1,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1,1,1],
                [0,0,1],
                [0,0,0]],
            rotation: 0,
            mirrored: false  
        },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,1],
                [0,0,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'town',
        shape: [[1,1,1],
                [0,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1,1,1],
                [0,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'town',
        shape: [[1,1,0],
                [1,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'town',
        shape: [[1,1,1],
                [1,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'farm',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'farm',
        shape: [[0,1,0],
                [1,1,1],
                [0,1,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,1,1],
                [1,0,0],
                [1,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,0,0],
                [1,1,1],
                [1,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,1]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,1,0],
                [1,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    }
]

const images = {

  mountain: 'assets/tiles/mountain_tile.png',
  water: 'assets/tiles/water_tile.png',
  town: 'assets/tiles/village_tile.png',
  forest: 'assets/tiles/forest_tile.png',
  farm: 'assets/tiles/plains_tile.png',
  base: 'assets/tiles/base_tile.png',
  'Fasor': 'assets/missions_hun/Group 68.png',
  'Az erdő széle': 'assets/missions_hun/Group 69.png',
  'Krumpliöntözés': 'assets/missions_hun/Group 70.png',
  'Gazdag város': 'assets/missions_hun/Group 71.png',
  'Sorház': 'assets/missions_hun/Group 72.png',
  'Páratlan silók': 'assets/missions_hun/Group 73.png',
  'Álmos-völgy': 'assets/missions_hun/Group 74.png',
  'Öntözőcsatorna': 'assets/missions_hun/Group 75.png',
  'Mágusok völgye': 'assets/missions_hun/Group 76.png',
  'Üres telek': 'assets/missions_hun/Group 77.png',
  'Határvidék': 'assets/missions_hun/Group 78.png',
  'Gazdag vidék': 'assets/missions_hun/Group 79.png'
};


const currentElementTable = document.getElementById("currentElement");
const cim = document.getElementById("cim");

const kuldi1 = document.getElementById("kuldi1");
const kuldi2 = document.getElementById("kuldi2");
const kuldi3 = document.getElementById("kuldi3");
const kuldi4 = document.getElementById("kuldi4");

const mapTable = document.getElementById("map");
const mapCells = mapTable.getElementsByTagName("td");

const elteltido = document.getElementById("eltelt-ido");
const evszakhtml = document.getElementById("evszak");

const pontkiiras = document.getElementById("evszakpont");
const elemido = document.getElementById("elem-ido");
const vege = document.getElementById("vege");

const rotateButton = document.getElementById("rotateButton");
const mirrorButton = document.getElementById("mirrorButton");




var missionPoints = [0, 0, 0, 0];
var missionPointsBeforeNyar = [0, 0, 0, 0];
var missionPointsBeforeOsz = [0, 0, 0, 0];
var missionPointsBeforeTel = [0, 0, 0, 0];

var tavaszpont = 0;
var nyarpont = 0;
var oszpont = 0;
var telpont = 0;

var ido = 0;
let evszak = "Tavasz";


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(elements);
shuffle(missions);

var currentElementId = 0;
var currentElement = elements[currentElementId];

const mission4 = missions.slice(0, 4);

function createEmptyMap() {
  const map = [];
  for (let i = 0; i < 11; i++) {
    map.push(Array(11).fill(0));
  }
  return map;
}

const initialMap = createEmptyMap();

function addMountains(map, mountains) {
  mountains.forEach((mountain) => {
    const [row, col] = mountain;
    if (row >= 0 && row < 11 && col >= 0 && col < 11) {
      map[row][col] = 1;
    }
  });
}

const mountainCoordinates = [
  [1, 1],
  [3, 8],
  [5, 3],
  [8, 9],
  [9, 5]
];

addMountains(initialMap, mountainCoordinates);


function displayCurrentElement(element) {
  currentElementTable.innerHTML = "";
  element.shape.forEach((row) => {
    const tableRow = document.createElement("tr");
    row.forEach((cell) => {
      const tableCell = document.createElement("td");
      if (cell == 1) {
        if (currentElement.type == 'water') {
          tableCell.innerHTML = `<img src="${images.water}" alt="Water">`;
        }
        if (currentElement.type == 'town') {
          tableCell.innerHTML = `<img src="${images.town}" alt="Town">`;
        }
        if (currentElement.type == 'forest') {
          tableCell.innerHTML = `<img src="${images.forest}" alt="Forest">`;
        }
        if (currentElement.type == 'farm') {
          tableCell.innerHTML = `<img src="${images.farm}" alt="Farm">`;
        }
      }
      else {
        tableCell.innerHTML = `<img src="${images.base}" alt="Base">`;
      }
      tableRow.appendChild(tableCell);
    });
    currentElementTable.appendChild(tableRow);
  });
}



//Cím
cim.innerHTML = "<span style='background-color: #363636; color: white; padding: 5px; border-radius: 7px; '> Burgonya térkép</span>";

//Térkép
for (let i = 0; i < 11; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < 11; j++) {
    const cell = document.createElement("td");
    if (initialMap[i][j] === 1) {
      cell.innerHTML = `<img src="${images.mountain}" alt="Mountain">`;
    }
    else {
      cell.innerHTML = `<img src="${images.base}" alt="Base">`;
    }
    row.appendChild(cell);
  }
  mapTable.appendChild(row);
}

//Jelenlegi évszak
evszakhtml.innerHTML = "<span style='background-color: #363636; color: white; padding: 5px; border-radius: 7px; '> Jelenlegi évszak: Tavasz</span>";


//Évszakokra kapott pontok
pontkiiras.innerHTML = "<span style='background-color: #800000; color: white; padding: 5px; border-radius: 7px; '> Tavasz: " + tavaszpont + " pont </span>";
pontkiiras.innerHTML += " &nbsp; ";
pontkiiras.innerHTML += "  <span style='background-color: #D2691E; color: white; padding: 5px; border-radius: 7px; opacity: 0.4;'> Nyár:" + nyarpont + " pont </span>";
pontkiiras.innerHTML += " &nbsp; ";
pontkiiras.innerHTML += "  <span style='background-color: #8B4513; color: white; padding: 5px; border-radius: 7px; opacity: 0.4;'> Ősz:" + oszpont + " pont </span>";
pontkiiras.innerHTML += " &nbsp; ";
pontkiiras.innerHTML += "  <span style='background-color: #00008B; color: white; padding: 5px; border-radius: 7px; opacity: 0.4;' > Tél:" + telpont + " pont </span";

//Küldetések + küldetésekre kapott pontok
kuldi1.innerHTML = "<span style='display: inline-block; width: 85px; background-color: #363636; color: white; padding: 5px; border-radius: 7px; '> (" + missionPoints[0] + " pont) </span>";
kuldi1.innerHTML += `<img src="${images[mission4[0]["title"]]}" alt="Mission">`;
kuldi1.innerHTML += " &nbsp; ";

kuldi2.innerHTML = "<span style='display: inline-block; width: 85px; background-color: #363636; color: white; padding: 5px; border-radius: 7px; '> (" + missionPoints[1] + " pont) </span>";
kuldi2.innerHTML += `<img src="${images[mission4[1]["title"]]}" alt="Mission" >`;

kuldi3.innerHTML = "<span style='display: inline-block; width: 85px; background-color: #363636; color: white; padding: 5px; border-radius: 7px; opacity: 0.4; '> (" + missionPoints[2] + " pont) </span>";
kuldi3.innerHTML += `<img src="${images[mission4[2]["title"]]}" alt="Mission" style="opacity: 0.4;">`
kuldi3.innerHTML += " &nbsp; ";

kuldi4.innerHTML = "<span style='display: inline-block; width: 85px; background-color: #363636; color: white; padding: 5px; border-radius: 7px; opacity: 0.4; '> (" + missionPoints[3]+ " pont) </span>";
kuldi4.innerHTML += `<img src="${images[mission4[3]["title"]]}" alt="Mission" style="opacity: 0.4;">`;

//Évszakból hátralévő idő
elteltido.innerHTML = "<span style='background-color: #363636; color: white; padding: 5px; border-radius: 7px; '> Évszakból hátralévő idő:  0/7</span>";

//Lehelyezendő elem költsége
elemido.innerHTML = "<span style='background-color: #363636; color: white; padding: 5px; border-radius: 7px; '> Lehelyezendő elem: " + currentElement.time + " i.e. </span>";

//Lehelyezendő elem
displayCurrentElement(currentElement);


//Lehelyezés a térképre
mapTable.addEventListener("click", function (event) {
  if (ido < 28) {

    const clickedCell = event.target;
    if (clickedCell.nodeName === "TD") {
      const rowIndex = clickedCell.parentNode.rowIndex;
      const cellIndex = clickedCell.cellIndex;

        let canPlace = true;
        for (let i = 0; i < currentElement.shape.length; i++) {
          for (let j = 0; j < currentElement.shape[i].length; j++) {
            if (currentElement.shape[i][j] === 1) {
              if (initialMap[rowIndex + i][cellIndex + j] !== 0) {
                canPlace = false;
                break;
              }
            }
          }
          if (!canPlace) {
            break;
          }
        }

        if (canPlace) {
          //Elemek beállítása táblázatba
          for (let i = 0; i < currentElement.shape.length; i++) {
            for (let j = 0; j < currentElement.shape[i].length; j++) {
              if (currentElement.shape[i][j] === 1) {
                initialMap[rowIndex + i][cellIndex + j] = currentElement.type;
              }
            }
          }
          //Elemek képeinek beállítása
          for (let i = 0; i < 11; i++) {
            for (let j = 0; j < 11; j++) {
              const mapCell = mapCells[i * 11 + j];
              mapCell.innerHTML = initialMap[i][j];
              if (initialMap[i][j] == 1) {
                mapCell.innerHTML = `<img src="${images.mountain}" alt="Mountain">`;
              }
              if (initialMap[i][j] == 0) {
                mapCell.innerHTML = `<img src="${images.base}" alt="Base">`;
              }

              if (initialMap[i][j] == "water") {
                mapCell.innerHTML = `<img src="${images.water}" alt="Water">`;
              }

              if (initialMap[i][j] == "town") {
                mapCell.innerHTML = `<img src="${images.town}" alt="Town">`;
              }
              if (initialMap[i][j] == "forest") {
                mapCell.innerHTML = `<img src="${images.forest}" alt="Forest">`;
              }
              if (initialMap[i][j] == "farm") {
                mapCell.innerHTML = `<img src="${images.farm}" alt="Farm">`;
              }
            }
          }


          ido += currentElement.time;
function pontszamitas(){
          if (evszak == "Tavasz") {
            tavaszpont = 0;
            missionPoints = [0, 0, 0, 0]
            for (var i = 0; i < 2; i++) {

              if (mission4[i].title == "Határvidék") {
                tavaszpont += hatarvidek(initialMap);
                missionPoints[i] += hatarvidek(initialMap);
              }
              if (mission4[i].title == "Az erdő széle") {
                tavaszpont += azerdoszele(initialMap);
                missionPoints[i] += azerdoszele(initialMap);
              }
              if (mission4[i].title == "Álmos-völgy") {
                tavaszpont += almosvolgy(initialMap);
                missionPoints[i] += almosvolgy(initialMap);
              }
              if (mission4[i].title == "Krumpliöntözés") {
                tavaszpont += krumpliontozes(initialMap);
                missionPoints[i] += krumpliontozes(initialMap);
              }
              if (mission4[i].title == "Fasor") {
                tavaszpont += fasor(initialMap);
                missionPoints[i] += fasor(initialMap);
              }
              if (mission4[i].title == "Gazdag város") {
                tavaszpont += gazdagvaros(initialMap);
                missionPoints[i] += gazdagvaros(initialMap);

              }
              if (mission4[i].title == "Öntözőcsatorna") {
                tavaszpont += ontozocsatorna(initialMap);
                missionPoints[i] += ontozocsatorna(initialMap);
              }
              if (mission4[i].title == "Mágusok völgye") {
                tavaszpont += magusokvolgye(initialMap);
                missionPoints[i] += magusokvolgye(initialMap);
              }
              if (mission4[i].title == "Üres telek") {
                tavaszpont += urestelek(initialMap);
                missionPoints[i] += urestelek(initialMap);
              }
              if (mission4[i].title == "Sorház") {
                tavaszpont += sorhaz(initialMap);
                missionPoints[i] += sorhaz(initialMap);
              }
              if (mission4[i].title == "Páratlan silók") {
                tavaszpont += paratlansilok(initialMap);
                missionPoints[i] += paratlansilok(initialMap);
              }
              if (mission4[i].title == "Gazdag vidék") {
                tavaszpont += gazdagvidek(initialMap);
                missionPoints[i] += gazdagvidek(initialMap);
              }
            }
            missionPointsBeforeNyar = missionPoints;
          }
          if (evszak == "Nyár") {
            nyarpont = 0;
            missionPoints = missionPointsBeforeNyar.slice();
            for (var i = 1; i < 3; i++) {

              if (mission4[i].title == "Határvidék") {
                nyarpont += hatarvidek(initialMap);
                missionPoints[i] += hatarvidek(initialMap);
              }
              if (mission4[i].title == "Az erdő széle") {
                nyarpont += azerdoszele(initialMap);
                missionPoints[i] += azerdoszele(initialMap);
              }
              if (mission4[i].title == "Álmos-völgy") {
                nyarpont += almosvolgy(initialMap);
                missionPoints[i] += almosvolgy(initialMap);
              }
              if (mission4[i].title == "Krumpliöntözés") {
                nyarpont += krumpliontozes(initialMap);
                missionPoints[i] += krumpliontozes(initialMap);
              }
              if (mission4[i].title == "Fasor") {
                nyarpont += fasor(initialMap);
                missionPoints[i] += fasor(initialMap);
              }
              if (mission4[i].title == "Gazdag város") {
                nyarpont += gazdagvaros(initialMap);
                missionPoints[i] += gazdagvaros(initialMap);
              }
              if (mission4[i].title == "Öntözőcsatorna") {
                nyarpont += ontozocsatorna(initialMap);
                missionPoints[i] += ontozocsatorna(initialMap);
              }
              if (mission4[i].title == "Mágusok völgye") {
                nyarpont += magusokvolgye(initialMap);
                missionPoints[i] += magusokvolgye(initialMap);
              }
              if (mission4[i].title == "Üres telek") {
                nyarpont += urestelek(initialMap);
                missionPoints[i] += urestelek(initialMap);
              }
              if (mission4[i].title == "Sorház") {
                nyarpont += sorhaz(initialMap);
                missionPoints[i] += sorhaz(initialMap);
              }
              if (mission4[i].title == "Páratlan silók") {
                nyarpont += paratlansilok(initialMap);
                missionPoints[i] += paratlansilok(initialMap);
              }
              if (mission4[i].title == "Gazdag vidék") {
                nyarpont += gazdagvidek(initialMap);
                missionPoints[i] += gazdagvidek(initialMap);
              }
            }
            missionPointsBeforeOsz = missionPoints;
          }
          if (evszak == "Ősz") {

            oszpont = 0;
            missionPoints = missionPointsBeforeOsz.slice();
            for (var i = 2; i < 4; i++) {

              if (mission4[i].title == "Határvidék") {
                oszpont += hatarvidek(initialMap);
                missionPoints[i] += hatarvidek(initialMap);
              }
              if (mission4[i].title == "Az erdő széle") {
                oszpont += azerdoszele(initialMap);
                missionPoints[i] += azerdoszele(initialMap);
              }
              if (mission4[i].title == "Álmos-völgy") {
                oszpont += almosvolgy(initialMap);
                missionPoints[i] += almosvolgy(initialMap);
              }
              if (mission4[i].title == "Krumpliöntözés") {
                oszpont += krumpliontozes(initialMap);
                missionPoints[i] += krumpliontozes(initialMap);
              }
              if (mission4[i].title == "Fasor") {
                oszpont += fasor(initialMap);
                missionPoints[i] += fasor(initialMap);
              }
              if (mission4[i].title == "Gazdag város") {
                oszpont += gazdagvaros(initialMap);
                missionPoints[i] += gazdagvaros(initialMap);
              }
              if (mission4[i].title == "Öntözőcsatorna") {
                oszpont += ontozocsatorna(initialMap);
                missionPoints[i] += ontozocsatorna(initialMap);
              }
              if (mission4[i].title == "Mágusok völgye") {
                oszpont += magusokvolgye(initialMap);
                missionPoints[i] += magusokvolgye(initialMap);
              }
              if (mission4[i].title == "Üres telek") {
                oszpont += urestelek(initialMap);
                missionPoints[i] += urestelek(initialMap);
              }
              if (mission4[i].title == "Sorház") {
                oszpont += sorhaz(initialMap);
                missionPoints[i] += sorhaz(initialMap);
              }
              if (mission4[i].title == "Páratlan silók") {
                oszpont += paratlansilok(initialMap);
                missionPoints[i] += paratlansilok(initialMap);
              }
              if (mission4[i].title == "Gazdag vidék") {
                oszpont += gazdagvidek(initialMap);
                missionPoints[i] += gazdagvidek(initialMap);
              }
            }
            missionPointsBeforeTel = missionPoints;

          }
          if (evszak == "Tél") {
            telpont = 0;

            missionPoints = missionPointsBeforeTel.slice();
            for (var i = 3; i >= 0; i -= 3) {

              if (mission4[i].title == "Határvidék") {
                telpont += hatarvidek(initialMap);
                missionPoints[i] += hatarvidek(initialMap);
              }
              if (mission4[i].title == "Az erdő széle") {
                telpont += azerdoszele(initialMap);
                missionPoints[i] += azerdoszele(initialMap);
              }
              if (mission4[i].title == "Álmos-völgy") {
                telpont += almosvolgy(initialMap);
                missionPoints[i] += almosvolgy(initialMap);
              }
              if (mission4[i].title == "Krumpliöntözés") {
                telpont += krumpliontozes(initialMap);
                missionPoints[i] += krumpliontozes(initialMap);
              }
              if (mission4[i].title == "Fasor") {
                telpont += fasor(initialMap);
                missionPoints[i] += fasor(initialMap);
              }
              if (mission4[i].title == "Gazdag város") {
                telpont += gazdagvaros(initialMap);
                missionPoints[i] += gazdagvaros(initialMap);
              }
              if (mission4[i].title == "Öntözőcsatorna") {
                telpont += ontozocsatorna(initialMap);
                missionPoints[i] += ontozocsatorna(initialMap);
              }
              if (mission4[i].title == "Mágusok völgye") {
                telpont += magusokvolgye(initialMap);
                missionPoints[i] += magusokvolgye(initialMap);
              }
              if (mission4[i].title == "Üres telek") {
                telpont += urestelek(initialMap);
                missionPoints[i] += urestelek(initialMap);
              }
              if (mission4[i].title == "Sorház") {
                telpont += sorhaz(initialMap);
                missionPoints[i] += sorhaz(initialMap);
              }
              if (mission4[i].title == "Páratlan silók") {
                telpont += paratlansilok(initialMap);
                missionPoints[i] += paratlansilok(initialMap);
              }
              if (mission4[i].title == "Gazdag vidék") {
                telpont += gazdagvidek(initialMap);
                missionPoints[i] += gazdagvidek(initialMap);
              }

            }

          }
        }

        pontszamitas();

          if (ido < 7 && ido >= 0) {
            evszak = "Tavasz";

          } else if (ido >= 7 && ido < 14) {
            evszak = "Nyár";

          } else if (ido >= 14 && ido < 21) {
            evszak = "Ősz";

          } else if (ido >= 21 && ido < 28) {
            evszak = "Tél";
          }

          pontszamitas();

          if (evszak == "Tavasz") {
            kuldi1.innerHTML = "<span style='display: inline-block; width: 85px; background-color: #363636; color: white; padding: 5px; border-radius: 7px;'> (" + missionPoints[0] + " pont) </span>";
            kuldi1.innerHTML += `<img src="${images[mission4[0]["title"]]}" alt="Mission">`;
            kuldi1.innerHTML += " &nbsp; ";

            kuldi2.innerHTML = "<span style='display: inline-block; width: 85px; background-color: #363636; color: white; padding: 5px; border-radius: 7px; '> (" + missionPoints[1] + " pont) </span>";
            kuldi2.innerHTML += `<img src="${images[mission4[1]["title"]]}" alt="Mission" >`;

            kuldi3.innerHTML = "<span style='display: inline-block; width: 85px; background-color: #363636; color: white; padding: 5px; border-radius: 7px; opacity: 0.4; '> (" + missionPoints[2]+ " pont) </span>";
            kuldi3.innerHTML += `<img src="${images[mission4[2]["title"]]}" alt="Mission" style="opacity: 0.4;">`;
            kuldi3.innerHTML += " &nbsp; ";

            kuldi4.innerHTML = "<span style='display: inline-block; width: 85px; background-color: #363636; color: white; padding: 5px; border-radius: 7px; opacity: 0.4; '> (" + missionPoints[3] + " pont) </span>";
            kuldi4.innerHTML += `<img src="${images[mission4[3]["title"]]}" alt="Mission" style="opacity: 0.4;">`;

            pontkiiras.innerHTML = "<span style='background-color: #800000; color: white; padding: 5px; border-radius: 7px; '> Tavasz: " + tavaszpont + " pont </span>";
            pontkiiras.innerHTML += " &nbsp; ";
            pontkiiras.innerHTML += "  <span style='background-color: #D2691E; color: white; padding: 5px; border-radius: 7px; opacity: 0.4;'> Nyár:" + nyarpont + " pont </span>";
            pontkiiras.innerHTML += " &nbsp; ";
            pontkiiras.innerHTML += "  <span style='background-color: #8B4513; color: white; padding: 5px; border-radius: 7px; opacity: 0.4;'> Ősz:" + oszpont + " pont </span>";
            pontkiiras.innerHTML += " &nbsp; ";
            pontkiiras.innerHTML += "  <span style='background-color: #00008B; color: white; padding: 5px; border-radius: 7px; opacity: 0.4;' > Tél:" + telpont + " pont </span";

          }
          if (evszak == "Nyár") {
            kuldi1.innerHTML = "<span style='display: inline-block; width: 85px; background-color: #363636; color: white; padding: 5px; border-radius: 7px; opacity: 0.4; '> (" + missionPoints[0] + " pont) </span>";
            kuldi1.innerHTML += `<img src="${images[mission4[0]["title"]]}" alt="Mission" style="opacity: 0.4;">`;
            kuldi1.innerHTML += " &nbsp; ";

            kuldi2.innerHTML = "<span style='display: inline-block; width: 85px; background-color: #363636; color: white; padding: 5px; border-radius: 7px; '> (" + missionPoints[1] + " pont) </span>";
            kuldi2.innerHTML += `<img src="${images[mission4[1]["title"]]}" alt="Mission" >`;

            kuldi3.innerHTML = "<span style='display: inline-block; width: 85px; background-color: #363636; color: white; padding: 5px; border-radius: 7px;  '> (" + missionPoints[2] + " pont) </span>";
            kuldi3.innerHTML += `<img src="${images[mission4[2]["title"]]}" alt="Mission" >`
            kuldi3.innerHTML += " &nbsp; ";

            kuldi4.innerHTML = "<span style='display: inline-block; width: 85px; background-color: #363636; color: white; padding: 5px; border-radius: 7px; opacity: 0.4; '> (" + missionPoints[3] + " pont) </span>";
            kuldi4.innerHTML += `<img src="${images[mission4[3]["title"]]}" alt="Mission" style="opacity: 0.4;">`;

            pontkiiras.innerHTML = "<span style='background-color: #800000; color: white; padding: 5px; border-radius: 7px; opacity: 0.4;'> Tavasz: " + tavaszpont + " pont </span>";
            pontkiiras.innerHTML += " &nbsp; ";
            pontkiiras.innerHTML += "  <span style='background-color: #D2691E; color: white; padding: 5px; border-radius: 7px; '> Nyár:" + nyarpont + " pont </span>";
            pontkiiras.innerHTML += " &nbsp; ";
            pontkiiras.innerHTML += "  <span style='background-color: #8B4513; color: white; padding: 5px; border-radius: 7px; opacity: 0.4;'> Ősz:" + oszpont + " pont </span>";
            pontkiiras.innerHTML += " &nbsp; ";
            pontkiiras.innerHTML += "  <span style='background-color: #00008B; color: white; padding: 5px; border-radius: 7px; opacity: 0.4;' > Tél:" + telpont + " pont </span";

          }
          if (evszak == "Ősz") {
            kuldi1.innerHTML = "<span style='display: inline-block; width: 85px; background-color: #363636; color: white; padding: 5px; border-radius: 7px; opacity: 0.4; '> (" + missionPoints[0] + " pont) </span>";
            kuldi1.innerHTML += `<img src="${images[mission4[0]["title"]]}" alt="Mission"  style="opacity: 0.4;">`;
            kuldi1.innerHTML += " &nbsp; ";

            kuldi2.innerHTML = "<span style='display: inline-block; width: 85px; background-color: #363636; color: white; padding: 5px; border-radius: 7px; opacity: 0.4; '> (" + missionPoints[1] + " pont) </span>";
            kuldi2.innerHTML += `<img src="${images[mission4[1]["title"]]}" alt="Mission"  style="opacity: 0.4;">`;

            kuldi3.innerHTML = "<span style='display: inline-block; width: 85px; background-color: #363636; color: white; padding: 5px; border-radius: 7px;  '> (" + missionPoints[2]+ " pont) </span>";
            kuldi3.innerHTML += `<img src="${images[mission4[2]["title"]]}" alt="Mission" >`
            kuldi3.innerHTML += " &nbsp; ";

            kuldi4.innerHTML = "<span style='display: inline-block; width: 85px; background-color: #363636; color: white; padding: 5px; border-radius: 7px;  '> (" + missionPoints[3] + " pont) </span>";
            kuldi4.innerHTML += `<img src="${images[mission4[3]["title"]]}" alt="Mission" >`;

            pontkiiras.innerHTML = "<span style='background-color: #800000; color: white; padding: 5px; border-radius: 7px; opacity: 0.4;'> Tavasz: " + tavaszpont + " pont </span>";
            pontkiiras.innerHTML += " &nbsp; ";
            pontkiiras.innerHTML += "  <span style='background-color: #D2691E; color: white; padding: 5px; border-radius: 7px; opacity: 0.4;'> Nyár:" + nyarpont + " pont </span>";
            pontkiiras.innerHTML += " &nbsp; ";
            pontkiiras.innerHTML += "  <span style='background-color: #8B4513; color: white; padding: 5px; border-radius: 7px; '> Ősz:" + oszpont + " pont </span>";
            pontkiiras.innerHTML += " &nbsp; ";
            pontkiiras.innerHTML += "  <span style='background-color: #00008B; color: white; padding: 5px; border-radius: 7px; opacity: 0.4;' > Tél:" + telpont + " pont </span";


          }
          if (evszak == "Tél") {
            kuldi1.innerHTML = "<span style='display: inline-block; width: 85px; background-color: #363636; color: white; padding: 5px; border-radius: 7px;  '> (" + missionPoints[0] + " pont) </span>";
            kuldi1.innerHTML += `<img src="${images[mission4[0]["title"]]}" alt="Mission">`;
            kuldi1.innerHTML += " &nbsp; ";

            kuldi2.innerHTML = "<span style='display: inline-block; width: 85px; background-color: #363636; color: white; padding: 5px; border-radius: 7px; opacity: 0.4; '> (" + missionPoints[1] + " pont) </span>";
            kuldi2.innerHTML += `<img src="${images[mission4[1]["title"]]}" alt="Mission"  style="opacity: 0.4;">`;

            kuldi3.innerHTML = "<span style='display: inline-block; width: 85px; background-color: #363636; color: white; padding: 5px; border-radius: 7px;  opacity: 0.4; '> (" + missionPoints[2] + " pont) </span>";
            kuldi3.innerHTML += `<img src="${images[mission4[2]["title"]]}" alt="Mission" style="opacity: 0.4;">`
            kuldi3.innerHTML += " &nbsp; ";

            kuldi4.innerHTML = "<span style='display: inline-block; width: 85px; background-color: #363636; color: white; padding: 5px; border-radius: 7px;  '> (" + missionPoints[3] + " pont) </span>";
            kuldi4.innerHTML += `<img src="${images[mission4[3]["title"]]}" alt="Mission">`;

            pontkiiras.innerHTML = "<span style='background-color: #800000; color: white; padding: 5px; border-radius: 7px; opacity: 0.4;'> Tavasz: " + tavaszpont + " pont </span>";
            pontkiiras.innerHTML += " &nbsp; ";
            pontkiiras.innerHTML += "  <span style='background-color: #D2691E; color: white; padding: 5px; border-radius: 7px; opacity: 0.4;'> Nyár:" + nyarpont + " pont </span>";
            pontkiiras.innerHTML += " &nbsp; ";
            pontkiiras.innerHTML += "  <span style='background-color: #8B4513; color: white; padding: 5px; border-radius: 7px; opacity: 0.4;'> Ősz:" + oszpont + " pont </span>";
            pontkiiras.innerHTML += " &nbsp; ";
            pontkiiras.innerHTML += "  <span style='background-color: #00008B; color: white; padding: 5px; border-radius: 7px; ' > Tél:" + telpont + " pont </span";


          }

          if (ido < 28) {
            elteltido.innerHTML = "<span style='background-color: #363636; color: white; padding: 5px; border-radius: 7px; '> Évszakból hátralévő idő: " + (ido % 7) + "/7</span>";
            evszakhtml.innerHTML = "<span style='background-color: #363636; color: white; padding: 5px; border-radius: 7px; '>Jelenlegi évszak: " + evszak + "</span>";

          }
            if (currentElementId == 15) {
              shuffle(elements);
              currentElementId = 0;
              currentElement = elements[currentElementId];
              displayCurrentElement(currentElement);
            }
            else {
              currentElementId += 1;
              currentElement = elements[currentElementId];
              elemido.innerHTML = "<span style='background-color: #363636; color: white; padding: 5px; border-radius: 7px; '>Lehelyezendő elem: " + currentElement.time + " i.e.</span>";
              displayCurrentElement(currentElement);
            }

          if (ido >= 28) {
            elteltido.innerHTML = "";
            evszakhtml.innerHTML = "";
            currentElementTable.innerHTML = "";
            let hegypont=0;
            hegypont=korbevetthegy(initialMap);
            vege.innerHTML = "<span style='background-color: #363636; color: white; padding: 5px; border-radius: 7px; '>A játék véget ért, pontszámod: " + (tavaszpont + nyarpont + oszpont + telpont+ hegypont) + "</span>";
            elemido.innerHTML = "<span style='background-color: #363636; color: white; padding: 5px; border-radius: 7px; '>Nincs több lehelyezendő elem.</span>";
            rotateButton.style.display = "none";
            mirrorButton.style.display = "none";

            kuldi1.innerHTML = "<span style='display: inline-block; width: 85px; background-color: #363636; color: white; padding: 5px; border-radius: 7px; '> (" + missionPoints[0] + " pont) </span>";
            kuldi1.innerHTML += `<img src="${images[mission4[0]["title"]]}" alt="Mission">`;
            kuldi1.innerHTML += " &nbsp; ";

            kuldi2.innerHTML = "<span style='display: inline-block; width: 85px; background-color: #363636; color: white; padding: 5px; border-radius: 7px; '> (" + missionPoints[1] + " pont) </span>";
            kuldi2.innerHTML += `<img src="${images[mission4[1]["title"]]}" alt="Mission" >`;

            kuldi3.innerHTML = "<span style='display: inline-block; width: 85px; background-color: #363636; color: white; padding: 5px; border-radius: 7px; '> (" + missionPoints[2] + " pont) </span>";
            kuldi3.innerHTML += `<img src="${images[mission4[2]["title"]]}" alt="Mission" >`
            kuldi3.innerHTML += " &nbsp; ";

            kuldi4.innerHTML = "<span style='display: inline-block; width: 85px; background-color: #363636; color: white; padding: 5px; border-radius: 7px;  '> (" + missionPoints[3] + " pont) </span>";
            kuldi4.innerHTML += `<img src="${images[mission4[3]["title"]]}" alt="Mission" >`;

            pontkiiras.innerHTML = "<span style='background-color: #800000; color: white; padding: 5px; border-radius: 7px; '> Tavasz: " + tavaszpont + " pont </span>";
            pontkiiras.innerHTML += " &nbsp; ";
            pontkiiras.innerHTML += "  <span style='background-color: #D2691E; color: white; padding: 5px; border-radius: 7px; '> Nyár:" + nyarpont + " pont </span>";
            pontkiiras.innerHTML += " &nbsp; ";
            pontkiiras.innerHTML += "  <span style='background-color: #8B4513; color: white; padding: 5px; border-radius: 7px; '> Ősz:" + oszpont + " pont </span>";
            pontkiiras.innerHTML += " &nbsp; ";
            pontkiiras.innerHTML += "  <span style='background-color: #00008B; color: white; padding: 5px; border-radius: 7px; ' > Tél:" + telpont + " pont </span";

          }

          
        }
    }
  }

});


function currentElementRepair(matrix) {

  let kiurites = true;
  if ((matrix[0][0]+matrix[0][1]+matrix[0][2]) === 0) {
    for (let i = 1; i < matrix.length; i++) {
      matrix[i - 1] = matrix[i];
    }
    matrix[matrix.length - 1] = [0, 0, 0];
  }

  if ((matrix[0][0]+matrix[0][1]+matrix[0][2]) === 0) {
    for (let i = 1; i < matrix.length; i++) {
      matrix[i - 1] = matrix[i];
    }
    matrix[matrix.length - 1] = [0, 0, 0];
  }

  

  for (let i = 0; i < matrix.length; i++) {

    if (matrix[i][0] != 0) kiurites = false;

  }
  if (kiurites) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 1; j < matrix[i].length; j++) {
        matrix[i][j - 1] = matrix[i][j];
      }
    }
    matrix[0][2] = 0;
    matrix[1][2] = 0;
    matrix[2][2] = 0;

    kiurites = true;

    for (let i = 0; i < matrix.length; i++) {

      if (matrix[i][0] != 0) kiurites = false;

    }


  }
  if (kiurites) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 1; j < matrix[i].length; j++) {
        matrix[i][j - 1] = matrix[i][j];
      }
    }
    matrix[0][2] = 0;
    matrix[1][2] = 0;
    matrix[2][2] = 0;

    kiurites = true;
    for (let i = 0; i < matrix.length; i++) {

      if (matrix[i][0] != 0) kiurites = false;

    }


  }

  return matrix;
}

rotateButton.addEventListener("click", function () {
  currentElement.shape = rotateMatrix(currentElement.shape);
  displayCurrentElement(currentElement);
});

function rotateMatrix(matrix) {
  return currentElementRepair(matrix[0].map((val, index) => matrix.map(row => row[index]).reverse()));
}

mirrorButton.addEventListener("click", function () {
  currentElement.shape = mirrorMatrix(currentElement.shape);
  displayCurrentElement(currentElement);

});

function mirrorMatrix(matrix) {
  return currentElementRepair(matrix.map(row => row.slice().reverse()));

}


//Kurzor a térképen
mapTable.addEventListener("mouseover", function (event) {
  if (ido < 28) {
    const hoveredCell = event.target;
    if (hoveredCell.nodeName === "TD") {

      // Az aktuális elem formájának meghatározása
      const shape = currentElement.shape;
      const shapeHeight = shape.length;
      const shapeWidth = shape[0].length;

      // Az aktuális cella pozíciójának meghatározása
      const rowIndex = hoveredCell.parentNode.rowIndex;
      const cellIndex = hoveredCell.cellIndex;

      let canPlace = true;
      for (let i = 0; i < currentElement.shape.length; i++) {
        for (let j = 0; j < currentElement.shape[i].length; j++) {
          if (currentElement.shape[i][j] === 1) {
            if (initialMap[rowIndex + i][cellIndex + j] !== 0) {
              canPlace = false;
              break;
            }
          }
        }
        if (!canPlace) {

          //Pirossal Bekeretezés
          for (let i = 0; i < shapeHeight; i++) {
            for (let j = 0; j < shapeWidth; j++) {
              if (shape[i][j] === 1) {
                if (
                  cellIndex + shapeWidth <= 11
                ) {
                  const cell = mapCells[(rowIndex + i) * 11 + (cellIndex + j)];
                  cell.classList.add("highlighted-celld");
                }
              }
            }
          }
        }
      }


      //Zölddel bekeretezés
      if (canPlace) {
        for (let i = 0; i < shapeHeight; i++) {
          for (let j = 0; j < shapeWidth; j++) {
            if (shape[i][j] === 1) {
              const cell = mapCells[(rowIndex + i) * 11 + (cellIndex + j)];
              cell.classList.add("highlighted-cell");
            }
          }
        }
      }




    }
  }
});

mapTable.addEventListener("mouseout", function (event) {

  const cells = mapTable.getElementsByTagName("td");
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove("highlighted-cell");
    cells[i].classList.remove("highlighted-celld");
  }

});

//Küldetések
function hatarvidek(matrix) {

  let pontok = 0;

  for (let i = 0; i < 11; i++) {
    let sorTele = true;
    for (let j = 0; j < 11; j++) {
      if (matrix[i][j] == 0) {
        sorTele = false;
        break;
      }
    }

    if (sorTele) {
      pontok += 6;
    }
  }



  for (let j = 0; j < 11; j++) {
    let oszlopTele = true;
    for (let i = 0; i < 11; i++) {
      if (matrix[i][j] == 0) {
        oszlopTele = false;
        break;
      }
    }

    if (oszlopTele) {
      pontok += 6;
    }
  }

  return pontok;
}

function azerdoszele(matrix) {
  let pontok = 0;
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      if ((i == 0 || j == 0 || i == 10 || j == 10) && matrix[i][j] == "forest") {
        pontok += 1
      }
    }
  }

  return pontok;
}

function almosvolgy(matrix) {
  let pontok = 0;
  let erdok = 0;
  for (let i = 0; i < 11; i++) {
    erdok = 0;
    for (let j = 0; j < 11; j++) {
      if (matrix[i][j] == "forest") {
        erdok += 1;
      }
    }
    if (erdok == 3) {
      pontok += 4;
    }
  }

  return pontok;
}

function krumpliontozes(matrix) {

  let pontok = 0;

  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      if (matrix[i][j] == "farm") {
        if (i > 0 && matrix[i - 1][j] == "water") {
          pontok += 2;
        }
        if (i < 11 - 1 && matrix[i + 1][j] == "water") {
          pontok += 2;
        }
        if (j > 0 && matrix[i][j - 1] == "water") {
          pontok += 2;
        }
        if (j < 11 - 1 && matrix[i][j + 1] == "water") {
          pontok += 2;
        }
      }
    }
  }
  return pontok;
}

function fasor(matrix) {
  let pontok = 0;
  let maxhossz = 0;
  let mosthossz = 0;
  let elozo = false;

  for (let j = 0; j < 11; j++) {
    mosthossz = 0;
    elozo = false;
    for (let i = 0; i < 11; i++) {
      if (matrix[i][j] == "forest" && mosthossz == 0) {
        mosthossz += 1;
        elozo = true;

      }
      else if (elozo && matrix[i][j] == "forest") {
        mosthossz += 1;
        if(i==10){

        
        if (mosthossz > maxhossz) {
          maxhossz = mosthossz;
        }
      }
      }
      else if (matrix[i][j] != "forest") {
        elozo = false;
      }
      if (mosthossz > maxhossz) {
        maxhossz = mosthossz;
      }
    }
  }
  pontok = maxhossz * 2;
  return pontok;
}

function gazdagvaros(matrix) {

  let pontok = 0;

  for (let i = 0; i < 11; i++) {
    const tereptipusok = new Set();
    for (let j = 0; j < 11; j++) {
      const tereptipusok = new Set();
      if (matrix[i][j] == "town") {
        if (i > 0 && matrix[i - 1][j] != "") {
          tereptipusok.add(matrix[i - 1][j]);
        }
        if (i < 11 - 1 && matrix[i + 1][j] != "") {
          tereptipusok.add(matrix[i + 1][j])
        }
        if (j > 0 && matrix[i][j - 1] != "") {
          tereptipusok.add(matrix[i][j - 1])
        }
        if (j < 11 - 1 && matrix[i][j + 1] != "") {
          tereptipusok.add(matrix[i][j + 1])
        }
      }

      if (tereptipusok.size >= 3) {
        pontok += 3;
      }
    }
  }
  return pontok;
}

function ontozocsatorna(matrix) {

  let pontok = 0;
  let farmc = 0;
  let vizc = 0;
  for (let j = 0; j < 11; j++) {
    farmc = 0;
    vizc = 0;
    for (let i = 0; i < 11; i++) {
      if (matrix[i][j] == "farm") {
        farmc += 1;
      }
      if (matrix[i][j] == "water") {
        vizc += 1;
      }

    }
    if (farmc == vizc && vizc != 0 && farmc != 0) {
      pontok += 4;
    }
  }
  return pontok;
}

function magusokvolgye(matrix) {

  let pontok = 0;

  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      if (matrix[i][j] == "1") {
        if (i > 0 && matrix[i - 1][j] == "water") {
          pontok += 3;
        }
        if (i < 11 - 1 && matrix[i + 1][j] == "water") {
          pontok += 3;
        }
        if (j > 0 && matrix[i][j - 1] == "water") {
          pontok += 3;
        }
        if (j < 11 - 1 && matrix[i][j + 1] == "water") {
          pontok += 3;
        }
      }
    }
  }
  return pontok;
}

function urestelek(matrix) {

  let pontok = 0;

  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      if (matrix[i][j] == "town") {
        if (i > 0 && matrix[i - 1][j] == "") {
          pontok += 2;
        }
        if (i < 11 - 1 && matrix[i + 1][j] == "") {
          pontok += 2;
        }
        if (j > 0 && matrix[i][j - 1] == "") {
          pontok += 2;
        }
        if (j < 11 - 1 && matrix[i][j + 1] == "") {
          pontok += 2;
        }
      }
    }
  }
  return pontok;
}

function sorhaz(matrix) {
  let pontok = 0;
  let maxhossz = 0;
  let mosthossz = 0;
  let elozo = false;
  let ugyanannyi = 0;
  for (let i = 0; i < 11; i++) {
    mosthossz = 0;
    elozo = false;
    for (let j = 0; j < 11; j++) {
      if (matrix[i][j] == "town" && mosthossz == 0) {
        mosthossz += 1;
        elozo = true;

      }
      else if (elozo && matrix[i][j] == "town") {
        mosthossz += 1;
          if(j==10){
            elozo = false;
            if (mosthossz > maxhossz) {
              maxhossz = mosthossz;
              ugyanannyi = 0;
            }
            if (maxhossz == mosthossz) {
              ugyanannyi += 1;
            }
            mosthossz=0;
          }

      }
      else if (matrix[i][j] != "town") {
        elozo = false;
        if (mosthossz > maxhossz) {
          maxhossz = mosthossz;
          ugyanannyi = 0;
        }
        if (maxhossz == mosthossz) {
          ugyanannyi += 1;
        }
        mosthossz=0;
      }

    }
    
  }
  if (ugyanannyi != 0) {
    pontok = maxhossz * 2 * ugyanannyi;
  }
  if (ugyanannyi == 0) {
    pontok = maxhossz * 2;
  }

  return pontok;
}

function paratlansilok(matrix) {

  let pontok = 0;


  for (let j = 0; j < 11; j += 2) {
    let oszlopTele = true;
    for (let i = 0; i < 11; i++) {
      if (matrix[i][j] == 0) {
        oszlopTele = false;
        break;
      }
    }

    if (oszlopTele) {
      pontok += 10;
    }
  }

  return pontok;
}

function gazdagvidek(matrix) {

  let pontok = 0;

  for (let i = 0; i < 11; i++) {
    const terepek = new Set();
    for (let j = 0; j < 11; j++) {
      if (matrix[i][j] != "") {


        terepek.add(matrix[i][j])
      }
    }

    if (terepek.size >= 5) {
      pontok += 4;
    }
  }
  return pontok;
}

function korbevetthegy(matrix) {

  let pontok = 0;

  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      let counter=0;
      if (matrix[i][j] == 1) {
        if (i > 0 && matrix[i - 1][j] != "") {
          counter+=1;
        }
        if (i < 11 - 1 && matrix[i + 1][j] != "") {
          counter+=1;
        }
        if (j > 0 && matrix[i][j - 1] != "") {
          counter+=1;
        }
        if (j < 11 - 1 && matrix[i][j + 1] != "") {
          counter+=1;
        }
      }

      if (counter == 4) {
        pontok += 1;
      }
    }
  }
  return pontok;
}
