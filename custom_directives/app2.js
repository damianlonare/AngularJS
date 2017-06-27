.directive('myAutocomplete', function() {
    function postLink($scope, elem, attrs) {
        $(elem).autocomplete({
            source: $scope.$eval(attrs.myAutocomplete),
            select: function(ev, ui) {
                ev.preventDefault();
                if (ui.item) {
                    $scope.optionSelected(ui.item.value);
                }
            },
            focus: function(ev, ui) {
                ev.preventDefault();
                $(this).val(ui.item.label);
            }
        });
    };
    return {
        link: postLink
    };
})