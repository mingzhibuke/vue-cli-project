<template>
    <div class="p_form">
        <ul class="p_list">
            <li class="p_item">
                <img class="p_item_img" src="../../assets/img/user_pone_icon.png">
                <input class="p_inp" type="text" placeholder="请输入您的手机号或用户名">
            </li>
            <li class="p_item">
                <img class="p_item_img" src="../../assets/img/user_password.png">
                <input class="p_inp" type="text" placeholder="请输入您的密码">
            </li>
            <li class="p_item">
                <img class="p_item_img" src="../../assets/img/user_password.png">
                <input class="p_inp" type="text" placeholder="请再次确认密码">
            </li>
            <li class="p_item">
                <img class="p_item_img" src="../../assets/img/user_tu.png">
                <input class="p_var_inp" type="text" placeholder="请输入验证码">
                <div class="verification_Code">
                    <img src="../../assets/img/bitebi_2.png">
                </div>
            </li>
            <li class="p_item">
                <img class="p_item_img" src="../../assets/img/user_haopai.png">
                <input class="p_var_inp" type="text" placeholder="请输入短信验证码">
                <div class="verification_Code">
                    <span>发送验证码</span>
                </div>
            </li>
        </ul>
        <div class="p_login">登录</div>
    </div>
</template>
<script>
export default ({
    data() {
        return {
            saveUserMsgStatus: true,
        }
    },
    methods: {
        saveUserPassword() {
            this.saveUserMsgStatus = !this.saveUserMsgStatus;
        },
    }
})
</script>
<style lang="scss">
@import '../../assets/sass/global.scss';
.p_form {
    padding: 0 42px;
    .p_list {
        padding-top: 16px;
        .p_item {
            position: relative;
            padding-left: 50px;
            height: 50px;
            border: 1px solid #A8A8A8;
            margin-bottom: 16px;
            .p_item_img {
                position: absolute;
                top: 18px;
                left: 15px;
            }
            .p_inp {
                width: 100%;
                font-size: 16px;
                color: #A8A8A8;
                height: 50px;
                border: none;
            } // ::-webkit-input-placeholder{}
            .p_var_inp {
                width: 50%;
                font-size: 16px;
                color: #A8A8A8;
                height: 50px;
                border: none;
            }
            .verification_Code {
                position: absolute;
                top: 0;
                right: 0;
                width: 40%;
                height: 50px;
                img {
                    width: 100%;
                    height: 50px;
                }
                span {
                    display: inline-block;
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                    color: #59C3AA;
                    text-align: center;
                }
            }
        }
    }
    .p_login {
        width: 100%;
        height: 44px;
        background: #DC302E;
        line-height: 44px;
        font-size: 16px;
        color: #FFF;
        text-align: center;
        cursor: pointer;
        &:hover {
            background: #CE2929;
            transition: 1s all;
        }
    }
}
</style>