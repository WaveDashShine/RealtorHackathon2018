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
    buttons.innerHTML = '    <div class="m_property_dtl_realtor_info">\n' +
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

};

