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


//router k can dang nhap van xem duoc
const publicRoutes = [
    {path:'/', component: Home, layout: DefaultLayout},
    {path: '/login', component: Login, layout: HeaderOnly},
    { path: '/cart', component: Cart, layout: DefaultLayout },
    {path: '/mycard', component: Card, layout: DefaultLayout },
    {path:'/myaccount', component: Profile, layout: DefaultLayout},
    {path: '/myorders', component: Orders, layout: HeaderOnly},
    {path:'/myorders/xem-chi-tiet-don/:id', component: OrderDetail, layout: HeaderOnly},

    {path:'/blog', component: Blog, layout: DefaultLayout},
    { path: '/bo-suu-tap', component: Collection, layout: DefaultLayout },
    { path: '/khuyen-mai-giam-gia', component: Promotion, layout: DefaultLayout },
    { path: '/hang-moi-ban', component: New, layout: DefaultLayout },
    //{path:'/products', component: Product},
    {path: '/chi-tiet-san-pham/:id', component: Detail, layout: DefaultLayout },

 

]

// 
const privateRoutes =[
    


]

export {publicRoutes, privateRoutes}