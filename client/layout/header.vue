<template>
  <header :class="$style.mainHeader">
    <h1>JTodo</h1>
  </header>
</template>

// <style lang="stylus" scoped>
// .main-header{
//   text-align center
//   h1{
//     font-size 100px
//     color: rgba(175, 47, 47, 0.4)
//     font-weight 100
//     margin 20px
//   }
// }
// </style>


// css modules的使用方式， 可以作为css作用于的替代方案
<style lang="stylus" module>
.main-header{
  text-align center
  h1{
    font-size 100px
    color: rgba(175, 47, 47, 0.4)
    font-weight 100
    margin 20px
  }
}
</style>

