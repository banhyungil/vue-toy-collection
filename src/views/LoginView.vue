<script>
export default{
    data(){
        return {
            id: "",
            pw: "",
            lblIdClass: "",
            lblPwClass: ""  
        }
    },
    methods:{
        login(){
            if(this.id == "") {
                this.lblIdClass = "warning";
                setTimeout(() => {
                    this.lblIdClass = "";
                }, 1500);
            } else if(this.pw == "") {
                this.lblPwClass = "warning";
                setTimeout(() => {
                    this.lblPwClass = "";
                }, 1500);
            } else {
                this.$emit('changeMainView');
            }
        }
    }
}
</script>

<template>
    <div class="wrapper">
        <section class="login-form">
            <form action="">
                <h1>Half Road</h1>
                <div class="int-area">
                    <input type="text" v-model="id" name="id" id="id" autocomplete="off" required>
                    <label :class="lblIdClass" for="id">USER NAME</label>
                </div>
                <div class="int-area">
                    <input type="password" v-model="pw" name="pw" id="pw" autocomplete="off" required>
                    <label :class="lblPwClass" for="pw">PASSWORD</label>
                </div>
                <div class="btn-area" >
                    <button type="submit" @click="login">LOGIN</button>
                </div>
            </form>
            <div class="caption">
                <a href="">Forgot Password?</a>
            </div>
        </section>
    </div>
</template>

<style scoped>
    @import "@/css/style.css";
</style>
