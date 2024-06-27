type AsyncArgs<T> = Parameters<typeof useLazyAsyncData<T>>;

export const useApi = () => {
  function humanReadableError(error: Ref<Error | null>) {
    if (error.value) {
      return "This is a human readable error";
    }
    return;
  }
  async function myAsyncData<T>(...args: AsyncArgs<T>) {
    const { error, ...rest } = await useLazyAsyncData<T>(...args);
    console.log("error", error.value);
    return { error: humanReadableError(error), ...rest };
  }
  const videos = {
    get404Client: async () => {
      return await myAsyncData(
        "404client",
        async () => {
          return await $fetch("https://httpbin.org/status/404");
        },
        { server: false },
      );
    },
    get404Server: async () => {
      return await myAsyncData(
        "404server",
        async () => {
          return await $fetch("https://httpbin.org/status/404");
        },
        { server: true },
      );
    },
  };

  return { videos };
};
