<template>
    <header class="kitchen-Header">
        <img src="../assets/BeefLogo.png" alt="" :height="150" >
    </header>
    <div class="kitchen-Manage-Index">
        <div class="kitchen-Manage-Sidebar">
            <div class="Sidebar-Menu">Order</div>
            <div class="Sidebar-Menu">Order History</div>
            <div class="Sidebar-Menu">Stock Check</div>
        </div>
        <div class="kitchen-Manage-Menu">
            <orderMenu/>
        </div>
    </div>
</template>

<script>
import orderMenu from "./order-Menu.vue"
export default {
    components:{
        orderMenu
    } 
}
</script>

<style>
    .kitchen-Header{
        height: 150px;
        border: 2px solid blue;
    }
    .kitchen-Manage-Index{
        height: 600px;
        border: 1px solid red;
        display: flex;
    }
    .kitchen-Manage-Sidebar{
        height: 400px;
        width: 260px;
        border: 1px solid green;
        display: flex;
        flex-direction: column;
    }
    .Sidebar-Menu{
        font-weight: bold;
        height: 25px;
        background: rgb(247, 247, 247);
        text-align: center;
        margin: auto;
        border: 1px solid yellow;
        width: 120px;
    }
    .kitchen-Manage-Menu{
        height: 400px;
        width: 100%;
        border: 1px solid magenta;
    }
</style>