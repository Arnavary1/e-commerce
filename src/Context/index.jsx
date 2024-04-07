import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Get Products · State to store the data from the dummy API. It's an empty array because the data is an array of objects
  // Fetch data from API · hook to add the info from the API to the state
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // UseEffect is a hook to fetch the data from the API
  useEffect(() => {
    setIsLoading(true); // Set isLoading to true before fetching data

    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => {
        // console.log("Data from Dummy API: ", json); // Log the data
        // console.log("Products inside Data Dummy API: ", json.products); // Products is an array of objects inside the data from the API
        setItems(json.products); // Add the data to the state (setItems) and specify the data to be added (json.products)
        setIsLoading(false); // Set isLoading to false after fetching data
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false); // Set isLoading to false even if there was an error
      });
  }, []);

  // Shopping Cart · Increment quantity
  const [count, setCount] = useState(0);

  // Product Detail · Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Product Detail · Show product
  const [productToShow, setProductToShow] = useState({});

  // Shopping Cart · add product to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Checkout Side Menu · Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Shopping Cart · Order
  const [order, setOrder] = useState([]);

  // add product to cart
  const addProductToCart = (productData) => {
    setCount(count + 1);
    setCartProducts([...cartProducts, productData]);
    // console.log("cartProducts: ", cartProducts);
    // console.log("productData: ", productData);
    openCheckoutSideMenu();
    closeProductDetail();
  };

  // Get Products · Search a product
  // const [searchByTitle, setSearchByTitle] = useState("");
  const [searchByTitle, setSearchByTitle] = useState(null);
  // console.log(searchByTitle);

  // Get Products · Filter items by category
  const [searchByCategory, setSearchByCategory] = useState(null);
  // console.log("searchByCategory: ", searchByCategory);

  // Filter items by search
  const [filteredItems, setFilteredItems] = useState(null);

  // Filter items by search
  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase()),
    );
  };

  // Filter items by category
  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.toLowerCase().includes(searchByCategory.toLowerCase()),
    );
  };

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    // Filter by title
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle);
    }

    // Filter by category
    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory);
    }

    // Filter by title and category
    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase()),
      );
    }

    // The is NO Filter, return all items
    if (!searchType) {
      return items;
    }
  };

  useEffect(() => {
    // Filter by title and category
    if (searchByTitle && searchByCategory) {
      return setFilteredItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchByTitle,
          searchByCategory,
        ),
      );
    }
    // Filter by title
    if (searchByTitle && !searchByCategory) {
      return setFilteredItems(
        filterBy("BY_TITLE", items, searchByTitle, searchByCategory),
      );
    }
    // Filter by category
    if (!searchByTitle && searchByCategory) {
      return setFilteredItems(
        filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory),
      );
    }
    // No Filter, return all items
    if (!searchByTitle && !searchByCategory) {
      return setFilteredItems(
        filterBy(null, items, searchByTitle, searchByCategory),
      );
    }
  }, [items, searchByTitle, searchByCategory]);

  // console.log("searchByCategory: ", searchByCategory);
  // console.log("searchByTitle: ", searchByTitle);
  // console.log("filteredItems: ", filteredItems);

  return (
    <AppContext.Provider
      value={{
        items,
        setItems,
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems,
        searchByCategory,
        setSearchByCategory,
        addProductToCart,
        isLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
