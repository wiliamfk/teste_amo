import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore('cart', () => {
    const cartItems = ref([]);
    const totalVle = ref(0);
    const totalQt = ref(0);

    function addItem(item) {
        const existingItem = cartItems.value.find(i => i.id === item.id);
        if(existingItem) {
            existingItem.quantity += 1;
            totalVle.value += item.price;
            totalQt.value += 1;
        } else {
            cartItems.value.push({...item, quantity: 1});
            totalVle.value += item.price;
            totalQt.value += 1;
        }
        // console.log(`vlr: ${totalVle.value}, qt: ${totalQt.value}`);
    }

    function removeItem(itemId) {
        const index = cartItems.value.findIndex(i => i.id === itemId);
        if (index !== -1) {
            const auxItem = cartItems.value.splice(index, 1)[0];
            totalVle.value -= auxItem.price;
            if(totalVle.value < 0) totalVle.value = 0;
            totalQt.value -= 1;
        }
        // console.log(`vlr: ${totalVle.value}, qt: ${totalQt.value}`);
    }

    function updateQuantity(itemId, addQtd) {
        const item = cartItems.value.find(i => i.id === itemId);
        if (item) {
            if (addQtd) {
                item.quantity += 1;
                totalVle.value += item.price;
                totalQt.value += 1;
            } else {
                item.quantity -= 1;
                if (item.quantity > 0) {
                    totalVle.value -= item.price;
                    totalQt.value -= 1;
                }

                if (item.quantity <= 0) {
                    removeItem(itemId);
                }
            }
            // console.log(`vlr: ${totalVle.value}, qt: ${totalQt.value}`);
        }
    }

    return {cartItems, totalVle, totalQt, addItem, removeItem, updateQuantity};
});