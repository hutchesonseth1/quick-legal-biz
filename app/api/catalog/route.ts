
import { NextResponse } from 'next/server';

export async function GET() {
  const items = [
    { id: 'termination', title: 'Terminate Counsel', file: '/docs/01_Termination_of_Counsel.pdf' },
    { id: 'prose', title: 'Notice of Appearance (Pro Se)', file: '/docs/02_Notice_of_Appearance_Pro_Se.pdf' },
    { id: 'dismiss', title: 'Motion to Dismiss (Basics)', file: '/docs/03_Motion_to_Dismiss_Basics.pdf' },
    { id: 'discovery', title: 'Request for Discovery', file: '/docs/04_Request_for_Discovery.pdf' },
    { id: 'lien', title: "Mechanic's Lien (IN State Form – helper)", file: '/docs/05_Mechanics_Lien_Indiana_State_Form.pdf' },
    { id: 'smallclaims', title: 'Small Claims Starter Packet', file: '/docs/06_Small_Claims_Starter_Packet.pdf' },
    { id: 'startllc', title: 'Start Your Own LLC Packet', file: '/docs/07_Start_Your_Own_LLC_Packet.pdf' },
    { id: 'funding', title: 'Five Keys to Funding', file: '/docs/08_Five_Keys_To_Funding.pdf' },
  ];
  return NextResponse.json({ items });
}
