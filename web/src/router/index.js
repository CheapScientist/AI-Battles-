import { createRouter, createWebHistory } from 'vue-router'
import PKIndexView from "../views/pk/PKIndexView"
import RecordIndexView from "../views/record/RecordIndexView"
import RankedlistIndexView from "../views/ranklist/RankedlistIndexView"
import UserBotIndexView from "../views/user/bot/UserBotIndexView"
import NotFound from "../views/error/NotFound"

const routes = [
  {
    path: "/",
    name: "home",
    component: PKIndexView,
  },
  {
    path: "/pk/", 
    name: "pk_index",
    component: PKIndexView,
  },
  {
    path: "/record/", 
    name: "record_index",
    component: RecordIndexView,
  },
  {
    path: "/rankedlist/", 
    name: "rankedlist_index",
    component: RankedlistIndexView,
  },
  {
    path: "/404/", 
    name: "404",
    component: NotFound,
  },
  {
    path: "/userbotindexview/", 
    name: "user_bot",
    component: UserBotIndexView,
  },
  {
    path: "/:catchAll(.*)",
    name: "all_others",
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
