import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({

    routes: [{
            path: '/Movie',
            name: 'Movie',
            component: () =>
                import ('./views/Movie'),
            children: [{
                path: 'city',
                component: () =>
                    import ('./components/City.vue')
            }, {
                path: 'nowPlaying',
                component: () =>
                    import ('./components/NowPlaying.vue')
            }, {
                path: 'comingSoon',
                component: () =>
                    import ('./components/ComingSoon.vue')
            }, {
                path: 'search',
                component: () =>
                    import ('./components/Search.vue')
            }, {
                path: '/',
                redirect: '/Movie/nowPlaying'
            }]
        }, {
            path: '/',
            redirect: '/Movie'
        }, {
            path: '/cinema',
            component: () =>
                import ('./views/Cinema')
        }, {
            path: '/mine',
            component: () =>
                import ('./views/Mine')
        }

    ]
})