// Middleware manipulates the data inbetween requests 
import { NextResponse } from 'next/server'
 
export function middleware(request) {
  return NextResponse.json({ message: 'Hello from the about page' }) // show Json when someone visits /about/*
  return NextResponse.redirect(new URL('/', request.url)) // redirect to / when someone visits /about/*
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*', // match all paths after /about
}



// Another way of matching
import { NextResponse } from 'next/server'

export function middleware(request) {
  // if the path starts with /about, rewrite to /
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
 
  // if the path starts with /dashboard, redirect to /
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

// redirect means for any url go to the specific url
// eg - /about/anything will go to /about

// rewrite means for any url go to that url but keep the content to that specific url
// eg - /about/anything will go to /about/anything but show the content of /about


