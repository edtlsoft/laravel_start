<template>
    <select :id="id" :multiple="multiple">
    </select>
</template>

<script>
    const select2 = require('select2');
    require('select2/dist/js/i18n/es.js');
    
    export default {
        props: {
            id: {
                type: String,
                required: true,
            },
            multiple: {
                type: Boolean,
                default: false,
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
                    theme: 'bootstrap',
                    language: "es",
                    closeOnSelect: true,
                    ajax: function() {},
                    minimumInputLength: 0,
                    templateResult: function() {},
                    templateSelection: function() {}
                },
            })
        },
        watch: {
            'settings.mount': function(newVal) {
                this.settingsDefault.mount = newVal
                
                if( newVal ) {
                    this.mountComponent()
                }
            }
        },
        methods: {
            mountComponent: function() {
                const settings = Object.assign(this.settingsDefault, this.settings)

                $(`select#${this.id}`).select2(settings);

                $(`select#${this.id}`).on('select2:unselect', this.settings.unselect);
            },
        },
    }
</script>

<style lang="scss">
    // Select2
    @import "~select2/dist/css/select2.min.css";

    // Select2 Bootstrap Theme
    @import "~select2-bootstrap-theme/dist/select2-bootstrap.min.css";
</style>