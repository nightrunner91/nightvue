import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import axios from 'axios'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', redirect: '/cabinet' },

  {
    path: '/auth',
    redirect: '/auth/signin',
    name: 'Auth',
    component: () => import('../layouts/AppRouterView.vue'),
    children: [
      {
        path: '/auth/signin',
        name: 'SignIn',
        component: () => import('@/views/auth/SignIn.vue'),
        meta: {
          layout: 'AppLayoutFull',
          auth: false,
        },
      },
      {
        path: '/auth/verify',
        name: 'OtpVerification',
        component: () => import('@/views/auth/OtpVerification.vue'),
        meta: {
          layout: 'AppLayoutFull',
          auth: false,
        },
      },
      {
        path: '/auth/forgot',
        name: 'ForgotPassword',
        component: () => import('@/views/auth/ForgotPassword.vue'),
        meta: {
          layout: 'AppLayoutFull',
          auth: false,
        },
      },
      {
        path: '/auth/confirm',
        name: 'PasswordConfirm',
        component: () => import('@/views/auth/PasswordConfirm.vue'),
        meta: {
          layout: 'AppLayoutFull',
          auth: false,
        },
      },
      {
        path: '/auth/change',
        name: 'PasswordChange',
        component: () => import('@/views/auth/PasswordChange.vue'),
        meta: {
          layout: 'AppLayoutFull',
          auth: false,
        },
      },
    ],
  },

  {
    path: '/cabinet',
    redirect: '/cabinet/dashboard',
    name: 'Cabinet',
    component: () => import('../layouts/AppRouterView.vue'),
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/Dashboard.vue'),
        meta: {
          layout: 'AppLayoutDefault',
          auth: true,
        },
      },

      {
        path: 'user',
        name: 'User',
        redirect: 'user/account',
        component: () => import('../layouts/AppRouterView.vue'),
        children: [
          {
            path: 'account',
            name: 'Account',
            component: () => import('@/views/profile/Account.vue'),
            meta: {
              layout: 'AppLayoutDefault',
              auth: true,
            },
          },
          {
            path: 'settings',
            name: 'Settings',
            component: () => import('@/views/profile/Settings.vue'),
            meta: {
              layout: 'AppLayoutDefault',
              auth: true,
            },
          },
        ],
      },

      {
        path: 'deposit',
        name: 'Deposit',
        redirect: 'deposit/list',
        component: () => import('../layouts/AppRouterView.vue'),
        children: [
          {
            path: 'list',
            name: 'DepositList',
            component: () => import('@/views/deposit/DepositList.vue'),
            meta: {
              layout: 'AppLayoutDefault',
              auth: true,
            },
          },
          {
            path: 'new',
            name: 'DepositNew',
            component: () => import('@/views/deposit/DepositNew.vue'),
            meta: {
              layout: 'AppLayoutWizard',
              auth: true,
            },
          },
          {
            path: 'instructions',
            name: 'DepositInstructions',
            component: () => import('@/views/deposit/DepositInstructions.vue'),
            meta: {
              layout: 'AppLayoutWizard',
              auth: true,
            },
          },
          {
            path: 'confirmation',
            name: 'DepositConfirmation',
            component: () => import('@/views/deposit/DepositConfirmation.vue'),
            meta: {
              layout: 'AppLayoutWizard',
              auth: true,
            },
          },
          {
            path: 'success',
            name: 'DepositSuccess',
            component: () => import('@/views/deposit/DepositSuccess.vue'),
            meta: {
              layout: 'AppLayoutWizard',
              auth: true,
            },
          },
        ]
      },

      {
        path: 'withdraw',
        name: 'Withdraw',
        redirect: 'withdraw/list',
        component: () => import('../layouts/AppRouterView.vue'),
        children: [
          {
            path: 'list',
            name: 'WithdrawList',
            component: () => import('@/views/withdraw/WithdrawList.vue'),
            meta: {
              layout: 'AppLayoutDefault',
              auth: true,
            },
          },
          {
            path: 'new',
            name: 'WithdrawNew',
            component: () => import('@/views/withdraw/WithdrawNew.vue'),
            meta: {
              layout: 'AppLayoutWizard',
              auth: true,
            },
          },
          {
            path: 'confirm',
            name: 'WithdrawConfirm',
            component: () => import('@/views/withdraw/WithdrawConfirm.vue'),
            meta: {
              layout: 'AppLayoutWizard',
              auth: true,
            },
          },
          {
            path: 'success',
            name: 'WithdrawSuccess',
            component: () => import('@/views/withdraw/WithdrawSuccess.vue'),
            meta: {
              layout: 'AppLayoutWizard',
              auth: true,
            },
          },
        ]
      },

      {
        path: 'transfer',
        name: 'Transfer',
        redirect: 'transfer/list',
        component: () => import('../layouts/AppRouterView.vue'),
        children: [
          {
            path: 'list',
            name: 'TransferList',
            component: () => import('@/views/transfer/TransferList.vue'),
            meta: {
              layout: 'AppLayoutDefault',
              auth: true,
            },
          },
          {
            path: 'beneficiary',
            name: 'TransferBeneficiary',
            component: () => import('@/views/transfer/TransferBeneficiary.vue'),
            meta: {
              layout: 'AppLayoutWizard',
              auth: true,
            },
          },
          {
            path: 'amount',
            name: 'TransferAmount',
            component: () => import('@/views/transfer/TransferAmount.vue'),
            meta: {
              layout: 'AppLayoutWizard',
              auth: true,
            },
          },
          {
            path: 'confirm',
            name: 'TransferConfirm',
            component: () => import('@/views/transfer/TransferConfirm.vue'),
            meta: {
              layout: 'AppLayoutWizard',
              auth: true,
            },
          },
          {
            path: 'confirm',
            name: 'TransferSuccess',
            component: () => import('@/views/transfer/TransferSuccess.vue'),
            meta: {
              layout: 'AppLayoutWizard',
              auth: true,
            },
          },
        ]
      },

      {
        path: 'receive',
        name: 'Receive',
        redirect: 'receive/list',
        component: () => import('../layouts/AppRouterView.vue'),
        children: [
          {
            path: 'list',
            name: 'ReceiveList',
            component: () => import('@/views/receive/ReceiveList.vue'),
            meta: {
              layout: 'AppLayoutDefault',
              auth: true,
            },
          },
          {
            path: 'beneficiary',
            name: 'ReceiveBeneficiary',
            component: () => import('@/views/receive/ReceiveBeneficiary.vue'),
            meta: {
              layout: 'AppLayoutWizard',
              auth: true,
            },
          },
          {
            path: 'amount',
            name: 'ReceiveAmount',
            component: () => import('@/views/receive/ReceiveAmount.vue'),
            meta: {
              layout: 'AppLayoutWizard',
              auth: true,
            },
          },
          {
            path: 'confirm',
            name: 'ReceiveConfirm',
            component: () => import('@/views/receive/ReceiveConfirm.vue'),
            meta: {
              layout: 'AppLayoutWizard',
              auth: true,
            },
          },
          {
            path: 'success',
            name: 'ReceiveSuccess',
            component: () => import('@/views/receive/ReceiveSuccess.vue'),
            meta: {
              layout: 'AppLayoutWizard',
              auth: true,
            },
          },
        ]
      },

      {
        path: 'reports',
        name: 'Reports',
        component: () => import('@/views/reports/ReportsList.vue'),
        meta: {
          layout: 'AppLayoutDefault',
          auth: true,
        },
      },

      {
        path: 'support',
        name: 'Support',
        component: () => import('@/views/support/Support.vue'),
        meta: {
          layout: 'AppLayoutDefault',
          auth: true,
        },
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

function consoleMonitor() {
  const logStyles = {
    danger: 'background: #FF3D00; color: white; font-size: 16px; padding: 1rem; border-radius: 6px; margin: 20px 0 20px 0;',
    get: 'background: #4CAF50; color: #343a40; padding: 3px 6px; margin-top: 10px; border-radius: 4px; font-weight: 700',
    post: 'background: #FF5722; color: #343a40; padding: 3px 6px; margin-top: 10px; border-radius: 4px; font-weight: 700',
  }

  if (process.env.VUE_APP_ENV === 'production') {
    console.log('%c✋ Warning! This is a browser feature intended for developers. If someone told you to copy and paste something here to enable a feature or "hack" someone\'s account, it is a scam and will give them access to your account.', logStyles.danger)
  }

  if (
    process.env.VUE_APP_ENV === 'development' ||
    process.env.VUE_APP_ENV === 'staging') {
    axios.interceptors.response.use(function (response) {
        console.log(`%c${response.config.method.toUpperCase()} ➡ ${response.config.baseURL}${response.config.url}`, logStyles[response.config.method])
        console.log(response.data)
      if (response.data.mobileauth) {
        store.dispatch('auth/logOut', null, { root: true })
      }
      return response
    }, function (error) {
      console.error(error)
      return Promise.reject(error)
    })
  }
}

consoleMonitor()

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)

  const userEmpty = store.state.auth.user == undefined || Object.keys(store.state.auth.user).length == 0

  if (to.meta.auth && userEmpty) {
    store.dispatch('auth/checkLogin')
    store.dispatch('user/getSettings')
  }

  if (store.state.config.menuOpened) {
    store.commit('config/TOGGLE_MENU', false)
    setTimeout(() => { next() }, 500)
  } else {
    next()
  }
})

export default router
