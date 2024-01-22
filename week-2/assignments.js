/* assignment 1 */
function max(arr) {
  if (arr.length < 1) return undefined;

  let maxNum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }

  return maxNum;
}
console.log(max([])); // undefined
console.log(max([1, 2, 4, 5])); // 5
console.log(max([5, 2, 7, 1, 6])); // 7

/* assignment 2 */
function calculate(obj) {
  let total = 0;
  let n1 = obj?.n1;
  let n2 = obj?.n2;
  let op = obj?.op;

  if (!n1 || !n2 || !op) throw Error("n1 & n2 & op must be provided");

  if (isNaN(n1) || isNaN(n2)) throw Error("n1 & n2 must be number");

  n1 = parseInt(n1);
  n2 = parseInt(n2);

  if (op === "+") {
    total = n1 + n2;
  } else if (op === "-") {
    total = n1 - n2;
  } else {
    throw Error("Not support this operator");
  }

  return total;
}
// console.log(calculate({ n1: 2, n2: 3 })); // throw Error("n1 & n2 & op must be provided");
// console.log(calculate({ n1: "a", n2: 3, op: "+" }));  // throw Error("n1 & n2 must be number");
console.log(calculate({ n1: "2", n2: 3, op: "+" })); // 5
console.log(calculate({ n1: 2, n2: 3, op: "+" })); // 5
console.log(calculate({ n1: 5, n2: 2, op: "-" })); // 3
// console.log(calculate({ n1: 1, n2: 6, op: "x" })); // throw Error("Not support this operator");

/* assignment 3 */
/* function name 會更改，要不然會和 assignment2 有所衝突 */
function calculatePrice(obj) {
  let total_price = 0;
  let final_price = 0;
  let discount = obj?.discount;
  let products = obj?.products;

  if (!discount || !products) {
    throw Error("discount & products must be provided");
  }

  if (discount < 0 || discount > 1) {
    throw Error("discount must between 0 and 1");
  }

  if (products.length < 1) {
    throw Error("At least one product must be provided");
  }

  for (let i = 0; i < products.length; i++) {
    total_price += products[i]?.price;
  }

  final_price = discount * total_price;

  return final_price;
}

const discountedPrice = calculatePrice({
  discount: 0.1,
  products: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 700,
    },
    {
      name: "Product 3",
      price: 250,
    },
  ],
});
console.log(discountedPrice); // 105

/* assignment 5 */
function twoSum(arr, target) {
  let answer = "don't find the answer";
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        answer = [i, j];
        return answer;
      }
    }
  }
  return answer;
}
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([2, 7, 5, 10, 15], 25)); // [3, 4]
console.log(twoSum([2, -7, 0, -3, 10], 3)); // [1, 4]
console.log(twoSum([2, -7, 0, -3, 10], 6)); // don't find the answer
