import { NextRequest, NextResponse } from 'next/server'

import { createClient } from '@/utils/supabase/server'

export async function GET() {
  const supabase = createClient()
  const { data: notes, error } = await supabase.from('notes').select('*')

  if (error) {
    return NextResponse.json({ error }, { status: 500 })
  }

  return NextResponse.json({ notes })
}

export async function POST(request: NextRequest) {
  const supabase = createClient()

  const { title, content } = await request.json()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data, error } = await supabase
    .from('notes')
    .insert([{ title, content, user_id: user?.id }])
    .select()

  if (error) {
    return NextResponse.json({ error }, { status: 400 })
  }

  return NextResponse.json(data, { status: 201 })
}
