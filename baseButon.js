const BaseButton = Vue.component('base-button', {
    props: {
        content: {
            type: String,
            required: true
        }
    },
    template: `
        <div class="button">
            {{content}}
        </div>
    `
})