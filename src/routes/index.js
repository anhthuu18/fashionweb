//Layouts
 
//Pages
import Home from '~/pages/Home'
import Profile from '~/pages/Profile'
import Blog from '~/pages/Blog'

//router k can dang nhap van xem duoc
const publicRoutes = [
    {path:'/', component: Home},
    {path:'/profile', component: Profile},
    {path:'/blog', component: Blog},

]

// 
const privateRoutes =[

]

export {publicRoutes, privateRoutes}