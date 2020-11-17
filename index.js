// 1. Check if N is an integer
function isInt(value) {
  return (
    typeof value === "number" &&
    !isNaN(value) &&
    parseInt(Number(value)) == value &&
    !isNaN(parseInt(value, 10))
  );
}

// 3. Convert N from a decimal to binary
function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

// Goes through array and returns number of gaps
function getGaps(binArray, gaps) {
  let firstIndex = binArray.indexOf("1"); // 0

  if (firstIndex > -1) {
    let secondHalf = binArray.slice(firstIndex + 1); // ["0", "0", "0", "0", "1", "0", "0", "0", "1"]
    let secondIndex = secondHalf.indexOf("1"); // 4

    if (secondIndex > -1) {
      if (secondIndex !== 0) {
        gaps.push(secondIndex); // 4
      }
      // 6. Find the second instance of 1
      if (secondHalf.slice(secondIndex).length > 0) {
        // 7. Record space between each ones
        return getGaps(secondHalf.slice(secondIndex), gaps);
      }
    }
  }
  return gaps;
}

function solution(N) {
  if (isInt(N)) {
    // 2. Check if N is within our range
    let min = 1;
    let max = 2147483647;

    if (N >= min && N <= max) {
      const bin = dec2bin(N); // 529 to 1000010001
      // 4. Convert N to an array
      const binArray = bin.split(""); //1000010001 to ['1', '0', '0', '0','0', '1', '0', '0','0', '1']

      const gaps = getGaps(binArray, []);

      // 5. Find the first instance of 1

      return gaps.length > 0 ? Math.max.apply(Math, gaps) : 0;
    }
  }
  return 0;
}
