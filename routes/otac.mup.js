const router = require('express').Router();
const faker = require('faker');




//Seed script

// const asdf = [];
// for (let i = 0; i <= 30; i += 1) {
//     let person = {};
//     person.jmbg = Math.floor((Math.random()*10000000000000)+1);;
//     person.ime = faker.name.firstName();
//     person.djevojackoPrezime = faker.name.lastName();
//     person.prezime = faker.name.lastName();
//     person.datumRodjenja = faker.date.between('1950-01-01', '1980-12-31');
//     person.mjestoRodjenja = faker.address.city();
//     person.opstinaRordjenja = person.mjestoRodjenja;
//     person.drzava = "BIH";
//     person.postanskiBroj = faker.address.zipCode();
//     person.adresa = faker.address.streetAddress("###");
//     person.drzavljanstvo = "RS/BIH";
//     person.nacionalnaPripadnost = "Srbin";
//     person.vjeroispovjest = "Pravoslavna";
//     person.najvisaZavrsenaSkola = "Srednja";
//     person.zanimanje = faker.name.jobTitle();
//     let val = person.jmbg.toString();
//     if(val.length == 13 ){
//         asdf.push(person);
//     }

// }



const likovi = 
[
  {
    jmbg: 3240875545289,
    ime: "Georgianna",
    prezime: "Luettgen",
    drzava: "BIH",
    postanskiBroj: "91322",
    adresa: "4085 Padberg Flats Suite 811",
    drzavljanstvo: "RS/BIH",
  },
  {
    jmbg: 7195353740740,
    ime: "Jaunita",
    prezime: "Waters",
    drzava: "BIH",
    postanskiBroj: "10147",
    adresa: "8556 Lowe Pine Suite 465",
    drzavljanstvo: "RS/BIH",
  },
  {
    jmbg: 5636071537391,
    ime: "Danielle",
    prezime: "Gaylord",
    drzava: "BIH",
    postanskiBroj: "84029",
    adresa: "030 Willy Burg Apt. 991",
    drzavljanstvo: "RS/BIH",
  },
  {
    jmbg: 4308402865144,
    ime: "Precious",
    prezime: "Gislason",
    drzava: "BIH",
    postanskiBroj: "73618",
    adresa: "628 Rey Camp Apt. 533",
    drzavljanstvo: "RS/BIH",
  },
  {
    jmbg: 4483203351381,
    ime: "Raven",
    prezime: "Roob",
    drzava: "BIH",
    postanskiBroj: "18928-4027",
    adresa: "56823 Larson Springs Apt. 592",
    drzavljanstvo: "RS/BIH",
  },
  {
    jmbg: 9558449872946,
    ime: "Tania",
    prezime: "Jacobson",
    drzava: "BIH",
    postanskiBroj: "30129",
    adresa: "0430 Durgan Spring Apt. 449",
    drzavljanstvo: "RS/BIH",
  },
  {
    jmbg: 6421446958931,
    ime: "Mabel",
    prezime: "Waelchi",
    drzava: "BIH",
    postanskiBroj: "64251",
    adresa: "661 Stroman Rapid Apt. 621",
    drzavljanstvo: "RS/BIH",
  },
  {
    jmbg: 2610920751597,
    ime: "Davion",
    prezime: "Simonis",
    drzava: "BIH",
    postanskiBroj: "78605-8432",
    adresa: "361 Ryan Passage Suite 639",
    drzavljanstvo: "RS/BIH",
  },
  {
    jmbg: 9321103134058,
    ime: "Quinton",
    prezime: "Marquardt",
    drzava: "BIH",
    postanskiBroj: "53747-3944",
    adresa: "18254 Orland Spurs Suite 461",
    drzavljanstvo: "RS/BIH",
  },
  {
    jmbg: 1467734025110,
    ime: "Hollis",
    prezime: "Borer",
    drzava: "BIH",
    postanskiBroj: "91800",
    adresa: "5604 Hudson Spurs Apt. 719",
    drzavljanstvo: "RS/BIH",
  },
  {
    jmbg: 2859005205520,
    ime: "Rico",
    prezime: "Bechtelar",
    drzava: "BIH",
    postanskiBroj: "32947-2807",
    adresa: "776 Louie Glens Suite 196",
    drzavljanstvo: "RS/BIH",
  },
  {
    jmbg: 9966822557096,
    ime: "Ora",
    prezime: "Luettgen",
    drzava: "BIH",
    postanskiBroj: "38637-2888",
    adresa: "66759 Kellie Club Apt. 999",
    drzavljanstvo: "RS/BIH",
  },
  {
    jmbg: 7615037508802,
    ime: "Owen",
    prezime: "Thiel",
    drzava: "BIH",
    postanskiBroj: "36842-0318",
    adresa: "087 Mayer Ville Suite 750",
    drzavljanstvo: "RS/BIH",
  },
  {
    jmbg: 6296610370738,
    ime: "Zena",
    prezime: "Zulauf",
    drzava: "BIH",
    postanskiBroj: "59961-5427",
    adresa: "72982 Ruby Springs Apt. 247",
    drzavljanstvo: "RS/BIH",
  },
  {
    jmbg: 2747396193196,
    ime: "Katrina",
    prezime: "Yundt",
    drzava: "BIH",
    postanskiBroj: "44932",
    adresa: "5095 Ken Ridges Suite 351",
    drzavljanstvo: "RS/BIH",
  },
  {
    jmbg: 2965883140818,
    ime: "Milford",
    prezime: "Bruen",
    drzava: "BIH",
    postanskiBroj: "19663-5543",
    adresa: "34229 Schuppe Hill Apt. 471",
    drzavljanstvo: "RS/BIH",
  },
  {
    jmbg: 8685209167590,
    ime: "Lester",
    prezime: "Cronin",
    drzava: "BIH",
    postanskiBroj: "03104",
    adresa: "11885 Aliya Mill Apt. 522",
    drzavljanstvo: "RS/BIH",
  },
  {
    jmbg: 3936508526689,
    ime: "Litzy",
    prezime: "Mitchell",
    drzava: "BIH",
    postanskiBroj: "41912-2905",
    adresa: "92941 Justina Motorway Apt. 864",
    drzavljanstvo: "RS/BIH",
  },
  {
    jmbg: 4573003176596,
    ime: "Kasey",
    prezime: "Jones",
    drzava: "BIH",
    postanskiBroj: "86097-8052",
    adresa: "89070 Dorris Throughway Suite 188",
    drzavljanstvo: "RS/BIH",
  },
  {
    jmbg: 8307785715334,
    ime: "Enoch",
    prezime: "Jakubowski",
    drzava: "BIH",
    postanskiBroj: "92426",
    adresa: "4904 Kaylee Haven Apt. 344",
    drzavljanstvo: "RS/BIH",
  },
  {
    jmbg: 1328058840073,
    ime: "Brant",
    prezime: "Gerhold",
    drzava: "BIH",
    postanskiBroj: "39548",
    adresa: "65863 Margaretta Canyon Apt. 281",
    drzavljanstvo: "RS/BIH",
  },
  {
    jmbg: 6803007551830,
    ime: "Alex",
    prezime: "King",
    drzava: "BIH",
    postanskiBroj: "13407",
    adresa: "946 Kilback Courts Suite 089",
    drzavljanstvo: "RS/BIH",
  },
  {
    jmbg: 1045726039786,
    ime: "Reece",
    prezime: "Mertz",
    drzava: "BIH",
    postanskiBroj: "46466-4815",
    adresa: "396 Derek Hill Suite 552",
    drzavljanstvo: "RS/BIH",
  },
  {
    jmbg: 4304106062088,
    ime: "Gwendolyn",
    prezime: "Hammes",
    drzava: "BIH",
    postanskiBroj: "39087",
    adresa: "297 Murphy Prairie Suite 315",
    drzavljanstvo: "RS/BIH",
  },
  {
    jmbg: 5664312718068,
    ime: "Price",
    prezime: "Beahan",
    drzava: "BIH",
    postanskiBroj: "66537-9032",
    adresa: "651 White Underpass Suite 258",
    drzavljanstvo: "RS/BIH",
  },
  {
    jmbg: 2401244353213,
    ime: "Rodger",
    prezime: "Champlin",
    drzava: "BIH",
    postanskiBroj: "58264",
    adresa: "251 Gwen Place Apt. 682",
    drzavljanstvo: "RS/BIH",
  }
]

router.get('/:jmbg', async (req, res) => {
    const jmbg = req.params.jmbg;

    const result = await likovi.filter(x => x.jmbg == jmbg.toString());
    res.status(200).json(
        result
    )
})

router.get('/', async (req,res)=>{
    res.status(200).json(likovi);
})


module.exports = router;
