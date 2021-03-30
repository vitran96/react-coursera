export const FormatDateTime = (options, date) =>
{
  return new Intl.DateTimeFormat('en-US', options).format(new Date(Date.parse(date)));
}
