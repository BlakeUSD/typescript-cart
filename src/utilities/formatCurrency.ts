/* automatically determines how to print out a number depending on the users' location. i.e commas, periods and so on. It also includes a dollar sign and outputs the value in USD */
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

// takes in a number and returns a formatted version of the same
export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}
