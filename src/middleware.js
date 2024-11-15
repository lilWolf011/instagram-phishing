import { NextResponse } from 'next/server';

export default function middleware(request) {
  const { url, nextUrl } = request;

  // Eğer kullanıcı zaten giriş sayfasında ise yönlendirme yapma
  if (nextUrl.pathname === '/accounts/login') {
    return NextResponse.next();
  }
  if (nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL(`/accounts/login`, url));
  }

  // Kullanıcının gitmek istediği yolu 'next' parametresi olarak ekle
  const searchParams = new URLSearchParams(nextUrl.searchParams);
  searchParams.set('next', nextUrl.pathname.replace(/^\//, '')); // Başlangıçtaki "/" işaretini kaldırır

  // Login sayfasına yönlendirme
  return NextResponse.redirect(new URL(`/accounts/login?${searchParams}`, url));
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/login).*)'], // API login hariç tutuldu
};

