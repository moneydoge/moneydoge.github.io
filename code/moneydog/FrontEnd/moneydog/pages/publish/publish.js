// pages/publish.js

const util = require('../../utils/util.js')//调用该块获取当前时间
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*命名时，为了方便记忆以及避免名字冲突，我将在快递，求助，跑腿，闲置的属性加上k,q,p,x的前缀*/
    sessionID:"847694c4-14dd-47b2-8922-facd8e379f47",/*注意与用户有关的交互都需要sessionID,初始化为永久sessionId*/
    id: '',
    x_src_of_pic: '../../images /upload.png',/*这个是选择闲置物品图片后，将闲置物品图片替换原按钮图片*/
    /*以下是快递需要上传的属性*/
    k_express_loc:'明德园test',
    k_arrive_time: '',
    k_loc:'至善园二号',
    k_num:'4',
    k_pay:'12',
    k_remark:'none',
    k_phone:'123456789',
    k_wechat:'dsbsaj',

    /*以下是求助需要上传的属性*/
    q_title:'',
    q_content:'',
    q_ending_time:'',
    q_pay:'',
    q_phone:'',
    q_wechat:'',
    
    /*以下是跑腿需要上传的属性*/
    p_title:'',
    p_content:'',
    p_ending_time:'',
    p_pay:'',
    p_phone:'',
    p_wechat:'',

    /*以下是闲置需要上传的属性*/
    x_object_name:'',
    x_content:'',
    x_ending_time:'',
    x_pay:'',
    x_phone:'',
    x_wechat:'',
   // console.log("awsl:" + util.formatTime2(new Date()))

    //日期选择器的初始数值
    startDate:'2019/01/01',
    endDate:'2019/12/31',
    selectDate:'2019/06/03',
    selectDate1: '2019/06/03',
    selectDate2: '2019/06/03',
    selectDate3: '2019/06/03'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var app = getApp();//要先getApp（）1  
    var date = new Date('2018/05/11 11:00:00');
    const session_id = wx.getStorageSync('SessionId');
    console.log("t" + session_id)
    if (session_id != null) {
      that.setData({sessionID:session_id})
    }
    else{
      that.setData({ sessionID: "847694c4-14dd-47b2-8922-facd8e379f47"})
    }
    that.setData({
      //sessionID: app.globalData.sessionID,
      //sessionID: "847694c4-14dd-47b2-8922-facd8e379f47",
      id:options.id,
      src_of_pic: '../../images/upload.png',    
      /*以下是快递需要上传的属性*/
      k_express_loc: '明德园test',
      k_arrive_time: that.data.selectDate,
      k_loc: '至善园二号',
      k_num: '4',
      k_pay: '12',
      k_remark: 'none',
      k_phone: '123456789',
      k_wechat: 'dsbsaj',

      /*以下是求助需要上传的属性*/
      q_title: '',
      q_content: '',
      q_ending_time: that.data.selectDate1,
      q_pay: '',
      q_phone: '',
      q_wechat: '',

      /*以下是跑腿需要上传的属性*/
      p_title: '',
      p_content: '',
      p_ending_time: that.data.selectDate2,
      p_pay: '',
      p_phone: '',
      p_wechat: '',   

      /*以下是闲置需要上传的属性*/
      x_object_name: '',
      x_content: '',
      x_ending_time: that.data.selectDate3,
      x_pay: '',
      x_phone: '',
      x_wechat: '',

      startDate: util.formatTime2(new Date()),
      selectDate: util.formatTime2(new Date()),
      selectDate1: util.formatTime2(new Date()),
      selectDate2: util.formatTime2(new Date()),
      selectDate3: util.formatTime2(new Date())
    })
    console.log(that.data.id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /*
    点击图片选择按钮响应，选择本地图片或者使用摄像机
  */
  choose_images: function () {
    var _this = this
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // success
        var _tempFilePaths = res.tempFilePaths;
        _this.setData({ src_of_pic: _tempFilePaths[0] })
        console.log(_tempFilePaths[0]);
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        console.log(JSON.stringify(res));
      },
      fail: function () {
        // fail
        
      },
      complete: function () {
        // complete
        //选择成功则更新物品图片
       
      }
    })
  },
  //获取快递输入的快递点
  k_express_locInput: function (e) {
    this.setData({
      k_express_loc: e.detail.value
    })
  },
  //获取快递输入的快递件数
  k_numInput: function (e) {
    this.setData({
      k_num: e.detail.value
    })
  },
  //获取快递输入的快递送达地址
  k_locInput: function (e) {
    this.setData({
      k_loc: e.detail.value
    })
  },
  //获取快递输入的快递送达时间
  k_arrive_timeInput2: function (e) {
    this.setData({
      k_arrive_time: e.detail.value
    })
  },
  //获取快递输入的快递送达报酬
  k_payInput: function (e) {
    this.setData({
      k_pay: e.detail.value
    })
  },
  //获取快递输入的快递发布人微信号
  k_wechatInput: function (e) {
    this.setData({
      k_wechat: e.detail.value
    })
  },
  //获取快递输入的快递发布人手机号
  k_phoneInput: function (e) {
    this.setData({
      k_phone: e.detail.value
    })
  },
  //获取快递输入的快递发布人备注
  k_remarkInput: function (e) {
    this.setData({
      k_remark: e.detail.value
    })
  },

  
  //快递的属性值上传
  gotoupload: function () {
    var that = this;
    var date0 = new Date(that.data.k_arrive_time);//STRING转Date
    console.log("sessionID_test:" + that.data.sessionID)
    console.log("daodashijian:" + that.data.k_arrive_time)
    wx.request({
      url: "https://moneydog.club:3030/Create/Expressage",
      header: { sessionId: that.data.sessionID.toString(), "Content-Type": "application/x-www-form-urlencoded"},//请求时要加上sessionID
      method: "POST",
      data: {
        express_loc: that.data.k_express_loc,
        //2018/9/21 14:58:43
       // arrive_time: '2019/04/29 11:10:01',保留此行是为了保留date格式的时间
        arrive_time: date0,
        loc: that.data.k_loc,
        num: that.data.k_num,
        pay: that.data.k_pay,
        remark: that.data.k_remark,
        phone: that.data.k_phone,
        wechat: that.data.k_wechat,
      },
      
      success: function (res) {
        console.log("s" + that.data.sessionID);
        console.log("快递:" + res.data);
        wx.showToast({
          title: '快递发布成功',
          icon: 'success',
          duration: 2000,
          success: function () {
            setTimeout(function () {
              //要延时执行的代码
              wx.switchTab({
                url: '../home/home'
              })
            }, 2000) //延迟时间
          }
        })
      },
    })
  },

  //获取求助输入的信息标题
  q_titleInput: function (e) {
    this.setData({
      q_title: e.detail.value
    })
  },
  //获取求助输入的信息内容
  q_contentInput: function (e) {
    this.setData({
      q_content: e.detail.value
    })
  },
  //获取求助输入的报酬信息
  q_payInput: function (e) {
    this.setData({
      q_pay: e.detail.value
    })
  },
  //获取求助输入的发布人微信号
  q_wechatInput: function (e) {
    this.setData({
      q_wechat: e.detail.value
    })
  },
  //获取求助输入的发布人手机号
  q_phoneInput: function (e) {
    var _this = this;
    this.setData({
      q_phone: e.detail.value
    })
  },

  //求助的属性值上传
  gotodeupload2: function () {
    var that = this;
    var date1 = new Date(that.data.q_ending_time);//STRING转Date
    console.log("q_ending_time:"+that.data.q_ending_time);
    wx.request({
      url: "https://moneydog.club:3030/Create/For_help",
      header: { sessionId: that.data.sessionID, "Content-Type": "application/x-www-form-urlencoded"},//请求时要加上sessionID
      method: "POST",
      data: {
        title: that.data.q_title,
        content: that.data.q_content,
        ending_time: date1,
        pay: that.data.q_pay,
        phone: that.data.q_phone,
        wechat: that.data.q_wechat,
      },
      success: function (res) {
        wx.showToast({
          title: '求助发布成功',
          icon: 'success',
          duration: 2000,
          success: function () {
            setTimeout(function () {
              //要延时执行的代码
              wx.switchTab({
                url: '../home/home'
              })
            }, 2000) //延迟时间
          }
        })
        console.log("求助返回：" + res.data);
        console.log(that.data.q_title);
        console.log(that.data.q_content);
        console.log(that.data.q_ending_time);
        console.log(that.data.q_pay);
        console.log(that.data.q_phone);
        console.log(that.data.q_wechat);
      },
    })
  },

  //获取跑腿输入的信息标题
  p_titleInput: function (e) {
    this.setData({
      p_title: e.detail.value
    })
  },
  //获取跑腿输入的信息内容
  p_contentInput: function (e) {
    this.setData({
      p_content: e.detail.value
    })
  },
  //获取跑腿输入的报酬信息
  p_payInput: function (e) {
    this.setData({
      p_pay: e.detail.value
    })
  },
  //获取跑腿输入的发布人微信号
  p_wechatInput: function (e) {
    this.setData({
      p_wechat: e.detail.value
    })
  },
  //获取跑腿输入的发布人手机号
  p_phoneInput: function (e) {
    this.setData({
      p_phone: e.detail.value
    })
  },

  //跑腿的属性值上传
  gotodeupload3: function () {
    var that = this;
    var date2 = new Date(that.data.p_ending_time);//STRING转Date
    console.log("p_ending_time" + that.data.p_ending_time);
    wx.request({
      url: "https://moneydog.club:3030/Create/Errand",
      header: { sessionId: that.data.sessionID, "Content-Type": "application/x-www-form-urlencoded"},//请求时要加上sessionID
      method: "POST",
      data: {
        title: that.data.p_title,
        content: that.data.p_content,
        ending_time: date2,
        pay: that.data.p_pay,
        phone: that.data.p_phone,
        wechat: that.data.p_wechat,
      },
      success: function (res) {
        console.log("跑腿返回：" + res.data)
        if(res.data.errcode == 1){
          wx.showToast({
            title: '跑腿发布成功',
            icon: 'success',
            duration: 2000,
            success: function () {
              setTimeout(function () {
                //要延时执行的代码
                wx.switchTab({
                  url: '../home/home'
                })
              }, 2000) //延迟时间
            }
          })
        } else if (res.data.errcode == 2){
          wx.showToast({//服务器返回值为errcode等于2时，并不会接受数据，不用担心其错误数据显示在列表中
            title: "余额不足，请充值！",
            icon: 'none',
            duration: 2000,
          })
        } else if(res.data.status == 400){//bad request,一般是报酬输入不是int类型
          wx.showToast({//服务器返回值为errcode等于2时，并不会接受数据，不用担心其错误数据显示在列表中
            title: "报酬应为整数！请修改！",
            icon: 'none',
            duration: 2000,
          })
        }
        console.log(res.data);//应该是只有扣钱的需要验证
        console.log(that.data.p_title);
        console.log(that.data.p_content);
        console.log(that.data.p_ending_time);
        console.log(that.data.p_pay);
        console.log(that.data.p_phone);
        console.log(that.data.p_wechat);
      },
    })
  },

  //获取闲置输入的物品名称
  x_object_nameInput: function (e) {
    this.setData({
      x_object_name: e.detail.value
    })
  },
  //获取闲置输入的具体描述
  x_contentInput: function (e) {
    this.setData({
      x_content: e.detail.value
    })
  },
  //获取跑腿输入的信息截止时间
  x_ending_timeInput: function (e) {
    this.setData({
      x_ending_time: e.detail.value
    })
  },
  //获取跑腿输入的报酬信息
  x_payInput: function (e) {
    this.setData({
      x_pay: e.detail.value
    })
  },
  //获取跑腿输入的发布人微信号
  x_wechatInput: function (e) {
    this.setData({
      x_wechat: e.detail.value
    })
  },
  //获取跑腿输入的发布人手机号
  x_phoneInput: function (e) {
    this.setData({
      x_phone: e.detail.value
    })
  },


