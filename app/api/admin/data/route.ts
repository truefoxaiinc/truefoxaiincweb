import { NextRequest, NextResponse } from "next/server";
import { createItem, deleteItem, readCms, updateItem, type CollectionName } from "@/lib/cms";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
const collections = new Set<CollectionName>(["leads", "applications", "jobs", "posts", "records"]);

function collectionOf(value: unknown): CollectionName | null {
  return collections.has(value as CollectionName) ? value as CollectionName : null;
}

export async function GET() {
  return NextResponse.json(await readCms(), { headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: NextRequest) {
  const body = await request.json() as Record<string, unknown>;
  const collection = collectionOf(body.collection);
  if (!collection || typeof body.item !== "object" || !body.item) return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  const item = await createItem(collection, body.item as Record<string, unknown>);
  return NextResponse.json({ item }, { status: 201 });
}

export async function PATCH(request: NextRequest) {
  const body = await request.json() as Record<string, unknown>;
  const collection = collectionOf(body.collection);
  const id = String(body.id ?? "");
  if (!collection || !id || typeof body.item !== "object" || !body.item) return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  const item = await updateItem(collection, id, body.item as Record<string, unknown>);
  return item ? NextResponse.json({ item }) : NextResponse.json({ error: "Not found" }, { status: 404 });
}

export async function DELETE(request: NextRequest) {
  const body = await request.json() as Record<string, unknown>;
  const collection = collectionOf(body.collection);
  const id = String(body.id ?? "");
  if (!collection || !id) return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  return await deleteItem(collection, id) ? NextResponse.json({ ok: true }) : NextResponse.json({ error: "Not found" }, { status: 404 });
}
