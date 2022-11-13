import { onDestroy } from "svelte"
import { writable } from 'svelte/store';
import { http } from '@/services/http';

const ROUTE_MOVIES = import.meta.env.VITE_THE_MOVIE_DB_API_ROUTE_MOVIES;
const ROUTE_CDN = import.meta.env.VITE_THE_MOVIE_DB_API_ROUTE_CDN;

type TPagination = {
  page: number;
}

type TMovieData = {
  title: string;
  price: number;
  src: string;
  alt: string;
}

export function moviesStore(lazyLoad = false) {
  const loading = writable(false);
  const error = writable(null);
  const data = writable<TMovieData[]>([]);
  const updatedAfterOnMount = writable(false);
  const pagination = writable<TPagination>({ page: 1 });

  let localPagination: TPagination = { page: 1 };
  let isFirstLoad = true

  function loadMore() {
    loading.set(true)

    http(ROUTE_MOVIES).get(`page=${localPagination.page}`)
      .then((response: any) => {
        const fetchedMovies: TMovieData[] = response?.results?.map((movie) => ({
          title: movie.title || "",
          price: Math.floor(Math.random() * 10) + 9,
          src: ROUTE_CDN + movie.poster_path,
          alt: `${movie.title || ""} - ${movie.overview || ""}`,
        })) || [];

        data.update((old) => [...old, ...fetchedMovies]);
      })
      .catch(console.error)
      .finally(() => {
        loading.set(false);
        pagination.update(({ page }) => ({ page: page + 1 }));

        if (!lazyLoad && !isFirstLoad) {
          updatedAfterOnMount.set(true)
        }

        if (lazyLoad) {
          updatedAfterOnMount.set(true)
        }

        isFirstLoad = false
      })
  }

  const unsubscribePagination = pagination.subscribe((state) => {
    localPagination = state
  })

  if (!lazyLoad) {
    loadMore();
  }

  onDestroy(() => {
    unsubscribePagination();
  })

  return {
    loading,
    error,
    data,
    updatedAfterOnMount,
    pagination,
    loadMore
  }
}