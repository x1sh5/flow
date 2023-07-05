// components/cardinfo/cardinfo.ts
import Department from '../../common/common.js';
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //任务信息，结构参看https://www.wangyan.net/api/Assignment/返回结果中的data.$values
    task:{
      type:Object,
      value:{}
    },
    //颜色代码
    colorid:{
      type:String,
      value:"1"
    },
    //可编辑组件（input,textarea等）是否能编辑，
    editable:{
      type:Boolean,
      value:false//默认不能编辑
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    // 预计时间
    spendtime:"",
    _deparment:"",
    index:0,
    departments:[
     new Department(0,"建设"),
      {
        id:1,
        name:"审核"
      },
      {
        id:2,
        name:"制作"
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindPickerChange: function (e:any) {
      console.log('picker发送选择改变，携带值为', e)
      this.setData({
        index: e.detail.value
      })
    },
  },
  options:{
    styleIsolation: 'isolated'
  },
  lifetimes:{
    attached:function (){
      //console.log("attached")
        this.setData({
          spendtime:(this.properties.task.presumedtime/100).toFixed(2),
        })
    },
    // ready:function(){
    //   console.log("ready")
    //   //properties或者data中属性只能被setData更新
    //   //this.properties.spendtime=this.properties.task.presumedtime
    //   this.setData({
    //     spendtime:(this.properties.task.presumedtime/100).toFixed(2),
    //   })
    // },
    created:function(){
      //console.log("created")
      //this.properties.spendtime=this.properties.task.presumedtime
    }
  }
})