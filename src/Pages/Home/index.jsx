import { useContext } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import { AppContext } from "../../Context";
import { Skeleton } from "../../Components/ui/skeleton"; // import the Skeleton component

const Home = () => {
  const context = useContext(AppContext);
  // console.log("context.isLoading: ", context.isLoading);
  const renderView = () => {
    // if there are items in the filteredItems array, render them
    // Filter by title and category

    // Skeleton while data is loading
    if (context.isLoading) {
      // if data is still loading, render the Skeleton
      // console.log("Rendering Skeleton");
      // Create an array of 10 skeletons (or however many you expect to display)
      return Array(15)
        .fill()
        .map((_, i) => (
          <div key={i}>
            {/* card: */}
            <Skeleton className="h-60 w-56 rounded-lg">
              {/* image: */}
              <Skeleton className="relative m-2 h-44 rounded-xl bg-slate-300/30 p-1">
                <div className="flex h-36 justify-end">
                  {/* circle: */}
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
                {/* category: */}
                <Skeleton className="absolute bottom-0 m-2 w-16 rounded-lg px-2 py-2" />
              </Skeleton>
              <div className="flex h-10 items-center justify-around">
                {/* title: */}
                <Skeleton className="h-5 w-20 bg-slate-200" />
                {/* price: */}
                <Skeleton className="h-5 w-16 bg-slate-200" />
              </div>
            </Skeleton>
          </div>
        ));
    } else if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item) => (
        <Card key={item.id} data={item} />
      ));
    } else {
      return (
        <div className="flex w-full flex-col gap-3">
          <h3 className="text-md font-light">
            No results for:
            <span className="text-md pl-2 font-medium text-gray-400">
              {context.searchByTitle}
            </span>
          </h3>
          <p className="text-sm font-light text-gray-400/80">
            Try searching for another product
          </p>
        </div>
      );
    }
  };

  return (
    <Layout>
      <div className="relative mb-4 flex items-center justify-center">
        <h1 className="text-md font-medium sm:text-xl">Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product..."
        className="w-50 mb-4 rounded-xl border border-black px-4 py-2 sm:w-96"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid-row grid w-full max-w-screen-sm justify-center gap-4 sm:grid-cols-2 md:max-w-screen-md md:grid-cols-3 lg:max-w-screen-lg lg:grid-cols-4 xl:max-w-screen-xl xl:grid-cols-5">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export default Home;
