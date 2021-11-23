var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var data = [
    {
        "Organisationsnamn": "Action Idrottsförening",
        "Kommun": "Järfälla",
        "E-post": "actionjarfalla@gmail.com",
        "Hemsida": "actionjarfalla.com"
    },
    {
        "Organisationsnamn": "Cheer Community Devotion Club",
        "Kommun": "Skövde",
        "E-post": "kontakt@cheercommunitydevotion.se",
        "Hemsida": "www.cheercommunitydevotion.se"
    },
    {
        "Organisationsnamn": "Cheerföreningen GC Troops",
        "Kommun": "Mölndal",
        "E-post": "info@gctroops.com",
        "Hemsida": "www.gctroops.com"
    },
    {
        "Organisationsnamn": "Crocodiles AFC Helsingborg",
        "Kommun": "Helsingborg",
        "E-post": "crocodiles.ordforande@gmail.com",
        "Hemsida": ""
    },
    {
        "Organisationsnamn": "Dans o Gymnastikföreningen Boråsflugan",
        "Kommun": "Borås",
        "E-post": "info@flugan.nu",
        "Hemsida": "http://www.rcd.nu"
    },
    {
        "Organisationsnamn": "Frisksportklubben Björken",
        "Kommun": "Katrineholm",
        "E-post": "bjorken@frisksport.se",
        "Hemsida": ""
    },
    {
        "Organisationsnamn": "För.Luleå Arctic Cheerleading Avalanches",
        "Kommun": "Luleå",
        "E-post": "info@acalulea.com",
        "Hemsida": "www.acalulea.com"
    },
    {
        "Organisationsnamn": "Föreningen Annas Cheer och Dance",
        "Kommun": "Norrköping",
        "E-post": "anna@norrkopingsdanscenter.se",
        "Hemsida": ""
    },
    {
        "Organisationsnamn": "Föreningen Cheer Force Allstars Umeå",
        "Kommun": "Umeå",
        "E-post": "info@cfa.se",
        "Hemsida": "www.cfa.se"
    },
    {
        "Organisationsnamn": "Föreningen Cheer Future",
        "Kommun": "Boden",
        "E-post": "info@cheerfuture.se",
        "Hemsida": "www.cheerfuture.se"
    },
    {
        "Organisationsnamn": "Föreningen Cheer Infinity Athletics",
        "Kommun": "Malmö",
        "E-post": "info.cheerinfinity@gmail.com",
        "Hemsida": "www.cheerinfinityathletic.com"
    },
    {
        "Organisationsnamn": "Föreningen Cheer Supreme Allstars",
        "Kommun": "Borås",
        "E-post": "info.cheersupreme@gmail.com",
        "Hemsida": ""
    },
    {
        "Organisationsnamn": "Föreningen CheerXplosion",
        "Kommun": "Karlstad",
        "E-post": "info@cheerxlosion.se",
        "Hemsida": "www.cheerxplosion.se"
    },
    {
        "Organisationsnamn": "Föreningen Dynamite Cheerleading",
        "Kommun": "Sundbyberg",
        "E-post": "kassor@dynamitecheerleading.com",
        "Hemsida": "www.dynamitecheerleading.com"
    },
    {
        "Organisationsnamn": "Föreningen Eastcoast Cheerleaders",
        "Kommun": "Österåker",
        "E-post": "styrelsen@eastcoastcheerleaders.se",
        "Hemsida": "www.eastcoastcheerleaders.se"
    },
    {
        "Organisationsnamn": "Föreningen Fancy Cheer Sundsvall",
        "Kommun": "Sundsvall",
        "E-post": "kontakt@fancycheersundsvall.com",
        "Hemsida": "www.fancycheersundsvall.com"
    },
    {
        "Organisationsnamn": "Föreningen Kalix Cheerleading Team",
        "Kommun": "Kalix",
        "E-post": "KCTcheerleading@gmail.com",
        "Hemsida": ""
    },
    {
        "Organisationsnamn": "Föreningen Linköping Cheerleading Lightnings",
        "Kommun": "Linköping",
        "E-post": "styrelsen@linkopinglightnings.se",
        "Hemsida": "www.linkopinglightnings.se"
    },
    {
        "Organisationsnamn": "Föreningen Power Cheer Allstars",
        "Kommun": "Haninge",
        "E-post": "ordforande@powercheer.se",
        "Hemsida": "http://www.powercheer.se"
    },
    {
        "Organisationsnamn": "Föreningen Skellefteå Cheerleading Athletics ",
        "Kommun": "Skellefteå",
        "E-post": "styrelseskellefteacheer@gmail.com",
        "Hemsida": ""
    },
    {
        "Organisationsnamn": "Föreningen Ultimate Cheer Xtreme",
        "Kommun": "Täby",
        "E-post": "cajsa@ultimatecheerxtreme.se",
        "Hemsida": ""
    },
    {
        "Organisationsnamn": "Föreningen United Movement",
        "Kommun": "Sollentuna",
        "E-post": "kansli@unitedmovement.se",
        "Hemsida": "www.unitedmovement.se"
    },
    {
        "Organisationsnamn": "GF Uppsalaflickorna",
        "Kommun": "Uppsala",
        "E-post": "info@gfuppsalaflickorna.se",
        "Hemsida": "www.gfuppsalaflickorna.se"
    },
    {
        "Organisationsnamn": "Gothenburg Cheer One Cheerleading Club",
        "Kommun": "Göteborg",
        "E-post": "info@gco.nu",
        "Hemsida": "www.gco.nu"
    },
    {
        "Organisationsnamn": "Gymnastikföreningen Örebro",
        "Kommun": "Örebro",
        "E-post": "info@gforebro.se",
        "Hemsida": "https://www.gforebro.se"
    },
    {
        "Organisationsnamn": "Halmstad Gymnastikförening",
        "Kommun": "Halmstad",
        "E-post": "halmstadgf@hotmail.com",
        "Hemsida": "www.halmstadgf.se"
    },
    {
        "Organisationsnamn": "Haninge Cheer Elite Club",
        "Kommun": "Haninge",
        "E-post": "kassor@cheerelite.nu",
        "Hemsida": "http://www.cheerelite.nu"
    },
    {
        "Organisationsnamn": "Hedemora Cheerleaders Idrottsförening",
        "Kommun": "Hedemora",
        "E-post": "hej.HCIF@gmail.com",
        "Hemsida": "http://www.hcif.se/"
    },
    {
        "Organisationsnamn": "Ideella föreningen Fredagsfys Sverige",
        "Kommun": "Haninge",
        "E-post": "emelie@sockersmart.se",
        "Hemsida": ""
    },
    {
        "Organisationsnamn": "Idrottsföreningen Jönköping Spartans Cheer",
        "Kommun": "Jönköping",
        "E-post": "info@spartanscheer.se",
        "Hemsida": "www.spartanscheer.se"
    },
    {
        "Organisationsnamn": "Idrottsföreningen Rune",
        "Kommun": "Kungsör",
        "E-post": "ifrunekungsor@gmail.com",
        "Hemsida": ""
    },
    {
        "Organisationsnamn": "Julle United Dansförening Hudiksvall",
        "Kommun": "Hudiksvall",
        "E-post": "info@julleunited.se",
        "Hemsida": "http://julleunited.se"
    },
    {
        "Organisationsnamn": "Karlskrona Gymnastik Förening",
        "Kommun": "Karlskrona",
        "E-post": "info@karlskronagf.se",
        "Hemsida": "www.karlskronagf.se"
    },
    {
        "Organisationsnamn": "Kolsva Idrottsförening",
        "Kommun": "Köping",
        "E-post": "Kolsvaif@hotmail.com",
        "Hemsida": "www.kolsvaif.com"
    },
    {
        "Organisationsnamn": "Kristianstad Starlight Cheerleading förening",
        "Kommun": "Kristianstad",
        "E-post": "hanna.m.meijer@gmail.com",
        "Hemsida": "www.kristianstadstarlightcheer.se"
    },
    {
        "Organisationsnamn": "Köpings Gymnastikförening",
        "Kommun": "Köping",
        "E-post": "kopingsgymnastikforening@gmail.com",
        "Hemsida": "www.idrottonline.se/koping/kopingsgf-gymnastik"
    },
    {
        "Organisationsnamn": "Legacy Allstars - Nyköpings Cheerleading- och Gymnastikförening",
        "Kommun": "Nyköping",
        "E-post": "cheerlegacy@hotmail.com",
        "Hemsida": "http://cheerlegacy.wixsite.com/cheerleading"
    },
    {
        "Organisationsnamn": "Luleå Cheer & Dance Team Club",
        "Kommun": "Luleå",
        "E-post": "lulea.cheerleading@gmail.com",
        "Hemsida": "http://www.lcdteam.se"
    },
    {
        "Organisationsnamn": "Lund Cheerleadingförening Pro Athletics",
        "Kommun": "Lund",
        "E-post": "proathleticssweden@gmail.com",
        "Hemsida": "https://proathleticscheer.se"
    },
    {
        "Organisationsnamn": "Lunds Akademiska Cheerleadingförening",
        "Kommun": "Lund",
        "E-post": "lundcheerleading@gmail.com",
        "Hemsida": ""
    },
    {
        "Organisationsnamn": "Malmö All Star Cheer Förening",
        "Kommun": "Malmö",
        "E-post": "info@malmoallstar.se",
        "Hemsida": "www.malmoallstar.se"
    },
    {
        "Organisationsnamn": "Musketeers Funky Cheer Club",
        "Kommun": "Borås",
        "E-post": "kontaktmfc@gmail.com",
        "Hemsida": "www.musketeersfunkycheer.com"
    },
    {
        "Organisationsnamn": "Norrköpings Gymnastikförening",
        "Kommun": "Norrköping",
        "E-post": "ordforande@ngf.se",
        "Hemsida": "www.ngf.se"
    },
    {
        "Organisationsnamn": "Outlaw Cheerförening",
        "Kommun": "Stockholm",
        "E-post": "sanna.28.andersson@gmail.com",
        "Hemsida": ""
    },
    {
        "Organisationsnamn": "Piteå Unity Cheer Club",
        "Kommun": "Piteå",
        "E-post": "cheerunitypitea@gmail.com",
        "Hemsida": ""
    },
    {
        "Organisationsnamn": "Sigtuna Legends Cheerleadingförening",
        "Kommun": "Sigtuna",
        "E-post": "info@sigtunalegends.se",
        "Hemsida": "http://www4.idrottonline.se/idrottonlineklubb/sigtuna/sigtunalegendscheerleadingforening-gymnastik"
    },
    {
        "Organisationsnamn": "SOL Gymnastikförening",
        "Kommun": "Stockholm",
        "E-post": "kansliet@solgf.se",
        "Hemsida": "https://www.solgf.se"
    },
    {
        "Organisationsnamn": "Trelleborgs Gymnastic & Dance Club",
        "Kommun": "Trelleborg",
        "E-post": "pia@tgd.nu",
        "Hemsida": "www.tgd.nu"
    },
    {
        "Organisationsnamn": "Twisters Cheer Elite Nacka Cheerleadingförening",
        "Kommun": "Nacka",
        "E-post": "info@twisters.se",
        "Hemsida": "www.twisters.se"
    },
    {
        "Organisationsnamn": "Tyresögymnastiken",
        "Kommun": "Tyresö",
        "E-post": "kansli@tyresogymnastiken.se",
        "Hemsida": "http://www.tyresogymnastiken.se"
    },
    {
        "Organisationsnamn": "Uddevalla Gymnastik och Parkour Förening",
        "Kommun": "Uddevalla",
        "E-post": "kansliet@uddevallagp.se",
        "Hemsida": "http://www.uddevallagp.se"
    },
    {
        "Organisationsnamn": "Wild Kingdom Cheerleadingclub Oskarshamn ",
        "Kommun": "Oskarshamn",
        "E-post": "Johannawkc@gmail.com",
        "Hemsida": ""
    },
    {
        "Organisationsnamn": "Vänersborgs Gymnastikförening",
        "Kommun": "Vänersborg",
        "E-post": "vanersborgsgf@gmail.com",
        "Hemsida": "http://www.vanersborgsgf.se"
    },
    {
        "Organisationsnamn": "Värnamo Frisksportklubb",
        "Kommun": "Värnamo",
        "E-post": "olle.sahlberg@gmail.com",
        "Hemsida": ""
    },
    {
        "Organisationsnamn": "Västerås Cheerleadingförening",
        "Kommun": "Västerås",
        "E-post": "medlemsansvarig@risingcheerathletics.se",
        "Hemsida": "http://risingcheerathletics.se/"
    },
    {
        "Organisationsnamn": "Örnsköldsviks Gymnastikklubb",
        "Kommun": "Örnsköldsvik",
        "E-post": "pettersson.liselotte@telia.com",
        "Hemsida": "www.ovikgymnastik.se"
    },
    {
        "Organisationsnamn": "Östersundsgymnasterna",
        "Kommun": "Östersund",
        "E-post": "sportchef@ostersundsgymnasterna.se",
        "Hemsida": "www.ostersundsgymnasterna.se"
    }
]
  res.json(data);
});

module.exports = router;
