export async function GET() {
  return new Response(JSON.stringify({ message: "Hello API ✅" }), {
    headers: { "Content-Type": "application/json" },
  });
}