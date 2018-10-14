window.onload = function() {
    var fullAddress = document.querySelector('#m_property_dtl_address').textContent.toString().trim();
    var addressArray = fullAddress.split(",");
    var cityProvincePostal = addressArray[addressArray.length - 2] + " " + addressArray[addressArray.length -1];
    var cityProvincePostalArray = cityProvincePostal.split(" ");
    console.log(cityProvincePostalArray);
    while (cityProvincePostalArray.indexOf(" ") > -1) {
        cityProvincePostalArray.splice(cityProvincePostalArray.indexOf(" "), 1);
    }
    while (cityProvincePostalArray.indexOf("") > -1) {
        cityProvincePostalArray.splice(cityProvincePostalArray.indexOf(""), 1);
    }
    var cityProvince = cityProvincePostalArray[0] + "%20" + cityProvincePostalArray[1];
    console.log(cityProvince);

    // insert button
    var insertLocation = document.querySelector('.m_property_dtl_realtor_cell'); // TODO: this is either supposed to have "cell" or the class below it
    var buttons = document.createElement('div');
    var tdUrl = "https://tools.td.com/mortgage-affordability-calculator" + "?city=" + cityProvince;
    buttons.innerHTML = '    <div class="m_property_dtl_realtor_info" id="morty_anchor">\n' +
        '        <div class="m_property_dtl_realtor_info_lft">\n' +
        '        <a id="lnkRealtorDetails" href="Agent/2024786/Marcus-Noel-485-INDUSTRIAL-AVENUE-OTTAWA-ON-K1G0Z1"></a>\n' +
        '\n' +
        '        </div>\n' +
        '        <div>\n' +
        '        <a id="lnkRealtorDetails2" class="m_property_dtl_realtor_name" href=' + tdUrl +'><span id="lblIndividualName">Mortgage Sponsors</span></a>\n' +
        '    </div>\n' +
        '    <div class="m_property_dtl_realtor_title">\n' +
        '        <span id="lblTitle"></span>\n' +
        '        </div>\n' +
        '        <div class="m_property_dtl_realtor_designation">\n' +
        '        <span id="lblDesignation"></span>\n' +
        '        </div>\n' +
        '        <div class="m_property_dtl_realtor_corporationname">\n' +
        '        <a id="corporationnameLink" class="m_property_dtl_corp_name" href=' + tdUrl +'><span id="corporationname1" class="m_property_dtl_corp_name_txt"></span></a><span id="corporationname2" class="m_property_dtl_corp_name_txt"></span>\n' +
        '        </div>\n' +
        '        <div class="m_property_dtl_realtor_corporationtype">\n' +
        '        <span id="corporationtype"></span>\n' +
        '        </div>\n' +
        '        <div class="m_property_dtl_office_logo noPrint">\n' +
        '        <a id="lnkOfficeLogo" href=' + tdUrl +'><img src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/eaec155b966f93828bb87eccd6101299" id="imgOfficePhoto" class="m_realtor_dtl_office_img" alt="REALTOR®" title="RE/MAX CORE REALTY INC." style="\n' +
        '    width: 50px;\n' +
        '    "></a>\n' +
        '    <a id="lnkOfficeLogo" href=' + tdUrl +'><img src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/eaec155b966f93828bb87eccd6101299" id="imgOfficePhoto" class="m_realtor_dtl_office_img" alt="REALTOR®" title="RE/MAX CORE REALTY INC." style="\n' +
        '    width: 50px;\n' +
        '    "></a></div></div>';
    // TODO: refactor
    insertLocation.insertBefore(buttons, insertLocation.querySelector('.m_property_dtl_realtor'));
    deferMorty();
};

