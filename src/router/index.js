import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstChild from '@/components/FirstChild'
import SecondView from '@/components/SecondView'
import SecondViewsFirstChild from '@/components/SecondViewsFirstChild'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        secondView: SecondView
      },
      children: [
        {
          path: '/FirstChild',
          component: FirstChild,
          alias: '/sss',
          props: {
            message: 'you are my son'
          }
        },
        {
          path: '/SecondViewsFirstChild',
          component: SecondViewsFirstChild
        }
      ]
    }
  ]
})
