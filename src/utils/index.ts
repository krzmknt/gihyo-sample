export const fetcher = async (
  resource: RequestInfo,
  init?: RequestInit
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  const res = await fetch(resource, init);

  if (!res.ok) {
    // レスポンスがエラーだった場合はエラーを投げる
    const errorRes = await res.json();
    const error = new Error(
      errorRes.message ?? "An error occurred while fetching the data."
    );

    throw error;
  }

  return res.json();
};
