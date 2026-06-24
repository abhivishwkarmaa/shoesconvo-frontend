import { createContext, useCallback, useContext, useMemo, useReducer } from 'react';

const CommerceContext = createContext(null);

const initialState = {
  authUser: null,
  cartItems: [],
  wishlistIds: [],
  searchQuery: '',
  newsletterEmail: '',
  isNewsletterSubscribed: false,
  isMobileMenuOpen: false,
  orderPlaced: false,
  activeModal: null,
  modalProduct: null,
};

function commerceReducer(state, action) {
  switch (action.type) {
    case 'cart/add': {
      const existing = state.cartItems.find((i) => i.id === action.product.id && i.size === action.size);
      if (existing) {
        return { ...state, cartItems: state.cartItems.map((i) => i.id === action.product.id && i.size === action.size ? { ...i, quantity: i.quantity + (action.qty || 1) } : i) };
      }
      return { ...state, cartItems: [...state.cartItems, { ...action.product, size: action.size || 8, quantity: action.qty || 1, color: action.color || 'Default' }] };
    }
    case 'cart/remove':
      return { ...state, cartItems: state.cartItems.filter((i) => i.cartKey !== action.cartKey) };
    case 'cart/updateQuantity':
      return { ...state, cartItems: state.cartItems.map((i) => i.cartKey === action.cartKey ? { ...i, quantity: Math.max(1, action.quantity) } : i) };
    case 'cart/updateSize':
      return { ...state, cartItems: state.cartItems.map((i) => i.cartKey === action.cartKey ? { ...i, size: action.size } : i) };
    case 'cart/updateColor':
      return { ...state, cartItems: state.cartItems.map((i) => i.cartKey === action.cartKey ? { ...i, color: action.color } : i) };
    case 'cart/moveToWishlist': {
      const item = state.cartItems.find((i) => i.cartKey === action.cartKey);
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.cartKey !== action.cartKey),
        wishlistIds: item && !state.wishlistIds.includes(item.id) ? [...state.wishlistIds, item.id] : state.wishlistIds,
      };
    }
    case 'wishlist/toggle': {
      const isSaved = state.wishlistIds.includes(action.productId);
      return { ...state, wishlistIds: isSaved ? state.wishlistIds.filter((id) => id !== action.productId) : [...state.wishlistIds, action.productId] };
    }
    case 'wishlist/remove':
      return { ...state, wishlistIds: state.wishlistIds.filter((id) => id !== action.productId) };
    case 'wishlist/moveToCart': {
      return { ...state, wishlistIds: state.wishlistIds.filter((id) => id !== action.product.id), cartItems: [...state.cartItems, { ...action.product, size: 8, quantity: 1, color: 'Default', cartKey: `${action.product.id}-${Date.now()}` }] };
    }
    case 'search/set':
      return { ...state, searchQuery: action.query };
    case 'newsletter/setEmail':
      return { ...state, newsletterEmail: action.email, isNewsletterSubscribed: false };
    case 'newsletter/subscribe':
      return { ...state, isNewsletterSubscribed: Boolean(state.newsletterEmail.trim()) };
    case 'navigation/toggleMobile':
      return { ...state, isMobileMenuOpen: !state.isMobileMenuOpen };
    case 'navigation/closeMobile':
      return { ...state, isMobileMenuOpen: false };
    case 'auth/login':
      return { ...state, authUser: action.user, isMobileMenuOpen: false };
    case 'auth/register':
      return { ...state, authUser: action.user, isMobileMenuOpen: false };
    case 'auth/logout':
      return { ...state, authUser: null };
    case 'order/place':
      return { ...state, orderPlaced: true, cartItems: [] };
    case 'order/reset':
      return { ...state, orderPlaced: false };
    case 'modal/open':
      return { ...state, activeModal: action.modal, modalProduct: action.product || null };
    case 'modal/close':
      return { ...state, activeModal: null, modalProduct: null };
    default:
      return state;
  }
}

