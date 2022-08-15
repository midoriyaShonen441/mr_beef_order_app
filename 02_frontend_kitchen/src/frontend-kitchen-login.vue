<template>
    <div class="logIn-Index">
        <div>
            <img class="BeefLogo" src="../assets/BeefLogo.png" alt="" :height="200" :width="350">
        </div>
        <div class="logIn-Box-Index">
            <div class="LogIn-Box">
                <label class="inputLabel">Username</label>
                <input class="inputBox" type="text" placeholder="Username">
                <label class="inputLabel">Password</label>
                <input class="inputBox" type="password" placeholder="Password">
                <button class="logInButton" @click="debugButton">Login</button>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    methods:{
        debugButton(){
            console.log("YakYedBeef")
        }
    }
}
</script>

<style>
    .logIn-Index{
        height: 600px;
        /* border: 1px solid red; */
        text-align: center;
    }
    .BeefLogo{
        /* border: 1px solid pink; */
        position: relative;
        top: 100px;
    }
    .logIn-Box-Index{
        border-radius: 10px;
        background: rgba(247, 247, 247, 0.5);
        height: 300px;
        width: 500px;
        margin: auto;
        /* margin-top: 0px; */
        border: 1px solid rgba(247, 247, 247, 0.5);
    }
    .inputLabel{
        margin-top: 20px;
        font-weight: bold;
    }
    .LogIn-Box{
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        /* border: 1px solid red; */
    }
    .inputBox{
        border: 2px solid;
        border-radius: 10px;
        height: 30px;
        margin: 10px 100px 0 100px;
    }
    .inputBox::placeholder{
        font-weight: bold;
    }
    .logInButton{
        border-radius: 10px;
        height: 40px;
        width: 50%;
        margin: 10px auto auto auto;
    }
</style>