export function timestampToLocaleString(unixTimestamp: number) {
  const datetime = new Date(Number(unixTimestamp) * 1000);
  const isCurrentYear = datetime.getFullYear() === new Date().getFullYear();
  const date = datetime.toLocaleString('en-us', isCurrentYear ? {
    day: 'numeric', month: 'long',
  } : { day: 'numeric', month: 'long', year: 'numeric' });
  const htmlDatetime = datetime.toISOString().split('T')[0];

  return {
    date,
    htmlDatetime,
  };
}
