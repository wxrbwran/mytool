<template>
 <a-layout style="min-height: 100vh">
    <a-layout-sider theme="light" v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu
        id="dddddd"
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        @click="handleClick"
      >
    <a-sub-menu key="tool" @titleClick="titleClick">
      <template #title>
        <span>
          <pie-chart-outlined />
          <span>工具列表</span>
        </span>
      </template>
      <a-menu-item key="video">
        
        视频处理</a-menu-item>
     
    </a-sub-menu>
    <a-sub-menu key="help">
      <template #title>
        <span>
           <desktop-outlined />
          <span>帮助</span>
        </span>
      </template>
      <a-menu-item key="doc">
       文档</a-menu-item>
    
    </a-sub-menu>
  </a-menu>
    </a-layout-sider>
    <a-layout>
      <!-- <a-layout-header style="background: #fff; padding: 0" /> -->
      <a-layout-content style="margin: 16px">
        <!-- <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb> -->
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px', height: '100%' }">
         <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        @Author 吴晓然
      </a-layout-footer>
    </a-layout>
  </a-layout>

<div >
</div>
  
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useRouter } from "vue-router";
import {
  PieChartOutlined,
  DesktopOutlined,
} from '@ant-design/icons-vue';
export default defineComponent({
  name: "App",
  setup(props, context) {
    const selectedKeys = ref<string[]>(['doc']);
    const openKeys = ref<string[]>(['help']);
    const router = useRouter();
    const handleClick = (e: Event) => {
      console.log('click', e);
      const path = e.key
       if (router.currentRoute.value.path !== path) {
        router.push(path);
      }
    };
    const titleClick = (e: Event) => {

      console.log('titleClick', e);
    };
    watch(
      () => openKeys,
      val => {
        console.log('openKeys', val);
      },
    );
    return {
      selectedKeys,
      openKeys,

      handleClick,
      titleClick,
    };
  },
  components: {
    PieChartOutlined,
    DesktopOutlined,
  },
});
</script>

<style>
</style>