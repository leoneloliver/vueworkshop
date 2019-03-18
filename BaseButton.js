const BaseButton = Vue.component('base-button', {
    props: {
        content: {
            type: String,
            required: true
        },
        enabled: {
            type: Boolean,
            default: true,
            required: false
        }
    },
    data() {
        return {
            loading: false
        }

    },
    methods: {
         click() {
            if (!this.enabled) return;

            this.loading = true;
            setTimeout(() => {
                this.$emit('clicked');
                this.loading = false;
            }, 1000)
        }
    },
    computed: {
        button_class() {
            return {
                'disabled-background': !this.enabled,
                'loading-background': this.loading
            }
        }
    },
    template: `
        <div class="button" @click="click" :class="button_class">
            {{content}}
        </div>
    `
})