function loadMorty(){
    $("#morty_anchor").append('<img id="morty-head" src="morty48.png" alt="MORTY_FACE" style="height:48px; width:48px">');
    $("head").append('<style>#morty-bubble td:hover{cursor:pointer;}#morty-head:hover{cursor:pointer;}#morty-bubble{position:absolute;overflow:hidden;transition: height linear 0.25s;height:0px;width:225px;background-color:skyblue;}#morty-response{    padding:10px;    position:absolute;    font-size:20px;}#morty-clickable-table{    position:absolute;}#morty-ok-continue{    cursor:pointer;}.morty-blurred{    -webkit-filter: blur(5px);    -moz-filter: blur(5px);    -o-filter: blur(5px);    -ms-filter: blur(5px);    filter: blur(5px);    pointer-events:none;}</style>');
    //add the morty bubble stuff
    $("#morty-head").after(
        '<div id="morty-bubble">' +
            '<div id="morty-response">' +
                '<div id="morty-response-text"></div>'+
                '<br>'+
                '<div id="morty-ok-continue" hidden>OK!</div>'+
            '</div>' +
            
            '<table id="morty-clickable-table">' +
                '<thead>' +
                    '<tr>' +
                    '<th>&nbsp;</th>' +
                    '<th>Location Score</th>' +
                    '</tr>' +
                '</thead>' +
                '<tbody>' +
                    '<tr><td><img src="https://cdn.locallogic.co/icons-svg/i9001001.svg" height="25"></td><td>Pedestrian friendly</td></tr>' +
                    '<tr><td><img src="https://cdn.locallogic.co/icons-svg/i9001002.svg" height="25"></td><td>Cycling friendly</td></tr>' +
                    '<tr><td><img src="https://cdn.locallogic.co/icons-svg/i9001003.svg" height="25"></td><td>Transit friendly</td></tr>' +
                    '<tr><td><img src="https://cdn.locallogic.co/icons-svg/i9001024.svg" height="25"></td><td>Car friendly</td></tr>' +
                    '<tr><td><img src="https://cdn.locallogic.co/icons-svg/i9001009.svg" height="25"></td><td>Parks</td></tr>' +
                    '<tr><td><img src="https://cdn.locallogic.co/icons-svg/i9001014.svg" height="25"></td><td>Groceries</td></tr>' +
                    '<tr><td><img src="https://cdn.locallogic.co/icons-svg/i9001018.svg" height="25"></td><td>Shopping</td></tr>' +
                    '<tr><td><img src="https://cdn.locallogic.co/icons-svg/i9001016.svg" height="25"></td><td>Nightlife</td></tr>' +
                    '<tr><td><img src="https://cdn.locallogic.co/icons-svg/i9001015.svg" height="25"></td><td>Restaurants</td></tr>' +
                    '<tr><td><img src="https://cdn.locallogic.co/icons-svg/i9001017.svg" height="25"></td><td>Cafes</td></tr>' +
                    '<tr><td><img src="https://cdn.locallogic.co/icons-svg/i9001019.svg" height="25"></td><td>Daycares</td></tr>' +
                    '<tr><td><img src="https://cdn.locallogic.co/icons-svg/i9001020.svg" height="25"></td><td>Primary Schools</td></tr>' +
                    '<tr><td><img src="https://cdn.locallogic.co/icons-svg/i9001021.svg" height="25"></td><td>High Schools</td></tr>' +
                    '<tr><td><img src="https://cdn.locallogic.co/icons-svg/i9001006.svg" height="25"></td><td>Quiet</td></tr>' +
                    '<tr><td><img src="https://cdn.locallogic.co/icons-svg/i9001023.svg" height="25"></td><td>Green</td></tr>' +
                    '<tr><td><img src="https://cdn.locallogic.co/icons-svg/i9001012.svg" height="25"></td><td>Historic</td></tr>' +
                    '<tr><td><img src="https://cdn.locallogic.co/icons-svg/i9001013.svg" height="25"></td><td>Vibrant</td></tr>' +
                '</tbody>' +
            '</table>' +
        '</div>');

    $("#morty-bubble").css("left", $("#morty-head").offset().left + 48);
    $("#morty-bubble").css("top", $("#morty-head").offset().top);

    $("#morty-clickable-table tr").click(function(){
        var index = $("#morty-clickable-table tr").index(this) - 1;
        var latlng = getLatLng();
        var lat = $("#latInput").val();
        var lng = $("#lngInput").val();
        if(latlng == null) {
            response = "sorry we could not find the location of the house!";
        }
        else {
            lat = latlng[0];
            lng = latlng[1];
        }
        var response = getInformation(lat, lng, index);
        $("#morty-response-text").html(response);
        $("#morty-clickable-table").addClass("morty-blurred");
        $("#morty-clickable-table").prop("disabled", true);
        $("#morty-ok-continue").show();
    })
    $("#morty-head").click(function(){
        if(morty_open) $("#morty-bubble").css("height", "0px");
        else $("#morty-bubble").css("height", "580px");
        morty_open = !morty_open;
    })
    $(document).click(function(event){
        if($(event.target).closest("#morty-bubble")[0] == null && morty_open && $(event.target).closest("#morty-head")[0] == null){
            $("#morty-bubble").css("height", "0px");
            morty_open = false;
        }
    })
    $("#morty-ok-continue").click(function(){
        $("#morty-clickable-table").removeClass("morty-blurred");
        $("#morty-clickable-table").prop("disabled", false);
        $("#morty-ok-continue").hide();
        $("#morty-response-text").html("");
    })
    document.getElementsByTagName('head')[0].appendChild('<script' +
    'src="https://code.jquery.com/jquery-3.3.1.min.js"' +
    'integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="' + 
    'crossorigin="anonymous"></script>"');
    setTimeout(function(){ loadScript();}, 50);
};

