import { NextResponse } from 'next/server';

export default function middleware(request) {
  const { url, nextUrl } = request;

  // Eğer kullanıcı zaten giriş sayfasında ise yönlendirme yapma
  if (nextUrl.pathname === '/accounts/login') {
    return NextResponse.next();
  }

  // Ana sayfa "/" için login sayfasına yönlendirme
  if (nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL(`/accounts/login`, url));
  }

  // Mevcut sorgu parametrelerini koruyarak 'next' parametresini ekle
  const searchParams = new URLSearchParams(nextUrl.search); // Mevcut tüm parametreleri korur
  searchParams.set('next', nextUrl.pathname.replace(/^\//, '')); // 'next' parametresini ekle

  // Login sayfasına yönlendirme, mevcut parametreleri koruyarak
  return NextResponse.redirect(new URL(`/accounts/login?${searchParams.toString()}`, url));
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api/login|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp)).*)',
  ],
};
