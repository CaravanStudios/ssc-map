// Map Data
var mapdata = [
    {
        "agencyname": 'AACI Asian Women\'s Home',
        "lat": 37.312286,
        "long": -121.925293,
        "description": 'San Jose, CA.<br/> <a href="http://aaci.org/" target="_blank">AACI</a>'
    },
    {
        "agencyname": 'Community Solutions',
        "lat": 37.241368,
        "long": -121.860203,
        "description": 'Gilroy, CA.<br/> <a href="http://communitysolutions.org/" target="_blank">Community Solutions</a>'
    },
    {
        "agencyname": 'CORA',
        "lat": 37.546624,
        "long": -122.306174,
        "description": 'San Mateo, CA.<br/> <a href="https://www.corasupport.org/" target="_blank">CORA</a>'
    },
    {
        "agencyname": '180 Turning Lives Around',
        "lat": 40.428953,
        "long": -74.165099,
        "description": 'Hazlet, NJ.<br/> <a href="http://180nj.org/" target="_blank">180 Turning Lives Around</a>'
    },
    {
        "agencyname": 'Advocates for Victims of Assault',
        "lat": 39.574431,
        "long": -106.097520,
        "description": 'Frisco, CO.<br/> <a href="http://www.summitadvocates.org/" target="_blank">Advocates for Victims of Assualt</a>'
    },
    {
        "agencyname": 'Alternatives to Violence - Colorado',
        "lat": 40.397761,
        "long": -105.074980,
        "description": 'Lovaland, CO.<br/> <a href="https://www.alternativestoviolence.org/" target="_blank">Alternatives to Violence</a>'
    },
    {
        "agencyname": 'Brighter Tomorrows',
        "lat": 32.814018,
        "long": -96.948894,
        "description": 'Irving, TX. <br/> <a href="https://www.brightertomorrows.net/" target="_blank">Brighter Tomorrows</a>'
    },
    {
        "agencyname": 'Camden County Women\'s Center',
        "lat": 39.802336,
        "long": -75.064060,
        "description": 'Blackwood, NJ. <br/> <a href="http://www.camdencountywomenscenter.org/" target="_blank">Camden County Women\'s Center</a>'
    },
    {
        "agencyname": 'Center FFS/SERV Cumberland',
        "lat": 39.258711,
        "long": -75.061115,
        "description": 'Cumberland, NJ.<br/> <a href="https://www.centerffs.org/serv" target="_blank">Center FFS/SERV Cumberland</a>'
    },
    {
        "agencyname": 'Center FFS/SERV Gloucester',
        "lat": 39.891780,
        "long": -75.116286,
        "description": 'Gloucester, NJ.<br/> <a href="https://www.centerffs.org/serv" target="_blank">Center FFS/SERV Gloucester</a>'
    },
    {
        "agencyname": 'Center FFS/SERV Together',
        "lat": 39.702892,
        "long": -75.111842,
        "description": 'Glassboro, NJ.<br/> <a href="https://www.centerffs.org/serv" target="_blank">Center FFS/SERV Together</a>'
    },
    {
        "agencyname": 'Crisis Center',
        "lat": 39.372212,
        "long": -104.856090,
        "description": 'Castle Rock, CO. <br/> <a href="http://thecrisiscenter.org/" target="_blank">Crisis Center</a>'
    },
    {
        "agencyname": 'Crossroads Safehouse',
        "lat": 40.585260,
        "long": -105.084423,
        "description": 'Fort Collins, CO.<br/> <a href="http://www.crossroadssafehouse.org/" target="_blank">Crossroads Safehouse</a>'
    },
    {
        "agencyname": 'Denton County Friends of the Family',
        "lat": 33.214841,
        "long": -97.133068,
        "description": 'Denton, TX.<br/> <a href="https://www.dcfof.org/" target="_blank">Denton County Friends of the Family</a>'
    },
    {
        "agencyname": 'Domestic Abuse and Sexual Assualt Crisis Center',
        "lat": 40.758433,
        "long": -74.979338,
        "description": 'Washington, NJ.<br/> <a href="https://www.dasacc.org/" target="_blank">Domestic Abuse and Sexual Assualt Crisis Center</a>'
    },
    {
        "agencyname": 'Estes Valley Crisis Advocates',
        "lat": 40.377206,
        "long": -105.521665,
        "description": 'Estes Park, CO.<br/> <a href="http://www.estesvalleycrisisadvocates.org/" target="_blank">Estes Valley Crisis Advocates</a>'
    },
    {
        "agencyname": 'Freedom House',
        "lat": 37.589952,
        "long": -122.363342,
        "description": 'Burlingame, Ca.<br/> <a href="http://www.freedomhousesf.org/" target="_blank">Freedom House</a>'
    },
    {
        "agencyname": 'Gateway Domestic Violence Services',
        "lat": 39.729432,
        "long": -104.83192,
        "description": 'Aurora, CO.<br/> <a href="http://www.gateway2.org/" target="_blank">Gateway Domestic Violence Services</a>'
    },
    {
        "agencyname": 'Hope\'s Door - Garland',
        "lat": 32.912624,
        "long": -96.638883,
        "description": 'Garland, TX.<br/> <a href="https://www.hopesdoorinc.org/" target="_blank">Hope\'s Door - Garland</a>'
    },
    {
        "agencyname": 'Hope\'s Door - Plano',
        "lat": 33.019843,
        "long": -96.698886,
        "description": 'Plano, TX.<br/> <a href="https://www.hopesdoorinc.org/" target="_blank">Hope\'s Door - Plano</a>'
    },
    {
        "agencyname": 'Huckleberry Youth Program',
        "lat": 37.774929,
        "long": -122.419416,
        "description": 'San Francisco, CA.<br/> <a href="https://www.huckleberryyouth.org/" target="_blank">Huckleberry Youth Program</a>'
    },
    {
        "agencyname": 'Jersey Battered Women\'s Services',
        "lat": 40.796767,
        "long": -74.481544,
        "description": 'Morristown, NJ.<br/> <a href="http://www.jbws.org/" target="_blank">Jersey Battered Women\'s Services</a>'
    },
    {
        "agencyname": 'Jewish Family and Children\'s Services',
        "lat": 39.926813,
        "long": -75.024631,
        "description": 'Cherry Hill , NJ.<br/> <a href="https://jfcssnj.org/" target="_blank">Jewish Family and Children\'s Services</a>'
    },
    {
        "agencyname": 'Larkin Street Youth Services',
        "lat": 37.782074,
        "long": -122.413105,
        "description": 'San Francisco , CA.<br/> <a href="http://larkinstreetyouth.org/" target="_blank">Larkin Street Youth Services</a>'
    },
    {
        "agencyname": 'Love Never Fails',
        "lat": 37.707856,
        "long": -121.924432,
        "description": 'Dublin , CA.<br/> <a href="https://www.loveneverfailsus.com/" target="_blank">Love Never Fails</a>'
    },
    {
        "agencyname": 'Monarch Services',
        "lat": 36.914321,
        "long": -121.755055,
        "description": 'Santa Cruz , CA.<br/> <a href="http://www.monarchscc.org/" target="_blank">Monarch Services</a>'
    },
    {
        "agencyname": 'Mosaic Family Services',
        "lat": 32.776664,
        "long": -96.796988,
        "description": 'Dallas , TX.<br/> <a href="http://mosaicservices.org/" target="_blank">Mosaic Family Services</a>'
    },
    {
        "agencyname": 'My Sister\'s House',
        "lat": 38.549031,
        "long": -121.488963,
        "description": 'Sacramento , CA.<br/> <a href="http://www.my-sisters-house.org/" target="_blank">My Sister\'s House</a>'
    },
    {
        "agencyname": 'New Friends New Life',
        "lat": 32.8122,
        "long": -96.8110,
        "description": 'Dallas, TX.<br/> <a href="http://www.newfriendsnewlife.org/" target="_blank">New Friends New Life</a>'
    },
    {
        "agencyname": 'Providence House Burlington',
        "lat": 40.015892,
        "long": -74.956425,
        "description": 'Delran , NJ.<br/> <a href="https://www.catholiccharitiestrenton.org/domestic-violence-services/" target="_blank">Providence House Burlington</a>'
    },
    {
        "agencyname": 'Providence House Ocean',
        "lat": 39.954363,
        "long": -74.378734,
        "description": 'Whiting , NJ.<br/> <a href="https://www.catholiccharitiestrenton.org/domestic-violence-services/" target="_blank">Providence House Ocean</a>'
    },
    {
        "agencyname": 'The Montrose Center',
        "lat": 29.760427,
        "long": -95.369803,
        "description": 'Houston, TX.<br/> <a href="https://www.montrosecenter.org/hub/" target="_blank">The Montrose Center</a>'
    },
    {
        "agencyname": 'Ruby\'s Place',
        "lat": 37.675098,
        "long": -122.079842,
        "description": 'Hayward, CA.<br/> <a href="http://www.rubysplace.org/wp/" target="_blank">Ruby\'s Place</a>'
    },
    {
        "agencyname": 'Safe House',
        "lat": 40.806755,
        "long": -74.185421,
        "description": 'Bloomfield, NJ.'
    },
    {
        "agencyname": 'Safe In Hunterdon',
        "lat": 40.512326,
        "long": -74.859332,
        "description": 'Flemington, NJ. <br/> <a href="http://www.safeinhunterdon.org/" target="_blank">Safe In Hunterdon</a>'
    },
    {
        "agencyname": 'Safehouse Progressive Alliance for Nonviolence',
        "lat": 40.014986,
        "long": -105.270546,
        "description": 'Boulder, CO.<br/> <a href="http://www.safehousealliance.org/" target="_blank">Safehouse Progressive Alliance for Nonviolence</a>'
    },
    {
        "agencyname": 'Safe Shelter of St Vrain Valley',
        "lat": 40.167207,
        "long": -105.101927,
        "description": 'Longmont, CO.<br/> <a href="http://www.safeshelterofstvrain.org/" target="_blank">Safe Shelter of St Vrain Valley</a>'
    },
    {
        "agencyname": 'Stand Up Placer',
        "lat": 38.941498,
        "long": -121.099099,
        "description": 'Auburn, CA.   <br/> <a href="http://www.standupplacer.org/" target="_blank">Stand Up Placer</a>'
    },
    {
        "agencyname": 'Tahoe SAFE Alliance',
        "lat": 39.2497,
        "long": -119.9527,
        "description": 'Incline Village, NV.   <br/> <a href="https://tahoesafealliance.org/" target="_blank">Tahoe SAFE Alliance</a>'
    },
    {
        "agencyname": 'The Chest of Hope',
        "lat": 37.739356,
        "long": -121.424377,
        "description": 'Tracy, CA.   <br/> <a href="http://www.chestofhope.org/home.aspx" target="_blank">The Chest of Hope</a>'
    },
    {
        "agencyname": 'The Salvation Army',
        "lat": 32.8167,
        "long": -96.8834,
        "description": 'Dallas, TX.   <br/> <a href="https://www.salvationarmydfw.org/default.aspx" target="_blank">The Salvation Army</a>'
    },
    {
        "agencyname": 'Avanzar formerly The Women\'s Center - Dream Catcher',
        "lat": 39.339838,
        "long": -74.575156,
        "description": 'Linwood, NJ.   <br/> <a href="https://avanzarnow.org" target="_blank">Avanzar formerly The Women\'s Center - Dream Catcher</a>'
    },
    {
        "agencyname": 'Avanzar formerly The Women\'s Center - VIP',
        "lat": 39.3898,
        "long": -74.5240,
        "description": 'Pleasantville, NJ.   <br/> <a href="https://avanzarnow.org" target="_blank">Avanzar formerly The Women\'s Center - VIP</a>'
    },
    {
        "agencyname": 'Twin Oaks',
        "lat": 39.993144,
        "long": -74.787939,
        "description": 'Mount Holly, NJ.   <br/> <a href="https://oaksintcare.org/" target="_blank">Twin Oaks</a>'
    },
    {
        "agencyname": 'Visions and Pathways',
        "lat": 40.593964,
        "long": -74.604906,
        "description": 'Bridgewater, NJ.   <br/> <a href="https://visionsandpathways.org/" target="_blank">Visions and Pathways</a>'
    },
    {
        "agencyname": 'WEAVE, Inc.',
        "lat": 38.57558,
        "long": -121.481533,
        "description": 'Sacramento, CA.   <br/> <a href="https://www.weaveinc.org/" target="_blank">WEAVE, Inc.</a>'
    },
    {
        "agencyname": 'Womanspace',
        "lat": 40.301637,
        "long": -74.736101,
        "description": 'Lawrenceville, NJ.   <br/> <a href="https://womanspace.org/" target="_blank">Womanspace</a>'
    },
    {
        "agencyname": 'Women Aware',
        "lat": 40.486216,
        "long": -74.451819,
        "description": 'New Brunswick, NJ.   <br/> <a href="https://www.womenaware.net/" target="_blank">Women Aware</a>'
    },
    {
        "agencyname": 'Youth Consultation Services',
        "lat": 40.735657,
        "long": -74.172367,
        "description": 'Newark, NJ.   <br/> <a href="http://www.ycs.org/" target="_blank">Youth Consultation Services</a>'
    },
    {
        "agencyname": 'YWCA Pueblo Family Crisis Shelter',
        "lat": 38.254447,
        "long": -104.609141,
        "description": 'Pueblo, CO.   <br/> <a href="http://www.ywcapueblo.com/domestic-violence-services" target="_blank">YWCA Pueblo Family Crisis Shelter</a>'
    },
    {
        "agencyname": 'YWCA Pueblo Family Crisis Shelter',
        "lat": 37.331507,
        "long": -121.88442,
        "description": 'San Jose, CA.   <br/> <a href="http://ywca-sv.org/" target="_blank">YWCA Silicon Valley</a>'
    },
    {
        "agencyname": 'Women Center Youth and Families',
        "lat": 37.959657,
        "long": -121.288418,
        "description": 'Stockton , CA.   <br/> <a href="http://www.womenscenteryfs.org/" target="_blank">Women Center Youth and Families</a>'
    },
    {
        "agencyname": 'Safe House Denver',
        "lat": 39.739236,
        "long": -104.990251,
        "description": 'Denver, CO.   <br/> <a href="https://safehouse-denver.org/" target="_blank">Safe House Denver</a>'
    },
    {
        "agencyname": 'Grayson Crisis Center',
        "lat": 33.6357,
        "long": -96.6089,
        "description": 'Sherman, TX.   <br/> <a href="http://www.graysoncrisiscenter.org/" target="_blank">Grayson Crisis Center</a>'
    },
    {
        "agencyname": 'ACCESS (Assault Care Extending Shelter and Support)',
        "lat": 42.030781,
        "long": -93.631913,
        "description": 'Ames, IA. <br/> <a href="https://www.assaultcarecenter.org/" target="_blank">ACCESS (Assault Care Extending Shelter and Support)</a>'
    },
    {
        "agencyname": 'Alameda County District Attorney Office Victim/Witness Division',
        "lat": 37.801261,
        "long": -122.262975,
        "description": 'Oakland, CA.   <br/> <a href="http://www.alcoda.org/victim_witness/" target="_blank">Alameda County District Attorney Office Victim/Witness Division</a>'
    },
    {
        "agencyname": 'Alternatives to Domestic Violence',
        "lat": 33.953349,
        "long": -117.396156,
        "description": 'Riverside, CA. <br/> <a href="http://alternativestodv.org/" target="_blank">Alternatives to Domestic Violence</a>'
    },
    {
        "agencyname": 'Empower Tehama',
        "lat": 40.1785,
        "long": -122.2358,
        "description": 'Redbluff, CA.<br/> <a href="https://empowertehama.org/" target="_blank">Empower Tehama</a>'
    },
    {
        "agencyname": 'Arab Cultural Center',
        "lat": 37.774929,
        "long": -122.419416,
        "description": 'San Francisco, CA. <br/> <a href="http://www.arabculturalcenter.org/" target="_blank">Arab Cultural Center</a>'
    },
    {
        "agencyname": 'Bay Area Women Against Rape - BAWAR',
        "lat": 37.816473,
        "long": -122.266585,
        "description": 'Oakland, CA.   <br/> <a href="https://www.bawar.org/" target="_blank">Bay Area Women Against Rape</a>'
    },
    {
        "agencyname": 'CASH (Community Against Sexual Harm)',
        "lat": 38.555252,
        "long": -121.472532,
        "description": 'Sacramento, CA.   <br/> <a href="http://www.cashsac.org/" target="_blank">CASH (Community Against Sexual Harm)</a>'
    },
    {
        "agencyname": 'Catalyst Domestic Violence Services',
        "lat": 39.728494,
        "long": -121.837478,
        "description": 'Chico, CA.<br/> <a href="http://www.catalystdvservices.org/" target="_blank">Catalyst Domestic Violence Services</a>'
    },
    {
        "agencyname": 'CHETNA',
        "lat": 32.948333,
        "long": -96.729852,
        "description": 'Richardson, TX.   <br/> <a href="http://www.chetna-dfw.org/" target="_blank">CHETNA</a>'
    },
    {
        "agencyname": 'Coalition to Abolish Slavery and Trafficking (CAST)',
        "lat": 34.066482,
        "long": -118.352039,
        "description": 'Los Angeles, CA.<br/> <a href="http://www.castla.org/home" target="_blank">Coalition to Abolish Slavery and Trafficking (CAST)</a>'
    },
    {
        "agencyname": 'Community Coalition Against Human Trafficking/Glow Free TN',
        "lat": 35.9606,
        "long": -83.9207,
        "description": 'Knoxville, TN.<br/> <a href="https://growfreetn.org/" target="_blank">Community Coalition Against Human Trafficking/Glow Free TN</a>'
    },
    {
        "agencyname": 'Community Violence Solutions',
        "lat": 37.960005,
        "long": -122.343402,
        "description": 'San Pablo, CA.   <br/> <a href="http://www.cvsolutions.org/" target="_blank">Community Violence Solutions</a>'
    },
    {
        "agencyname": 'Contra Costa Family Justice Alliance',
        "lat": 37.977869,
        "long": -122.034277,
        "description": 'Richmond, CA.   <br/> <a href="http://www.cocofamilyjustice.org/" target="_blank">Contra Costa Family Justice Alliance</a>'
    },
    {
        "agencyname": 'Crisis Center of Comal County',
        "lat": 29.703002,
        "long": -98.124453,
        "description": 'New Braunfels, TX. <br/> <a href="http://www.ccccnbtx.org/" target="_blank">Crisis Center of Comal County</a>'
    },
    {
        "agencyname": 'Crisis Intervention Service',
        "lat": 43.153573,
        "long": -93.201037,
        "description": 'Mason City, IA. <br/> <a href="http://www.cishelps.org/" target="_blank">Crisis Intervention Service</a>'
    },
    {
        "agencyname": 'Domestic Safety Resource Center',
        "lat": 38.087231,
        "long": -102.62075,
        "description": 'Lamar, CO.  '
    },
    {
        "agencyname": 'DOVES of Big Bear Valley',
        "lat": 34.243896,
        "long": -116.911422,
        "description": 'Big Bear Lake, CA.   <br/> <a href="http://www.doves4help.org/" target="_blank">DOVES of Big Bear Valley</a>'
    },
    {
        "agencyname": 'Family Support Services of Amarillo, Inc.',
        "lat": 35.221997,
        "long": -101.831297,
        "description": 'Amarillo, TX. <br/> <a href="http://www.fss-ama.org/" target="_blank">Family Support Services of Amarillo, Inc.</a>'
    },
    {
        "agencyname": 'Family Violence Law Center',
        "lat": 37.804364,
        "long": -122.271114,
        "description": 'Oakland, CA. <br/> <a href="http://fvlc.org/" target="_blank">Family Violence Law Center</a>'
    },
    {
        "agencyname": 'Garden of Hope',
        "lat": 37.804364,
        "long": -122.271114,
        "description": 'Flushing, NY. <br/> <a href="http://www.gohny.org/" target="_blank">Garden of Hope</a>'
    },
    {
        "agencyname": 'Glory House of Miami',
        "lat": 25.761680,
        "long": -80.19179,
        "description": 'Miami, FL. <br/> <a href="http://www.gloryhouseofmiami.org/" target="_blank">Glory House of Miami</a>'
    },
    {
        "agencyname": 'Haven Women\'s Center of Stanislaus',
        "lat": 37.639097,
        "long": -120.996878,
        "description": 'Modesto, CA. <br/> <a href="https://www.havenwcs.org/" target="_blank">Haven Women\'s Center of Stanislaus</a>'
    },
    {
        "agencyname": 'Community Advocates for Family & Youth',
        "lat": 38.7849,
        "long": -76.8721,
        "description": 'Capitol Heights, MD.<br/> <a href="http://www.cafyonline.org/" target="_blank">Community Advocates for Family & Youth</a>'
    },
    {
        "agencyname": 'Kene Me-Wu Native American DV/SA Program',
        "lat": 37.958512,
        "long": -120.424812,
        "description": 'Sonora, CA.   <br/> <a href="https://sites.google.com/site/kenemewunonprofit/" target="_blank">Kene Me-Wu Native American DV/SA Program</a>'
    },
    {
        "agencyname": 'Lassen Family Services',
        "lat": 40.416284,
        "long": -120.653006,
        "description": 'Susanville, CA.<br/> <a href="http://lassenfamilyservices.org/" target="_blank">Lassen Family Services</a>'
    },
    {
        "agencyname": 'Live Violence Free',
        "lat": 38.939926,
        "long": -119.977187,
        "description": 'South Lake Tahoe, CA. <br/> <a href="https://liveviolencefree.org/" target="_blank">Live Violence Free</a>'
    },
    {
        "agencyname": 'MISSSEY',
        "lat": 37.803562,
        "long": -122.268906,
        "description": 'Oakland, CA.   <br/> <a href="http://misssey.org/" target="_blank">MISSSEY</a>'
    },
    {
        "agencyname": 'Monterey County Rape Crisis Center',
        "lat": 36.676268,
        "long": -121.659372,
        "description": 'Salinas, CA.   <br/> <a href="http://www.mtryrapecrisis.org/" target="_blank">Monterey County Rape Crisis Center</a>'
    },
    {
        "agencyname": 'New York City Gay and Lesbian Anti-Violence Project',
        "lat": 40.712784,
        "long": -74.005941,
        "description": 'New York, NY.<br/> <a href="https://avp.org/" target="_blank">New York City Gay and Lesbian Anti-Violence Project</a>'
    },
    {
        "agencyname": 'NJCEDV',
        "lat": 40.217053,
        "long": -74.742938,
        "description": 'Trenton, NJ.   <br/> <a href="http://www.njcedv.org/" target="_blank">NJCEDV</a>'
    },
    {
        "agencyname": 'NorCal Services for Deaf and Hard of Hearing',
        "lat": 37.998996,
        "long": -121.326312,
        "description": 'North Highlands, CA.   <br/> <a href="http://www.norcalcenter.org/" target="_blank">NorCal Services for Deaf and Hard of Hearing</a>'
    },
    {
        "agencyname": 'Opening Doors, Inc.',
        "lat": 38.586358,
        "long": -121.415965,
        "description": 'Sacramento, CA.   <br/> <a href="http://www.openingdoorsinc.org/" target="_blank">Opening Doors</a>'
    },
    {
        "agencyname": 'Project Sanctuary',
        "lat": 39.150171,
        "long": -123.207783,
        "description": 'Ukiah, CA. <br/> <a href="http://www.projectsanctuary.org/" target="_blank">Project Sanctuary</a>'
    },
    {
        "agencyname": 'Renew Life Center',
        "lat": 40.916765,
        "long": -74.171811,
        "description": 'Paterson, NJ.   <br/> <a href="http://renewlifecenternj.org/" target="_blank">Renew Life Center</a>'
    },
    {
        "agencyname": 'Restore NYC',
        "lat": 40.741333,
        "long": -73.903649,
        "description": 'New York, NY. <br/> <a href="http://restorenyc.org/" target="_blank">Restore NYC</a>'
    },
    {
        "agencyname": 'Sacramento County District Attorney\'s Office',
        "lat": 38.58418,
        "long": -121.493031,
        "description": 'Sacramento, CA.   <br/> <a href="http://www.sacda.org/" target="_blank">Sacramento County District Attorney\'s Office</a>'
    },
    {
        "agencyname": 'Sanar Wellness Institute',
        "lat": 40.735657,
        "long": -74.172367,
        "description": 'Newark, NJ.   <br/> <a href="http://www.sanar-institute.org/" target="_blank">Sanar Wellness Institute</a>'
    },
    {
        "agencyname": 'STAND! For Families Free of Violence',
        "lat": 37.977978,
        "long": -122.031073,
        "description": 'Concord, CA. <br/> <a href="http://www.standffov.org/" target="_blank">STAND! For Families Free of Violence</a>'
    },
    {
        "agencyname": 'The Life of Freedom Center',
        "lat": 25.790654,
        "long": -80.130045,
        "description": 'Miami Beach, FL. <br/> <a href="https://www.lofcenter.org/" target="_blank">The Life of Freedom Center</a>'
    },
    {
        "agencyname": 'The Second Step',
        "lat": 42.346777,
        "long": -71.207232,
        "description": 'Newtonville, MA. <br/> <a href="https://thesecondstep.org/" target="_blank">The Second Step</a>'
    },
    {
        "agencyname": 'WestCoast Children\'s Clinic',
        "lat": 37.775808,
        "long": -122.224782,
        "description": 'Oakland, CA.   <br/> <a href="http://www.westcoastcc.org/who-we-are/" target="_blank">WestCoast Children\'s Clinic</a>'
    },
    {
        "agencyname": 'Wild Iris Crisis Center',
        "lat": 37.648546,
        "long": -118.972079,
        "description": 'Mammoth Lake, CA.<br/> <a href="http://wild-iris.org/" target="_blank">Wild Iris Crisis Center</a>'
    },
    {
        "agencyname": 'Wise & Healthy Aging',
        "lat": 34.019454,
        "long": -118.491191,
        "description": 'Santa Monica, CA. <br/> <a href="http://www.wiseandhealthyaging.org/" target="_blank">Wise & Healthy Aging</a>'
    },
    {
        "agencyname": 'Women Called Moses Coalition and Outreach, Inc.',
        "lat": 32.651800,
        "long": -96.908337,
        "description": 'Duncanville, TX.   <br/> <a href="https://www.womencalledmoses.org/" target="_blank">Women Called Moses Coalition and Outreach, Inc.</a>'
    },
    {
        "agencyname": 'Advocates of Lake County',
        "lat": 39.2508,
        "long": -106.2925,
        "description": 'Leadville, CO.   <br/> <a href="http://advocatesoflakecounty.org/" target="_blank">Advocates of Lake County</a>'
    },
    {
        "agencyname": 'Deaf Overcoming Violence through Empowerment',
        "lat": 39.7312,
        "long": -104.9827,
        "description": 'Denver, CO.   <br/> <a href="https://deafdove.org/" target="_blank">Deaf Overcoming Violence through Empowerment</a>'
    },
    {
        "agencyname": 'Young Women\'s Freedom Center',
        "lat": 37.773972,
        "long": -122.431297,
        "description": 'San Francisco, CA.   <br/> <a href="http://www.youngwomenfree.org/" target="_blank">Young Women\'s Freedom Center</a>'
    },
    {
        "agencyname": 'The Gathering Place',
        "lat": 39.7327,
        "long": -104.9710,
        "description": 'Denver, CO.   <br/> <a href="https://tgpdenver.org/" target="_blank">The Gathering Place</a>'
    },
    {
        "agencyname": 'MercyHouse Organization',
        "lat": 29.7753,
        "long": -95.3103,
        "description": 'Houston, TX.   <br/> <a href="https://www.mercyhousesite.org/" target="_blank">MercyHouse Organization</a>'
    },
    {
        "agencyname": 'Passaic County Women\’s Center',
        "lat": 40.9169,
        "long": -74.1719,
        "description": 'Paterson, NJ.   <br/> <a href="http://www.passaiccountywomenscenter.org/" target="_blank">Passaic County Women\’s Center </a>'
    },
    {
        "agencyname": 'Catholic Charities Archdocese of Denver',
        "lat": 40.4233,
        "long": -104.7091,
        "description": 'Greeley, CO.   <br/> <a href="https://ccdenver.org/" target="_blank">Catholic Charities Archdocese of Denver</a>'
    },
    {
        "agencyname": 'Ark of Freedom Alliance',
        "lat": 26.1224,
        "long": -80.1373,
        "description": 'Fort Lauderdale, FL. <br/> <a href="http://www.aofalliance.org/" target="_blank">Ark of Freedom Alliance</a>'
    },
    {
        "agencyname": 'YWCA Union County',
        "lat": 40.6640,
        "long": -74.2107,
        "description": 'Elizabeth, NJ.   <br/> <a href="http://www.ywcaunioncounty.org/" target="_blank">YWCA Union County</a>'
    },
    {
        "agencyname": 'Jewish Family Service and Children’s Center',
        "lat": 40.8568,
        "long": -74.1285,
        "description": 'Passaic, NJ.   <br/> <a href="http://www.jfsclifton.org/" target="_blank">Jewish Family Service and Children’s Center</a>'
    },
    {
        "agencyname": 'Victim Services of the San Francisco District Attorney Office',
        "lat": 37.7749,
        "long": -122.4194,
        "description": 'San Francisco, CA.   <br/> <a href="http://sfdistrictattorney.org/victim-services" target="_blank">Victim Services of the San Francisco District Attorney Office</a>'
    },
    {
        "agencyname": 'Safe + Sound Somerset',
        "lat": 40.5106,
        "long": -74.6473,
        "description": 'Hillsborough, NJ.   <br/> <a href="http://www.safe-sound.org/" target="_blank">Safe and Sound</a>'
    },
    {
        "agencyname": 'Breaking the Chains',
        "lat": 36.7378,
        "long": -119.7871,
        "description": 'Fresno, CA.   <br/> <a href="https://www.btcfresno.org/" target="_blank">Breaking the Chains</a>'
    },
    {
        "agencyname": 'Coalition Against Rape and Abuse',
        "lat": 39.0826,
        "long": -74.8238,
        "description": 'Cape May Court, NJ.   <br/> <a href="http://www.cara-cmc.org/" target="_blank">Coalition Against Rape and Abuse</a>'
    },
    {
        "agencyname": 'Eastern Plains Safe Shelter',
        "lat": 39.1361,
        "long": -103.4699,
        "description": 'Hugo, CO.   <br/> <a href="www.professionaltherapies.abmp.com" target="_blank">Eastern Plains Safe Shelter</a>'
    },
    {
        "agencyname": 'Winnemucca Domestic Violence Services Inc.',
        "lat": 40.9730,
        "long": -117.7357,
        "description": 'Winnemucca, NV. <br/> <a href="https://winnemuccadvs.org" target="_blank">Winnemucca Domestic Violence Services Inc.</a>'
    },
    {
        "agencyname": 'Alliance Against Family Violence and Sexual Assault',
        "lat": 35.3733,
        "long": -119.0187,
        "description": 'Bakersfield, CA.  <br/> <a href="http://kernalliance.org/" target="_blank">Alliance Against Family Violence and Sexual Assault</a>'
    },
    {
        "agencyname": 'Refuge City',
        "lat": 32.9483,
        "long": -96.7299,
        "description": 'Richardson, TX.  <br/> <a href="http://www.refuge-city.org/" target="_blank">Refuge City</a>'
    },
    {
        "agencyname": 'St. James Infirmary',
        "lat": 37.7837595,
        "long": -122.41903020000001,
        "description": 'San Francisco, CA.  <br/> <a href="https://stjamesinfirmary.org/" target="_blank">St. James Infirmary</a>'
    },
    {
        "agencyname": 'Centro La Familia Advocacy Services, Inc.',
        "lat": 36.7237583,
        "long": -119.80886880000003,
        "description": 'Fresno, CA.  <br/> <a href="http://www.centrolafamilia.org/" target="_blank">Centro La Familia Advocacy Services, Inc.</a>'
    },
    {
        "agencyname": 'UCSF Benioff Children’s Hospital',
        "lat": 37.8371901,
        "long": -122.26702820000003,
        "description": 'Oakland, CA.  <br/> <a href="https://www.childrenshospitaloakland.org/main/home.aspx" target="_blank">UCSF Benioff Children’s Hospital </a>'
    },
    {
        "agencyname": 'Central Valley Justice Coalition',
        "lat": 36.8080425,
        "long": -119.80131670000003,
        "description": 'Fresno, CA.  <br/> <a href="https://justiceco.org/" target="_blank">Central Valley Justice Coalition</a>'
    },
    {
        "agencyname": 'The Family Center',
        "lat": 34.5265292,
        "long": -90.58817469999997,
        "description": 'Helena, AR.<br/> <a href="http://www.thefamilycenterinc.com/" target="_blank">The Family Center</a>'
    },
    {
        "agencyname": 'Center for Abused Persons',
        "lat": 38.6370452,
        "long": -76.89880269999998,
        "description": 'Waldorf, MD.<br/> <a href="https://www.centerforabusedpersonscharlescounty.org/" target="_blank">Center for Abused Persons</a>'
    },
    {
        "agencyname": 'Catholic Charities of Trenton',
        "lat": 40.2244915,
        "long": -74.77775380000003,
        "description": 'Lakewood, NJ.  <br/> <a href="https://www.catholiccharitiestrenton.org/" target="_blank">Catholic Charities of Trenton</a>'
    },
    {
        "agencyname": 'I\'m Bruised But Not Broken, Inc.',
        "lat": 38.93,
        "long": -76.74000000000001,
        "description": 'Bowie, MD.<br/> <a href="https://www.imbruisedbutnotbroken.com/" target="_blank">I\'m Bruised But Not Broken, Inc.</a>'
    },
    {
        "agencyname": 'Durham Crisis Response Center',
        "lat": 35.993426,
        "long": -78.89428190000001,
        "description": 'Durham, NC.<br/> <a href="http://www.durhamcrisisresponse.org/" target="_blank">Durham Crisis Response Center</a>'
    },
    {
        "agencyname": 'YWCA of the Upper Lowlands, Inc.',
        "lat": 33.9279589,
        "long": -80.34670169999998,
        "description": 'Sumter, SC.<br/> <a href="https://www.ywcasumter.org/" target="_blank">YWCA of the Upper Lowlands, Inc.</a>'
    },
    {
        "agencyname": 'HealthRight 360',
        "lat": 33.9282109,
        "long": -118.2263077,
        "description": 'Lynwood, CA.<br/> <a href="https://www.healthright360.org/" target="_blank">HealthRight 360</a>'
    },
    {
        "agencyname": 'Family Tree',
        "lat": 39.769683,
        "long": -105.06912139999997,
        "description": 'Wheat Ridge, CO.  <br/> <a href="https://www.thefamilytree.org/" target="_blank">Family Tree</a>'
    },
    {
        "agencyname": 'The Initiative',
        "lat": 39.7302068,
        "long": -104.9828334,
        "description": 'Denver, CO.  <br/> <a href="http://www.theinitiativecolorado.org/" target="_blank">The Initiative</a>'
    },
    {
        "agencyname": 'Baylor College of Medicine Anti-Human Trafficking Program',
        "lat": 29.71052899999999,
        "long": -95.39624099999997,
        "description": 'Houston, TX.  <br/> <a href="https://www.bcm.edu/healthcare/care-centers/psychiatry/clinics/ben-taub-harris-health-system/human-trafficking-program" target="_blank">Baylor College of Medicine Anti-Human Trafficking Program</a>'
    },
    {
        "agencyname": 'Longmont Ending Violence Initiative (LEVI)',
        "lat": 40.1631292,
        "long": -105.1009545,
        "description": 'Longmont, CO.  <br/> <a href="http://www.longmontdomesticviolence.org/wp/" target="_blank">Longmont Ending Violence Initiative (LEVI)</a>'
    },
    {
        "agencyname": 'Created Women, Inc.',
        "lat": 27.9506,
        "long": -82.4572,
        "description": 'Tampa, Fl.<br/> <a href="http://www.createdwomen.com" target="_blank">Created Women, Inc.</a>'
    },
    {
        "agencyname": 'The FREE Network',
        "lat": 27.9659,
        "long": -82.8001,
        "description": 'Clearwater, Fl.<br/> <a href="https://www.freenetwork.us" target="_blank">The FREE Network</a>'
    },
    {
        "agencyname": 'Open Arms Rape Crisis & LGBT+ Services Center',
        "lat": 31.4638,
        "long": -100.4370,
        "description": 'San Angelo, TX.  <br/> <a href="http://openarmscv.com" target="_blank">Open Arms Rape Crisis & LGBT+ Services Center</a>'
    },
    {
        "agencyname": 'Volunteers of America',
        "lat": 39.7392,
        "long": -104.9903,
        "description": 'Denver, Co.  <br/> <a href="https://www.voacolorado.org/gethelp-denvermetro-veterans-womenveterans" target="_blank">Volunteers of America</a>'
    },
    {
        "agencyname": 'Created Women, Inc',
        "lat": 27.9506,
        "long": -82.4572,
        "description": 'Tampa, Fl.<br/> <a href="http://www.createdwomen.com" target="_blank">Created Women, Inc</a>'
    },
    {
        "agencyname": 'United Abolitionist, Inc',
        "lat": 28.5383,
        "long": -81.3792,
        "description": 'Orlando, Fl.<br/> <a href="https://floridaabolitionist.org" target="_blank">United Abolitionist, Inc.</a>'
    },
    {
        "agencyname": 'Domestic Violence Intervention Program',
        "lat": 41.6611,
        "long": -91.5302,
        "description": 'Iowa City, Ia.<br/> <a href="https://dvipiowa.org" target="_blank">Domestic Violence Intervention Program</a>'
    },
    {
        "agencyname": 'Women\’s Service, Inc.',
        "lat": 41.6414,
        "long": -80.1514,
        "description": 'Meadville, Pa.<br/> <a href="https://www.womensservicesinc.com" target="_blank">Women\’s Service, Inc.</a>'
    },
    {
        "agencyname": 'San Luis Obispo District Attorney\'s Office, Victim/Witness Assistance Center',
        "lat": 35.2828,
        "long": -120.6596,
        "description": 'San Luis Obispo, Ca.  <br/> <a href="https://www.slocounty.ca.gov/Departments/District-Attorney/Victim-Witness-Assistance-Center.aspx" target="_blank">San Luis Obispo District Attorney\'s Office, Victim/Witness Assistance Center</a>'
    },
    {
        "agencyname": 'YWCA Wheeling',
        "lat": 40.0640,
        "long": -80.7209,
        "description": 'Wheeling, WV.<br/> <a href="http://www.ywcawheeling.org" target="_blank">YWCA Wheeling</a>'
    },
    {
        "agencyname": 'AnnieCannons',
        "lat": 37.795020,
        "long": -122.270030,
        "description": 'Oakland, Ca.  <br/> <a href="http://www.anniecannons.org" target="_blank">AnnieCannons</a>'
    },
    {
        "agencyname": 'Catholic Charities Diocese of Palm Beach',
        "lat": 26.7753,
        "long": -80.0581,
        "description": 'Riviera Beach, FL.  <br/> <a href="https://www.ccdpb.org" target="_blank">Catholic Charities Diocese of Palm Beach</a>'
    },
    {
        "agencyname": 'The Mary Parrish Center',
        "lat": 36.1627,
        "long": -86.7816,
        "description": 'Nashville, TN.  <br/> <a href="https://www.maryparrish.org" target="_blank">The Mary Parrish Center</a>'
    },
    {
        "agencyname": 'Covered',
        "lat": 39.729431,
        "long": -104.831917,
        "description": 'Aurora, CO.  <br/> <a href="https://coveredcolorado.org" target="_blank">Covered</a>'
    },
    {
        "agencyname": 'Safer Path Family Violence Shelter',
        "lat": 28.964411,
        "long": -98.493942,
        "description": 'Pleasanton, TX.  <br/> <a href="https://www.saferpathfvs.org" target="_blank">Safer Path Family Violence Shelter</a>'
    },
    {
        "agencyname": 'YWCA Monterey County',
        "lat": 36.674850,
        "long": -121.655170,
        "description": 'Salinas, CA.  <br/> <a href="https://www.ywcamc.org" target="_blank">YWCA Monterey County</a>'
    },
    {
        "agencyname": 'The Alliance',
        "lat": 38.531862,
        "long": -105.996303,
        "description": 'Salida, CO.  <br/> <a href="https://alliancechaffee.org" target="_blank">The Alliance</a>'
    },
    {
        "agencyname": 'Kent Youth & Famliy Services',
        "lat": 47.403963,
        "long": -122.242725,
        "description": 'Kent, WA.  <br/> <a href="http://kyfs.org" target="_blank">Kent Youth & Famliy Services</a>'
    },
    {
        "agencyname": 'US Committee for Refugees and Immagrants',
        "lat": 41.600285,
        "long": -93.633111,
        "description": 'Des Moines, IA.  <br/> <a href="https://refugees.org" target="_blank">US Committee for Refugees and Immagrants</a>'
    },
    {
        "agencyname": 'Women are Safe, Inc.',
        "lat": 35.832740,
        "long": -87.442211,
        "description": 'Centerville, TN.  <br/> <a href="https://www.womenaresafe.org" target="_blank">Women are Safe, Inc.</a>'
    },
    {
        "agencyname": 'Domestic Violence Program',
        "lat": 35.815124,
        "long": -86.369142,
        "description": 'Murfreesboro, TN.  <br/> <a href="https://dvpshelter.org" target="_blank">Domestic Violence Program</a>'
    },
    {
        "agencyname": 'WRAP',
        "lat": 35.632786,
        "long": -88.826701,
        "description": 'Jackson, TN.  <br/> <a href="https://www.wraptn.org" target="_blank">WRAP</a>'
    },
    {
        "agencyname": 'Clinton County Women\'s Center d/b/a Roads to Peace',
        "lat": 41.137523,
        "long": -77.448349,
        "description": 'Lock Haven, PA.  <br/> <a href="http://www.ccwcsafe.org" target="_blank">Clinton County Women\'s Center d/b/a Roads to Peace</a>'
    },
    {
        "agencyname": 'Renew Inc.',
        "lat": 37.348621,
        "long": -108.583778,
        "description": 'Cortez, Co.  <br/> <a href="www.renew-inc.org" target="_blank">Renew Inc.</a>'
    },
    {
        "agencyname": 'Change is Possible',
        "lat": 36.147511,
        "long": -82.414001,
        "description": 'Erwin, TN.  <br/> <a href="http://www.chipsfvs.org" target="_blank">Change is Possible</a>'
    },
    {
        "agencyname": 'The Women\'s Advocacy Center',
        "lat": 35.045570,
        "long": -89.668633,
        "description": 'Collierville, TN.  <br/> <a href="https://www.womensadvocacycenter.org" target="_blank">The Women\'s Advocacy Center</a>'
    },
    {
        "agencyname": 'Advocating Opportunity',
        "lat": 41.652805,
        "long": -83.537865,
        "description": 'Toledo, OH.  <br/> <a href="http://www.advocatingopportunity.com" target="_blank">Advocating Opportunity</a>'
    },
    {
        "agencyname": 'Advocating Opportunity',
        "lat": 36.162664,
        "long": -86.781602,
        "description": 'Nashville, TN.  <br/> <a href="http://www.advocatingopportunity.com" target="_blank">Advocating Opportunity</a>'
    },
    {
        "agencyname": 'Bilateral Safety Corridor Coalition',
        "lat": 32.678109,
        "long": -117.099197,
        "description": 'National City, CA.  <br/> <a href="http://www.bsccoalition.org" target="_blank">Bilateral Safety Corridor Coalition</a>'
    },
    {
        "agencyname": 'Set Free Monterey Bay',
        "lat": 36.555239,
        "long": -121.923288,
        "description": 'Carmel, CA.  <br/> <a href="https://www.setfreemontereybay.org" target="_blank">Set Free Monterey Bay</a>'
    },
    {
        "agencyname": 'The Formation Project',
        "lat": 32.776475,
        "long": -79.931051,
        "description": 'Charleston, NC.  <br/> <a href="theformationproject.org" target="_blank">The Formation Project</a>'
    },
    {
        "agencyname": 'Alabaster Jar Project',
        "lat": 32.962823,
        "long": -117.035865,
        "description": 'Poway, CA.  <br/> <a href="https://www.alabasterjarproject.org" target="_blank">Alabaster Jar Project</a>'
    },
    {
        "agencyname": 'Interfaith Shelter Network',
        "lat": 32.715738,
        "long": -117.161084,
        "description": 'San Diego, CA.<br/> <a href="http://interfaithshelter.org" target="_blank">Interfaith Shelter Network</a>'
    },
    {
        "agencyname": 'The Well Path',
        "lat": 33.119207,
        "long": -117.086421,
        "description": 'Escondido, CA.<br/> <a href="www.thewellpath.org " target="_blank">The Well Path</a>'
    },
    {
        "agencyname": 'California Against Slavery',
        "lat": 32.712628,
        "long": -117.161053,
        "description": 'San Diego, CA.<br/> <a href="https://californiaagainstslavery.org" target="_blank">California Against Slavery</a>'
    },
    {
        "agencyname": 'North County Lifeline',
        "lat": 33.200037,
        "long": -117.242536,
        "description": 'Vista, CA.<br/> <a href="https://www.nclifeline.org" target="_blank">North County Lifeline</a>'
    },
    {
        "agencyname": 'GenerateHope',
        "lat": 32.712628,
        "long": -117.155517,
        "description": 'San Diego, CA.<br/> <a href="https://www.nclifeline.org" target="_blank">GenerateHope</a>'
    },
    {
        "agencyname": 'Chadwick Center for Children and Families',
        "lat": 32.715643,
        "long": -117.156504,
        "description": 'San Diego, CA.<br/> <a href="www.rchsd.org" target="_blank">Chadwick Center for Children and Families</a>'
    },
    {
        "agencyname": 'South Bay Community Services',
        "lat": 32.640054,
        "long": -117.084196,
        "description": 'Chula Vista, CA.<br/> <a href="www.rchsd.org" target="_blank">South Bay Community Services</a>'
    },
    {
        "agencyname": 'San Diego Youth Services - I CARE',
        "lat": 32.715510,
        "long": -117.153764,
        "description": 'San Diego, CA.<br/> <a href="http://www.sdyouthservices.org" target="_blank">San Diego Youth Services - I CARE</a>'
    },
    {
        "agencyname": 'San Diego Youth Services - Tay Academy',
        "lat": 32.715510,
        "long": -117.153764,
        "description": 'San Diego, CA.<br/> <a href="http://www.sdyouthservices.org" target="_blank">San Diego Youth Services - Tay Academy</a>'
    },
    {
        "agencyname": 'OnRamps Collaborative at Point Loma Nazarene University',
        "lat": 32.711394,
        "long": -117.167411,
        "description": 'San Diego, CA.<br/> <a href="https://www.pointloma.edu/centers-institutes/center-justice-reconciliation/onramps-collaborative" target="_blank">OnRamps Collaborative at Point Loma Nazarene University</a>'
    },
    {
        "agencyname": 'Valley Oasis',
        "lat": 34.579434,
        "long": -118.116461,
        "description": 'Palmdale, CA.<br/> <a href="http://www.valleyoasis.org/what-we-do.html#domestic-violence-shelter" target="_blank">Valley Oasis</a>'
    },
    {
        "agencyname": 'La Maestra Community Health Centers',
        "lat": 32.718615,
        "long": -117.161918,
        "description": 'San Diego, CA.<br/> <a href="http://www.lamaestra.org" target="_blank">La Maestra Community Health Centers</a>'
    },
    {
        "agencyname": 'WRC',
        "lat": 33.195870,
        "long": -117.379483,
        "description": 'Oceanside, CA.<br/> <a href="https://www.wrcsd.org" target="_blank">WRC</a>'
    },
    {
        "agencyname": 'Eastern Panhandle Empowerment Center',
        "lat": 39.456210,
        "long": -77.963887,
        "description": 'Martinsburg, WV.<br/> <a href="https://epecwv.org" target="_blank">Eastern Panhandle Empowerment Center</a>'
    },
    {
        "agencyname": 'San Diego County District Attorney\'s Office',
        "lat": 32.716485,
        "long": -117.165909,
        "description": 'San Diego, CA.<br/> <a href="https://www.sdcda.org/office/meet-da.html" target="_blank">San Diego County District Attorney\'s Office</a>'
    },
    {
        "agencyname": 'Home Start, Inc.',
        "lat": 32.715582,
        "long": -117.163763,
        "description": 'San Diego, CA.<br/> <a href="https://home-start.org" target="_blank">Home Start, Inc.</a>'
    },
    {
        "agencyname": 'Southern Indian Health Center, Inc.',
        "lat": 32.8351,
        "long": -116.7664,
        "description": 'Alpine, CA.<br/> <a href="https://sihc.org" target="_blank">Southern Indian Health Center, Inc.</a>'
    },
    {
        "agencyname": 'Voces Unidas for Justice',
        "lat": 38.8339,
        "long": -104.8214,
        "description": 'Colorado Springs, CO.<br/> <a href="http://www.vocesunidasforjustice.org" target="_blank">Voces Unidas for Justice</a>'
    },
    {
        "agencyname": 'San Diego Youth Services',
        "lat": 32.7157,
        "long": -117.1611,
        "description": 'San Diego, CA.<br/> <a href="https://sdyouthservices.org" target="_blank">San Diego Youth Services</a>'
    },
    {
        "agencyname": 'Covenant House NJ',
        "lat": 40.7357,
        "long": -74.1724,
        "description": 'Newark, NJ.<br/> <a href="https://covenanthousenj.org" target="_blank">Covenant House NJ</a>'
    },
    {
        "agencyname": 'Free to Thrive',
        "lat": 32.7157,
        "long": -117.1611,
        "description": 'San Diego, CA.<br/> <a href="https://www.freetothrive.org" target="_blank">Free to Thrive</a>'
    },
    {
        "agencyname": 'South Carolina Victim Assistance Network',
        "lat": 34.0007,
        "long": -81.0348,
        "description": 'Columbia, SC.<br/> <a href="http://www.scvan.org" target="_blank">South Carolina Victim Assistance Network</a>'
    },
    {
        "agencyname": 'Child Development Associates',
        "lat": 32.7157,
        "long": -117.1611,
        "description": 'San Diego, CA.<br/> <a href="https://cdasd.org" target="_blank">Child Development Associates</a>'
    },
    {
        "agencyname": 'Palomar Health Forensic Health Services',
        "lat": 33.1192,
        "long": -117.0864,
        "description": 'Escondido, CA.<br/> <a href="https://www.palomarhealth.org/forensic-health-services/forensic-health-services-home" target="_blank">Palomar Health Forensic Health Services</a>'
    },
    {
        "agencyname": 'The Crisis Center of Tampa Bay',
        "lat": 27.9506,
        "long": -82.4572,
        "description": 'Tampa, FL.<br/> <a href="http://www.crisiscenter.com/" target="_blank">The Crisis Center of Tampa Bay</a>'
    },
    {
        "agencyname": 'Community Resource Center',
        "lat": 33.0370,
        "long": -117.2920,
        "description": 'Encinitas, CA.<br/> <a href="www.crcncc.org" target="_blank">Community Resource Center</a>'
    },
    {
        "agencyname": 'Crisis House',
        "lat": 32.7948,
        "long": -116.9625,
        "description": 'El Cajon, CA.<br/> <a href="https://www.crisishouse.org/" target="_blank">Crisis House</a>'
    },
    {
        "agencyname": 'San Diego Human Trafficking Task Force',
        "lat": 32.7157,
        "long": -117.1611,
        "description": 'San Diego, CA.<br/> <a href="https://oag.ca.gov/human-trafficking" target="_blank">San Diego Human Trafficking Task Force</a>'
    },
    {
        "agencyname": 'Asian Association of Utah',
        "lat": 40.7608,
        "long": -111.8910,
        "description": 'Salt Lake City, UT.<br/> <a href="https://antitrafficking.aau-slc.org/" target="_blank">Asian Association of Utah</a>'
    },
    {
        "agencyname": 'PeaceWorks, Inc',
        "lat": 39.4061,
        "long": -105.4786,
        "description": 'Bailey, CO.<br/> <a href="https://peaceworksinc.com/" target="_blank">PeaceWorks, Inc</a>'
    },
    {
        "agencyname": 'Volunteers of America',
        "lat": 34.0522,
        "long": -118.2437,
        "description": 'Los Angeles, CA.<br/> <a href="https://www.voa.org" target="_blank">Volunteers of America</a>'
    },
    {
        "agencyname": 'Center for Community Solutions - Porject SafeHouse',
        "lat": 32.7157,
        "long": -117.1611,
        "description": 'San Diego, CA.<br/> <a href="https://www.ccssd.org/" target="_blank">Center for Community Solutions - Porject SafeHouse</a>'
    },
    {
        "agencyname": 'Center for Community Solutions - Hidden Valley House',
        "lat": 33.1192,
        "long": -117.0864,
        "description": 'Escondido, CA.<br/> <a href="https://www.ccssd.org/" target="_blank">Center for Community Solutions - Hidden Valley House</a>'
    },
    {
        "agencyname": 'Vista Hill',
        "lat": 32.7678,
        "long": -117.0231,
        "description": 'La Mesa, CA.<br/> <a href="http://www.vistahill.org/" target="_blank">Vista Hill</a>'
    },
    {
        "agencyname": 'NAMI San Diego',
        "lat": 32.7157,
        "long": -117.1611,
        "description": 'San Diego, CA.<br/> <a href="https://namisandiego.org/" target="_blank">NAMI San Diego</a>'
    },
    {
        "agencyname": 'CASA, Inc.',
        "lat": 39.6418,
        "long": -77.7200,
        "description": 'Hagerstown, MD.<br/> <a href="http://www.casainc.org/" target="_blank">CASA, Inc.</a>'
    },
    {
        "agencyname": 'Narika',
        "lat": 37.5485,
        "long": -121.9886,
        "description": 'Fremont, CA.<br/> <a href="http://www.narika.org/" target="_blank">Narika</a>'
    },
    {
        "agencyname": 'Indian Health Council',
        "lat": 33.2184,
        "long": -117.0342,
        "description": 'Valley Center, CA.<br/> <a href="https://www.indianhealth.com/" target="_blank">Indian Health Council</a>'
    },
    {
        "agencyname": 'Animal Safehouse Program',
        "lat": 28.3200,
        "long": -80.6076,
        "description": 'Cocoa Beach, FL.<br/> <a href="https://www.animalsafehousebrevard.org/" target="_blank">Animal Safehouse Program</a>'
    },
    {
        "agencyname": 'Blackstone Valley Advocacy Center',
        "lat": 41.8907,
        "long": -71.3923,
        "description": 'Central Falls, RI.<br/> <a href="https://www.bvadvocacycenter.org/en/" target="_blank">Blackstone Valley Advocacy Center</a>'
    },
    {
        "agencyname": 'Crossroads Domestic Violence Program',
        "lat": 41.8240,
        "long": -71.4128,
        "description": 'Providence, RI.<br/> <a href="http://www.crossroadsri.org/" target="_blank">Crossroads Domestic Violence Program</a>'
    },
    {
        "agencyname": 'Domestic Violence Resource Center of South County',
        "lat": 41.4382,
        "long": -71.5016,
        "description": 'Wakefield, RI.<br/> <a href="http://www.dvrcsc.org/" target="_blank">Domestic Violence Resource Center of South County</a>'
    },
    {
        "agencyname": 'Sojourner House',
        "lat": 41.8240,
        "long": -71.4129,
        "description": 'Providence, RI.<br/> <a href="http://sojournerri.org/" target="_blank">Sojourner House</a>'
    },
    {
        "agencyname": 'Women\'s Resource Center',
        "lat": 41.4901,
        "long": -71.3128,
        "description": 'Newport, RI.<br/> <a href="www.wrcnbc.org" target="_blank">Women\'s Resource Center</a>'
    },
    {
        "agencyname": 'Catholic Charities Diocese of Venice',
        "lat": 27.0998,
        "long": -82.4543,
        "description": 'Venice, FL.<br/> <a href="www.wrcnbc.org" target="_blank">Catholic Charities Diocese of Venice</a>'
    },
]
