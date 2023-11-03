import { useEffect } from 'react';
import { useRouter } from 'next/router';

function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // 페이지 로딩 시 /who 경로로 리다이렉션합니다.
    router.push('/who');
  }, []);

  return null; // 이 페이지에서 아무 내용도 렌더링하지 않습니다.
}

export default HomePage;