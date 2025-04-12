//Layouts
 
//Pages
import Home from '~/pages/Home'
import Profile from '~/pages/Profile'
import Blog from '~/pages/Blog'
import { DefaultLayout, HeaderOnly } from '~/components/Layout'
import Promotion from '~/pages/Promotion'
import Collection from '~/pages/Collection'
import New from '~/pages/New'
import Cart from '~/pages/Cart'
import Detail from '~/pages/Detail'
import Login from '~/pages/Login'
import Card from '~/pages/Card'
import Orders from '~/pages/Orders'
import OrderDetail from '~/pages/Orders/OrderDetail'
import ProductWishlist from '~/pages/ProductWishlist'
import Voucher from '~/pages/Voucher'
import VipBenefit from '~/pages/Vip'
import Register from '~/pages/Login/Register'
import ForgotPassword from '~/pages/Login/ForgotPassword'
import TShirts from '~/pages/TShirts'
import CollectionProducts from '~/pages/Collection/CollectionProducts'


//router k can dang nhap van xem duoc
const publicRoutes = [
    {path:'/', component: Home, layout: DefaultLayout},
    {path: '/login', component: Login, layout: DefaultLayout},
    {path: '/register', component: Register, layout: DefaultLayout},
    {path: '/forgot-password', component: ForgotPassword, layout: DefaultLayout},
    {path: '/cart', component: Cart, layout: DefaultLayout },
    {path:'/vip-benefits', component: VipBenefit, layout: HeaderOnly},

    {path:'/myvouchers', component: Voucher, layout: HeaderOnly},
    {path: '/mycard', component: Card, layout: DefaultLayout },
    {path:'/myaccount', component: Profile, layout: DefaultLayout},
    {path: '/myorders', component: Orders, layout: HeaderOnly},
    {path:'/myorders/xem-chi-tiet-don/:id', component: OrderDetail, layout: HeaderOnly},
    {path:'/myfavorites', component: ProductWishlist, layout: HeaderOnly},

    {path:'/blog', component: Blog, layout: DefaultLayout},
    { path: '/bo-suu-tap', component: Collection, layout: DefaultLayout},
    {path: '/bo-suu-tap/:collection', component: CollectionProducts, layout: DefaultLayout},
    { path: '/khuyen-mai-giam-gia', component: Promotion, layout: DefaultLayout },
    { path: '/khuyen-mai-giam-gia/:promotion', component: Promotion, layout: DefaultLayout },
    { path: '/ao-thun-nam-nu', component: TShirts, layout: DefaultLayout }, 
    { path: '/ao-thun-nam-nu/:type', component: TShirts, layout: DefaultLayout },
    { path: '/hang-moi-ban', component: New, layout: DefaultLayout },
    {path: '/hang-moi-ban/:category', component: New, layout: DefaultLayout },
    //{path:'/products', component: Product},
    {path: '/chi-tiet-san-pham/:id', component: Detail, layout: DefaultLayout },

 

]

// 
const privateRoutes =[
    


]

export {publicRoutes, privateRoutes}