import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    // 무조건 받아오는 화면은 아래와 같이 component 정의
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // webpackChunkName 로드하는 파일의 이름을 임의로 변경 할 수 있음.
    // webpackChunkName 을 통일 시키면 파일을 함께 로드함.
    // (연관 있는 파일들을 묶으면 유용하다)
    // webpackPrefetch 사용시 미리 캐시에 저장하여 빠른 랜더링 가능.
    // (꼭 방문하는 페이지가 아니라면 Prefetch하지 않는것이 낫다)
    component: () =>
      import(
        /* webpackChunkName: "about", webpackPrefetch: ture */ '../views/AboutView.vue'
      )
  },
  {
    path: '/databinding/stringdata',
    name: 'stringdata',
    component: () => import('../views/1_databinding/StringDataView.vue')
  },
  {
    path: '/databinding/htmldata',
    name: 'htmldata',
    component: () => import('../views/1_databinding/HtmlDataView.vue')
  },
  {
    path: '/databinding/inputdata',
    name: 'inputdata',
    component: () => import('../views/1_databinding/InputDataView.vue')
  },
  {
    path: '/databinding/selectdata',
    name: 'selectdata',
    component: () => import('../views/1_databinding/SelectDataView.vue')
  },
  {
    path: '/databinding/checkboxdata',
    name: 'checkboxdata',
    component: () => import('../views/1_databinding/CheckboxDataView.vue')
  },
  {
    path: '/databinding/radiodata',
    name: 'radiodata',
    component: () => import('../views/1_databinding/RadioDataView.vue')
  },
  {
    path: '/databinding/attributedata',
    name: 'attributedata',
    component: () => import('../views/1_databinding/AttributeDataView.vue')
  },
  {
    path: '/databinding/fordata',
    name: 'fordata',
    component: () => import('../views/1_databinding/ForView.vue')
  },
  {
    path: '/databinding/classdata',
    name: 'classdata',
    component: () => import('../views/1_databinding/ClassDataView.vue')
  },
  {
    path: '/databinding/styledata',
    name: 'styledata',
    component: () => import('../views/1_databinding/StyleDataView.vue')
  },
  {
    path: '/event/click',
    name: 'click',
    component: () => import('../views/2_event/EventClickView.vue')
  },
  {
    path: '/event/change',
    name: 'change',
    component: () => import('../views/2_event/EventChangeView.vue')
  },
  {
    path: '/event/key',
    name: 'key',
    component: () => import('../views/2_event/EventKeyView.vue')
  },
  {
    path: '/props',
    name: 'props',
    component: () => import('../views/3_props/PropsView.vue')
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: () => import('../views/4_vuex/VuexTest.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
