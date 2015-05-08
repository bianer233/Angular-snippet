/**
 * Created by jinbian on 5/7/15.
 */


var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";


    $scope.ordersNotWork = [
        { id:1, customer: { name: 'foo', id: 10 } },
        { id:2, customer: { name: 'bar', id: 20 } },
        { id:3, customer: { name: 'foo', id: 10 } },
        { id:4, customer: { name: 'bar', id: 20 } },
        { id:5, customer: { name: 'baz', id: 30 } },
    ];
    $scope.ordersWork = [
        { id:1, customer:  'foo' },
        { id:2, customer: 'bar'},
        { id:3, customer: 'foo'},
        { id:4, customer: 'bar'},
        { id:5, customer: 'baz'}
    ];

    var filterUnique = function(input, key) {
        var unique = {};
        var uniqueList = [];
        console.log("unique:" + unique);

        for(var i = 0; i < input.length; i++){
            if(typeof unique[input[i][key]] == "undefined"){
                unique[input[i][key]] = "";
                uniqueList.push(input[i]);
                console.log("uniqueList:" + uniqueList);
            }
        }
        return uniqueList;
    };

    console.log(filterUnique($scope.ordersWork,"customer"));
});
