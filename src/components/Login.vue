<template>
    <div class="login_body">
        <div>
            <input class="login_text" type="text" placeholder="账号/手机号/邮箱" v-model="phone">
        </div>
        <div>
            <input class="login_text" type="password" placeholder="请输入您的密码" v-model="pwd">
        </div>
        <div class="login_btn">
            <input type="submit" value="登录" @click="okk">
        </div>
        <div class="login_link">
            <a href="#">立即注册</a>
            <a href="#">找回密码</a>
        </div>
    </div>
</template>
<script>
export default {
    name:"Login",
    data() {
        return {
            phone:'',
            pwd:'',
            zz:'/^[1][3,4,5,7,8,9][0-9]{9}$/'
        }
    },
    methods:{
        okk:function(){
            const self=this;
            if(this.phone==""||this.pwd==""){
                alert("输入不能为空!")
            }else if(!(/^1[34578]\d{9}$/.test(self.phone))){
                alert("格式不正确!!")
            }else{
                alert("登录成功!")
            }
        }
    }
}
</script>
<style scoped>
    #content .login_body{
        width: 100%;
    }
    .login_body .login_text{
        width: 95%;
        height: 40px;
        border: none;
        border-bottom: 1px solid #ccc;
        margin: 0 5px;
        outline: none;
        margin-top: 5px;
        border-radius: 5px;
        padding-right: 15px;
    }
    .login_body .login_btn{
        height: 50px;
        margin: 10px;
    }
    .login_body .login_btn input{
        display: block;
        width: 100%;
        height: 100%;
        background: #e54847;
        border-radius: 3px;
        border: none;
        color: white;
        margin-left: 1px;
    }
    .login_body .login_link{
        display: flex;
        justify-content: space-between;
    }
    .login_body .login_link a{
        text-decoration: none;
        margin: 0 5px;
        font-size: 12px;
        color: #e54847;
    }
</style>