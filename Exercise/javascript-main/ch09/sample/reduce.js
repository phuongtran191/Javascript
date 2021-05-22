window.onload = function () {
  var numbers = [520, 33, 9, 199];
  var total = 0;
  var sum = function (previousValue, value) {
    return previousValue + value;
  };
  total = numbers.reduceRight(sum);
  alert(total);

  var total2 = numbers.reduceRight(sum, -200);
  alert(total2);
};
