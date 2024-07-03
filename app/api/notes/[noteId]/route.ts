import { NextRequest, NextResponse } from 'next/server'

import { createClient } from '@/utils/supabase/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { noteId: string } }
) {
  const supabase = createClient()

  const noteId = params.noteId

  const { data: notes, error } = await supabase
    .from('notes')
    .select('*')
    .eq('id', noteId)
    .single()

  if (error) {
    return NextResponse.json({ error }, { status: 404 })
  }

  return NextResponse.json({ notes })
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { noteId: string } }
) {
  const supabase = createClient()
  const noteId = params.noteId
  const { title, content } = await request.json()

  const { data, error } = await supabase
    .from('notes')
    .update({ title, content })
    .eq('id', noteId)
    .select()

  if (error) {
    return NextResponse.json({ error }, { status: 404 })
  }

  return NextResponse.json(data)
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { noteId: string } }
) {
  const supabase = createClient()

  const noteId = params.noteId

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { error, count, status } = await supabase
    .from('notes')
    .delete()
    .eq('id', noteId)

  if (error) {
    return NextResponse.json({ error }, { status: 404 })
  }

  return NextResponse.json({ success: true })
}
