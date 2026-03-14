import { useState, useEffect, useCallback } from 'react';

// CounterAPI 规范：主地址需要末尾斜杠，up 地址不需要
const API_URL = 'https://api.counterapi.dev/v1/jiesendesi/love/';
const API_UP_URL = 'https://api.counterapi.dev/v1/jiesendesi/love/up';

export const useLikeCounter = () => {
  const [count, setCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchCount = useCallback(async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      if (data && typeof data.count === 'number') {
        setCount(data.count);
      }
    } catch (err) {
      console.error('Failed to fetch count:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const increment = useCallback(async () => {
    // 乐观更新：先在 UI 上增加，再请求后端
    setCount(prev => prev + 1);
    try {
      const res = await fetch(API_UP_URL);
      const data = await res.json();
      if (data && typeof data.count === 'number') {
        setCount(data.count);
      }
    } catch (err) {
      console.error('Failed to increment count:', err);
      // 如果后端失败，其实不需要手动回退，因为下一次同步会修正
    }
  }, []);

  useEffect(() => {
    fetchCount();
  }, [fetchCount]);

  return { count, increment, isLoading };
};
