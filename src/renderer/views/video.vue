<template>
  <div class="index">
    <div class="index-action">
      <div class="input-area">
        <div>
          <a-input
            class="show"
            v-model:value="path"
            placeholder="请选择文件夹路径"
          />
          <input
            class="hide"
            multiple
            webkitdirectory
            type="file"
            @change="handleFileChange"
          />
        </div>
        <a-button @click="handleVideos">处理</a-button>
      </div>
    </div>
    <div class="index-table">
      <a-table
        row-key="filename"
        border
        :columns="columns"
        :data-source="titles"
      >
        <template #filename="{ record }">
            <div @click="handleOpen(record.filedir)">{{record.filename}}</div>
        </template>
        <template #operation="{ record }">
          <a-popconfirm
            title="确定删除吗?"
            @confirm="handleDelete(record.filedir)"
          >
            <a-button type="danger">删除</a-button>
          </a-popconfirm>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script>
// import util from '../libs/util';
import video from '@/utils/video';
import {videoColumns} from '@/utils/consts'
console.log(video);
export default {
  name: 'Video',
  data() {
    return {
      path: '',
      keyword: null,
      isHidden: false,
      total: 0,
      columns: [...videoColumns, {
        title: '处理',
        dataIndex: 'operation',
        slots: { customRender: 'operation' },
      },
      ],
      titles: [],
    };
  },
  mounted() {},
  methods: {
    async handleVideos() {
      console.log('this.path', this.path);
      const res = await video.handleCheckVideo({
        path: this.path,
      });
      console.log('res', res);
      this.titles = res.list;
    },
    toggleHide() {
      this.isHidden = !this.isHidden;
    },
    handleFileChange(e) {
      console.log(e);
      // console.log(e.target.files[0].path);
      if (e.target.files[0]) {
        const path = e.target.files[0].path
        const filename = e.target.files[0].name
        console.log('path', path);
        console.log('filename', filename);

        console.log(path.split(filename)[0])
        this.path = path.split(filename)[0];
      }
    },
    handleDelete(dir) {
      console.log(dir);
      video.deleteVideo(dir);
    },
    handleOpen(dir) {
      console.log(dir);
      window.open(`file://${dir}`);
    }
   
  },
};
</script>
<style scoped lang="scss">
.input-area {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  > div {
    flex: 1 1 auto;
    position: relative;
    height: 32px;
  }
  .hide {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
  }
  .show {
    left: 0;
    top: 0;
    z-index: 0;
    position: absolute;
    opacity: 1;
  }
}

.index {
  width: 100%;
  padding: 15px;
  text-align: center;
}
.index h1 {
  height: 150px;
}
.index h1 img {
  height: 100%;
}
.index h2 {
  color: #666;
  margin-bottom: 200px;
}
.index h2 p {
  margin: 0 0 50px;
}

.index-table {
  margin-top: 10px;
}
.index-pager {
  text-align: right;
  padding: 5px 0;
  display: flex;
}
.index .ivu-row-flex {
  height: 100%;
}
</style>
