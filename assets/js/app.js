const { createApp, ref } = Vue

createApp({
    setup() {
        // State
        const myName = ref("Sebastian");
        const myAge = ref("27");
        const favColor = ref("Blue");

        setTimeout(() => favColor.value = "Rød", 1000)

        console.log(favColor.value)
        return {
            myName,
            myAge,
            favColor
        }

    }
}).mount("#app")

const person = {
    name: "Mugge",
    age: 34
}