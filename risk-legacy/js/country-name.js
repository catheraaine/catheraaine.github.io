// Displays country Name on hover
var svg = Snap("#svg"),
    northAfrica = Snap("#north-africa"),
    centralAfrica = Snap("#central-africa"),
    egypt = Snap("#egypt"),
    eastAfrica = Snap("#east-africa"),
    southAfrica = Snap("#south-africa"),
    madagascar = Snap("#madagascar"),
    southEastAsia = Snap("#southeast-asia"),
    china = Snap("#china"),
    middleEast = Snap("#middle-east"),
    afghanistan = Snap("#afghanistan"),
    ural = Snap("#ural"),
    india = Snap("#india"),
    irkustk = Snap("#irkustk"),
    yakutsk = Snap("#yakutsk"),
    siberia = Snap("#siberia"),
    kamchatka = Snap("#kamchatka"),
    mongolia = Snap("#mongolia"),
    japan = Snap("#japan"),
    scandinavia = Snap("#scandinavia"),
    westernEurope = Snap("#western-europe"),
    southernEurope = Snap("#southern-europe"),
    northernEurope = Snap("#northern-europe"),
    russia = Snap("#russia"),
    iceland = Snap("#iceland"),
    greatBritain = Snap("#great-britain"),
    greenland = Snap("#greenland"),
    alberta = Snap("#alberta"),
    alaska = Snap("#alaska"),
    northwestTerritory = Snap("#northwest-territory"),
    centralAmerica = Snap("#central-america"),
    easternCanada = Snap("#eastern-canada"),
    easternUS = Snap("#eastern-us"),
    ontario = Snap("#ontario"),
    westernUS = Snap("#western-us"),
    venezuela = Snap("#venezuela"),
    peru = Snap("#peru"),
    argentina = Snap("#argentina"),
    brazil = Snap("#brazil"),
    easternAustralia = Snap("#eastern-australia"),
    newGuinea = Snap("#new-guinea"),
    westernAustralia = Snap("#western-australia"),
    indonesia = Snap("#indonesia"),
    txt = svg.text(420.95, 70, '');

hoverMe = function(country, name) {
  country.hover(
    function() {
      txt.attr({text:name});
    },
    function() {
      txt.attr({text:''});
    }
  );
}

//Africa
hoverMe(northAfrica,'North Africa');
hoverMe(centralAfrica,'Central Africa');
hoverMe(egypt, 'Egypt');
hoverMe(eastAfrica, 'East Africa');
hoverMe(southAfrica, 'South Africa');
hoverMe(madagascar, 'Madagascar');

//Asia
hoverMe(southEastAsia, 'Southeast Asia');
hoverMe(china,'China');
hoverMe(middleEast, 'The Middle East');
hoverMe(afghanistan, 'Afghanistan');
hoverMe(ural, 'Ural');
hoverMe(india, 'India');
hoverMe(irkustk, 'Irkustk');
hoverMe(yakutsk, 'Yakutsk');
hoverMe(siberia, 'Siberia');
hoverMe(kamchatka, 'Kamchatka');
hoverMe(mongolia, 'Mongolia');
hoverMe(japan, 'Japan');

//Europe
hoverMe(scandinavia, 'Scandinavia');
hoverMe(westernEurope, 'Western Europe');
hoverMe(southernEurope, 'Southern Europe');
hoverMe(northernEurope, 'Northern Europe');
hoverMe(russia, 'Russia');
hoverMe(iceland, 'Iceland');
hoverMe(greatBritain, 'Great Britain');

//North America
hoverMe(greenland, 'Greenland');
hoverMe(alberta, 'Alberta');
hoverMe(alaska, 'Alaska');
hoverMe(northwestTerritory, 'Northwest Territory');
hoverMe(centralAmerica, 'Central America');
hoverMe(easternCanada, 'Eastern Canada');
hoverMe(easternUS, 'Eastern United States');
hoverMe(ontario, 'Ontario');
hoverMe(westernUS, 'Western United States');

//South America
hoverMe(venezuela, 'Venezuela');
hoverMe(peru, 'Peru');
hoverMe(argentina, 'Argentina');
hoverMe(brazil, 'Brazil');

//Australia
hoverMe(easternAustralia, 'Eastern Australia');
hoverMe(newGuinea, 'New Guinea');
hoverMe(westernAustralia, 'Western Australia');
hoverMe(indonesia, 'Indonesia');
