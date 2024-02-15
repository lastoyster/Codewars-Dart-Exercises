How many pages in a book?
Solution:
function findNumberOfPages(summary: number): number {
  let low: number = 1;
  let high: number = summary;
  
  while (low < high) {
    let mid: number = Math.floor((low + high) / 2);
    let digits: number = calculateDigits(mid);
    
    if (digits < summary) {

      low = mid + 1;
    } else {
      high = mid;
    }
  }
  
  return low;
}

function calculateDigits(n: number): number {
  let digits: number = 0;
  
  while (n > 0) {
    digits += n.toString().length;
    n = Math.floor(n / 10);
  }
  
  return digits;
}

function main() {
  let summary: number = 25;
  let numberOfPages: number = findNumberOfPages(summary);
  console.log(`The book has ${numberOfPages} pages.`);
}

main();
