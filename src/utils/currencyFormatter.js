const currencyFormatter = new Intl.NumberFormat(undefined, {
  currency: "usd",
  style: "currency",
  minimumFractionDigits: 0
});

const formatNumber = (num) => currencyFormatter.format(num);

export default formatNumber;
