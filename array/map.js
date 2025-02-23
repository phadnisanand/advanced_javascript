    var myArray = [1, 2, 3, 4, 5];
    var multipliedArray = myArray.map(function (element) {
      return element * 2;
    });
    console.log(multipliedArray); // [2, 4, 6, 8, 10]


    function triple(n) {
        return n * 3;
      }
    arr = new Array(1, 2, 3, 6, 5, 4);

    var new_arr = arr.map(triple)
    console.log(new_arr);


    const numbers = [1, 2, 3, 4];
    const doubled = numbers.map(item => item * 2);
    console.log(doubled); // [2, 4, 6, 8]
