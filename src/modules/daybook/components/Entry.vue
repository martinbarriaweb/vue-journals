<template>
    <div class="entry-container mb-3 pointer p-2" @click="$router.push({ name:'entry', params: { id: entry.id } })">
        <!-- Title -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">{{entry.date}}</span>
        </div>
        <div class="entry-description">
            {{entry.text}}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        entry: {
            type: Object
        }
    },
    computed: {
        shortText(){
            return (this.entry.text.length > 30) ? this.entry.text.subString(0, 130 ) + "..." : ''
        },
    }
}
</script>
<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;
    &:hover{
        background-color: lighten($color: grey, $amount: 45%);
    }
    .entry-title{
        font-size: 12px;
    }
}
</style>