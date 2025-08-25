
import { NextResponse } from 'next/server';

type Order = {
  id: string;
  packageId: string;
  data: Record<string, any>;
  status: 'pending' | 'needs_review' | 'approved';
};

const orders: Record<string, Order> = {};

export async function POST(req: Request) {
  const body = await req.json();
  const id = Math.random().toString(36).slice(2);
  const order: Order = { id, packageId: body.packageId, data: body.data || {}, status: 'needs_review' };
  orders[id] = order;
  return NextResponse.json({ id, status: order.status });
}

export async function GET() {
  // List orders (for admin review UI, later gated behind password)
  return NextResponse.json({ orders: Object.values(orders) });
}