function getInformation(lat, lng, index){
    var accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4ZjdlNWI1ZmMyZDIzYzhhNDg0NTY2YjExNDBiZGNlMzk0YzYxYTZiMTI3ZTg5MDI3NDM0ZGRmYjlhNjFkNWM2NmIxMDZkZDY2YmNmM2EwMiIsImJvdW5kcyI6eyJzdyI6WzQ4Ljk5LC0xMDkuOTldLCJuZSI6WzYwLC0xMDEuMzZdfSwiaWF0IjoxNTM5MTg0NzYzLCJleHAiOjE1Mzk3MDMxNjN9.PmW6d83eG-rCJdcVAvwwq6b6sBQMwPk6s0uolHgn1ws";
    var url = "https://api.locallogic.co/v1/scores";
    var scoreName = morty_includes[index];
    var jsonResponse;
    console.log("lat: " + lat + ", lng: " + lng + " score: " + scoreName); 
    $.ajax({
        async:false,
        url: url,
        type: 'GET',
        data: {
            lat: lat,
            lng: lng,
            access_token: accessToken,
            include: scoreName,
        },
        dataType: 'json',
        success: function(data){
            if(data.data != null && data.data.attributes[scoreName] != null){
                jsonResponse = data.data.attributes[scoreName].text;
                console.log(jsonResponse);
            }
            else {
                jsonResponse = "Sorry, we couldn't find any information about this topic :(";
            }
        },
        fail:function(){
            jsonResponse = "Sorry, we couldn't retrieve the information :( Try again sometime later!";
        },
    })
    return jsonResponse;
}

function deferMorty(){
    loadMorty();
}

function getLatLng(){
    var a = $("#transitScoreLink");
    var s;
    if(a[0] != null) {
        s = a.attr("href");
        $("#hello").html(s);
    }
    else {
        return a;
    }
    var groups = s.match(/lat=(-*\d+.\d+)|lng=(-*\d+.\d+)/g);
    var lat = groups[0].match(/-*\d+.\d+/g);
    var lng = groups[1].match(/-*\d+.\d+/g);

    var retval = [lat[0], lng[0]];
    return retval;
}

var morty_includes = ["pedestrian_friendly", "cycling_friendly", "transit_friendly",
"car_friendly", "parks", "groceries", "shopping", "nightlife", "restaurants", 
"cafes", "daycares", "primary_schools", "high_schools", "quiet", "green", "historic",
"vibrant"];
var morty_json;
var morty_open = false;


