const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

// Define your routes here

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

let artists = [
  {
    id: "1",
    name: "Leonardo da Vinci",
    bio:
      "Leonardo di ser Piero da Vinci was an Italian polymath of the High Renaissance who is widely considered one of the most diversely talented individuals ever to have lived.",
    image: "./img/1.Leonardo da Vinci.jpg",
    artworks: [
        
                  {
                  "id": "1",
                  "title": "Mona Lisa",
                  "description": "A portrait of Lisa Gherardini, the wife of Francesco del Giocondo, painted by Leonardo da Vinci during the Italian Renaissance.",
                  "image": "./img/1.Mona Lisa.jpg",
                  "price": 5000,
                  "year": 1503,
                  "medium": "Oil on poplar panel",
                  "dimensions": {
                      "height": 77,
                      "width": 53,
                      "unit": "cm"
                  }
                  },
                  {
                  "id": "2",
                  "title": "The Last Supper",
                  "description": "A late 15th-century mural painting by Leonardo da Vinci depicting the Last Supper of Jesus and his apostles.",
                  "image": "./img/2.The Last Supper.jpg",
                  "price": 8000,
                  "year": 1498,
                  "medium": "Tempera on gesso, pitch and mastic",
                  "dimensions": {
                      "height": 460,
                      "width": 880,
                      "unit": "cm"
                  }
                  },
                  {
                  "id": "3",
                  "title": "Annunciation",
                  "description": "A painting by Leonardo da Vinci depicting the Angel Gabriel announcing to Mary that she will conceive and become the mother of Jesus.",
                  "image": "./img/3.Annunciation.jpg",
                  "price": 4000,
                  "year": 1472,
                  "medium": "Oil on panel",
                  "dimensions": {
                      "height": 217,
                      "width": 98,
                      "unit": "cm"
                  }
                  },
                  {
                  "id": "4",
                  "title": "Vitruvian Man",
                  "description": "A drawing by Leonardo da Vinci showing a man in two superimposed positions with his arms and legs apart inside a square and a circle.",
                  "image": "./img/4.Vitruvian Man.jpg",
                  "price": 6000,
                  "year": 1490,
                  "medium": "Pen and ink",
                  "dimensions": {
                      "height": 34,
                      "width": 26,
                      "unit": "cm"
                  }
                  },
                  {
                  "id": "5",
                  "title": "The Baptism of Christ",
                  "description": "A painting by Leonardo da Vinci and his master Andrea del Verrocchio, depicting the baptism of Jesus by John the Baptist.",
                  "image": "./img/5.The Baptism of Christ.jpg",
                  "price": 7500,
                  "year": 1472,
                  "medium": "Tempera on panel",
                  "dimensions": {
                      "height": 177,
                      "width": 151,
                      "unit": "cm"
                  }
                  },
                  {
              "id": "6",
              "title": "The Adoration of the Magi",
              "description": "A painting by Leonardo da Vinci depicting the Adoration of the Magi (the three wise men) with Mary and Jesus.",
              "image": "./img/6.The Adoration of the Magi.jpg",
              "price": 9000,
              "year": 1481,
              "medium": "Oil on wood",
              "dimensions": {
                  "height": 246,
                  "width": 243,
                  "unit": "cm"
              }
              },
              {
              "id": "7",
              "title": "The Virgin and Child with St. Anne",
              "description": "A painting by Leonardo da Vinci depicting the Virgin Mary with her mother, St. Anne, and the baby Jesus.",
              "image": "./img/7.The Virgin and Child with St. Anne.jpg",
              "price": 7000,
              "year": 1508,
              "medium": "Oil on wood",
              "dimensions": {
                  "height": 168,
                  "width": 130,
                  "unit": "cm"
              }
              },
              {
              "id": "8",
              "title": "Salvator Mundi",
              "description": "A painting by Leonardo da Vinci depicting Jesus Christ as the Savior of the World.",
              "image": "./img/8.Salvator Mundi.jpg",
              "price": 100000000,
              "year": 1500,
              "medium": "Oil on panel",
              "dimensions": {
                  "height": 66,
                  "width": 45,
                  "unit": "cm"
              }
              },
              {
              "id": "9",
              "title": "St. John the Baptist",
              "description": "A painting by Leonardo da Vinci depicting St. John the Baptist.",
              "image": "./img/9.St. John the Baptist.jpg",
              "price": 12000,
              "year": 1513,
              "medium": "Oil on walnut panel",
              "dimensions": {
                  "height": 69,
                  "width": 57,
                  "unit": "cm"
              }
              },
              {
              "id": "10",
              "title": "Madonna Litta",
              "description": "A painting by Leonardo da Vinci depicting the Virgin Mary breastfeeding the baby Jesus.",
              "image": "./img/10.Madonna Litta.jpg",
              "price": 6500,
              "year": 1490,
              "medium": "Tempera on panel",
              "dimensions": {
                  "height": 42,
                  "width": 33,
                  "unit": "cm"
              }
          }]},
            
          {
              "id": "2",
              "name": "Vincent van Gogh",
              "bio": "Vincent Willem van Gogh was a Dutch post-impressionist painter who is among the most famous and influential figures in the history of Western art.",
              "image": "./img/11.vincent-van-gogh.jpg",
              "artworks": [
              {
              "id": "11",
              "title": "Irises",
              "description": "A painting of irises by Vincent van Gogh, which he produced in the last year of his life.",
              "image": "./img/11.Irises.jpg",
              "price": 2000,
              "year": 1890,
              "medium": "Oil on canvas",
              "dimensions": {
              "height": 92.1,
              "width": 73.7,
              "unit": "cm"
              }
              },
              {
              "id": "12",
              "title": "The Potato Eaters",
              "description": "A painting by Vincent van Gogh depicting a group of peasants sitting down for a meal.",
              "image": "./img/12.The Potato Eaters.jpg",
              "price": 5000,
              "year": 1885,
              "medium": "Oil on canvas",
              "dimensions": {
              "height": 82,
              "width": 114,
              "unit": "cm"
              }
              },
              {
              "id": "13",
              "title": "The Night Café",
              "description": "A painting by Vincent van Gogh depicting a cafe in the city of Arles in the south of France.",
              "image": "./img/13.the night cafe.jpg",
              "price": 3500,
              "year": 1888,
              "medium": "Oil on canvas",
              "dimensions": {
              "height": 72.4,
              "width": 92.1,
              "unit": "cm"
              }
              },
              {
              "id": "14",
              "title": "Wheatfield with Crows",
              "description": "A painting by Vincent van Gogh depicting a wheatfield with crows in the foreground.",
              "image": "./img/14.Wheatfield with Crows.jpg",
              "price": 4500,
              "year": 1890,
              "medium": "Oil on canvas",
              "dimensions": {
              "height": 50,
              "width": 100,
              "unit": "cm"
              }
              },
              {
              "id": "15",
              "title": "The Bedroom",
              "description": "A painting by Vincent van Gogh depicting his bedroom in the Yellow House in Arles.",
              "image": "./img/15.The Bedroom.png",
              "price": 3000,
              "year": 1889,
              "medium": "Oil on canvas",
              "dimensions": {
              "height": 72,
              "width": 90,
              "unit": "cm"
              }
              },
              {
              "id": "16",
              "title": "Almond Blossom",
              "description": "A series of paintings by Vincent van Gogh depicting almond blossoms.",
              "image": "./img/16.Almond Blossom.jpg",
              "price": 2500,
              "year": 1890,
              "medium": "Oil on canvas",
              "dimensions": {
              "height": 73,
              "width": 92,
              "unit": "cm"
              }
              },
              {
                  "id": "17",
                  "title": "The Sower",
                  "description": "A painting by Vincent van Gogh depicting a farmer sowing seeds in a field.",
                  "image": "./img/17.The Sower.jpg",
                  "price": 4000,
                  "year": 1888,
                  "medium": "Oil on canvas",
                  "dimensions": {
                    "height": 64,
                    "width": 80,
                    "unit": "cm"
                  }
                },
                {
                  "id": "18",
                  "title": "Café Terrace at Night",
                  "description": "A painting by Vincent van Gogh depicting a terrace of a cafe on a summer night in Arles, France.",
                  "image": "./img/18.Café Terrace at Night.jpg",
                  "price": 5500,
                  "year": 1888,
                  "medium": "Oil on canvas",
                  "dimensions": {
                    "height": 81,
                    "width": 65,
                    "unit": "cm"
                  }
                },
                {
                  "id": "19",
                  "title": "Olive Trees",
                  "description": "A series of paintings by Vincent van Gogh depicting olive trees.",
                  "image": "./img/19.Olive Trees.jpg",
                  "price": 3000,
                  "year": 1889,
                  "medium": "Oil on canvas",
                  "dimensions": {
                    "height": 73,
                    "width": 92,
                    "unit": "cm"
                  }
                },
                {
                  "id": "20",
                  "title": "The Red Vineyard",
                  "description": "A painting by Vincent van Gogh depicting a vineyard with red autumn foliage.",
                  "image": "./img/20.The Red Vineyard.jpg",
                  "price": 6000,
                  "year": 1888,
                  "medium": "Oil on canvas",
                  "dimensions": {
                    "height": 75,
                    "width": 93,
                    "unit": "cm"
                  }
                }
                ]
              },
              {
                  "id": "3",
                  "name": "Pablo Picasso",
                  "bio": "Pablo Ruiz Picasso was a Spanish painter, sculptor, printmaker, ceramicist, and stage designer who spent most of his adult life in France.",
                  "image": "./img/21.pablo-picasso.jpg",
                  "artworks": [
                    {
                      "id": "21",
                      "title": "The Old Guitarist",
                      "description": "A painting by Pablo Picasso, created in 1903-1904. It depicts an old, blind, haggard man with threadbare clothing weakly hunched over his guitar, playing in the streets of Barcelona, Spain.",
                      "image": "./img/21.The Old Guitarist.jpg",
                      "price": 3000,
                      "year": 1904,
                      "medium": "Oil on panel",
                      "dimensions": {
                        "height": 122.9,
                        "width": 82.6,
                        "unit": "cm"
                      }
                    },
                    {
                      "id": "22",
                      "title": "Les Demoiselles d'Avignon",
                      "description": "A painting by Pablo Picasso, created in 1907. It is widely considered to be a seminal work in the early development of both Cubism and Modern art.",
                      "image": "./img/22.Les Demoiselles d'Avignon.jpg",
                      "price": 5000,
                      "year": 1907,
                      "medium": "Oil on canvas",
                      "dimensions": {
                        "height": 243.9,
                        "width": 233.7,
                        "unit": "cm"
                      }
                    },
                    {
                      "id": "23",
                      "title": "Guernica",
                      "description": "A mural-sized painting by Pablo Picasso, created in 1937. It is one of his best-known works and is regarded as a masterpiece of Modern art.",
                      "image": "./img/23.Guernica.jpg",
                      "price": 8000,
                      "year": 1937,
                      "medium": "Oil on canvas",
                      "dimensions": {
                        "height": 349.3,
                        "width": 776.6,
                        "unit": "cm"
                      }
                    },
                    {
                      "id": "24",
                      "title": "The Weeping Woman",
                      "description": "A painting by Pablo Picasso, created in 1937. It depicts a woman crying with tears streaming down her face.",
                      "image": "./img/24.The Weeping Woman.jpg",
                      "price": 4000,
                      "year": 1937,
                      "medium": "Oil on canvas",
                      "dimensions": {
                        "height": 60,
                        "width": 49,
                        "unit": "cm"
                      }
                    },
                    {
                      "id": "25",
                      "title": "Les Saltimbanques",
                      "description": "A painting by Pablo Picasso, created in 1905. It depicts a group of street performers.",
                      "image": "./img/25.Les Saltimbanques.jpg",
                      "price": 2500,
                      "year": 1905,
                      "medium": "Oil on canvas",
                      "dimensions": {
                        "height": 212,
                        "width": 229,
                        "unit": "cm"
                        }
                        },
                        {
                        "id": "26",
                        "title": "The Three Musicians",
                        "description": "A painting by Pablo Picasso, created in 1921. It depicts three musicians playing instruments and wearing colorful costumes.",
                        "image": "./img/26.The Three Musicians.jpg",
                        "price": 6000,
                        "year": 1921,
                        "medium": "Oil on canvas",
                        "dimensions": {
                        "height": 200,
                        "width": 222,
                        "unit": "cm"
                        }
                        },
                        {
                        "id": "27",
                        "title": "Seated Woman with Red Hat",
                        "description": "A painting by Pablo Picasso, created in 1939. It depicts a woman seated with a red hat on her head.",
                        "image": "./img/27.Seated Woman with Red Hat.jpg",
                        "price": 4500,
                        "year": 1939,
                        "medium": "Oil on canvas",
                        "dimensions": {
                        "height": 73,
                        "width": 54,
                        "unit": "cm"
                        }
                        },
                        {
                        "id": "28",
                        "title": "Portrait of Dora Maar",
                        "description": "A painting by Pablo Picasso, created in 1937. It depicts Dora Maar, a French photographer, painter, and poet, who was also Picasso's lover and muse.",
                        "image": "./img/28.Portrait of Dora Maar.jpg",
                        "price": 5500,
                        "year": 1937,
                        "medium": "Oil on canvas",
                        "dimensions": {
                        "height": 92,
                        "width": 65,
                        "unit": "cm"
                        }
                        },
                        {
                        "id": "29",
                        "title": "The Bathers",
                        "description": "A painting by Pablo Picasso, created in 1918. It depicts a group of bathers in a landscape setting.",
                        "image": "./img/29.The Bathers.webp",
                        "price": 3500,
                        "year": 1918,
                        "medium": "Oil on canvas",
                        "dimensions": {
                        "height": 97,
                        "width": 130,
                        "unit": "cm"
                        }
                        },
                        {
                        "id": "30",
                        "title": "Still Life with Chair Caning",
                        "description": "A painting by Pablo Picasso, created in 1912. It is considered to be the first example of Cubist collage.",
                        "image": "./img/30.Still Life with Chair Caning.jpg",
                        "price": 4000,
                        "year": 1912,
                        "medium": "Oil on oilcloth over canvas",
                        "dimensions": {
                        "height": 29,
                        "width": 37,
                        "unit": "cm"
                        }
                      }
                  ]
              }
    ];
  


app.get("/artists", (req, res) => {
  res.json({ artists });
});

app.get("/artists/:id", (req, res) => {
  const artist = artists.find((artist) => artist.id === req.params.id);

  if (!artist) {
    res.status(404).json({ message: "Artist not found" });
  } else {
    res.json({ artist });
  }
});

app.post("/artists", (req, res) => {
  const artist = req.body;
  artists.push(artist);
  res.status(201).json({ artist });
});

app.put("/artists/:id", (req, res) => {
  const artistIndex = artists.findIndex((artist) => artist.id === req.params.id);

  if (artistIndex === -1) {
    res.status(404).json({ message: "Artist not found" });
  } else {
    const artist = req.body;
    artists[artistIndex] = { ...artists[artistIndex], ...artist };
    res.json({ artist: artists[artistIndex] });
  }
});

app.delete("/artists/:id", (req, res) => {
  const artistIndex = artists.findIndex((artist) => artist.id === req.params.id);

  if (artistIndex === -1) {
    res.status(404).json({ message: "Artist not found" });
  } else {
    artists.splice(artistIndex, 1);
    res.json({ message: "Artist deleted" });
  }
});
