import moment from 'moment';

export const getTimeElapsed = (createdAt: string) => {
  const now = moment();
  const created = moment(createdAt);
  const duration = moment.duration(now.diff(created));

  const minutes = duration.asMinutes();
  const hours = duration.asHours();
  const days = duration.asDays();
  const weeks = duration.asWeeks();

  // Based on minutes if less than 1 hour, based on hours if less than one day,
  // based on days if less than one week, based on weeks if more than a week.
  if (minutes < 60) {
    return `${Math.floor(minutes)}m`;
  } else if (hours < 24) {
    return `${Math.floor(hours)}h`;
  } else if (days < 7) {
    return `${Math.floor(days)}d`;
  } else {
    return `${Math.floor(weeks)}s`;
  }
};
