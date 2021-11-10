const array = [ 5, 7, 
    [ 4, [2], 8, [1,3], 2 ], 
    [ 9, [] ], 
    1, 8
  ];

  let sum = 0;

  let treeSum = (array) => {
    array.forEach(function (value) {
      Array.isArray(value) ? treeSum(value) : (sum += value);
    });
  
    return sum;
  };
  
  alert(treeSum(array));