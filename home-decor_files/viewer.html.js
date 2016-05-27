'use strict';

try {
  angular.module('shoutoutGetSubscriberPreload');
} catch (e) {
  angular.module('shoutoutGetSubscriberPreload', []);
}

angular.module('shoutoutGetSubscriberPreload').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('modules/widget/viewer.html',
    "<div class='main-view'>\n" +
    "  <get-subscribers></get-subscribers>\n" +
    "</div>\n"
  );
}]);