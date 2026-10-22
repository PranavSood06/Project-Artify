
import axios from "axios";
import { mergePhotos, hasNextPage } from "../../galleryResults";
import { useEffect, useState } from "react";
import Card_Section from "../Card/Card_Section";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "../Pages/Pagination";
import InfiniteScroll from "../Infinite Scroll/InfiniteScroll";
import Spin from "../Spinner/Spin";

// Calculate images per page based on screen width
function getImagesPerPage() {
    if (window.innerWidth >= 1280) return 30; // 5 columns × 6 rows
    if (window.innerWidth >= 1024) return 24; // 4 columns × 6 rows
    if (window.innerWidth >= 768) return 18;  // 3 columns × 6 rows
    if (window.innerWidth >= 640) return 12;  // 2 columns × 6 rows
    return 6; // 1 column × 6 rows
}

export default function Section_1({ paginate }) {
    const api_key = import.meta.env.VITE_PIXELS_API_KEY;

    const [query, setquery] = useState("AI");
    const [page, setpage] = useState(1);
    const [photos, setphotos] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");
    const [hasMore, sethasMore] = useState(true);
    const [attempt, setAttempt] = useState(0);

    const [imagesPerPage, setImagesPerPage] = useState(getImagesPerPage);

    // Update images per page when screen size changes
    useEffect(() => {
        function handleResize() {
            const newCount = getImagesPerPage();

            setImagesPerPage((previous) => {
                if (previous === newCount) return previous;
                return newCount;
            });
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function handleQuery(nextQuery) {
        setloading(true);
        setAttempt(value => value + 1);
        setquery(nextQuery);
        setpage(1);
        setphotos([]);
        sethasMore(true);
    }

    // Reset pagination when the number of columns changes
    useEffect(() => {
        setpage(1);
        setphotos([]);
        sethasMore(true);
    }, [imagesPerPage]);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchData() {
            setloading(true);
            seterror("");

            try {
                if (!api_key) {
                    throw new Error(
                        "Photo search is currently unavailable."
                    );
                }

                const response = await axios.get(
                    "https://api.pexels.com/v1/search",
                    {
                        params: {
                            query,
                            page,
                            per_page: imagesPerPage,
                        },
                        headers: {
                            Authorization: api_key,
                        },
                        signal: controller.signal,
                    }
                );

                const nextPhotos = response.data.photos ?? [];

                if (controller.signal.aborted) return;

                sethasMore(hasNextPage(response.data));

                setphotos((currentPhotos) => {
                    return mergePhotos(
                        currentPhotos,
                        nextPhotos,
                        paginate || page === 1
                    );
                });

            } catch (requestError) {
                if (!axios.isCancel(requestError)) {
                    seterror(
                        requestError.response?.status === 429
                            ? "Too many searches. Please wait a moment and retry."
                            : "Unable to load photos. Please try again."
                    );
                }
            } finally {
                if (!controller.signal.aborted) {
                    setloading(false);
                }
            }
        }

        fetchData();

        return () => controller.abort();

    }, [api_key, paginate, page, query, attempt, imagesPerPage]);

    return (
        <>
            <SearchBar setQuery={handleQuery} />

            {error && (
                <div
                    className="bg-red-100 px-4 py-3 text-center text-red-800"
                    role="alert"
                >
                    {error}
                    <button
                        className="underline p-2"
                        onClick={() => {
                            setloading(true);
                            setAttempt(value => value + 1);
                        }}
                    >
                        Retry
                    </button>
                </div>
            )}

            <Card_Section photos={photos} />

            {!loading && !error && photos.length === 0 && (
                <p className="bg-gray-300 px-4 py-10 text-center">
                    No photos found. Try another search.
                </p>
            )}

            {paginate && (
                <Pagination
                    page={page}
                    setpage={setpage}
                    loading={loading}
                    hasMore={hasMore}
                />
            )}

            {loading && <Spin />}

            {!loading && !error && !hasMore && photos.length > 0 && (
                <p role="status" className="p-4 text-center">
                    You have reached the end of the results.
                </p>
            )}

            {!paginate && (
                <InfiniteScroll
                    setpage={setpage}
                    loading={loading || Boolean(error)}
                    hasMore={hasMore}
                />
            )}
        </>
    );
}
