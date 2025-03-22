//Layouts
 
//Pages
import Home from '~/pages/Home'
import Profile from '~/pages/Profile'
import Blog from '~/pages/Blog'
import { DefaultLayout } from '~/components/Layout'
import Promotion from '~/pages/Promotion'
import Collection from '~/pages/Collection'
import New from '~/pages/New'
import Cart from '~/pages/Cart'

//router k can dang nhap van xem duoc
const publicRoutes = [
    {path:'/', component: Home, layout: DefaultLayout},
    {path:'/profile', component: Profile, layout: DefaultLayout},
    {path:'/blog', component: Blog, layout: DefaultLayout},
    { path: '/bo-suu-tap', component: Collection, layout: DefaultLayout },
    { path: '/khuyen-mai-giam-gia', component: Promotion, layout: DefaultLayout },
    { path: '/hang-moi-ban', component: New, layout: DefaultLayout },
    
    { path: '/cart', component: Cart, layout: DefaultLayout },

]

// 
const privateRoutes =[
]

export {publicRoutes, privateRoutes}