import { useEffect, useState, useMemo } from 'react';

export interface Props {
  url: string;
  options?: RequestInit;
}

export interface Return<DT> {
  data?: DT;
  error?: Error;
  loading: boolean;
}

export default function useQuery<DT>({ url, options }: Props): Return<DT> {
  const [data, setData] = useState<DT>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url, options);
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) setError(error);
        else throw error;
      }
    };

    fetchData();
  }, [url, options]);

  return useMemo(
    () => ({
      data,
      error,
      loading,
    }),
    [data, error, loading],
  );
}
