<template>
    <select :id="id" :multiple="settingsDefault.multiple">
    </select>
</template>

<script>
    export default {
        props: {
            id: {
                type: String,
                required: true,
            },
            settings: {
                type: Object,
                required: true,
            },
        },
        data() {
            return({
                settingsDefault: {
                    mount: false,
                    id: 'select2-component',
                    multiple: false,
                    theme: 'bootstrap',
                    language: "es",
                    closeOnSelect: true,
                    ajax: null,
                    minimumInputLength: 0,
                    templateResult: null,
                    templateSelection: null
                },
            })
        },
        watch: {
            'settings.mount': function(newVal) {
                this.settingsDefault.mount = newVal
                
                if( newVal ) {
                    console.log('settings.mount', newVal)
                    this.mountComponent()
                };
            }
        },
        methods: {
            mountComponent: function() {
                const settings = Object.assign(this.settingsDefault, this.settings)

                console.log(settings)

                $(`select#${this.id}`).select2(settings);

                $(`select#${this.id}`).on('select2:unselect', this.settings.unselect);
            },
        },
    }
</script>
