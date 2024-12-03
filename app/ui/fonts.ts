import { Inter, Lusitana } from 'next/font/google';

// Inter 폰트 설정 (기본 weight 추가)
export const inter = Inter({ subsets: ['latin'] });

// Lusitana 폰트 설정 (기본 weight 추가)
export const lusitana = Lusitana({ 
  subsets: ['latin'], 
  weight: ['400', '700'], // 사용하려는 weight 추가
});