export function CommerceProvider({ children }) {
  const [state, dispatch] = useReducer(commerceReducer, initialState);

  const addToCart = useCallback((product, size, qty, color) => {
    const cartKey = `${product.id}-${size || 8}-${Date.now()}`;
    dispatch({ type: 'cart/add', product: { ...product, cartKey }, size, qty, color });
  }, []);
  const removeFromCart = useCallback((cartKey) => dispatch({ type: 'cart/remove', cartKey }), []);
  const updateCartQuantity = useCallback((cartKey, quantity) => dispatch({ type: 'cart/updateQuantity', cartKey, quantity }), []);
  const updateCartSize = useCallback((cartKey, size) => dispatch({ type: 'cart/updateSize', cartKey, size }), []);
  const updateCartColor = useCallback((cartKey, color) => dispatch({ type: 'cart/updateColor', cartKey, color }), []);
  const moveCartToWishlist = useCallback((cartKey) => dispatch({ type: 'cart/moveToWishlist', cartKey }), []);
  const toggleWishlist = useCallback((productId) => dispatch({ type: 'wishlist/toggle', productId }), []);
  const removeFromWishlist = useCallback((productId) => dispatch({ type: 'wishlist/remove', productId }), []);
  const moveWishlistToCart = useCallback((product) => dispatch({ type: 'wishlist/moveToCart', product }), []);
  const setSearchQuery = useCallback((query) => dispatch({ type: 'search/set', query }), []);
  const setNewsletterEmail = useCallback((email) => dispatch({ type: 'newsletter/setEmail', email }), []);
  const subscribeNewsletter = useCallback(() => dispatch({ type: 'newsletter/subscribe' }), []);
  const toggleMobileMenu = useCallback(() => dispatch({ type: 'navigation/toggleMobile' }), []);
  const closeMobileMenu = useCallback(() => dispatch({ type: 'navigation/closeMobile' }), []);
  const loginUser = useCallback((credentials) => {
    dispatch({ type: 'auth/login', user: { name: credentials.name || credentials.email.split('@')[0] || 'Konvo Partner', email: credentials.email, business: credentials.business || 'Wholesale Partner' } });
  }, []);
  const registerUser = useCallback((profile) => {
    dispatch({ type: 'auth/register', user: { name: profile.ownerName || profile.name, email: profile.email, business: profile.companyName || profile.business, phone: profile.phone } });
  }, []);
  const logoutUser = useCallback(() => dispatch({ type: 'auth/logout' }), []);
  const placeOrder = useCallback(() => dispatch({ type: 'order/place' }), []);
  const resetOrder = useCallback(() => dispatch({ type: 'order/reset' }), []);
  const openModal = useCallback((modal, product) => dispatch({ type: 'modal/open', modal, product }), []);
  const closeModal = useCallback(() => dispatch({ type: 'modal/close' }), []);

  const value = useMemo(() => {
    const cartCount = state.cartItems.reduce((t, i) => t + i.quantity, 0);
    const totalMRP = state.cartItems.reduce((t, i) => t + (i.mrp || i.price || 0) * i.quantity, 0);
    const totalPrice = state.cartItems.reduce((t, i) => t + (i.price || 0) * i.quantity, 0);
    const discount = totalMRP - totalPrice;
    const platformFee = cartCount > 0 ? 500 : 0;
    const courierCharges = cartCount > 0 ? 2500 : 0;
    const totalAmount = totalPrice + platformFee + courierCharges;

    return {
      ...state, cartCount, wishlistCount: state.wishlistIds.length,
      totalMRP, totalPrice, discount, platformFee, courierCharges, totalAmount,
      addToCart, removeFromCart, updateCartQuantity, updateCartSize, updateCartColor,
      moveCartToWishlist, toggleWishlist, removeFromWishlist, moveWishlistToCart,
      setSearchQuery, setNewsletterEmail, subscribeNewsletter,
      toggleMobileMenu, closeMobileMenu,
      loginUser, registerUser, logoutUser,
      placeOrder, resetOrder, openModal, closeModal,
    };
  }, [state, addToCart, removeFromCart, updateCartQuantity, updateCartSize, updateCartColor, moveCartToWishlist, toggleWishlist, removeFromWishlist, moveWishlistToCart, setSearchQuery, setNewsletterEmail, subscribeNewsletter, toggleMobileMenu, closeMobileMenu, loginUser, registerUser, logoutUser, placeOrder, resetOrder, openModal, closeModal]);

  return <CommerceContext.Provider value={value}>{children}</CommerceContext.Provider>;
}

export function useCommerce() {
  const context = useContext(CommerceContext);
  if (!context) throw new Error('useCommerce must be used inside CommerceProvider');
  return context;
}
