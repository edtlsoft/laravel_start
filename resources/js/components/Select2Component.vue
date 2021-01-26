<template>
    <select :id="id" :multiple="defaultSettings.multiple">
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
                defaultSettings: {
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
                this.defaultSettings.mount = newVal
                
                if( newVal ) {
                    this.mountComponent()
                };
            }
        },
        methods: {
            mountComponent: function() {
                const settings = Object.assign(this.defaultSettings, this.settings)

                $(`select#${this.id}`).select2(settings);

                $(`select#${this.id}`).on('select2:unselect', this.settings.unselect)
            },
        },
    }
</script>
