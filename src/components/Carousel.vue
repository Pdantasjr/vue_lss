<template>
    <div class="bannerContent">
        <h2 class="bannerTitle">Tradição que você conhece, qualidade que você confia!</h2>
      <img class="bannerImage" src="@/assets/images/home/banners/modelo_banner_1.png" alt="Imagem da modelo">
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
.bannerContent {
  @apply
  flex
  flex-col
  items-center
  justify-around
  h-40
  w-screen
  bg-backgroundSarah
  bg-cover
  bg-no-repeat
  bg-center
  p-4
    /*border*/
    /*border-blue-800*/

  xm:h-auto
  xm:flex-row
  xm:justify-evenly

  sm:h-bannerContent-sm

  md:h-bannerContent-md
}

.bannerTitle{
  @apply
  text-primary
  text-lg
  font-black
  text-center
  m-4
  tracking-wider
  align-middle

  xm:text-left
  xm:text-2xl
  xm:ml-10
  xm:break-normal
  xm:leading-7

  sm:text-8xl
  sm:h-bannerContent-sm
}

.bannerImage {
  @apply
  hidden

  xm:block
  xm:h-52
  xm:mr-8

  sm:h-full
}
</style>