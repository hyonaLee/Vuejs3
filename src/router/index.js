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
    // webpackPrefetch 사용시 미리 받아와 캐시에 저장하기때문에 빠른 랜더링 가능.
    // (꼭 방문하는 페이지가 아니라면 Prefetch하지 않는것이 낫다)
    component: () =>
      import(/* webpackChunkName: "aboutPrefetch" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding/stringdata',
    name: 'stringdata',
    component: () =>
      import(
        /* webpackChunkName: "data" */ '../views/1_databinding/StringDataView.vue'
      )
  },
  {
    path: '/databinding/htmldata',
    name: 'htmldata',
    component: () =>
      import(
        /* webpackChunkName: "data" */ '../views/1_databinding/HtmlDataView.vue'
      )
  },
  {
    path: '/databinding/inputdata',
    name: 'inputdata',
    component: () =>
      import(
        /* webpackChunkName: "data" */ '../views/1_databinding/InputDataView.vue'
      )
  },
  {
    path: '/databinding/selectdata',
    name: 'selectdata',
    component: () =>
      import(
        /* webpackChunkName: "data" */ '../views/1_databinding/SelectDataView.vue'
      )
  },
  {
    path: '/databinding/checkboxdata',
    name: 'checkboxdata',
    component: () =>
      import(
        /* webpackChunkName: "data" */ '../views/1_databinding/CheckboxDataView.vue'
      )
  },
  {
    path: '/databinding/radiodata',
    name: 'radiodata',
    component: () =>
      import(
        /* webpackChunkName: "data" */ '../views/1_databinding/RadioDataView.vue'
      )
  },
  {
    path: '/databinding/attributedata',
    name: 'attributedata',
    component: () =>
      import(
        /* webpackChunkName: "data" */ '../views/1_databinding/AttributeDataView.vue'
      )
  },
  {
    path: '/databinding/fordata',
    name: 'fordata',
    component: () =>
      import(
        /* webpackChunkName: "data" */ '../views/1_databinding/ForView.vue'
      )
  },
  {
    path: '/databinding/classdata',
    name: 'classdata',
    component: () =>
      import(
        /* webpackChunkName: "data" */ '../views/1_databinding/ClassDataView.vue'
      )
  },
  {
    path: '/databinding/styledata',
    name: 'styledata',
    component: () =>
      import(
        /* webpackChunkName: "data" */ '../views/1_databinding/StyleDataView.vue'
      )
  },
  {
    path: '/event/click',
    name: 'click',
    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch: ture */ '../views/2_event/EventClickView.vue'
      )
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
  },
  {
    path: '/inputfile',
    name: 'inputfile',
    component: () => import('../views/5_func/InputFile.vue')
  },
  {
    path: '/infiniteScroll',
    name: 'infiniteScroll',
    component: () => import('../views/5_func/InfiniteScroll.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/5_func/Login.vue')
  },
  {
    path: '/kakao',
    name: 'kakao',
    component: () => import('../views/5_func/KaKaoLogin.vue')
  },
  {
    path: '/kakaoSuccess',
    name: 'kakaoSuccess',
    component: () => import('../views/5_func/KaKaoLoginSuccess.vue')
  },
  {
    path: '/naver',
    name: 'naver',
    component: () => import('../views/5_func/NaverLogin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
