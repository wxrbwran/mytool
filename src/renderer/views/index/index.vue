<template>
    <div class="main">
      <a-button>111</a-button>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import relPath from '@/utils/tools'

    export default defineComponent({
        components:{
        
        },
        data: () => ({

        }),
        created() {
        },
        mounted() {
            console.log('rel', relPath)
        },
        methods: {

        },
    });
</script>

<style scoped lang="scss">
    .home {
        overflow: hidden auto;

        .card {
            background-color: #fff;
            border-radius: 5px;
            margin-bottom: 15px;

            &--last {
                margin-bottom: 0;
            }
        }
    }
</style>
