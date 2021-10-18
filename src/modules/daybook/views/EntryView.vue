<template>
    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-success fs-3 fw-bold">{{entry.date}}</span>
            </div>
            <div>
                <button class="btn btn-danger">Borrar <i class="fa fa-trash-alt"></i></button>
                <button class="btn btn-primary">Subir foto <i class="fa fa-upload"></i></button>
            </div>
        </div>

        <hr>
        <div class="d-flex flex-column px-3 h-75">
            <textarea placeholder="Que sucedio hoy" v-model="entry.text"></textarea>
        </div>
        <Fab :icon="'fa-save'" @click="saveEntry"></Fab>
        <img src="https://www.collinsdictionary.com/images/full/island_526092568_1000.jpg" alt="entry" class="img-thumbnail">
    </template>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapGetters } from 'vuex'
export default {
    data(){
        return {
            entry: null,
        }
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    components: {
        Fab: defineAsyncComponent( () => import('../components/Fab.vue') )
    },
    methods: {
        loadEntry(){
            const entry = this.getEntryById(this.id);
            if(!entry) return this.$router.push({ name: 'no-entry' })
            this.entry = entry;
        },
        saveEntry(){
            console.log("adsas");
        }
    },
    created(){
        this.loadEntry();
    },
    computed: {
        ...mapGetters('journal', ['getEntryById']),
    },
    watch: {
        id(){
            this.loadEntry();
        }
    }
}
</script>

<style lang="scss" scoped>
textarea{
    font-size: 20px;
    border: none;
    height: 100%;
    &:focus{
        outline: none;
    }
}
img{
    width: 200px;
    position: fixed;
    bottom: 140px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>