const router = require('express').Router();


const majke = [
    {
        "jmbg": "0000000000000",
        "ime": "Lucile",
        "prezime": "Schoen",
        "datumRodjenja": "BIH",
        "mjestoRodjenja": "North Deborah",
        "opstinaRordjenja": "North Deborah",
        "postanskiBroj": "59941",
        "adresa": "0485 Alene Wells Suite 617",
        "drzavljanstvo": "RS/BIH",
        "nacionalnaPripadnost": "Srbin",
        "vjeroispovjest": "Pravoslavna",
        "najvisaZavrsenaSkola": "Srednja",
        "zanimanje": "Forward Implementation Administrator"
    },
    {
        "jmbg": "0000000000001",
        "ime": "Tyrese",
        "prezime": "Hodkiewicz",
        "datumRodjenja": "BIH",
        "mjestoRodjenja": "Leuschkehaven",
        "opstinaRordjenja": "Leuschkehaven",
        "postanskiBroj": "15592",
        "adresa": "690 Kuhlman Springs Suite 374",
        "drzavljanstvo": "RS/BIH",
        "nacionalnaPripadnost": "Srbin",
        "vjeroispovjest": "Pravoslavna",
        "najvisaZavrsenaSkola": "Srednja",
        "zanimanje": "Forward Group Associate"
    },
    {
        "jmbg": "0000000000002",
        "ime": "Kenna",
        "prezime": "Stracke",
        "datumRodjenja": "BIH",
        "mjestoRodjenja": "Mohammadmouth",
        "opstinaRordjenja": "Mohammadmouth",
        "postanskiBroj": "23651",
        "adresa": "59379 Lonnie Orchard Suite 872",
        "drzavljanstvo": "RS/BIH",
        "nacionalnaPripadnost": "Srbin",
        "vjeroispovjest": "Pravoslavna",
        "najvisaZavrsenaSkola": "Srednja",
        "zanimanje": "International Response Consultant"
    },
    {
        "jmbg": "0000000000003",
        "ime": "Kale",
        "prezime": "Rempel",
        "datumRodjenja": "BIH",
        "mjestoRodjenja": "Port Julianneborough",
        "opstinaRordjenja": "Port Julianneborough",
        "postanskiBroj": "53934",
        "adresa": "411 Reichert Grove Suite 910",
        "drzavljanstvo": "RS/BIH",
        "nacionalnaPripadnost": "Srbin",
        "vjeroispovjest": "Pravoslavna",
        "najvisaZavrsenaSkola": "Srednja",
        "zanimanje": "Dynamic Mobility Architect"
    },
    {
        "jmbg": "0000000000004",
        "ime": "Tate",
        "prezime": "Bruen",
        "datumRodjenja": "BIH",
        "mjestoRodjenja": "New Sandrine",
        "opstinaRordjenja": "New Sandrine",
        "postanskiBroj": "63388-4697",
        "adresa": "79471 Berge Summit Apt. 759",
        "drzavljanstvo": "RS/BIH",
        "nacionalnaPripadnost": "Srbin",
        "vjeroispovjest": "Pravoslavna",
        "najvisaZavrsenaSkola": "Srednja",
        "zanimanje": "Principal Applications Facilitator"
    },
    {
        "jmbg": "0000000000005",
        "ime": "Erling",
        "prezime": "Oberbrunner",
        "datumRodjenja": "BIH",
        "mjestoRodjenja": "West Murray",
        "opstinaRordjenja": "West Murray",
        "postanskiBroj": "07718-1500",
        "adresa": "0837 Barton Key Apt. 434",
        "drzavljanstvo": "RS/BIH",
        "nacionalnaPripadnost": "Srbin",
        "vjeroispovjest": "Pravoslavna",
        "najvisaZavrsenaSkola": "Srednja",
        "zanimanje": "District Implementation Officer"
    },
    {
        "jmbg": "0000000000006",
        "ime": "Aileen",
        "prezime": "Moen",
        "datumRodjenja": "BIH",
        "mjestoRodjenja": "South Gregoria",
        "opstinaRordjenja": "South Gregoria",
        "postanskiBroj": "52720-0332",
        "adresa": "0855 Francesca Orchard Apt. 455",
        "drzavljanstvo": "RS/BIH",
        "nacionalnaPripadnost": "Srbin",
        "vjeroispovjest": "Pravoslavna",
        "najvisaZavrsenaSkola": "Srednja",
        "zanimanje": "Legacy Data Manager"
    },
    {
        "jmbg": "0000000000007",
        "ime": "Coby",
        "prezime": "Haley",
        "datumRodjenja": "BIH",
        "mjestoRodjenja": "New Claud",
        "opstinaRordjenja": "New Claud",
        "postanskiBroj": "84391",
        "adresa": "9752 Elna Harbors Suite 321",
        "drzavljanstvo": "RS/BIH",
        "nacionalnaPripadnost": "Srbin",
        "vjeroispovjest": "Pravoslavna",
        "najvisaZavrsenaSkola": "Srednja",
        "zanimanje": "Chief Interactions Facilitator"
    },
    {
        "jmbg": "0000000000008",
        "ime": "Alba",
        "prezime": "Schuster",
        "datumRodjenja": "BIH",
        "mjestoRodjenja": "North Tatefurt",
        "opstinaRordjenja": "North Tatefurt",
        "postanskiBroj": "00329",
        "adresa": "06989 Hilll Motorway Suite 784",
        "drzavljanstvo": "RS/BIH",
        "nacionalnaPripadnost": "Srbin",
        "vjeroispovjest": "Pravoslavna",
        "najvisaZavrsenaSkola": "Srednja",
        "zanimanje": "National Assurance Planner"
    },
    {
        "jmbg": "0000000000009",
        "ime": "Larissa",
        "prezime": "Koepp",
        "datumRodjenja": "BIH",
        "mjestoRodjenja": "Hackettview",
        "opstinaRordjenja": "Hackettview",
        "postanskiBroj": "06907-6728",
        "adresa": "760 Murray Parkways Apt. 897",
        "drzavljanstvo": "RS/BIH",
        "nacionalnaPripadnost": "Srbin",
        "vjeroispovjest": "Pravoslavna",
        "najvisaZavrsenaSkola": "Srednja",
        "zanimanje": "Principal Division Consultant"
    }
]

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
