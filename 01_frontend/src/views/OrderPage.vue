<template>
  <div class="set-order-container">
    <div class="order-container">

      <div class="title-company">
        <h3>Mr. Beef Wagyu Buffet Premium</h3>
      </div>

      <div class="tablename">
        <div class="icon-table">
          <h3>Your Table</h3>
        </div>
        <div class="mytable">
          <h1>{{mySeat}}</h1>
        </div>
      </div>
      <hr/>

      <div class="set-order-menu">
        <div class="title-menu">
          <h3>Menu</h3>
        </div>
        <div class="filter">
          <button class="btn-filter" @click="haddleFilter('all')">ทั้งหมด</button>
          <button class="btn-filter" @click="haddleFilter('เนื้อ')">เนื้อ</button>
          <button class="btn-filter" @click="haddleFilter('หมู')">หมู</button>
          <button class="btn-filter" @click="haddleFilter('ทะเล')">ทะเล</button>
        </div>

        <div class="order-menu">
          <div  v-for="(typeOfMenu, index) in menuData" :key="index">

            <table class="setting-table-order"  v-if="filterMenu === 'all' || typeOfMenu.type === filterMenu">
              <h4>{{typeOfMenu.type}}</h4>
              <tr>
                <td class="set-header"><b>รายการ</b></td>
                <td class="set-header"><b>จำนวน</b></td>
              </tr>
              <tr v-for="(isProduct, index2) in typeOfMenu.product" :key="index2" >
                <td>{{isProduct}}</td>
                <td class="selection-order">
                  <div class="wrap-order">
                    <input type="radio"  :name="isProduct"/>
                    <label>1 ชุด</label>
                  </div>
                  <div  class="wrap-order">
                    <input type="radio"  :name="isProduct"/>
                    <label>2 ชุด</label>
                  </div>
                  
                </td>
              </tr>
      
            </table>
          </div>
          <div class="btn-confirm">
            <button class="order-btn">Order</button>
            <button class="order-btn-clear" @click="haddleClear">Clear</button>
          </div>
          
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
    components:{

    },
    data(){
        return{
          mySeat: 10,
          filterMenu: 'all',
          menuData:[
            {
              type:"เนื้อ",
              product:[
                "เนื้อคารูบิ",
                "เนื้อฮารามิ",
                "เนื่อวากิว A3",
                "เนื้อริบอาย",
                "เนื้อบิสเก็ต US",
                "ลิ้นวัว",
              ]
            },
            {
              type:"หมู",
              product:[
                'สันคอหมูคุโรบูตะ'
              ]
            },
            {
              type:"ทะเล",
              product:[
                "กุ้งไข่",
                "หอยเซลล์",
                "หอยแมลงภู่ชิลี",
                "ปลาแซลม่อน",
              ]
            }
          ]
        }
    },
    methods:{
      haddleFilter(e){
        if(e === 'all'){
          this.filterMenu = 'all'
        }else if(e === 'เนื้อ'){
          this.filterMenu = 'เนื้อ'
        }else if(e === 'หมู'){
          this.filterMenu = 'หมู'
        }else if(e === 'ทะเล'){
          this.filterMenu = 'ทะเล'
        }
      },
      haddleClear(){
        this.$router.go()
      }
    }
}
</script>

<style scoped>

/* set page */
.set-order-container{
  width: 80%; 
  margin: auto;
  background: whitesmoke;
  height: 100%;
  border-radius: 30px;
}

.order-container{
  margin-top: 5%;
}


/* title page  */

.title-company{
  text-align: center;
  padding-bottom: 50px;
background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(33,30,0,0.8898153011204482) 77%, rgba(237,224,57,0.5088629201680672) 100%);
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  translate: 1s;
}

.title-company > h3 {
  color: white;
  transform: translateY(35px);
}

.tablename{
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
}
.icon-table{
  margin-top: 10px
}

.mytable{
  text-align: center;
  border-image: linear-gradient(to right, rgb(211, 215, 111), rgb(18, 5, 25)) 1;
  border-width: 5px;
  border-style: solid;
  width: 80px;
  height: 80px;
  margin-right: 10px;
  border-radius: 100px;
  margin-bottom: 20px;
}

 
.title-menu{
  text-align: center;
}

.order-menu{
  margin: auto;
  text-align: center;
  margin-left: 10px;
}


.filter{
  display: flex;
  justify-content: space-around;
}
.btn-filter{
  font-weight: bold;
  font-size: 14px;
  color: white;
  width: 55px;
  height: 50px;
  border: 1px solid rgb(255, 186, 67);
  background: rgb(255, 186, 67);
  border-radius: 10px; 
}

.btn-filter:active{
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}

.setting-table-order{
  width: 90%;
  margin: auto;
  margin-top: 40px;
  border-bottom: 2px solid grey;
  padding-bottom: 20px;
}

.set-header{
  padding-bottom: 20px;
}

.selection-order{
  display: flex;
  justify-content: center;
}

.wrap-order{
  margin-left: 5px;
}

.btn-confirm{
  margin: auto;
  text-align: center;
  padding-bottom: 30px;
}

.order-btn{
  margin-top: 30px;
  width: 100px;
  height: 40px;
  font-weight: bold;
  font-size: 20px;
  background: rgb(50, 108, 255);
  border: 1px solid rgb(50, 108, 255);
  border-radius: 10px;
  color: white;
 
}

.order-btn-clear{
  margin-top: 30px;
  width: 100px;
  height: 40px;
  font-weight: bold;
  font-size: 20px;
  background: rgb(222, 92, 60);
  border: 1px solid rgb(222, 92, 60);
  border-radius: 10px;
  color: white;
  margin-left: 10px;
}

.order-btn:active{
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}

.order-btn-clear:active{
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}
</style>