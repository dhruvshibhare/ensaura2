import { redirect } from 'next/navigation';

export default function Page() {
  // server-side redirect to the corrected route
  redirect('/collections/limited-addition');
}