//以下是闲置的物品的数据上传
  gotodeupload4: function () {
//boolean is_continue = false;
    var that = this;
    var date3 = new Date(that.data.x_ending_time);//STRING转Date
    console.log("x_ending_time" + that.data.x_ending_time);
    console.log("src1:"+ that.data.src_of_pic);
    wx.uploadFile({
      url: 'http://119.23.218.7:8080/File/Upload',
      filePath: that.data.src_of_pic,
      name: "img",
      header:{
        sessionId: that.data.sessionID,
        "Content-Type": "multipart/form-data",
      },
      formData:{
        "user":"test"
      },
      success:function (res){
        console.log("return:"+ res.data);//这个有返回也需要判定验证
        var data_t = JSON.parse(res.data);
        var res_t = JSON.parse(res.statusCode);
        console.log(res_t, "resp:" + data_t.errcode);
        if (data_t.errcode == 1){
          var image_url_t = JSON.parse(res.data);
          var url = 'http://119.23.218.7:8080/' + image_url_t.imageUrl;
          console.log("上传的url:" + url);
          wx.request({
            url: "https://moneydog.club:3030/Create/Second_hand",
            header: { sessionId: that.data.sessionID, "Content-Type": "application/x-www-form-urlencoded"},//请求时要加上sessionID
            method: "POST",
            data: {
              object_name: that.data.x_object_name,
              content: that.data.x_content,
              ending_time: date3,
              pay: that.data.x_pay,
              phone: that.data.x_phone,
              wechat: that.data.x_wechat,
              photo_url: url
            },
            success: function (res) {
              wx.showToast({
                title: '闲置发布成功',
                icon: 'success',
                duration:2000,
                success:function(){
                  setTimeout(function () {
                    //要延时执行的代码
                    wx.switchTab({
                      url: '../home/home'
                    })
                  }, 2000) //延迟时间
                }
              })
            
              console.log(that.data.x_object_name);
              console.log(that.data.x_content);
              console.log(that.data.x_ending_time);
              console.log(that.data.x_pay);
              console.log(that.data.x_phone);
              console.log(that.data.x_wechat);
            },
          })
      }else{
          wx.showToast({
            title: '出现错误，请检查！',
            icon: 'none',
            duration: 2000,
          })
      }
      }
    })
   
    
  },
  dateChange: function (e) {
    this.setData({
      selectDate:e.detail.value,
      k_arrive_time: e.detail.value
    });
    
  },
  dateChange1: function (e) {
    this.setData({
      selectDate1: e.detail.value,
      q_ending_time: e.detail.value
    });

  },
  dateChange2: function (e) {
    this.setData({
      selectDate2: e.detail.value,
      p_ending_time: e.detail.value
    });

  },
  dateChange3: function (e) {
    this.setData({
      selectDate3: e.detail.value,
      x_ending_time: e.detail.value
    });

  }

})