Number.prototype.toMoney = function (
  onlyNumber = false,
  decimalCount = 2,
  decimal = ",",
  thousands = "."
) {
  let amount = this;
  console.log(this, amount);
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = this < 0 ? "-" : "";

    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return `${!onlyNumber ? "R$ " : ""}${
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : `0,00`)
    }`;
  } catch (e) {
    console.log(e);
  }
};
