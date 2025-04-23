// src/app/api/[[...path]]/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Set your NestJS API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5005';

export async function GET(request: NextRequest, { params }: { params: { path: string[] } }) {
  try {
    const path = params.path?.join('/') || '';
    const searchParams = request.nextUrl.searchParams.toString();
    const url = `${API_URL}/${path}${searchParams ? `?${searchParams}` : ''}`;
    
    // Forward the request to the NestJS backend
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        // Forward authentication headers if present
        ...(request.headers.get('Authorization') 
          ? { Authorization: request.headers.get('Authorization') as string } 
          : {})
      },
      credentials: 'include'
    });
    
    const data = await response.json();
    
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('API proxy error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest, { params }: { params: { path: string[] } }) {
  try {
    const path = params.path?.join('/') || '';
    const url = `${API_URL}/${path}`;
    const body = await request.json();
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(request.headers.get('Authorization') 
          ? { Authorization: request.headers.get('Authorization') as string } 
          : {})
      },
      body: JSON.stringify(body),
      credentials: 'include'
    });
    
    const data = await response.json();
    
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('API proxy error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, { params }: { params: { path: string[] } }) {
  try {
    const path = params.path?.join('/') || '';
    const url = `${API_URL}/${path}`;
    const body = await request.json();
    
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...(request.headers.get('Authorization') 
          ? { Authorization: request.headers.get('Authorization') as string } 
          : {})
      },
      body: JSON.stringify(body),
      credentials: 'include'
    });
    
    const data = await response.json();
    
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('API proxy error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { path: string[] } }) {
  try {
    const path = params.path?.join('/') || '';
    const url = `${API_URL}/${path}`;
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...(request.headers.get('Authorization') 
          ? { Authorization: request.headers.get('Authorization') as string } 
          : {})
      },
      credentials: 'include'
    });
    
    const data = await response.json();
    
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('API proxy error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}