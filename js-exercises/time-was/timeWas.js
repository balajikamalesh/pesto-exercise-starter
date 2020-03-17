function timeWas(time, now) {
if (Date.now() === time)
  return 'just now';

  const SECONDS = 1000;
  const MINUTES = SECONDS * 60;
  const HOURS = MINUTES * 60;
  const DAYS = HOURS * 24;
  const WEEKS = DAYS * 7;
  const MONTHS = DAYS * 30;
  const YEARS = MONTHS * 12;

let timeDifference = (now === undefined) ? (Date.now() - time) : (now - time);

if(timeDifference > 0 && timeDifference < SECONDS)
  return 'just now';
else if(timeDifference >= SECONDS && timeDifference < MINUTES)
  return `${Math.floor(timeDifference/SECONDS)} second${Math.floor(timeDifference/SECONDS) == 1 ? '':'s'} ago`;
else if(timeDifference >= MINUTES && timeDifference < HOURS)
  return `${Math.floor(timeDifference/MINUTES)} minute${Math.floor(timeDifference/MINUTES) == 1 ? '':'s'} ago`;
else if(timeDifference >= HOURS && timeDifference < DAYS)
  return `${Math.floor(timeDifference/HOURS)} hour${Math.floor(timeDifference/HOURS) == 1 ? '':'s'} ago`;
else if(timeDifference >= DAYS && timeDifference < WEEKS)
  return `${Math.floor(timeDifference/DAYS)} day${Math.floor(timeDifference/DAYS) == 1 ? '':'s'} ago`;
else if(timeDifference >= WEEKS && timeDifference < MONTHS)
  return `${Math.floor(timeDifference/WEEKS)} week${Math.floor(timeDifference/WEEKS) == 1 ? '':'s'} ago`;
else if(timeDifference >= MONTHS && timeDifference < YEARS)
  return `${Math.floor(timeDifference/MONTHS)} month${Math.floor(timeDifference/MONTHS) == 1 ? '':'s'} ago`;
else if(timeDifference >= YEARS)
  return `${Math.floor(timeDifference/YEARS)} year${Math.floor(timeDifference/YEARS) == 1 ? '':'s'} ago`;

}

export { timeWas };
