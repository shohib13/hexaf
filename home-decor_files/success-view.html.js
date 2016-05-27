'use strict';

try {
  angular.module('shoutoutGetSubscriberPreload');
} catch (e) {
  angular.module('shoutoutGetSubscriberPreload', []);
}

angular.module('shoutoutGetSubscriberPreload').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('modules/widget/success-view.html',
    "<div class='success-view-container'>\n" +
    "  <div class='success-view' ng-if='main.subscribeIsSuccessful &amp;&amp; !main.isInEditorOrPreviewMode()'>\n" +
    "    <span class='overlay-view-wrapper'>\n" +
    "      <h3 class='success-view-title'>{{ main.signupForm.thankYouTitleText || 'formFields.messages.thankYouTitle.placeholder' | translate }}</h3>\n" +
    "      <p class='success-view-subtitle'>{{ main.signupForm.thankYouSubtitleText || 'formFields.messages.thankyou.placeholder' | translate }}</p>\n" +
    "      <button class='success-back-to-editor' ng-click='main.returnToForm()' ng-if='main.isInMobile()'>{{'widget.general.backToWebsite' | translate}}</button>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "  <div class='success-view' ng-if='main.subscribeIsSuccessful &amp;&amp; main.isInEditorOrPreviewMode()'>\n" +
    "    <span class='overlay-view-wrapper'>\n" +
    "      <h3 class='success-view-title'>{{ main.signupForm.thankYouTitleText || 'widget.general.congrats' | translate}}</h3>\n" +
    "      <p class='success-view-subtitle'>{{ main.signupForm.thankYouSubtitleText || 'widget.general.subscribeOk' | translate}}</p>\n" +
    "      <button class='success-back-to-editor' ng-click='main.returnToForm()'>{{'widget.general.back' | translate}}</button>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>\n"
  );
}]);