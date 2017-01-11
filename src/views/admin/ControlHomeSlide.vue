<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div>
      <div class="page-header">
        <h1>主页滑块 <small>——编辑主页滑块</small></h1>
      </div>
      <div style="background-color: #eeeeee">
        <h3>增加滑块内容</h3>
        <div style="width: 90%;margin:5%;background-color: #eeeeee">
          <h4 style="display: inline;margin-right: 30px">类别</h4>
          <select style="display: inline; width:100px;" v-model="selecttype">
            <option v-for="option in type" v-bind:value="option.value">
              {{ option.text }}
            </option>
          </select>
          <h4 style="display: inline;margin-left: 30px;margin-right: 30px">页数</h4>
          <select style="display: inline; width:50px;" v-model="selectedpage">
            <option v-for="option in maxpage" v-bind:value="option" >
              {{ option }}
            </option>
          </select>
          <h4 style="display: inline;margin-left: 80px;margin-right: 30px">标题</h4>
          <select style="display: inline; width:300px;" v-model="selecteditem">
            <option v-for="option in contentList" v-bind:value="option.id">
              {{ option.title }}
            </option>
          </select>
          <input type="text" v-model="addslideurlinput" class="form-control" placeholder="主页显示的大图片链接" style="margin-top: 30px">
          <h4>显示效果</h4>
          <div style="text-align: center">
            <img class="img-thumbnail" :src="addslideurlinput" alt="" width="50%">
          </div>

          <button type="button" class="btn btn-default" @click="addSlide(item)" style="margin-top: 30px;margin-left: 70%;margin-bottom: 20px;width: 200px">添加滑块</button>
        </div>

      </div>
      <!-- 添加 -->
      <!--
      <div class="btn-group">
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
          增加主页滑块 <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" role="menu" style="width: 500px;">
          <div class="input-group" style="width: 80%;margin-left: 10%;">
            <span class="input-group-addon">标题</span>
            <input type="text" class="form-control" placeholder="对象">
          </div>
          <li class="divider"></li>
          <div class="input-group" style="width: 80%;margin-left: 10%">
            <span class="input-group-addon">简介</span>
            <input type="text" class="form-control" placeholder="滑块大图">
          </div>
          <li class="divider"></li>
          <div class="input-group" style="width: 100%;text-align: center">
            <button type="button" class="btn btn-default" @click="addSlide()">提交</button>
          </div>
          <div>
            <select>
              <option value ="volvo">Volvo</option>
              <option value ="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>

          </div>
        </ul>
      </div>
      -->
      <table width="100%" class="table table-striped" style="margin-top: 30px">
        <thead>
        <tr>
          <th>标题</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in this.slidelist">
          <td width="80%">{{ item.title }}</td>
          <td>
            <!-- 删除 -->
            <button type="button" class="btn btn-default" @click="delSlide(item)">删除</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default {
    data: function() {
      return {valuedata: '',
        addslideurlinput: '',
        selecttype: 'activity',
        type: [
          {text: '动态', value: 'activity'},
          {text: '科研', value: 'science'},
          {text: '项目', value: 'project'}
        ],
        selectedpage: 1,
        selecteditem: ''
      }
    },
    computed: {
        slidelist: function () {
          return this.$store.state.homeslide;
        },
        maxpage: function () {
          return Number(this.$store.state.sumpage);
        },
        contentList: function () {
          if(this.$data.selecttype === 'activity') {
            return this.$store.state.listActivity;
          }else if(this.$data.selecttype === 'science') {
            return this.$store.state.listScience;
          }else if(this.$data.selecttype === 'project') {
            return this.$store.state.listProject;
          }
        }
    },
    methods: {
        addSlide: function () {
          this.$store.dispatch('ADD_HOME_SLIDE_LIST',
            {id: this.$data.selecteditem,
              classify: this.$data.selecttype,
              picture: this.$data.addslideurlinput});
        },
        delSlide: function (item) {
          this.$store.dispatch('DEL_HOME_SLIDE_LIST', {id: item.id});
          console.log("del " + item.id)
        }
    },
    watch: {
      selecttype: function (newv, oldv) {
        this.$data.selectedpage = 1;
        if(this.$data.selecttype === 'activity') {
          this.$store.dispatch('FETCH_LIST_ACTIVITY', 1);
        } else if(this.$data.selecttype === 'science') {
          this.$store.dispatch('FETCH_LIST_SCIENCE', 1);
        }else if(this.$data.selecttype === 'project') {
          this.$store.dispatch('FETCH_LIST_PROJECT', 1);
        }
        this.$data.selecteditem = '';
      },

      selectedpage: function (newv, oldv) {
        if(this.$data.selecttype === 'activity') {
          this.$store.dispatch('FETCH_LIST_ACTIVITY', newv);
        } else if(this.$data.selecttype === 'science') {
          this.$store.dispatch('FETCH_LIST_SCIENCE', newv);
        }else if(this.$data.selecttype === 'project') {
          this.$store.dispatch('FETCH_LIST_PROJECT', newv);
        }
      }
    },
    components: {
    },
    mounted() {
      this.$store.dispatch('FETCH_HOME_SLIDE_LIST');
      this.$store.dispatch('FETCH_LIST_ACTIVITY', 1);
    }
  }
</script>


<style scoped>


</style>
