const router = require('express').Router();

const majke =
    [
        {
            jmbg: 6633137800084,
            ime: "Darron",
            djevojackoPrezime: "Medhurst",
            prezime: "Auer",
            postanskiBroj: "44651",
            drzava: "BIH",
            adresa: "55680 Holden Wall Apt. 742",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 1756669695080,
            ime: "Ressie",
            djevojackoPrezime: "Spinka",
            prezime: "Padberg",
            drzava: "BIH",
            postanskiBroj: "25174-8403",
            adresa: "7061 Samanta Rue Suite 863",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 9694189415859,
            ime: "Valerie",
            djevojackoPrezime: "Greenholt",
            prezime: "Nienow",
            drzava: "BIH",
            postanskiBroj: "22206",
            adresa: "84442 Rosenbaum Square Suite 828",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 6258986419988,
            ime: "Annetta",
            djevojackoPrezime: "Batz",
            prezime: "Okuneva",
            drzava: "BIH",
            postanskiBroj: "02485-8495",
            adresa: "50742 Christina Court Apt. 800",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 1437442927145,
            ime: "Alessandro",
            djevojackoPrezime: "Maggio",
            prezime: "Little",
            drzava: "BIH",
            postanskiBroj: "26940",
            adresa: "0473 Satterfield Mall Apt. 371",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 1635000320056,
            ime: "Damon",
            djevojackoPrezime: "Gottlieb",
            prezime: "Gottlieb",
            drzava: "BIH",
            postanskiBroj: "36854-9517",
            adresa: "233 Hills Stream Apt. 627",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 2789198506799,
            ime: "Verla",
            djevojackoPrezime: "Murphy",
            prezime: "Runte",
            drzava: "BIH",
            postanskiBroj: "05484-9146",
            adresa: "5626 Hilpert Pass Apt. 364",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 7800520253607,
            ime: "Elliott",
            djevojackoPrezime: "Walter",
            prezime: "Schumm",
            drzava: "BIH",
            postanskiBroj: "53148-5302",
            adresa: "115 Anderson Pines Apt. 590",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 8373507664272,
            ime: "Roman",
            djevojackoPrezime: "Rice",
            prezime: "Kris",
            drzava: "BIH",
            postanskiBroj: "57353",
            adresa: "166 Stephania Terrace Apt. 385",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 5999792257605,
            ime: "Adan",
            djevojackoPrezime: "Zboncak",
            prezime: "Collier",
            drzava: "BIH",
            postanskiBroj: "26865-6244",
            adresa: "308 Abbott Turnpike Suite 555",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 6690173323389,
            ime: "Hershel",
            djevojackoPrezime: "Osinski",
            prezime: "Powlowski",
            drzava: "BIH",
            postanskiBroj: "49367",
            adresa: "339 Marks Turnpike Apt. 685",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 2204970738521,
            ime: "Roger",
            djevojackoPrezime: "Breitenberg",
            prezime: "Marquardt",
            drzava: "BIH",
            postanskiBroj: "95420",
            adresa: "79367 Gerson Fort Suite 368",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 4580488085997,
            ime: "Destini",
            djevojackoPrezime: "Berge",
            prezime: "Schinner",
            drzava: "BIH",
            postanskiBroj: "84902-7789",
            adresa: "0115 Nader Point Apt. 189",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 8309655904503,
            ime: "Amy",
            djevojackoPrezime: "Willms",
            prezime: "Erdman",
            drzava: "BIH",
            postanskiBroj: "20986",
            adresa: "10745 Witting Plains Suite 948",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 7901592756375,
            ime: "Tony",
            djevojackoPrezime: "Ziemann",
            prezime: "Ruecker",
            drzava: "BIH",
            postanskiBroj: "74002-4668",
            adresa: "90950 Katlyn Valleys Suite 286",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 5533176154641,
            ime: "Stanley",
            djevojackoPrezime: "Swaniawski",
            prezime: "Streich",
            drzava: "BIH",
            postanskiBroj: "56782-1350",
            adresa: "965 Lemuel Row Suite 839",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 2214658853191,
            ime: "Susana",
            djevojackoPrezime: "Halvorson",
            prezime: "Runolfsson",
            drzava: "BIH",
            postanskiBroj: "22726-1231",
            adresa: "62724 Hudson Stravenue Apt. 675",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 7643136338986,
            ime: "Dahlia",
            djevojackoPrezime: "Casper",
            prezime: "Little",
            drzava: "BIH",
            postanskiBroj: "96085-4817",
            adresa: "0387 Gleichner Motorway Suite 841",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 6650611541027,
            ime: "Sabryna",
            djevojackoPrezime: "Hane",
            prezime: "Will",
            drzava: "BIH",
            postanskiBroj: "49205-7811",
            adresa: "958 King Rue Apt. 667",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 2910565302771,
            ime: "Leon",
            djevojackoPrezime: "Homenick",
            prezime: "Becker",
            drzava: "BIH",
            postanskiBroj: "97110",
            adresa: "7022 Senger Highway Suite 654",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 2501415763017,
            ime: "Yoshiko",
            djevojackoPrezime: "Mills",
            prezime: "McCullough",
            drzava: "BIH",
            postanskiBroj: "54010",
            adresa: "8730 Schinner Stravenue Suite 311",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 5071085148269,
            ime: "Noemi",
            djevojackoPrezime: "Weissnat",
            prezime: "Metz",
            drzava: "BIH",
            postanskiBroj: "33329-6648",
            adresa: "58192 Rath Springs Apt. 082",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 4432333338469,
            ime: "Leland",
            djevojackoPrezime: "King",
            prezime: "Ebert",
            drzava: "BIH",
            postanskiBroj: "20686-6943",
            adresa: "880 Wade Station Suite 752",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 4480833420886,
            ime: "Erick",
            djevojackoPrezime: "Moore",
            prezime: "Nikolaus",
            drzava: "BIH",
            postanskiBroj: "59565-3575",
            adresa: "6345 Frederik Village Apt. 847",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 7683558200677,
            ime: "Antoinette",
            djevojackoPrezime: "Swift",
            prezime: "Bauch",
            drzava: "BIH",
            postanskiBroj: "58599-6548",
            adresa: "0690 King Mountain Apt. 147",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 5369315442866,
            ime: "Talon",
            djevojackoPrezime: "Dach",
            prezime: "Schumm",
            drzava: "BIH",
            postanskiBroj: "43853-4083",
            adresa: "92218 Brandy Bridge Suite 379",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 5981665649015,
            ime: "Darrin",
            djevojackoPrezime: "Heller",
            prezime: "Wolff",
            drzava: "BIH",
            postanskiBroj: "45552-6128",
            adresa: "0580 Treva Greens Apt. 021",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 2114545285964,
            ime: "Nola",
            djevojackoPrezime: "Marvin",
            prezime: "Johns",
            drzava: "BIH",
            postanskiBroj: "45099",
            adresa: "0778 Wuckert Village Apt. 317",
            drzavljanstvo: "RS/BIH",
        },
        {
            jmbg: 1320129105796,
            ime: "Amanda",
            djevojackoPrezime: "Heidenreich",
            prezime: "Schroeder",
            drzava: "BIH",
            postanskiBroj: "80245-8854",
            adresa: "540 Hagenes Trafficway Suite 009",
            drzavljanstvo: "RS/BIH",
        }
    ];


router.get('/:jmbg', async (req, res) => {
    const jmbg = req.params.jmbg;

    const result = await majke.filter(x => x.jmbg == jmbg.toString());
    res.status(200).json(
        result
    )
})

router.get('/', async (req,res)=>{
    res.status(200).json(majke);
})


module.exports = router;