(function () {
    'use strict';
    angular.module('app')
        .directive('dynamicField', dynamicField);

    function dynamicField() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                fieldData: '='
            },
            link: function (scope, element, attrs) {
                // Function returns the correct template for each field.
                scope.getTemplateUrl = function () {
                    var type = scope.fieldData.type || 'string';
                    return '/src/directives/dm-dynamic-fields/dynamic-field-' + type + '.html';
                }
            },
            template: '<div ng-include="getTemplateUrl()"></div>'
        };
    }
})();