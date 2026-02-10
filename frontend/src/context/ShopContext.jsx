import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({}); 
    const [token, setToken] = useState('');
    const navigate = useNavigate();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const currency = "$";
    const delivery_fee = 10;
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const storedData = localStorage.getItem("cartItems");
        try {
            if (storedData && storedData !== "undefined" && storedData !== "null") {
                const parsedData = JSON.parse(storedData);
                if (parsedData && typeof parsedData === 'object') {
                    setCartItems(parsedData);
                }
            }
        } catch (error) {
            console.error("Cart storage error:", error);
            setCartItems({}); 
        }
    }, []);


    useEffect(() => {
        if (cartItems) {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
    }, [cartItems]);

    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list');
            if (response.data.success) {
                setProducts(response.data.products);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getUserCart = async (token) => {
        try {
            const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } });
            if (response.data.success) {
                setCartItems(response.data.cartData || {});
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error("Please Select a Size");
            return;
        }

        // Fix: cartItems exist na karein toh {} use karein
        let cartData = cartItems ? structuredClone(cartItems) : {};

        if (!cartData[itemId]) {
            cartData[itemId] = {};
        }

        if (cartData[itemId][size]) {
            cartData[itemId][size] += 1;
        } else {
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);
        toast.success("Item Added To The Cart");

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } });
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    };

    const getCartCount = () => {
        let totalCount = 0;
        if (!cartItems) return totalCount; 

        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {}
            }
        }
        return totalCount;
    };

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        
        if (cartData[itemId] && cartData[itemId][size] !== undefined) {
            cartData[itemId][size] = quantity;
            setCartItems(cartData);

            if (quantity === 0) {
                toast.success("Item Removed From The Cart");
            }

            if (token) {
                try {
                    await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } });
                } catch (error) {
                    console.log(error);
                    toast.error(error.message);
                }
            }
        }
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        if (!cartItems || products.length === 0) return totalAmount; 

        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            if (itemInfo) {
                for (const item in cartItems[items]) {
                    try {
                        if (cartItems[items][item] > 0) {
                            totalAmount += itemInfo.price * cartItems[items][item];
                        }
                    } catch (error) {}
                }
            }
        }
        return totalAmount;
    };

    useEffect(() => {
        getProductsData();
    }, []);

    useEffect(() => {
        const localToken = localStorage.getItem('token');
        if (!token && localToken) {
            setToken(localToken);
            getUserCart(localToken);
        }
    }, []); 

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, setCartItems,
        getCartCount, updateQuantity, getCartAmount,
        navigate, backendUrl, token, setToken
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;