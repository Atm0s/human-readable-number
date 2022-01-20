module.exports = function toReadable (num) {
  const number = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const moreNumbers = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const decimals = ['', 'ten' ,'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let result = '';
 
  if (num.toString().length === 3) {
    let hundreds = Math.floor(num * 0.01);
    num -= hundreds * 100;
    result += `${number[hundreds]} hundred `;
  }

  if (num.toString().length === 2 && (num >= 20 || num == 10)) {
    let dec = Math.floor(num * 0.1);
    num -= dec * 10;
    result += `${decimals[dec]} `;
  }

  else if (num.toString().length === 2 && num < 20) {
    result += `${moreNumbers[num - 10]} `;
    num = '';
  }  

  if (num.toString().length === 1) {
    result += `${number[num]}`;
  }

  if (result == '' && num == '0') return 'zero'
  return (result.slice(-1) == " ") ? result.slice(0, -1) : result
}