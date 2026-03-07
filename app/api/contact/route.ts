import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // In a real application, you would save this to a database or send an email
        console.log('Received surrogacy inquiry:', body);

        // Simulate some processing time
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
