(function () {
    "use strict";

    //PageControl是HMTL\CSS\JS的一个模块化单元，用作逻辑页
    WinJS.UI.Pages.define("/htmls/Home/home.html", {
        ready: function (element, options) {
            WinJS.Resources.processAll();
            var elem = element.querySelector('.navButton');
            elem.addEventListener('click', this.nextPage.bind(this));

            //WinJS.Utilities.query("linkPage2").listen("click", linkClickHandler, false);
        },
        nextPage: function (eventInfo) {
            var elem = document.querySelector('.navButton');
            var sr = elem.getAttribute('href');
            WinJS.Navigation.navigate(sr);
        }
    });

    function linkClickHandler(eventInfo) {
        //防止默认连接行为
        eventInfo.preventDefault();
        var link = eventInfo.target;
        WinJS.Navigation.navigate(link.href);
    }
})();
