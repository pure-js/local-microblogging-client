export function timestampToLocaleString(unixTimestamp) {
  const datetime = new Date(Number(unixTimestamp) * 1000);
  const options = {
    short: { day: 'numeric', month: 'long' },
    full: { day: 'numeric', month: 'long', year: 'numeric' },
  };
  const isCurrentYear = datetime.getFullYear() === new Date().getFullYear();
  const date = datetime.toLocaleString('en-us', isCurrentYear ? options.short : options.full);
  const htmlDatetime = datetime.toISOString().split('T')[0];

  return {
    date,
    htmlDatetime,
  };
}
