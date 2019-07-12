import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import IDList from '@/components/IDList'
import OrgList from '@/components/OrgList'
import IdNewLogin from '@/components/IdNewLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
	   meta:{
        keepAlive:false//导航栏在该页面不予显示
      }
    },  

	{
		  path: '/Home',
		  name: 'Home',
		  component: Home,
		   meta:{
        keepAlive:true//导航栏在该页面显示
      }
		},

		{
		  path: '/IDList',
		  name: 'IDList',
		  component: IDList,
		    meta:{
        keepAlive:true//导航栏在该页面不予显示
			}
		},
		{
		  path: '/IdNewLogin',
		  name: 'IdNewLogin',
		  component: IdNewLogin,
		   meta:{
			keepAlive:true//导航栏在该页面不予显示
		}	
		},
		{
		  path: '/OrgList',
		  name: 'OrgList',
		  component: OrgList,
		   meta:{
			keepAlive:true//导航栏在该页面不予显示
		   }
		},
		
		
		
		
		
			
	  


  ]
})
