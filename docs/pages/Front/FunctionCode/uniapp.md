---
title: uniapp
date: 2023-07-11 11:03:05
permalink: /pages/8a327e/
categories:
  - pages
  - Front
  - FunctionCode
tags:
  - uniapp
---

## **记住账号密码**

```vue
<view class="remember-psw">
	<checkbox-group>
		<checkbox type="checkbox"  :checked='rememberPsw' @click="rememberPsw = !rememberPsw" color="#09CC86"/>
		</checkbox-group>
</view>
```

```js
data() {
	return {
		rememberPsw: true,
		user: {
			userName: "",
			password: ""
		}
	}
},
mounted() {
    const HBusername = uni.getStorageSync('HBusername');
    const HBpassword = uni.getStorageSync('HBpassword');
    if (HBusername && HBpassword) {
        this.user.userName = HBusername;
        this.user.password = HBpassword;
    }
},
methods: {
	submit() {
		if (this.rememberPsw) {
        	uni.setStorageSync('HBusername', this.user.userName);
        	uni.setStorageSync('HBpassword', this.user.password);
        } else {
        	uni.removeStorageSync('HBusername');
        	uni.removeStorageSync('HBpassword');
        }
	}
}

```

## 版本更新

```vue

<u-popup v-model="show" mode="center" :round="10" :closeable="true" @close="closeHandle">
	<view class="updatetips-whole">
		<view class="updatetips">
			<view>
				<view class="updatetips-head">
					<image src="../static/logo.png"></image>
					<view style="margin-top: 15rpx"> 发现新版本 V{{ version }} </view>
				</view>
					<u-line-progress :striped="true" v-if="isProgress" :percent="progress" activeColor="#1E57C4" :showText="false" height="20"></u-line-progress>
				</view>
					<view class="updatetips-btn-disable" v-if="isProgress">立即更新</view>
					<view class="updatetips-btn" v-else @click="downloadBtn()">立即更新</view>
				</view>
			</view>
</u-popup>
```

```js
data() {
	return {
        progress: 0,
        isProgress: false,
        show: false,
        downloadUrl: "下载链接",
        version: null,
	}
},
onLoad: function() {
	getConfig().then((res) => {
		// #ifdef APP-PLUS
		plus.runtime.getProperty(plus.runtime.appid, (appInfo) => {
            this.version = appInfo.version;
            //res.msg返回的版本号 101
            if (res.msg > appInfo.versionCode) {
                this.versionFlag = true;
                this.show = true;
            } else {
                this.versionFlag = false;
            }
		});
	// #endif
	})
},
methods: {
	downloadBtn() {
		this.isProgress = true;
		const downloadTask = uni.downloadFile({
			url: this.downloadUrl,
			success: (res) => {
				// #ifdef APP-PLUS
				plus.runtime.install(
					res.tempFilePath, {
						force: true,
					},
					function(_res) {
						plus.runtime.restart();
					}
				);
			   // #endif
			},
			fail: (err) => {
                uni.$u.toast("下载失败");
            },
		})
		// 查看下载进度
        downloadTask.onProgressUpdate((res) => {
        	this.progress = res.progress;
        });
	}
}
```

```css
.updatetips-whole {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 600rpx;
}

.updatetips {
    position: relative;
    width: 80%;
    min-height: 100rpx;
    background-color: #fff;
    border-radius: 20rpx;
}

.updatetips-head {
    width: 100%;
    height: 220rpx;
    margin-top: 60rpx;
    display: flex;
    // justify-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;
}

.updatetips-head>image {
    width: 150rpx;
    height: 150rpx;
}

.updatetips-version {
    position: absolute;
    top: 30rpx;
    left: 50rpx;
    color: #fff;
    font-size: 40rpx;
}

.updatetips-content {
    width: 80%;
    min-height: 100rpx;
    margin: 40rpx auto;
}

.updatetips-btn-disable {
    height: 120rpx;
    line-height: 120rpx;
    text-align: center;
    color: #e6e6e6;
}

.updatetips-btn {
    height: 120rpx;
    line-height: 120rpx;
    text-align: center;
    font-size: 32rpx;
    color: #1e57c4;
    font-weight: 600;
}

.updatetips-btn::before {
    content: "";
    width: 85%;
    height: 1px;
    background-color: #e6e6e6;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

## 视频播放

```vue
<view class="video-box">
   <video
       id="myVideo"
       :src="videoUrl"
       :initial-time="watchTime"
       :poster="posterUrl"
       controls
       enable-progress-gesture
       show-progress
       @timeupdate="timeupdate"
       @ended="onfinish"
       @pause="pauseChange"
       >
    </video>
 </view>
```

```js
data() {
	return {
		videoUrl: "链接地址",
		watchTime: null, //初始化时长
		posterUrl: "封面",
		
	}
},
method: {
	timeupdate(e) {
		// e.detail.currentTime 当前播放时长
		// e.detail.duration 总时长
	},
	// 视频播放完成
	onfinish() {},
	// 视频暂停
	pauseChange() {},
}
```

## 动态配置标题栏

```js
onLoad(e) {
	uni.setNavigationBarTitle({
		title: '标题'
	});
}
```

## 滑倒底部请求数据

```js
data() {
	return {
		page: {
       		pageSize: 15,
        	pageNum: 1,
        },
        tableList: [],
        hasMore: true,
	}
},
onReachBottom() {
	this.handleTolower();
},
methods: {
	handleTolower() {
    	// 1、修改参数 skip +=limit 2、重新发送请求 3、数据叠加
    	if (this.hasMore) {
   	 		this.page.pageNum += 1;
    		this.getList();
    	}
	},
	getList() {
		if (res.data.records.length === 0) {
        	this.hasMore = false;
       		uni.hideLoading();
        	return;
        } //数据拼接
        this.hots = [...this.tableList, ...res.data.records];
	}
}
```

