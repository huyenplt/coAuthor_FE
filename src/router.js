import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            // redirect: 'dashboard/basic-dashboard',
            component: () => import('@/layouts/Layout'),
            children: [
                // Components
                {
                    name: 'PaperDetail',
                    path: '/paper/:id',
                    component: () => import('@/views/pages/PaperDetail'),
                },
                {
                    name: 'AuthorDetail',
                    path: '/author/:id',
                    component: () => import('@/views/pages/AuthorDetail'),
                },

                {
                    name: 'Profile',
                    path: 'pages/profile',
                    component: () => import('@/views/pages/Profile'),
                },

                {
                    name: 'Icons',
                    path: 'pages/icons',
                    component: () => import('@/views/pages/Icons'),
                },

                {
                    name: 'Authors',
                    path: 'authors',
                    component: () => import('@/views/pages/Authors'),
                },

                {
                    name: 'Paper',
                    path: 'papers',
                    component: () => import('@/views/pages/Papers'),
                },

                {
                    name: 'CoAuthor',
                    path: 'co-author/create',
                    component: () => import('@/views/pages/CoAuthor'),
                },

                {
                    name: 'Candidate',
                    path: 'co-author/candidate',
                    component: () => import('@/views/pages/Candidate'),
                },

                {
                    name: 'LabeledCandidate',
                    path: 'co-author/labeled',
                    component: () => import('@/views/pages/CandidateLabeled'),
                },

                {
                    name: 'Measure',
                    path: 'co-author/measure',
                    component: () => import('@/views/pages/Measure'),
                },
            ]
        },

    ],
})
