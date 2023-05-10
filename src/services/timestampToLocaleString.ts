export function timestampToLocaleString(unixTimestamp: number, currentDate = new Date()) {
  const datetime = new Date(Number(unixTimestamp) * 1000);
  const isCurrentYear = datetime.getFullYear() === currentDate.getFullYear();
  const date = datetime.toLocaleString('en-us', isCurrentYear ? {
    day: 'numeric', month: 'long', timeZone: 'UTC',
  } : { day: 'numeric', month: 'long', year: 'numeric' });
  const htmlDatetime = datetime.toISOString().split('T')[0];

  return {
    date,
    htmlDatetime,
  };
}
