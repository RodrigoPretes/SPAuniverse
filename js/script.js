import { Router } from './router.js'

const router = new Router()
router.add('/', "")
router.add('/oUniverso.html', "/pages-html/oUniverso.html")
router.add("/Exploracao.html", "/pages-html/Exploracao.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

