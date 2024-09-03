const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: false,
            inventory: 5,
            onSale: false
        }
    }
})
