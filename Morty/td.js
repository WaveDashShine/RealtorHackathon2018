window.onload = function() {
    var windowUrl = window.location.href;
    var tdUrl = new URL(windowUrl);
    var cityProvince = tdUrl.searchParams.get("city").toString();
    cityProvince = cityProvince.replace("/", "");
    console.log(cityProvince);

    var nextButtons = document.querySelectorAll('.td-button.td-button-block.td-button-margin.td-button-secondary');

    var locationBox = document.querySelector('#municipality');
    locationBox.value = cityProvince;
    var locationNextButton = nextButtons[0];
    locationNextButton.removeAttribute('disabled');
    locationNextButton.click();
    document.querySelectorAll('.td-selection.ng-binding')[0].textContent = cityProvince;
    document.querySelectorAll('.no-wrap.ng-binding')[3].textContent = cityProvince;

    var houseIcon = document.querySelector('.td-icon.icon-regular.td-icon-house');
    houseIcon.click();
    var houseTypeNextButton = nextButtons[1];
    houseTypeNextButton.click();
    walk(document);
};

/*
WALKS THROUGH DOCUMENT AND HANDLES ONLY VISIBLE TEXT ON PAGE
Following code referenced from stackoverflow.com
/questions/5904914/javascript-regex-to-replace-text-not-in-html-attributes/5904945#5904945
 */
function walk(node) {
    var child, next;

    switch (node.nodeType) {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;
        case 3: // Text node
            if (node.parentElement.tagName.toLowerCase() !== "script" &&//XSS protection
                node.parentElement.tagName.toLowerCase() !== "a" &&
                node.textContent.includes("Mortgage loan payment")) {
                node.textContent = "Great news! Your property valuation has decreased the cost of your monthly mortgage loan payment!";
            }
            break;
    }
}