import { Suspense } from 'react';
import { BookingClientWrapper } from './BookingClientWrapper';

export default function BookingPage() {
  const calcomLink = process.env.CALCOM_EVENT_TYPE_ID 
    ? `team/denstis/${process.env.CALCOM_EVENT_TYPE_ID}` 
    : undefined;

  const tallyUrl = process.env.TALLY_WORKSPACE_ID 
    ? `https://tally.so/r/${process.env.TALLY_WORKSPACE_ID}` 
    : undefined;

  return (
    <Suspense fallback={
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'var(--text-muted)' }}>Loading booking concierge...</p>
      </div>
    }>
      <BookingClientWrapper 
        calcomLink={calcomLink}
        tallyUrl={tallyUrl}
      />
    </Suspense>
  );
}
