<template>
  <div id="wrapper">
    <div>
      <div class="left-side">
        <span class="title">欢迎使用node-tool</span>
      </div>
      <div class="right-side">
        <div class="doc">
          <button
            @click="open('https://simulatedgreg.gitbooks.io/electron-vue/content/')"
          >Read the Docs</button>
          <button class="alt" @click="open('https://electron.atom.io/docs/')">Electron</button>
          <button class="alt" @click="open('https://vuejs.org/v3/guide/')">Vue.js</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'doc',
  methods: {
    open(link) {
      window.open(link);
    },
  },
};
</script>

<style>

#wrapper {
  background: radial-gradient(
    ellipse at top left,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 229, 229, 0.9) 100%
  );
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 60px 80px;

}

.left-side {
  display: flex;
  flex-direction: column;
}

.welcome {
  color: #555;
  font-size: 23px;
  margin-bottom: 10px;
}

.title {
  color: #2c3e50;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 6px;
}

.title.alt {
  font-size: 18px;
  margin-bottom: 10px;
}

.doc p {
  color: black;
  margin-bottom: 10px;
}

.doc button {
  margin-bottom: 10px;
  font-size: 0.8em;
  cursor: pointer;
  outline: none;
  padding: 0.75em 2em;
  border-radius: 2em;
  display: block;
  color: #fff;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
}

.doc button.alt {
  color: #42b983;
  background-color: transparent;
}
.tools {
  margin-left: 20px;
  flex: 1 1 auto;
}
</style>
