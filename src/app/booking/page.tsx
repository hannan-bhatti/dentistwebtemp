import { BookingClientWrapper } from './BookingClientWrapper';

export default function BookingPage() {
  // Pass the env variables securely from server to client
  const calcomLink = process.env.CALCOM_EVENT_TYPE_ID 
    ? `team/denstis/${process.env.CALCOM_EVENT_TYPE_ID}` 
    : 'team/denstis/15min'; // fallback

  const tallyUrl = process.env.TALLY_WORKSPACE_ID 
    ? `https://tally.so/r/${process.env.TALLY_WORKSPACE_ID}` 
    : 'https://tally.so/r/example'; // fallback

  return (
    <BookingClientWrapper 
      calcomLink={calcomLink}
      tallyUrl={tallyUrl}
    />
  );
}
