import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/dataMan',
      children: [{
        path: '/dataMan',
        name: 'dataMan',
        redirect: '/dataMan/index',
        component: () => import(/* webpackChunkName: "about" */ './views/shuju/index.vue'),
        children: [
          { path: 'index', /* 数据管理 */
            name: 'index',
            component: () => import(/* webpackChunkName: "about" */ './views/shuju/dataManagement.vue') },
          { path: 'userdata', /* 用户数据 */
            name: 'userdata',
            component: () => import(/* webpackChunkName: "about" */ './views/shuju/userData.vue') },
          { path: 'incomedata', /* 收入数据 */
            name: 'incomedata',
            component: () => import(/* webpackChunkName: "about" */ './views/shuju/incomeData.vue') },
          { path: 'projectdata', /* 专家数据 */
            name: 'projectdata',
            component: () => import(/* webpackChunkName: "about" */ './views/shuju/projectData.vue') },
          { path: 'livedata', /* 直播数据 */
            name: 'livedata',
            component: () => import(/* webpackChunkName: "about" */ './views/shuju/liveData.vue') }]
      }, {
        path: 'zhiboindex',
        name: 'zhiboindex',
        redirect: '/zhiboindex/index',
        component: () => import(/* webpackChunkName: "about" */ './views/zhibo/index.vue'),
        children: [
          { path: 'index',
            name: 'index',
            component: () => import(/* webpackChunkName: "about" */ './views/zhibo/zhiboindex.vue')
          }, { path: 'zhibo1', /* 直播1 */
            name: 'zhibo1',
            component: () => import(/* webpackChunkName: "about" */ './views/zhibo/zhibo1.vue')
          }, {
            path: 'zhibo2', /* 直播2 */
            name: 'zhibo2',
            component: () => import(/* webpackChunkName: "about" */ './views/zhibo/zhibo2.vue')
          }
        ]
      }, {
        path: 'askindex', /* 问问列表 */
        name: 'askindex',
        redirect: '/askindex/index',
        component: () => import(/* webpackChunkName: "about" */ './views/ask/index.vue'),
        children: [
          { path: 'index',
            name: 'index',
            component: () => import(/* webpackChunkName: "about" */ './views/ask/askManagement.vue')
          }
        ]
      }, {
        path: 'projectindex', /* 专题列表 */
        name: 'projectindex',
        redirect: '/projectindex/index',
        component: () => import(/* webpackChunkName: "about" */ './views/project/index.vue'),
        children: [
          { path: 'index', /* 专题列表首页 */
            name: 'index',
            component: () => import(/* webpackChunkName: "about" */ './views/project/projecthome.vue')
          }, { path: 'project', /* 编辑专题 */
            name: 'project',
            component: () => import(/* webpackChunkName: "about" */ './views/project/project.vue')
          }
        ]
      }, {
        path: 'expertsindex', /* 专家审核 */
        name: 'expertsindex',
        redirect: '/expertsindex/index',
        component: () => import(/* webpackChunkName: "about" */ './views/experts/index.vue'),
        children: [
          { path: 'index', /* 专家审核首页 */
            name: 'index',
            component: () => import(/* webpackChunkName: "about" */ './views/experts/experts.vue')
          }, { path: 'experts', /* 审核详情 */
            name: 'experts',
            component: () => import(/* webpackChunkName: "about" */ './views/experts/ReviewDetails.vue')
          }
        ]
      }, {
        path: 'userindex', /* 用户管理 */
        name: 'userindex',
        redirect: '/userindex/index',
        component: () => import(/* webpackChunkName: "about" */ './views/user/index.vue'),
        children: [
          { path: 'index',
            name: 'index',
            component: () => import(/* webpackChunkName: "about" */ './views/user/userlist.vue')
          }
        ]
      }, {
        path: 'editindex', /* 广告管理 */
        name: 'editindex',
        redirect: '/editindex/index',
        component: () => import(/* webpackChunkName: "about" */ './views/advertising/index.vue'),
        children: [
          { path: 'index', /* 广告管理首页 */
            name: 'index',
            component: () => import(/* webpackChunkName: "about" */ './views/advertising/adverpageindex.vue')
          }, { path: 'edit', /* 编辑广告 */
            name: 'edit',
            component: () => import(/* webpackChunkName: "about" */ './views/advertising/adverlist.vue')
          }
        ]
      }, {
        path: 'classindex', /* 套课管理 */
        name: 'classindex',
        redirect: '/classindex/index',
        component: () => import(/* webpackChunkName: "about" */ './views/class/index.vue'),
        children: [
          { path: 'index', /* 套课管理首页 */
            name: 'index',
            component: () => import(/* webpackChunkName: "about" */ './views/class/classhome.vue')
          }, { path: 'class', /* 编辑套课 */
            name: 'class',
            component: () => import(/* webpackChunkName: "about" */ './views/class/classlist.vue')
          }
        ]
      }, {
        path: 'askreedbackindex', /* 用户反馈 */
        name: 'askreedbackindex',
        redirect: '/askreedbackindex/index',
        component: () => import(/* webpackChunkName: "about" */ './views/askfeedback/index.vue'),
        children: [
          { path: 'index',
            name: 'index',
            component: () => import(/* webpackChunkName: "about" */ './views/askfeedback/askfeedback.vue')
          }
        ]
      }]
    }
  ]
})
